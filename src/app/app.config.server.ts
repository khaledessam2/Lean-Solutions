import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { fetchContentRows } from './core/content-source.server';
import { CONTENT_LOADER } from './core/content-store';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    // the one place Supabase is read; the browser gets the result, not the key
    { provide: CONTENT_LOADER, useValue: fetchContentRows },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
