import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contact } from '../../components/contact/contact';
import { ProjectCard } from '../../core/catalog';
import { FilterTab } from '../../core/content';
import { I18n, Text } from '../../core/i18n';
import { clamp, useSeo } from '../../core/seo';
import { PageBanner } from '../../shared/page-banner/page-banner';
import { Reveal } from '../../shared/reveal';
import { ContentStore } from '../../core/content-store';

@Component({
  selector: 'app-projects-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageBanner, Reveal, Contact, RouterLink],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {
  private readonly store = inject(ContentStore);
  private readonly site = this.store.content.site;
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);

  constructor() {
    useSeo(() => {
      const lang = this.i18n.lang();

      return {
        path: '/projects',
        // the description is deliberately not `copy.lead`: the services page
        // carries that same paragraph
        ...this.store.pages.projects.seo,
        // the listing has no share image of its own, so it borrows the first card's
        image: this.store.pages.projects.seo.image ?? this.projects[0]?.image,
        jsonLd: [
          {
            '@type': 'ItemList',
            name: `${this.copy.title[lang]} — ${this.site.name[lang]}`,
            numberOfItems: this.projects.length,
            itemListElement: this.projects.map((project, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'CreativeWork',
                name: project.title[lang],
                description: clamp(project.text[lang]),
                image: `${this.site.origin}/${project.image}`,
                url: `${this.site.origin}/projects/${project.slug}`,
                creator: { '@id': `${this.site.origin}/#organization` },
              },
            })),
          },
        ],
      };
    });
  }

  readonly copy = this.store.pages.projects;

  /** unlike the services page, the projects listing opens on 'all' */
  readonly filters: FilterTab[] = this.store.pages.projects.filters;

  readonly projects: ProjectCard[] = this.store.projects;
  // a plain string, because the tabs are editable content — 'all' is the only
  // key the component itself gives meaning to
  readonly activeFilter = signal<string>('all');

  readonly filtered = computed(() => {
    const key = this.activeFilter();
    return key === 'all' ? this.projects : this.projects.filter((p) => p.category === key);
  });

  setFilter(key: string): void {
    this.activeFilter.set(key);
  }
}
