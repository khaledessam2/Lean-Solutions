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
   * Client emblems are not part of the shipped assets, so each partner is shown
   * with a neutral placeholder mark + its name. Drop the official artwork into
   * `public/logo/clients/` and swap it in when available.
   */
  readonly clients: { name: Text; mark: string }[] = [
    { name: { ar: 'وزارة الحرس الوطني', en: 'Ministry of National Guard' }, mark: 'crest' },
    { name: { ar: 'وزارة الداخلية', en: 'Ministry of Interior' }, mark: 'shield' },
    {
      name: {
        ar: 'مجمع الملك فهد لطباعة المصحف الشريف',
        en: 'King Fahd Glorious Quran Printing Complex',
      },
      mark: 'dome',
    },
    { name: { ar: 'الأمن العام', en: 'Public Security' }, mark: 'crest' },
    {
      name: {
        ar: 'هيئة رعاية الأشخاص ذوي الإعاقة',
        en: 'Authority of People with Disability',
      },
      mark: 'care',
    },
    {
      name: { ar: 'شركة قيمة للحلول لتقنية المعلومات', en: 'Qima IT Solutions' },
      mark: 'tech',
    },
  ];
}
