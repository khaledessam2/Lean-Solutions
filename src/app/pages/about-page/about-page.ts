import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contact } from '../../components/contact/contact';
import { CopyBlock } from '../../core/content';
import { I18n, Text } from '../../core/i18n';
import { useSeo } from '../../core/seo';
import { CheckIcon } from '../../shared/check-icon/check-icon';
import { Pillars } from '../../shared/pillars/pillars';
import { Reveal } from '../../shared/reveal';
import { ContentStore } from '../../core/content-store';

/**
 * The About page — every string is the live site's own copy, taken from
 * leansolutions.com.sa/من-نحن/ and /en/about-us/.
 */
@Component({
  selector: 'app-about-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal, Pillars, CheckIcon, Contact, RouterLink],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  private readonly store = inject(ContentStore);
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);

  readonly copy = this.store.pages.about;
  readonly banner = { title: this.store.pages.about.heading, home: this.store.content.common.home };

  readonly intro = this.store.pages.about.intro;
  readonly blocks: CopyBlock[] = this.store.pages.about.blocks;
  readonly why = this.store.pages.about.why;

  constructor() {
    useSeo(() => ({ path: '/about', ...this.store.pages.about.seo }));
  }
}
