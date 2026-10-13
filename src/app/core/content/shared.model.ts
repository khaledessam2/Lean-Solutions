import { Text } from '../i18n';

export interface NavLink {
  label: Text;
  path: string;
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
