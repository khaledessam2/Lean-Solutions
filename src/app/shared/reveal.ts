import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  DestroyRef,
  Directive,
  ElementRef,
  PLATFORM_ID,
  inject,
  input,
  signal,
} from '@angular/core';

/**
 * Fades an element in the first time it scrolls into view.
 * Set up in `ngAfterViewInit` (not `afterNextRender`) because this app runs
 * zoneless with hydration: callbacks queued during the hydration pass would
 * never flush, since no further change detection follows it.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[class.is-visible]': 'visible()',
    '[style.transition-delay.ms]': 'appReveal() || null',
  },
})
export class Reveal implements AfterViewInit {
  /** optional stagger delay in milliseconds — the bare attribute means "no delay" */
  readonly appReveal = input(0, { transform: (value: unknown) => Number(value) || 0 });

  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly visible = signal(false);

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      this.visible.set(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.visible.set(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );

    observer.observe(this.element.nativeElement);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
