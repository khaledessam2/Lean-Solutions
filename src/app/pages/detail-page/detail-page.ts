import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Contact } from '../../components/contact/contact';
import { ProjectDetail, SERVICE_COVER, ServiceDetail } from '../../core/catalog';
import { PROJECT_DETAILS, SERVICE_DETAILS } from '../../core/catalog-details';
import { I18n, Text } from '../../core/i18n';
import { CheckIcon } from '../../shared/check-icon/check-icon';
import { Crumb, PageBanner } from '../../shared/page-banner/page-banner';
import { Reveal } from '../../shared/reveal';

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
  /** both come from the route: `kind` from its data, `slug` from the path */
  readonly kind = input.required<Kind>();
  readonly slug = input.required<string>();

  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);
  readonly serviceCover = SERVICE_COVER;

  readonly service = computed<ServiceDetail | undefined>(() =>
    this.kind() === 'service' ? SERVICE_DETAILS[this.slug()] : undefined,
  );

  readonly project = computed<ProjectDetail | undefined>(() =>
    this.kind() === 'project' ? PROJECT_DETAILS[this.slug()] : undefined,
  );

  /** the page heading, or the not-found copy when the slug does not resolve */
  readonly heading = computed<Text>(
    () => this.service()?.title ?? this.project()?.title ?? this.notFound.title,
  );

  readonly trail = computed<Crumb[]>(() =>
    this.kind() === 'service'
      ? [{ label: { ar: 'الخدمات', en: 'Services' }, link: '/services' }]
      : [{ label: { ar: 'المشاريع', en: 'Projects' }, link: '/projects' }],
  );

  readonly notFound = {
    title: { ar: 'الصفحة غير موجودة', en: 'Page not found' },
    text: {
      ar: 'لم نعثر على ما تبحث عنه. تصفح بقية الخدمات والمشاريع أو تواصل معنا.',
      en: 'We could not find what you were looking for. Browse the rest of our services and projects, or get in touch.',
    },
  };
}
