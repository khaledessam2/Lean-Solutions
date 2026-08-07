import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { I18n } from '../../core/i18n';
import { RouterLink } from "@angular/router";

/** Brand lockup artwork, keyed by language + background. Intrinsic sizes prevent layout shift. */
const LOCKUPS = {
  'ar-dark': { src: 'logo/logo-full-ar.png', width: 922, height: 242 },
  'ar-light': { src: 'logo/logo-full-ar-light.png', width: 922, height: 242 },
  'en-dark': { src: 'logo/logo-full.png', width: 660, height: 138 },
  'en-light': { src: 'logo/logo-full-light.png', width: 660, height: 138 },
} as const;

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

  readonly lockup = computed(() => LOCKUPS[`${this.isArabic() ? 'ar' : 'en'}-${this.variant()}`]);
}
