import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { useSeo } from '../../core/seo';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Services } from '../../components/services/services';
import { Projects } from '../../components/projects/projects';
import { Clients } from '../../components/clients/clients';
import { Contact } from '../../components/contact/contact';
import { ContentStore } from '../../core/content-store';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Hero, About, Services, Projects, Clients, Contact],
  template: `
    <app-hero />
    <app-about />
    <app-services />
    <app-projects />
    <app-clients />
    <app-contact />
  `,
})
export class Home {
  private readonly store = inject(ContentStore);
  constructor() {
    // the home title already carries the brand, so the SEO service leaves it as written
    useSeo(() => ({ path: '/', ...this.store.content.home.seo }));
  }
}
