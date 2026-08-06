import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n, Text } from '../../core/i18n';

/** one crumb between "home" and the current page */
export interface Crumb {
  label: Text;
  link: string;
}

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
  readonly heading = input.required<Text>();
  /** intermediate crumbs; "home" and the current page are added automatically */
  readonly trail = input<Crumb[]>([]);

  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);
  readonly home: Text = { ar: 'الرئيسية', en: 'Home' };
}
