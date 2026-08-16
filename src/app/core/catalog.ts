import { Text } from './i18n';

/**
 * The shape of every service and project on the site, and of their detail
 * pages. The content itself is stored in Supabase and edited in the admin.
 */

export interface ServiceCard {
  slug: string;
  icon: string;
  category: 'elearning' | 'digital' | 'management';
  title: Text;
  text: Text;
  /** false for the one card whose button links straight to the contact section */
  hasDetail: boolean;
  /** when set, the card's button opens this site instead of the detail route */
  externalUrl?: string;
}

export interface ProcessStep {
  no: string;
  title: Text;
  text: Text;
}

export interface ServiceDetail {
  title: Text;
  /**
   * Optional "what we offer" block, rendered as a plain bulleted list above the
   * feature checklist. The lead paragraph above it is not stored here — it is
   * the same copy as the service card, so the detail page reads it from SERVICES.
   */
  offerTitle?: Text;
  offers?: Text[];
  featuresTitle: Text;
  features: Text[];
  processTitle: Text;
  processLead: Text;
  steps: ProcessStep[];
}

export interface ProjectCard {
  slug: string;
  image: string;
  /** drives the filter tabs on the projects page — same three families as the services */
  category: 'elearning' | 'digital' | 'management';
  tag: Text;
  title: Text;
  text: Text;
}

export interface InfoPair {
  label: Text;
  value: Text;
}

export interface ProjectDetail {
  title: Text;
  image: string;
  aboutTitle: Text;
  aboutText: Text;
  features: Text[];
  infoTitle: Text;
  info: InfoPair[];
  /**
   * Optional long-form write-up below the spec panel. Each block carries a
   * heading plus a paragraph, a bullet list, or both — projects differ in how
   * many they need. Entries without it render exactly as before.
   */
  sections?: DetailBlock[];
}

/** a headed block of prose and/or bullets, used for the project write-up */
export interface DetailBlock {
  title: Text;
  text?: Text;
  bullets?: Text[];
}

/**
 * The catalogue itself lives in Supabase and is loaded per render — read it
 * from `ContentStore`, which is where `services`, `projects` and their detail
 * pages come from. This file only describes their shape.
 */
