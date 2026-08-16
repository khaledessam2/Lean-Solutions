import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { HeroSlide } from '../../core/content';
import { I18n, Text } from '../../core/i18n';
import { Lottie } from '../../shared/lottie/lottie';
import { RouterLink } from '@angular/router';
import { ContentStore } from '../../core/content-store';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Lottie, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {
  private readonly store = inject(ContentStore);
  private readonly destroyRef = inject(DestroyRef);
  private readonly i18n = inject(I18n);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private timer: ReturnType<typeof setInterval> | undefined;

  readonly t = (value: Text): string => this.i18n.t(value);
  readonly isArabic = this.i18n.isArabic;

  readonly labels = this.store.content.hero;

  readonly slides: HeroSlide[] = this.store.content.hero.items;

  readonly active = signal(0);

  ngOnInit(): void {
    this.play();
    this.destroyRef.onDestroy(() => this.pause());
  }

  play(): void {
    if (!this.isBrowser) {
      return;
    }
    this.pause();
    this.timer = setInterval(() => this.next(), 7000);
  }

  pause(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  next(): void {
    this.active.update((i) => (i + 1) % this.slides.length);
  }

  prev(): void {
    this.active.update((i) => (i - 1 + this.slides.length) % this.slides.length);
  }

  goTo(index: number): void {
    this.active.set(index);
    this.play();
  }

  step(direction: 1 | -1): void {
    direction === 1 ? this.next() : this.prev();
    this.play();
  }
}
