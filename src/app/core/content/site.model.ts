import { Text } from '../i18n';

/** the identity block — feeds the footer, the contact card and every SEO tag */
export interface SiteInfo {
  /** production origin, no trailing slash */
  origin: string;
  name: Text;
  legalName: string;
  logo: string;
  /** share-card fallback for pages that do not name their own image */
  ogImage: string;
  phone: string;
  email: string;
  city: Text;
  country: Text;
  linkedin: string;
  /** the `src` of the office map iframe on the contact page */
  mapEmbed: string;
}

/** the crumb every inner page opens its trail with */
export interface CommonContent {
  home: Text;
}
