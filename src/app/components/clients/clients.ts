import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ClientLogo } from '../../core/content';
import { I18n, Text } from '../../core/i18n';
import { Reveal } from '../../shared/reveal';
import { ContentStore } from '../../core/content-store';

@Component({
  selector: 'app-clients',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal],
  templateUrl: './clients.html',
  styleUrl: './clients.css',
})
export class Clients {
  private readonly store = inject(ContentStore);
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);

  readonly copy = this.store.content.clients;

  /**
   * Official partner emblems, all white-on-transparent so they sit on the dark
   * section. The name is carried by the image `alt` rather than a caption — the
   * row reads as a logo wall, the way the brand sheet lays it out.
   */
  readonly clients: ClientLogo[] = this.store.content.clients.logos;
}
