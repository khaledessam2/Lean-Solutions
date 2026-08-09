/**
 * Writes sitemap.xml from what the build actually produced.
 *
 * The prerenderer emits one `index.html` per route — including the ~30 service
 * and project detail pages it derives from the catalog — so walking the output
 * is the only listing that cannot drift from the site. Adding a service is
 * enough to get it into the sitemap; nothing here needs touching.
 *
 * Run after `ng build` (wired up as npm `postbuild`).
 */
import { readdir, stat, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ORIGIN = (process.env.SITE_ORIGIN ?? 'https://leansolutions.com.sa').replace(/\/$/, '');
const BROWSER_DIR = join(process.cwd(), 'dist', 'lean-solutions', 'browser');
const LASTMOD = new Date().toISOString().slice(0, 10);

/** Collects the directory of every prerendered index.html, relative to the root. */
async function collectRoutes(dir, routes = []) {
  const entries = await readdir(dir, { withFileTypes: true });

  if (entries.some((entry) => entry.isFile() && entry.name === 'index.html')) {
    const path = relative(BROWSER_DIR, dir).split(/[\\/]/).filter(Boolean);
    routes.push(path.length ? `/${path.join('/')}` : '/');
  }

  for (const entry of entries) {
    if (entry.isDirectory()) await collectRoutes(join(dir, entry.name), routes);
  }

  return routes;
}

/** Shallower routes first, then alphabetical — a stable, readable ordering. */
function byDepthThenName(a, b) {
  const depth = a.split('/').length - b.split('/').length;
  return depth !== 0 ? depth : a.localeCompare(b);
}

function urlEntry(path) {
  const loc = `${ORIGIN}${path === '/' ? '/' : path}`;

  // both language variants of the same URL, mirroring the hreflang tags in <head>
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${LASTMOD}</lastmod>`,
    `    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>`,
    `    <priority>${path === '/' ? '1.0' : path.split('/').length > 2 ? '0.6' : '0.8'}</priority>`,
    `    <xhtml:link rel="alternate" hreflang="ar" href="${loc}"/>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${loc}?lang=en"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}"/>`,
    '  </url>',
  ].join('\n');
}

try {
  await stat(BROWSER_DIR);
} catch {
  console.error(`[sitemap] ${BROWSER_DIR} not found — run "ng build" first.`);
  process.exit(1);
}

const routes = (await collectRoutes(BROWSER_DIR)).sort(byDepthThenName);

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...routes.map(urlEntry),
  '</urlset>',
  '',
].join('\n');

await writeFile(join(BROWSER_DIR, 'sitemap.xml'), xml, 'utf8');
console.log(`[sitemap] wrote ${routes.length} URLs to dist/lean-solutions/browser/sitemap.xml`);
