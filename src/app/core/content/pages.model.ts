import { Text } from '../i18n';
import { CopyBlock, FilterTab, PageSeoCopy } from './shared.model';

export interface AboutPageContent {
  seo: PageSeoCopy;
  heading: Text;
  intro: {
    eyebrow: Text;
    title: Text;
    paragraphs: Text[];
    modes: Text[];
  };
  blocks: CopyBlock[];
  why: {
    eyebrow: Text;
    title: Text;
    imageAlt: Text;
    points: Text[];
  };
}

export interface ServicesPageContent {
  seo: PageSeoCopy;
  heading: Text;
  eyebrow: Text;
  title: Text;
  lead: Text;
  read: Text;
  tabs: Text;
  filters: FilterTab[];
  steps: {
    eyebrow: Text;
    title: Text;
    lead: Text;
    imageAlt: Text;
    items: CopyBlock[];
  };
}

export interface ProjectsPageContent {
  seo: PageSeoCopy;
  heading: Text;
  eyebrow: Text;
  title: Text;
  lead: Text;
  view: Text;
  tabs: Text;
  emptyTitle: Text;
  emptyText: Text;
  emptyAction: Text;
  filters: FilterTab[];
}

export interface ContactPageContent {
  seo: PageSeoCopy;
  heading: Text;
  mapTitle: Text;
}

/** labels the detail template needs that are not part of the entry itself */
export interface DetailPageContent {
  /** the crumb between Home and a service page */
  servicesCrumb: Text;
  /** the crumb between Home and a project page */
  projectsCrumb: Text;
  notFoundTitle: Text;
  notFoundText: Text;
}

/**
 * The copy only the inner pages need. Kept in its own module so it loads with
 * the lazy route that asks for it rather than with the initial bundle — the
 * same reason `catalog-details.ts` is split from `catalog.ts`.
 */
export interface PagesContent {
  about: AboutPageContent;
  services: ServicesPageContent;
  projects: ProjectsPageContent;
  contact: ContactPageContent;
  detail: DetailPageContent;
}
