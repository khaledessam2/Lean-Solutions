import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ServiceCard } from '../../core/catalog';
import { RouterLink } from '@angular/router';
import { FilterTab } from '../../core/content';
import { I18n, Text } from '../../core/i18n';
import { Reveal } from '../../shared/reveal';
import { ContentStore } from '../../core/content-store';

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  private readonly store = inject(ContentStore);
  private readonly destroyRef = inject(DestroyRef);
  private readonly i18n = inject(I18n);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly t = (value: Text): string => this.i18n.t(value);

  readonly copy = this.store.content.services;

  readonly filters: FilterTab[] = this.store.content.services.filters;

  readonly services: ServiceCard[] = this.store.services;

  readonly activeFilter = signal<string>('all');
  readonly index = signal(0);
  readonly visible = signal(4);

  readonly filtered = computed(() => {
    const key = this.activeFilter();
    return key === 'all' ? this.services : this.services.filter((s) => s.category === key);
  });

  readonly maxIndex = computed(() => Math.max(0, this.filtered().length - this.visible()));

  readonly shift = computed(() => {
    const direction = this.i18n.isArabic() ? 1 : -1;
    return `translateX(${(direction * this.index() * 100) / this.visible()}%)`;
  });

  ngOnInit(): void {
    if (!this.isBrowser) {
      return;
    }

    this.measure();
    window.addEventListener('resize', this.measure, { passive: true });
    this.destroyRef.onDestroy(() => window.removeEventListener('resize', this.measure));
  }

  private readonly measure = (): void => {
    const w = window.innerWidth;
    this.visible.set(w >= 1200 ? 4 : w >= 900 ? 3 : w >= 640 ? 2 : 1);
    this.index.update((i) => Math.min(i, this.maxIndex()));
  };

  setFilter(key: string): void {
    this.activeFilter.set(key);
    this.index.set(0);
  }

  step(direction: 1 | -1): void {
    this.index.update((i) => Math.min(Math.max(i + direction, 0), this.maxIndex()));
  }
}
