import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';
import { ContentStore } from './core/content-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // the nav points at `/#services`-style targets, and a new page must land at the top
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
      // :slug and the route's `kind` data bind straight to the page component's inputs
      withComponentInputBinding(),
    ),
    provideClientHydration(),
    /**
     * Nothing renders until the copy is in hand. On the server that means a
     * read from Supabase; in the browser it is already there, in the transfer
     * state the server wrote, so this resolves without a request.
     */
    provideAppInitializer(() => inject(ContentStore).load()),
  ],
};
