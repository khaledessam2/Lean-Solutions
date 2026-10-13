import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Text } from '../../core/i18n';
import { I18n } from '../../services/i18n';
import { useSeo } from '../../services/seo';
import { ContentStore } from '../../services/content-store';
import { PageBanner } from '../../shared/page-banner/page-banner';

/** The copy of this page is written directly in the template, in both languages. */
@Component({
  selector: 'app-privacy-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageBanner],
  templateUrl: './privacy-page.html',
  styleUrl: '../../shared/legal.css',
})
export class PrivacyPage {
  readonly i18n = inject(I18n);

  /** the company's contact details come from the site settings, so the admin edits them once */
  readonly site = inject(ContentStore).content.site;
  readonly website = this.site.origin.replace(/^https?:\/\//, '');

  readonly heading: Text = { ar: 'سياسة الخصوصية', en: 'Privacy policy' };

  constructor() {
    useSeo(() => ({
      path: '/privacy',
      title: this.heading,
      description: {
        ar: 'تعرّف على البيانات التي تجمعها لين بيزنس سوليشنز عبر موقعها ومنصاتها، وأغراض معالجتها ومشاركتها وحمايتها، وحقوقك بموجب نظام حماية البيانات الشخصية في المملكة العربية السعودية.',
        en: 'What personal data Lean Business Solutions collects through its website and platforms, why and how it is processed, shared and protected, and your rights under the Saudi Personal Data Protection Law.',
      },
    }));
  }
}
