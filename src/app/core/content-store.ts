import { isPlatformServer } from '@angular/common';
import {
  Injectable,
  InjectionToken,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ProjectCard, ProjectDetail, ServiceCard, ServiceDetail } from './catalog';
import { ContentRows, SiteData, fromRows } from './content-rows';
import { PagesContent, SiteContent } from './content';

/**
 * Holds the site's copy for the lifetime of one render.
 *
 * The server reads it from Supabase before rendering, so a crawler receives a
 * complete page. The browser then fetches the same content once from the site's
 * own `/api/content` — not from Supabase, which keeps the key server-side — and
 * the response is cacheable, so it is fetched once per visit rather than
 * inlined into every page. Moving between pages needs nothing further: the
 * whole catalogue is already in memory.
 */

/**
 * How to read the content database. Only the server provides it; the browser
 * uses the endpoint instead, and never learns the Supabase credentials.
 */
export const CONTENT_LOADER = new InjectionToken<() => Promise<ContentRows>>('CONTENT_LOADER');

@Injectable({ providedIn: 'root' })
export class ContentStore {
  private readonly isServer = isPlatformServer(inject(PLATFORM_ID));
  private readonly loader = inject(CONTENT_LOADER, { optional: true });

  private readonly data = signal<SiteData | null>(null);

  /** set when the content could not be loaded, so the shell can say so */
  readonly failure = signal<string | null>(null);
  readonly loaded = computed(() => this.data() !== null);

  get content(): SiteContent {
    return this.require().content;
  }

  get pages(): PagesContent {
    return this.require().pages;
  }

  get services(): ServiceCard[] {
    return this.require().services;
  }

  get projects(): ProjectCard[] {
    return this.require().projects;
  }

  get serviceCover(): string {
    return this.require().serviceCover;
  }

  serviceDetail(slug: string): ServiceDetail | undefined {
    return this.require().serviceDetails[slug];
  }

  projectDetail(slug: string): ProjectDetail | undefined {
    return this.require().projectDetails[slug];
  }

  /** the pages with a URL of their own — what the sitemap lists */
  slugs(): { services: string[]; projects: string[] } {
    const data = this.require();
    return {
      services: Object.keys(data.serviceDetails),
      projects: Object.keys(data.projectDetails),
    };
  }

  /** Fills the store. Called once, before the app renders. */
  async load(): Promise<void> {
    try {
      const rows = this.loader ? await this.loader() : await this.fetchFromSite();
      this.data.set(fromRows(rows));
    } catch (error) {
      // an empty shell with an explanation beats a stack trace on a live site
      this.failure.set(String((error as Error)?.message ?? error));
    }
  }

  /**
   * The browser's path. Relative, so it works on whatever domain the site is
   * served from, and cacheable, so a visit fetches it once however many pages
   * are opened.
   */
  private async fetchFromSite(): Promise<ContentRows> {
    if (this.isServer) {
      throw new Error(
        'The server has no way to read the content database. Set SUPABASE_URL and ' +
          'SUPABASE_ANON_KEY in the site’s environment.',
      );
    }

    const response = await fetch('/api/content');
    if (!response.ok) {
      throw new Error(`The site could not load its content (${response.status}).`);
    }
    return response.json() as Promise<ContentRows>;
  }

  private require(): SiteData {
    const data = this.data();
    if (!data) {
      throw new Error('The site content has not been loaded yet.');
    }
    return data;
  }
}
