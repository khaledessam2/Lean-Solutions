import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';

/** the slice of `lottie-web`'s AnimationItem this component drives */
interface Animation {
  play(): void;
  pause(): void;
  destroy(): void;
}

/**
 * Plays one of the site's Lottie animations with the same settings the original
 * Elementor widget uses: svg renderer, looping, speed 1.
 *
 * `lottie-web` is imported lazily so it never reaches the server bundle, and the
 * animation JSON is only fetched once the animation is first asked to play —
 * the four hero files together are ~750 kB, so inactive slides cost nothing.
 *
 * Set up in `ngAfterViewInit` (not `afterNextRender`) for the same reason as
 * `Reveal`: this app runs zoneless with hydration.
 */
@Component({
  selector: 'app-lottie',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<div class="lottie__canvas" #canvas></div>',
  styleUrl: './lottie.css',
  host: {
    class: 'lottie',
    role: 'img',
    '[attr.aria-label]': 'label()',
    '[style.aspect-ratio]': 'ratio()',
  },
})
export class Lottie implements AfterViewInit {
  /** path to the animation JSON, relative to the app base — e.g. `lottie/ai-core.json` */
  readonly src = input.required<string>();
  readonly label = input('');
  /** intrinsic width / height, so the box holds its space before the JSON lands */
  readonly ratio = input(1);
  /** an off-screen animation (an inactive hero slide) stays paused */
  readonly playing = input(true);

  private readonly canvas = viewChild.required<ElementRef<HTMLElement>>('canvas');
  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /** flips once the host div exists — effects can run before the view is built */
  private readonly ready = signal(false);

  private animation: Animation | undefined;
  private loading = false;
  private destroyed = false;

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
      this.animation?.destroy();
      this.animation = undefined;
    });

    effect(() => {
      const playing = this.playing();

      if (!this.ready()) {
        return;
      }

      if (!this.animation) {
        if (playing) {
          void this.load();
        }
        return;
      }

      if (playing && !this.staticOnly) {
        this.animation.play();
      } else {
        this.animation.pause();
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.ready.set(true);
    }
  }

  /** honour the reduced-motion preference by holding the artwork on its first frame */
  private get staticOnly(): boolean {
    return (
      typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }

  private async load(): Promise<void> {
    if (this.loading || this.animation) {
      return;
    }

    this.loading = true;

    try {
      // the "light" build drops the canvas/html renderers we don't use — ~⅓ the size
      const { default: lottie } = await import('lottie-web/build/player/esm/lottie_light.min.js');

      if (this.destroyed) {
        return;
      }

      const animate = !this.staticOnly;

      this.animation = lottie.loadAnimation({
        container: this.canvas().nativeElement,
        renderer: 'svg',
        loop: animate,
        autoplay: animate,
        path: this.src(),
      });

      // `playing` may have flipped while the player was being fetched
      if (!this.playing()) {
        this.animation.pause();
      }
    } finally {
      this.loading = false;
    }
  }
}
