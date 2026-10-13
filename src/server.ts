import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import { contentSource } from './app/services/content-source.server';
import { ContentMapper } from './app/services/content-mapper';
import { environment } from './environments/environment';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();

const angularApp = new AngularNodeAppEngine();

/**
 * The copy, for the browser to hydrate with.
 *
 * It is served from here rather than inlined into every page, because the whole
 * catalogue is ~240 kB and repeating it in each document would cost far more
 * than one cacheable request. Supabase is not exposed: this is the site's own
 * origin, and the key stays on the server.
 */
app.get('/api/content', async (_req, res) => {
  try {
    const rows = await contentSource.fetchRows();

    /**
     * The browser may hold it only as long as the server does, and no longer:
     * anything more and an edit would stay hidden in an open tab after the site
     * itself had moved on. Availability is already covered — the server serves
     * its last good copy if Supabase is unreachable — so there is no
     * stale-while-revalidate window to widen this.
     */
    res.set('Cache-Control', `public, max-age=${Math.round(contentSource.ttl / 1000)}`).json(rows);
  } catch (error) {
    console.error('[content]', error);
    res.status(503).json({ error: 'The content database is unavailable.' });
  }
});

/**
 * The sitemap is built from the content database rather than from files on
 * disk, because there are no prerendered files to walk any more — a service
 * added in the admin has to appear here without a deploy.
 */
app.get('/sitemap.xml', async (_req, res) => {
  try {
    const data = new ContentMapper().fromRows(await contentSource.fetchRows());
    const origin = data.content.site.origin.replace(/\/$/, '');
    const today = new Date().toISOString().slice(0, 10);

    const paths = [
      '/',
      '/about',
      '/services',
      '/projects',
      '/contact',
      ...Object.keys(data.serviceDetails).map((slug) => `/services/${slug}`),
      ...Object.keys(data.projectDetails).map((slug) => `/projects/${slug}`),
    ];

    const urls = paths.map((path) => {
      const loc = origin + path;
      const depth = path.split('/').filter(Boolean).length;

      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>`,
        `    <priority>${path === '/' ? '1.0' : depth > 1 ? '0.6' : '0.8'}</priority>`,
        // both language variants, mirroring the hreflang tags in <head>
        `    <xhtml:link rel="alternate" hreflang="ar" href="${loc}"/>`,
        `    <xhtml:link rel="alternate" hreflang="en" href="${loc}?lang=en"/>`,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}"/>`,
        '  </url>',
      ].join('\n');
    });

    res
      .type('application/xml')
      .send(
        [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
          '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
          ...urls,
          '</urlset>',
          '',
        ].join('\n'),
      );
  } catch (error) {
    console.error('[sitemap]', error);
    res.status(503).type('text/plain').send('The content database is unavailable.');
  }
});

/**
 * Lets the admin push an edit through immediately instead of waiting for the
 * cache to expire. It only drops a cache, so the worst a stray call can do is
 * cause one extra read — but set `REVALIDATE_TOKEN` and it must be presented.
 */
app.post('/api/revalidate', (req, res) => {
  const expected = process.env['REVALIDATE_TOKEN'];
  const given = req.headers['x-revalidate-token'];

  if (expected && given !== expected) {
    res.status(401).json({ error: 'bad token' });
    return;
  }

  contentSource.clearCache();
  res.json({ ok: true });
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Anything under a media folder that is not a file we shipped comes from the
 * storage bucket instead.
 *
 * The content database stores an image as a bare path — `images/icon.jpg` —
 * which the templates hand straight to `<img src>`, so it resolves against this
 * origin. That is right for the assets committed in `public/`, and wrong for
 * everything uploaded in the admin afterwards, which lives in the bucket and
 * would otherwise 404. Filling the gap here rather than in the templates keeps
 * one rule for every image on the site, and keeps the paths in the database
 * short and portable — the SEO tags and the sitemap build on them too.
 */
app.get(/^\/(images|icons|logo|partners|lottie)\/[^?]+$/, (req, res) => {
  const base = (process.env['SUPABASE_URL'] ?? environment.supabase.url).replace(/\/$/, '');

  if (!base) {
    res.status(404).end();
    return;
  }

  // the bucket's own CDN serves the file; this hop is cached for a day so a
  // busy page does not repeat it on every render
  res.set('Cache-Control', 'public, max-age=86400');
  res.redirect(302, `${base}/storage/v1/object/public/media${req.path}`);
});

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
