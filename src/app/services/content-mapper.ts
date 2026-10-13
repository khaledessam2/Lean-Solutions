import { Injectable } from '@angular/core';
import { ProjectCard, ProjectDetail, ServiceCard, ServiceDetail } from '../core/catalog';
import { ContactSectionContent, PagesContent, SiteContent, SiteInfo } from '../core/content';
import { ContentRows, SettingsRow, SiteData } from '../core/content-rows';
import { Text } from '../core/i18n';

/**
 * Turns the rows of the content database into the objects the site renders.
 * It runs on the server, once per fetch — see `ContentStore`.
 */

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

@Injectable({ providedIn: 'root' })
export class ContentMapper {
  fromRows(rows: ContentRows): SiteData {
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

    // The contact card repeats the company's phone, email and address. They are
    // edited once, under the site settings, so the card is filled from there
    // rather than from a second copy that the admin's settings page cannot reach.
    const contact = content['contact'] as ContactSectionContent;
    const s = rows.settings;
    const same = (value: string): Text => ({ ar: value, en: value });
    const place: Text = {
      ar: `${s.city.ar}، ${s.country.ar}`,
      en: `${s.city.en}, ${s.country.en}`,
    };
    contact.info = contact.info.map((item) => {
      if (item.key === 'phone') {
        return { ...item, value: same(s.phone), href: `tel:${s.phone.replace(/\s+/g, '')}` };
      }
      if (item.key === 'mail') return { ...item, value: same(s.email), href: `mailto:${s.email}` };
      if (item.key === 'pin') return { ...item, value: place };
      return item;
    });

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
}
