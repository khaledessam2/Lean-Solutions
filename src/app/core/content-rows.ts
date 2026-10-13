import { ProjectCard, ProjectDetail, ServiceCard, ServiceDetail } from './catalog';
import { PagesContent, SiteContent } from './content';
import { Text } from './i18n';

/**
 * The content database, as the rows come back from PostgREST, and the
 * assembled data the site renders. `ContentMapper` turns one into the other.
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
