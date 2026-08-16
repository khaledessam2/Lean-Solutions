import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Contact } from '../../components/contact/contact';
import { I18n, Text } from '../../core/i18n';
import { useSeo } from '../../core/seo';
import { PageBanner } from '../../shared/page-banner/page-banner';
import { ContentStore } from '../../core/content-store';

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
  private readonly store = inject(ContentStore);
  private readonly site = this.store.content.site;
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);

  readonly copy = this.store.pages.contact;

  /**
   * The map URL is a resource URL, so Angular will not accept it as a plain
   * string. It is not user input — it comes from the site's own settings, which
   * only an authenticated admin can write — so trusting it is safe here.
   */
  readonly mapEmbed = inject(DomSanitizer).bypassSecurityTrustResourceUrl(this.store.content.site.mapEmbed);

  constructor() {
    useSeo(() => {
      const lang = this.i18n.lang();

      return {
        path: '/contact',
        ...this.store.pages.contact.seo,
        jsonLd: [
          {
            '@type': 'ContactPage',
            name: this.copy.heading[lang],
            url: `${this.site.origin}/contact`,
            mainEntity: { '@id': `${this.site.origin}/#organization` },
          },
        ],
      };
    });
  }
}
