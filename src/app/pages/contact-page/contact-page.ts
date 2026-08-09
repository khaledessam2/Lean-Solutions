import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Contact } from '../../components/contact/contact';
import { I18n, Text } from '../../core/i18n';
import { SITE, useSeo } from '../../core/seo';
import { PageBanner } from '../../shared/page-banner/page-banner';

/**
 * The Contact page — the banner, the shared contact block (form + details card)
 * and the office map, matching leansolutions.com.sa/اتصل-بنا/ and /en/contact-us/.
 */
@Component({
  selector: 'app-contact-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageBanner, Contact],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);

  readonly copy = {
    heading: { ar: 'اتصل بنا', en: 'Contact Us' },
    mapTitle: { ar: 'موقع المكتب على الخريطة', en: 'Office location on the map' },
  };

  constructor() {
    useSeo(() => {
      const lang = this.i18n.lang();

      return {
        path: '/contact',
        title: this.copy.heading,
        description: {
          ar: `تواصل مع لين بيزنس سوليشنز في ${SITE.city.ar}: ${SITE.phone} أو ${SITE.email}. نستقبل طلبات الاستشارة من الأحد إلى الخميس، 8 ص – 4 م.`,
          en: `Get in touch with Lean Business Solutions in ${SITE.city.en}: ${SITE.phone} or ${SITE.email}. We take enquiries Sunday to Thursday, 8 AM – 4 PM.`,
        },
        jsonLd: [
          {
            '@type': 'ContactPage',
            name: this.copy.heading[lang],
            url: `${SITE.origin}/contact`,
            mainEntity: { '@id': `${SITE.origin}/#organization` },
          },
        ],
      };
    });
  }
}
