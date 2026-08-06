import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { I18n } from '../../core/i18n';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './logo.html',
  styleUrl: './logo.css',
  host: { '[class.logo--light]': 'variant() === "light"' },
  imports: [RouterLink],
})
export class Logo {
  private readonly i18n = inject(I18n);

  /** `dark` = navy wordmark (light backgrounds), `light` = white wordmark (dark backgrounds) */
  readonly variant = input<'dark' | 'light'>('dark');

  readonly isArabic = this.i18n.isArabic;
}
