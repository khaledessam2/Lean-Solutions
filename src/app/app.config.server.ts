import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { contentSource } from './services/content-source.server';
import { CONTENT_LOADER } from './services/content-store';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    // the one place Supabase is read; the browser gets the result, not the key
    { provide: CONTENT_LOADER, useValue: () => contentSource.fetchRows() },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
