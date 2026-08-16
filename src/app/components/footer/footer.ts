import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FooterColumn } from '../../core/content';
import { I18n, Text } from '../../core/i18n';
import { Logo } from '../../shared/logo/logo';
import { ContentStore } from '../../core/content-store';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Logo],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private readonly store = inject(ContentStore);
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);
  readonly year = new Date().getFullYear();

  readonly copy = this.store.content.footer;
  readonly linkedin = this.store.content.site.linkedin;

  readonly columns: FooterColumn[] = this.store.content.footer.columns;
}
