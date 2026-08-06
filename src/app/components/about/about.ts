import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n, Text } from '../../core/i18n';
import { Pillars } from '../../shared/pillars/pillars';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal, Pillars, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);

  readonly copy = {
    eyebrow: { ar: 'من نحن', en: 'About us' },
    title: { ar: 'حلول استراتيجية متكاملة', en: 'Integrated strategic solutions' },
    lead: {
      ar: 'في لين بيزنس سوليشنز نقدم منصة متكاملة للتعليم الالكتروني و التحول الرقمي والاستشارات الادارية، تدعم المؤسسات بحلول ذكية ومرنة تعزز التطوير والابتكار.',
      en: 'At Lean Business Solutions we deliver one integrated platform for e-learning, digital transformation and management consulting — supporting organisations with smart, flexible solutions that drive development and innovation.',
    },
    cta: { ar: 'إعرف المزيد', en: 'Learn more' },
  };
}
