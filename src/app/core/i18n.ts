export type Lang = 'ar' | 'en';

/** A single piece of copy in both supported languages. */
export interface Text {
  ar: string;
  en: string;
}
