import { Text } from '../i18n';
import { NavLink } from './shared.model';

export interface HeaderContent {
  links: NavLink[];
  cta: Text;
  /** screen-reader labels for the nav landmark and the burger button */
  nav: Text;
  menu: Text;
}

export interface FooterColumn {
  title: Text;
  links: { label: Text; path?: string }[];
}

export interface FooterContent {
  about: Text;
  rights: Text;
  privacy: Text;
  terms: Text;
  columns: FooterColumn[];
}

/** one row of the contact card; `href` is null for the rows that are not links */
export interface ContactInfoItem {
  key: string;
  label: Text;
  value: Text;
  href: string | null;
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
