import { Text } from '../i18n';
import { FilterTab, PageSeoCopy } from './shared.model';

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

/** vision / mission / values — shown on the home page and the About page */
export interface PillarCard {
  key: string;
  icon: string;
  title: Text;
  text: Text;
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

export interface ClientLogo {
  name: Text;
  logo: string;
}

export interface ClientsSectionContent {
  eyebrow: Text;
  title: Text;
  lead: Text;
  logos: ClientLogo[];
}

export interface HomePageContent {
  seo: PageSeoCopy;
}
