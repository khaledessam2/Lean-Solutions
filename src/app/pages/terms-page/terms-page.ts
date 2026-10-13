import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Text } from '../../core/i18n';
import { I18n } from '../../services/i18n';
import { useSeo } from '../../services/seo';
import { ContentStore } from '../../services/content-store';
import { PageBanner } from '../../shared/page-banner/page-banner';

/** The copy of this page is written directly in the template, in both languages. */
@Component({
  selector: 'app-terms-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageBanner],
  templateUrl: './terms-page.html',
  styleUrl: '../../shared/legal.css',
})
export class TermsPage {
  readonly i18n = inject(I18n);

  /** the company's contact details come from the site settings, so the admin edits them once */
  readonly site = inject(ContentStore).content.site;
  readonly website = this.site.origin.replace(/^https?:\/\//, '');

  readonly heading: Text = { ar: 'الشروط والأحكام', en: 'Terms and conditions' };

  constructor() {
    useSeo(() => ({
      path: '/terms',
      title: this.heading,
      description: {
        ar: 'شروط وأحكام استخدام موقع لين بيزنس سوليشنز ومنصاتها وخدماتها، بما في ذلك الحسابات والاشتراكات والملكية الفكرية وحدود المسؤولية والنظام الواجب التطبيق.',
        en: 'The terms for using the Lean Business Solutions website, platforms and services, including accounts, subscriptions, intellectual property, limits of liability and governing law.',
      },
    }));
  }
}
