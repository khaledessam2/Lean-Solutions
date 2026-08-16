import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLink } from '../../core/content';
import { I18n, Text } from '../../core/i18n';
import { Logo } from '../../shared/logo/logo';
import { ContentStore } from '../../core/content-store';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Logo, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly store = inject(ContentStore);
  private readonly i18n = inject(I18n);

  /** router links, so the nav still works when the About page is the active route */
  readonly links: NavLink[] = this.store.content.header.links;

  readonly cta: Text = this.store.content.header.cta;
  readonly copy = this.store.content.header;

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  readonly t = (value: Text): string => this.i18n.t(value);
  readonly isArabic = this.i18n.isArabic;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  switchLang(): void {
    this.i18n.toggle();
    this.closeMenu();
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
