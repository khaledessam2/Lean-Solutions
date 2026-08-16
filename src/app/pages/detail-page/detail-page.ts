import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Contact } from '../../components/contact/contact';
import { ProjectDetail, ServiceDetail } from '../../core/catalog';
import { I18n, Text } from '../../core/i18n';
import { PageSeo, clamp, useSeo } from '../../core/seo';
import { CheckIcon } from '../../shared/check-icon/check-icon';
import { Crumb, PageBanner } from '../../shared/page-banner/page-banner';
import { Reveal } from '../../shared/reveal';
import { ContentStore } from '../../core/content-store';

type Kind = 'service' | 'project';

/**
 * One page for every service and project detail — the route supplies `kind` and
 * the `:slug`, and the content comes from the catalog. Mirrors the two templates
 * the live site uses: services get a feature list plus numbered process steps,
 * projects get an "about" write-up, a feature list and a spec table.
 */
@Component({
  selector: 'app-detail-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageBanner, Reveal, CheckIcon, Contact],
  templateUrl: './detail-page.html',
  styleUrl: './detail-page.css',
})
export class DetailPage {
  private readonly store = inject(ContentStore);
  private readonly site = this.store.content.site;
  /** both come from the route: `kind` from its data, `slug` from the path */
  readonly kind = input.required<Kind>();
  readonly slug = input.required<string>();

  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);
  readonly serviceCover = this.store.serviceCover;

  readonly service = computed<ServiceDetail | undefined>(() =>
    this.kind() === 'service' ? this.store.serviceDetail(this.slug()) : undefined,
  );

  readonly project = computed<ProjectDetail | undefined>(() =>
    this.kind() === 'project' ? this.store.projectDetail(this.slug()) : undefined,
  );

  /** the intro paragraph is the service card's own copy — kept in one place, not duplicated here */
  readonly lead = computed<Text | undefined>(() =>
    this.kind() === 'service'
      ? this.store.services.find((service) => service.slug === this.slug())?.text
      : undefined,
  );

  /** the page heading, or the not-found copy when the slug does not resolve */
  readonly heading = computed<Text>(
    () => this.service()?.title ?? this.project()?.title ?? this.notFound.title,
  );

  readonly trail = computed<Crumb[]>(() =>
    this.kind() === 'service'
      ? [{ label: this.store.pages.detail.servicesCrumb, link: '/services' }]
      : [{ label: this.store.pages.detail.projectsCrumb, link: '/projects' }],
  );

  readonly notFound = {
    title: this.store.pages.detail.notFoundTitle,
    text: this.store.pages.detail.notFoundText,
  };

  constructor() {
    // one component backs 30+ prerendered URLs, so its metadata has to be derived
    // per slug — otherwise every detail page ships the same title and description
    useSeo(() => this.seo());
  }

  private readonly seo = computed<PageSeo>(() => {
    const lang = this.i18n.lang();
    const kind = this.kind();
    const service = this.service();
    const project = this.project();
    const url = `${this.site.origin}/${kind === 'service' ? 'services' : 'projects'}/${this.slug()}`;

    // an unknown slug still renders (the route matches any), so keep it out of the index
    if (!service && !project) {
      return { title: this.notFound.title, description: this.notFound.text, noIndex: true };
    }

    const title = service?.title ?? project!.title;
    const description = service ? (this.lead() ?? service.title) : project!.aboutText;

    return {
      title,
      description,
      type: 'article',
      image: project?.image ?? this.serviceCover,
      breadcrumbs: this.trail(),
      jsonLd: [
        service
          ? {
              '@type': 'Service',
              name: title[lang],
              description: clamp(description[lang], 300),
              serviceType: title.en,
              url,
              areaServed: { '@type': 'Country', name: this.site.country[lang] },
              provider: { '@id': `${this.site.origin}/#organization` },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: service.featuresTitle[lang],
                itemListElement: service.features.map((feature) => ({
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: feature[lang] },
                })),
              },
            }
          : {
              '@type': 'CreativeWork',
              name: title[lang],
              description: clamp(description[lang], 300),
              url,
              image: `${this.site.origin}/${project!.image}`,
              inLanguage: lang,
              creator: { '@id': `${this.site.origin}/#organization` },
            },
      ],
    };
  });
}
