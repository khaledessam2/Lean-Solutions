import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ContentStore } from './core/content-store';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly store = inject(ContentStore);

  /**
   * The whole site is rendered from the content database, so if it cannot be
   * reached there is nothing to draw. Rather than let every component fail on
   * a missing field, the shell says so once — and the message names the cause,
   * because in practice it is always one of two: the environment variables are
   * missing, or the database has not been seeded yet.
   */
  readonly failure = this.store.failure;
  readonly loaded = this.store.loaded;
}
