import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n, Text } from '../../core/i18n';
import { Logo } from '../../shared/logo/logo';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Logo, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly i18n = inject(I18n);

  /** router links, so the nav still works when the About page is the active route */
  readonly links: { label: Text; path: string }[] = [
    { label: { ar: 'الرئيسية', en: 'Home' }, path: '/' },
    { label: { ar: 'من نحن', en: 'About us' }, path: '/about' },
    { label: { ar: 'الخدمات', en: 'Services' }, path: '/services' },
    { label: { ar: 'المشاريع', en: 'Projects' }, path: '/projects' },
    { label: { ar: 'اتصل بنا', en: 'Contact us' }, path: '/contact' },
  ];

  readonly cta: Text = { ar: 'دعنا نتحدث', en: "Let's talk" };

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
