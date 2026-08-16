import { Text } from './i18n';

/**
 * The shape of every editable string on the site.
 *
 * Nothing here is copy — this file is only the contract. The values live in
 * `content.data.ts`, which is written by `scripts/pull-content.mjs` from the
 * Supabase content database, and the admin app edits that database.
 *
 * The catalogue (services, projects and their detail pages) is described by
 * `catalog.ts` and stored in `catalog.data.ts` / `catalog-details.ts` for the
 * same reason the site has always split it: the detail copy is ~90 kB and must
 * stay out of the initial bundle.
 */

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

export interface NavLink {
  label: Text;
  path: string;
}

/** the animation shown beside a hero slide */
export interface HeroArt {
  src: string;
  /** intrinsic width / height, so the slot reserves the right box before it loads */
  ratio: number;
  label: Text;
}

export interface HeroSlide {
  title: Text;
  paragraphs: Text[];
  art: HeroArt;
}

/** vision / mission / values — shown on the home page and the About page */
export interface PillarCard {
  key: string;
  icon: string;
  title: Text;
  text: Text;
}

export interface ClientLogo {
  name: Text;
  logo: string;
}

export interface FooterColumn {
  title: Text;
  links: { label: Text }[];
}

/** one row of the contact card; `href` is null for the rows that are not links */
export interface ContactInfoItem {
  key: string;
  label: Text;
  value: Text;
  href: string | null;
}

/** a filter tab on the services and projects listings */
export interface FilterTab {
  key: string;
  label: Text;
}

/** a heading + body pair, used for the two write-ups in the About intro */
export interface CopyBlock {
  title: Text;
  text: Text;
}

/** what a page publishes to crawlers; the rest of the tags are derived */
export interface PageSeoCopy {
  title: Text;
  description: Text;
  image?: string;
}

export interface HeaderContent {
  links: NavLink[];
  cta: Text;
  /** screen-reader labels for the nav landmark and the burger button */
  nav: Text;
  menu: Text;
}

export interface HeroContent {
  consult: Text;
  explore: Text;
  prev: Text;
  next: Text;
  slides: Text;
  items: HeroSlide[];
}

export interface AboutSectionContent {
  eyebrow: Text;
  title: Text;
  lead: Text;
  cta: Text;
}

export interface PillarsContent {
  imageAlt: Text;
  cards: PillarCard[];
}

export interface ServicesSectionContent {
  eyebrow: Text;
  title: Text;
  more: Text;
  read: Text;
  tabs: Text;
  prev: Text;
  next: Text;
  filters: FilterTab[];
}

export interface ProjectsSectionContent {
  eyebrow: Text;
  title: Text;
  lead: Text;
  more: Text;
  view: Text;
  prev: Text;
  next: Text;
}

export interface ClientsSectionContent {
  eyebrow: Text;
  title: Text;
  lead: Text;
  logos: ClientLogo[];
}

export interface ContactSectionContent {
  eyebrow: Text;
  title: Text;
  lead: Text;
  name: Text;
  namePh: Text;
  nameErr: Text;
  phone: Text;
  phonePh: Text;
  phoneErr: Text;
  email: Text;
  emailPh: Text;
  emailErr: Text;
  company: Text;
  companyPh: Text;
  companyErr: Text;
  message: Text;
  messagePh: Text;
  submit: Text;
  ok: Text;
  reach: Text;
  info: ContactInfoItem[];
}

export interface FooterContent {
  about: Text;
  rights: Text;
  privacy: Text;
  terms: Text;
  columns: FooterColumn[];
}

export interface HomePageContent {
  seo: PageSeoCopy;
}

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

/** the crumb every inner page opens its trail with */
export interface CommonContent {
  home: Text;
}

/**
 * The copy the shell and the home page need. Everything here is in the initial
 * bundle, because the header, footer and contact block are on every route.
 */
export interface SiteContent {
  site: SiteInfo;
  common: CommonContent;
  header: HeaderContent;
  hero: HeroContent;
  about: AboutSectionContent;
  pillars: PillarsContent;
  services: ServicesSectionContent;
  projects: ProjectsSectionContent;
  clients: ClientsSectionContent;
  contact: ContactSectionContent;
  footer: FooterContent;
  home: HomePageContent;
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
