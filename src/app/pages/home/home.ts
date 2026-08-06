import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Services } from '../../components/services/services';
import { Projects } from '../../components/projects/projects';
import { Clients } from '../../components/clients/clients';
import { Contact } from '../../components/contact/contact';

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
export class Home {}
