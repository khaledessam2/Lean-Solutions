import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

/**
 * Home is eager (it is the entry point); every other page is lazy so its copy —
 * the detail pages carry ~90 kB of it — stays out of the initial bundle.
 *
 * Titles are not set here: each page declares its own through `useSeo()`, which
 * keeps the title, description, canonical and structured data in one place and
 * lets them follow the active language. See `core/seo.ts`.
 */
export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-page/about-page').then((m) => m.AboutPage),
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services-page/services-page').then((m) => m.ServicesPage),
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects-page/projects-page').then((m) => m.ProjectsPage),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-page/contact-page').then((m) => m.ContactPage),
  },
  // `kind` rides along as route data and lands on the component's input
  {
    path: 'services/:slug',
    loadComponent: () => import('./pages/detail-page/detail-page').then((m) => m.DetailPage),
    data: { kind: 'service' },
  },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./pages/detail-page/detail-page').then((m) => m.DetailPage),
    data: { kind: 'project' },
  },
  { path: '**', redirectTo: '' },
];
