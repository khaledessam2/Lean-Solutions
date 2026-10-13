import {
  AboutSectionContent,
  ClientsSectionContent,
  HeroContent,
  HomePageContent,
  PillarsContent,
  ProjectsSectionContent,
  ServicesSectionContent,
} from './home.model';
import { CommonContent, SiteInfo } from './site.model';
import { ContactSectionContent, FooterContent, HeaderContent } from './shell.model';

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
