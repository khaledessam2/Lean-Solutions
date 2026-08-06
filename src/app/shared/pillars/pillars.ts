import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n, Text } from '../../core/i18n';
import { Reveal } from '../reveal';

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
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);

  readonly imageAlt: Text = {
    ar: 'فريق لين بيزنس سوليشنز داخل المكتب',
    en: 'The Lean Business Solutions team at the office',
  };

  /** `icon` points at the same animated icons the live site uses */
  readonly cards = [
    {
      key: 'vision',
      icon: 'icons/telescope.gif',
      title: { ar: 'رؤيتنا', en: 'Our vision' },
      text: {
        ar: 'أن نكون الخيار الأول في التعليم والتدريب الرقمي، وبوصلة المؤسسات نحو مستقبل أكثر كفاءة واستدامة.',
        en: 'To be the first choice in digital education and training, and the compass guiding organisations toward a more efficient, sustainable future.',
      },
    },
    {
      key: 'mission',
      icon: 'icons/mission.gif',
      title: { ar: 'مهمتنا', en: 'Our mission' },
      text: {
        ar: 'تمكين عملائنا من التطور عبر حلول تجمع بين التكنولوجيا، الذكاء الاصطناعي، والتعليم الإلكتروني بمرونة واحترافية.',
        en: 'Enabling our clients to grow through solutions that combine technology, artificial intelligence and e-learning with flexibility and professionalism.',
      },
    },
    {
      key: 'values',
      icon: 'icons/diamond.gif',
      title: { ar: 'قيمنا', en: 'Our values' },
      text: {
        ar: 'الابتكار، الموثوقية، والجودة هي أساس خدماتنا، لنقدّم تجربة تعليمية فعالة ومؤثرة.',
        en: 'Innovation, reliability and quality are the foundation of our services, so we can deliver an effective and impactful learning experience.',
      },
    },
  ];
}
