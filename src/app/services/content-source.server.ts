import { environment } from '../../environments/environment';
import { ContentRows } from '../core/content-rows';
import { CONTENT_FALLBACK } from '../data/content.fallback';
import { BLOCKS } from './content-mapper';

/**
 * Reads the content database. Server-side only.
 *
 * It talks to PostgREST directly rather than through `@supabase/supabase-js`:
 * four table reads need no client library, and keeping the dependency out means
 * nothing about Supabase — including the key — can end up in the browser
 * bundle. The browser receives the finished content through transfer state.
 *
 * The result is cached in the process, so a burst of visitors costs one read
 * rather than one each. The window is deliberately short: it is what decides
 * how soon an edit made in the admin shows up on the site, and a few seconds of
 * database load is worth less than the copy looking stale.
 */

interface Cached {
  rows: ContentRows;
  at: number;
}

export class ContentSource {
  /** how long a fetch is trusted, in ms */
  readonly ttl = Number(process.env['CONTENT_TTL_MS'] ?? 5_000);

  private cache: Cached | null = null;
  /** de-duplicates the fetch when several requests arrive on a cold cache */
  private inFlight: Promise<ContentRows> | null = null;

  async fetchRows(): Promise<ContentRows> {
    if (this.cache && Date.now() - this.cache.at < this.ttl) {
      return this.cache.rows;
    }

    this.inFlight ??= this.load()
      .then((rows) => {
        this.cache = { rows, at: Date.now() };
        return rows;
      })
      .catch((error: Error) => {
        /**
         * A Supabase outage must not take the site down. The last copy this
         * process fetched is the closest thing to the truth; failing that, the
         * snapshot in the repo is old but complete, and a visitor reading
         * slightly stale copy is a far better outcome than an error page.
         */
        const rows = this.cache?.rows ?? CONTENT_FALLBACK;

        console.error(
          this.cache
            ? `[content] refresh failed, serving the copy in memory: ${error.message}`
            : `[content] unreachable on a cold start, serving the fallback: ${error.message}`,
        );

        // Hold it for the usual window before trying again. Without this a database
        // that hangs rather than refuses would make every single request wait out
        // the timeout; this way at most one request per window does.
        this.cache = { rows, at: Date.now() };
        return rows;
      })
      .finally(() => {
        this.inFlight = null;
      });

    return this.inFlight;
  }

  private async load(): Promise<ContentRows> {
    // the environment file carries the values; an env var of the same name wins,
    // so a host can repoint the site without a rebuild
    const url = (process.env['SUPABASE_URL'] ?? environment.supabase.url).replace(/\/$/, '');
    const key = process.env['SUPABASE_ANON_KEY'] ?? environment.supabase.anonKey;

    if (!url || !key) {
      throw new Error(
        'The site has no Supabase credentials. Fill in supabase.url and supabase.anonKey in ' +
          'src/environments/environment.ts, or set SUPABASE_URL and SUPABASE_ANON_KEY.',
      );
    }

    const get = async <T>(path: string): Promise<T> => {
      const response = await fetch(`${url}/rest/v1/${path}`, {
        headers: { apikey: key, Authorization: `Bearer ${key}` },
        signal: AbortSignal.timeout(15_000),
      });

      if (!response.ok) {
        throw new Error(
          `Supabase answered ${response.status} for ${path}: ${await response.text()}`,
        );
      }
      return response.json() as Promise<T>;
    };

    const [settings, blocks, services, projects] = await Promise.all([
      get<ContentRows['settings'][]>('site_settings?select=*&id=eq.1'),
      get<ContentRows['blocks']>('content_blocks?select=key,data'),
      get<ContentRows['services']>('services?select=*&published=is.true&order=sort_order.asc'),
      get<ContentRows['projects']>('projects?select=*&published=is.true&order=sort_order.asc'),
    ]);

    if (!settings.length) {
      throw new Error(
        'The content database is empty. Open the admin and run "استيراد المحتوى الحالي".',
      );
    }

    return {
      settings: settings[0],
      blocks: this.withMissingBlocks(blocks),
      services,
      projects,
    };
  }

  /**
   * Fills in any block the database is not returning.
   *
   * A block can go missing for an ordinary reason — a key renamed on the site
   * before the row was added, say — and one absent block would otherwise leave
   * every page unrenderable. Falling back to the snapshot means the worst case is
   * one stale section rather than a blank site.
   */
  private withMissingBlocks(blocks: ContentRows['blocks']): ContentRows['blocks'] {
    const present = new Set(blocks.map((block) => block.key));
    const missing = BLOCKS.filter((block) => !present.has(block.key));

    if (!missing.length) return blocks;

    console.error(
      `[content] the database is missing ${missing.map((b) => b.key).join(', ')} — ` +
        `using the copy in content.fallback.ts for those`,
    );

    const spare = new Map(CONTENT_FALLBACK.blocks.map((block) => [block.key, block]));

    return [
      ...blocks,
      ...missing.map((block) => spare.get(block.key)).filter((b) => b !== undefined),
    ];
  }

  /** drops the cache, so the next render refetches — used by the revalidate hook */
  clearCache(): void {
    this.cache = null;
  }
}

/**
 * One instance for the whole process. It is not provided through Angular's
 * injector because the server renders each request in its own injector, which
 * would give every request an empty cache.
 */
export const contentSource = new ContentSource();
