import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Contact } from '../../components/contact/contact';
import { I18n, Text } from '../../core/i18n';
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
}
