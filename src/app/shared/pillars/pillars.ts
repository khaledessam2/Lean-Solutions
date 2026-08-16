import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PillarCard } from '../../core/content';
import { I18n, Text } from '../../core/i18n';
import { Reveal } from '../reveal';
import { ContentStore } from '../../core/content-store';

/**
 * Vision / mission / values beside the team photo. Shared because the live site
 * shows this same block on the home page and on the About page.
 */
@Component({
  selector: 'app-pillars',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal],
  templateUrl: './pillars.html',
  styleUrl: './pillars.css',
})
export class Pillars {
  private readonly store = inject(ContentStore);
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);

  readonly imageAlt: Text = this.store.content.pillars.imageAlt;

  /** each card's `icon` points at the same animated icons the live site uses */
  readonly cards: PillarCard[] = this.store.content.pillars.cards;
}
