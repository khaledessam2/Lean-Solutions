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
import { ProjectCard } from '../../core/catalog';
import { RouterLink } from '@angular/router';
import { I18n, Text } from '../../core/i18n';
import { Reveal } from '../../shared/reveal';
import { ContentStore } from '../../core/content-store';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  private readonly store = inject(ContentStore);
  private readonly destroyRef = inject(DestroyRef);
  private readonly i18n = inject(I18n);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly t = (value: Text): string => this.i18n.t(value);

  readonly copy = this.store.content.projects;

  readonly projects: ProjectCard[] = this.store.projects;

  readonly index = signal(0);
  readonly visible = signal(3);

  readonly maxIndex = computed(() => Math.max(0, this.projects.length - this.visible()));

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
    this.visible.set(w >= 1024 ? 3 : w >= 700 ? 2 : 1);
    this.index.update((i) => Math.min(i, this.maxIndex()));
  };

  step(direction: 1 | -1): void {
    this.index.update((i) => Math.min(Math.max(i + direction, 0), this.maxIndex()));
  }
}
