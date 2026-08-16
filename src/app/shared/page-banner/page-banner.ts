import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n, Text } from '../../core/i18n';
import { Crumb } from '../../core/seo';
import { ContentStore } from '../../core/content-store';

/**
 * One crumb between "home" and the current page. It is defined in `core/seo`
 * because the same trail feeds both this banner and the BreadcrumbList that
 * ships in the page's structured data — re-exported here so callers that only
 * care about the banner keep importing from one place.
 */
export type { Crumb };

/**
 * The dark page header every inner page opens with — the same background art
 * and 300px height the live site uses.
 */
@Component({
  selector: 'app-page-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './page-banner.html',
  styleUrl: './page-banner.css',
})
export class PageBanner {
  private readonly store = inject(ContentStore);
  readonly heading = input.required<Text>();
  /** intermediate crumbs; "home" and the current page are added automatically */
  readonly trail = input<Crumb[]>([]);

  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);
  readonly home: Text = this.store.content.common.home;
}
