import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';

export type Lang = 'ar' | 'en';

/** A single piece of copy in both supported languages. */
export interface Text {
  ar: string;
  en: string;
}

const STORAGE_KEY = 'lbs-lang';

@Injectable({ providedIn: 'root' })
export class I18n {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly lang = signal<Lang>('ar');

  readonly dir = computed<'rtl' | 'ltr'>(() => (this.lang() === 'ar' ? 'rtl' : 'ltr'));
  readonly isArabic = computed(() => this.lang() === 'ar');

  constructor() {
    if (this.isBrowser) {
      // ?lang=en wins over the stored preference so links can be shared in either language
      const requested = new URLSearchParams(location.search).get('lang');
      const saved = requested ?? localStorage.getItem(STORAGE_KEY);
      if (saved === 'ar' || saved === 'en') {
        this.lang.set(saved);
      }
    }

    effect(() => {
      const lang = this.lang();
      const root = this.document.documentElement;
      root.setAttribute('lang', lang);
      root.setAttribute('dir', this.dir());
      root.setAttribute('data-lang', lang);

      if (this.isBrowser) {
        localStorage.setItem(STORAGE_KEY, lang);
      }
    });
  }

  /** Resolves a bilingual value against the active language. */
  t(value: Text): string {
    return value[this.lang()];
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }

  toggle(): void {
    this.lang.update((current) => (current === 'ar' ? 'en' : 'ar'));
  }
}
