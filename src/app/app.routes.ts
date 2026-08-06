import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

const BRAND = 'لين بيزنس سوليشنز';

/**
 * Home is eager (it is the entry point); every other page is lazy so its copy —
 * the detail pages carry ~90 kB of it — stays out of the initial bundle.
 */
export const routes: Routes = [
  { path: '', component: Home, title: BRAND },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-page/about-page').then((m) => m.AboutPage),
    title: `من نحن | ${BRAND}`,
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services-page/services-page').then((m) => m.ServicesPage),
    title: `الخدمات | ${BRAND}`,
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects-page/projects-page').then((m) => m.ProjectsPage),
    title: `المشاريع | ${BRAND}`,
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-page/contact-page').then((m) => m.ContactPage),
    title: `اتصل بنا | ${BRAND}`,
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
