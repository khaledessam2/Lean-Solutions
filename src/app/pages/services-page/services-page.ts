import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contact } from '../../components/contact/contact';
import { ServiceCard } from '../../core/catalog';
import { FilterTab } from '../../core/content';
import { I18n, Text } from '../../core/i18n';
import { clamp, useSeo } from '../../core/seo';
import { PageBanner } from '../../shared/page-banner/page-banner';
import { Reveal } from '../../shared/reveal';
import { ContentStore } from '../../core/content-store';

@Component({
  selector: 'app-services-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageBanner, Reveal, Contact, RouterLink],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
})
export class ServicesPage {
  private readonly store = inject(ContentStore);
  private readonly site = this.store.content.site;
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);

  constructor() {
    useSeo(() => {
      const lang = this.i18n.lang();

      return {
        path: '/services',
        // the description is deliberately not `copy.lead` — the projects page
        // publishes that same paragraph, and two pages sharing one description
        // is a duplicate-content signal
        ...this.store.pages.services.seo,
        // the full catalogue, so the detail pages are discoverable as a set
        jsonLd: [
          {
            '@type': 'ItemList',
            name: `${this.copy.title[lang]} — ${this.site.name[lang]}`,
            numberOfItems: this.services.length,
            itemListElement: this.services.map((service, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Service',
                name: service.title[lang],
                description: clamp(service.text[lang]),
                url: `${this.site.origin}/services/${service.slug}`,
                provider: { '@id': `${this.site.origin}/#organization` },
              },
            })),
          },
        ],
      };
    });
  }

  readonly copy = this.store.pages.services;

  /** the live page shows the three categories only — there is no 'all' tab here */
  readonly filters: FilterTab[] = this.store.pages.services.filters;

  /**
   * Five cards numbered 01–05. Cards 4 and 5 repeat cards 1 and 2 word for word —
   * that is what the live page publishes, so it is reproduced here.
   */
  readonly steps = this.store.pages.services.steps;

  /** 1 -> "01"; the live page numbers the cards rather than storing the number */
  stepNo(index: number): string {
    return String(index + 1).padStart(2, '0');
  }

  readonly services: ServiceCard[] = this.store.services;
  // the key is a plain string because the tabs are editable content now — an
  // unknown key simply filters to nothing rather than failing to compile
  readonly activeFilter = signal<string>(this.store.pages.services.filters[0]?.key ?? 'elearning');

  readonly filtered = computed(() =>
    this.services.filter((s) => s.category === this.activeFilter()),
  );

  setFilter(key: string): void {
    this.activeFilter.set(key);
  }
}
