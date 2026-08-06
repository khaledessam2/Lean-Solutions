import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROJECT_DETAILS, SERVICE_DETAILS } from './core/catalog-details';

/**
 * The two detail routes take a `:slug`, so the prerenderer needs the list of
 * slugs up front — they come straight from the catalog, which means adding an
 * entry there is enough to get its page built.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: 'services/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => Object.keys(SERVICE_DETAILS).map((slug) => ({ slug })),
  },
  {
    path: 'projects/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => Object.keys(PROJECT_DETAILS).map((slug) => ({ slug })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
