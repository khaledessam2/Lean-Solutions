import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n, Text } from '../../core/i18n';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-clients',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal],
  templateUrl: './clients.html',
  styleUrl: './clients.css',
})
export class Clients {
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);

  readonly copy = {
    eyebrow: { ar: 'عملائنا', en: 'Our clients' },
    title: { ar: 'نجاحات نفتخر بها', en: 'Successes we are proud of' },
    lead: {
      ar: 'شراكاتنا مع مؤسسات رائدة تثبت التزامنا بتحقيق أثر إيجابي ومستدام في كل مشروع ننفذه.',
      en: 'Our partnerships with leading institutions prove our commitment to a positive, lasting impact in every project we deliver.',
    },
  };

  /**
   * Official partner emblems, all white-on-transparent so they sit on the dark
   * section. The name is carried by the image `alt` rather than a caption — the
   * row reads as a logo wall, the way the brand sheet lays it out.
   */
  readonly clients: { name: Text; logo: string }[] = [
    { name: { ar: 'وزارة الحرس الوطني', en: 'Ministry of National Guard' }, logo: 'partners/image-63.png' },
    { name: { ar: 'وزارة الداخلية', en: 'Ministry of Interior' }, logo: 'partners/image-64-1.png' },
    {
      name: {
        ar: 'مجمع الملك فهد لطباعة المصحف الشريف',
        en: 'King Fahd Glorious Quran Printing Complex',
      },
      logo: 'partners/image-68.png',
    },
    { name: { ar: 'الأمن العام', en: 'Public Security' }, logo: 'partners/image-66.png' },
    {
      name: {
        ar: 'هيئة رعاية الأشخاص ذوي الإعاقة',
        en: 'Authority of People with Disability',
      },
      logo: 'partners/image-65-1.png',
    },
    {
      name: { ar: 'شركة قيمة للحلول لتقنية المعلومات', en: 'Qima IT Solutions' },
      logo: 'partners/Qima-Logo-v3.0-1.png',
    },
  ];
}
