import { Text } from './i18n';

export interface Crumb {
  label: Text;
  link: string;
}

export interface PageSeo {
  /** the page's own heading — the brand is appended unless it is already the brand */
  title: Text;
  description: Text;
  /** defaults to the current router URL */
  path?: string;
  /** share image, relative to the site root (e.g. `images/why-us.png`) */
  image?: string;
  type?: 'website' | 'article';
  /** the crumbs *between* Home and this page; Home and the page itself are added */
  breadcrumbs?: Crumb[];
  /** schema.org nodes to publish alongside the site-wide Organization/WebSite */
  jsonLd?: Record<string, unknown>[];
  /** for pages that must not be indexed — the detail pages' not-found state */
  noIndex?: boolean;
}
