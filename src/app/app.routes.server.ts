import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Every route is rendered per request.
 *
 * The catalogue lives in Supabase now, so the set of detail URLs is not known
 * at build time and nothing can be prerendered. Rendering on the server keeps
 * what prerendering was there for — a crawler still receives complete HTML —
 * and an edit in the admin shows up without a build.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
