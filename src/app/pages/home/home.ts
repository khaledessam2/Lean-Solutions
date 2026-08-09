import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE, useSeo } from '../../core/seo';
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
export class Home {
  constructor() {
    useSeo(() => ({
      path: '/',
      // already carries the brand, so the service leaves it as written
      title: {
        ar: `${SITE.name.ar} | حلول التعليم الإلكتروني والتحول الرقمي والاستشارات الإدارية`,
        en: `${SITE.name.en} | E-learning, digital transformation and management consulting`,
      },
      description: {
        ar: 'لين بيزنس سوليشنز شركة سعودية تقدم حلول التعليم الإلكتروني والتحول الرقمي والاستشارات الإدارية للجهات الحكومية والشركات — من منصات التدريب إلى تطوير الأنظمة والذكاء الاصطناعي.',
        en: 'Lean Business Solutions is a Saudi company delivering e-learning, digital transformation and management consulting for government entities and enterprises — from training platforms to software and AI.',
      },
    }));
  }
}
