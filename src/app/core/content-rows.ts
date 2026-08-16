import { ProjectCard, ProjectDetail, ServiceCard, ServiceDetail } from './catalog';
import { PagesContent, SiteContent, SiteInfo } from './content';
import { Text } from './i18n';

/**
 * The content database, and how its rows become the objects the site renders.
 *
 * Everything the site shows lives in Supabase. These types describe the rows as
 * they come back from PostgREST, and `fromRows` assembles them into the two
 * content trees plus the catalogue. It runs on the server, once per fetch —
 * see `content-store.ts`.
 */

export interface SettingsRow {
  origin: string;
  name: Text;
  legal_name: string;
  logo: string;
  og_image: string;
  service_cover: string;
  phone: string;
  email: string;
  city: Text;
  country: Text;
  linkedin: string;
  map_embed: string;
}

export interface BlockRow {
  key: string;
  data: Record<string, unknown>;
}

export interface ServiceRow {
  slug: string;
  icon: string;
  category: ServiceCard['category'];
  title: Text;
  body: Text;
  has_detail: boolean;
  external_url: string | null;
  detail: ServiceDetail | null;
}

export interface ProjectRow {
  slug: string;
  image: string;
  category: ProjectCard['category'];
  tag: Text;
  title: Text;
  body: Text;
  detail: ProjectDetail | null;
}

export interface ContentRows {
  settings: SettingsRow;
  blocks: BlockRow[];
  services: ServiceRow[];
  projects: ProjectRow[];
}

/** everything the site needs to render any page, loaded in one go */
export interface SiteData {
  content: SiteContent;
  pages: PagesContent;
  services: ServiceCard[];
  projects: ProjectCard[];
  serviceCover: string;
  serviceDetails: Record<string, ServiceDetail>;
  projectDetails: Record<string, ProjectDetail>;
}

/**
 * Which `content_blocks` row fills which field of the two content trees.
 *
 * `tree` says which object the block belongs to and `field` is its key there,
 * so `{tree: 'pages', field: 'about'}` is `PAGES.about`. The admin edits these
 * rows by the same keys.
 */
export const BLOCKS = [
  { key: 'common', tree: 'content', field: 'common' },
  { key: 'header', tree: 'content', field: 'header' },
  { key: 'hero', tree: 'content', field: 'hero' },
  { key: 'about', tree: 'content', field: 'about' },
  { key: 'pillars', tree: 'content', field: 'pillars' },
  { key: 'services', tree: 'content', field: 'services' },
  { key: 'projects', tree: 'content', field: 'projects' },
  { key: 'clients', tree: 'content', field: 'clients' },
  { key: 'contact', tree: 'content', field: 'contact' },
  { key: 'footer', tree: 'content', field: 'footer' },
  { key: 'home', tree: 'content', field: 'home' },
  { key: 'page.about', tree: 'pages', field: 'about' },
  { key: 'page.services', tree: 'pages', field: 'services' },
  { key: 'page.projects', tree: 'pages', field: 'projects' },
  { key: 'page.contact', tree: 'pages', field: 'contact' },
  { key: 'page.detail', tree: 'pages', field: 'detail' },
] as const satisfies readonly { key: string; tree: 'content' | 'pages'; field: string }[];

/** the settings columns, paired with the `SiteInfo` fields they fill */
const SETTINGS_COLUMNS = [
  ['origin', 'origin'],
  ['name', 'name'],
  ['legal_name', 'legalName'],
  ['logo', 'logo'],
  ['og_image', 'ogImage'],
  ['phone', 'phone'],
  ['email', 'email'],
  ['city', 'city'],
  ['country', 'country'],
  ['linkedin', 'linkedin'],
  ['map_embed', 'mapEmbed'],
] as const satisfies readonly [keyof SettingsRow, keyof SiteInfo][];

export function fromRows(rows: ContentRows): SiteData {
  const site = {} as Record<string, unknown>;
  for (const [column, field] of SETTINGS_COLUMNS) site[field] = rows.settings[column];

  const byKey = new Map(rows.blocks.map((row) => [row.key, row.data]));
  const missing = BLOCKS.filter((block) => !byKey.has(block.key));

  if (missing.length) {
    throw new Error(
      `The content database is missing these blocks: ${missing.map((b) => b.key).join(', ')}. ` +
        `Open the admin and run "استيراد المحتوى الحالي" to load the site's copy.`,
    );
  }

  const content = { site } as Record<string, unknown>;
  const pages = {} as Record<string, unknown>;
  for (const block of BLOCKS) {
    (block.tree === 'pages' ? pages : content)[block.field] = byKey.get(block.key);
  }

  // A card may only link to a detail page that exists. A service whose switch is
  // on but whose copy is empty falls back to the contact link instead.
  const services: ServiceCard[] = rows.services.map((row) => ({
    slug: row.slug,
    icon: row.icon,
    category: row.category,
    title: row.title,
    text: row.body,
    hasDetail: row.has_detail && !!row.detail,
    ...(row.external_url ? { externalUrl: row.external_url } : {}),
  }));

  const projects: ProjectCard[] = rows.projects.map((row) => ({
    slug: row.slug,
    image: row.image,
    category: row.category,
    tag: row.tag,
    title: row.title,
    text: row.body,
  }));

  const serviceDetails = Object.fromEntries(
    rows.services
      .filter((row) => row.has_detail && row.detail)
      .map((row) => [row.slug, row.detail as ServiceDetail]),
  );

  /**
   * Every project card links to its page unconditionally, so one is built for
   * each. A project with nothing written yet gets a page carrying its own
   * title, image and summary rather than an empty one.
   */
  const projectDetails = Object.fromEntries(
    rows.projects.map((row): [string, ProjectDetail] => [
      row.slug,
      row.detail ?? {
        title: row.title,
        image: row.image,
        aboutTitle: row.title,
        aboutText: row.body,
        features: [],
        infoTitle: (pages['detail'] as { projectsCrumb?: Text })?.projectsCrumb ?? {
          ar: 'المشروع',
          en: 'Project',
        },
        info: [],
      },
    ]),
  );

  return {
    content: content as unknown as SiteContent,
    pages: pages as unknown as PagesContent,
    services,
    projects,
    serviceCover: rows.settings.service_cover,
    serviceDetails,
    projectDetails,
  };
}
