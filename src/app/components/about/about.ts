import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n, Text } from '../../core/i18n';
import { Pillars } from '../../shared/pillars/pillars';
import { Reveal } from '../../shared/reveal';
import { ContentStore } from '../../core/content-store';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal, Pillars, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private readonly store = inject(ContentStore);
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);

  readonly copy = this.store.content.about;
}
