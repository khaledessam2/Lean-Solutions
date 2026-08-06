import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18n, Text } from '../../core/i18n';
import { Logo } from '../../shared/logo/logo';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Logo],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);
  readonly year = new Date().getFullYear();

  readonly copy = {
    about: {
      ar: 'تقدم منصة متكاملة للتعليم الالكتروني و التحول الرقمي والاستشارات الادارية، تدعم المؤسسات بحلول ذكية ومرنة تعزز التطوير والابتكار.',
      en: 'One integrated platform for e-learning, digital transformation and management consulting — supporting organisations with smart, flexible solutions that drive development and innovation.',
    },
    rights: {
      ar: 'لين بيزنس سوليشن جميع الحقوق محفوظة.',
      en: 'Lean Business Solutions. All rights reserved.',
    },
    privacy: { ar: 'سياسة الخصوصية', en: 'Privacy policy' },
    terms: { ar: 'الشروط والأحكام', en: 'Terms and conditions' },
  };

  readonly columns: { title: Text; links: { label: Text}[] }[] = [
    {
      title: { ar: 'روابط سريعة', en: 'Quick links' },
      links: [
        { label: { ar: 'الرئيسية', en: 'Home' }},
        { label: { ar: 'معلومات عنا', en: 'About us' } },
        { label: { ar: 'المشاريع', en: 'Projects' }},
        { label: { ar: 'الخدمات', en: 'Services' }},
        { label: { ar: 'اتصل بنا', en: 'Contact us' }},
      ],
    },
    {
      title: { ar: 'تعليم الكتروني', en: 'E-learning' },
      links: [
        { label: { ar: 'تطوير نظام إدارة التعلم', en: 'LMS development' }},
        { label: { ar: 'استراتيجية المحتوى', en: 'Content strategy' } },
        { label: { ar: 'تصميم الدورات', en: 'Course design' } },
        { label: { ar: 'التعلم عبر الهاتف', en: 'Mobile learning' } },
        { label: { ar: 'تحليلات التعلم', en: 'Learning analytics' } },
      ],
    },
    {
      title: { ar: 'تحول رقمي', en: 'Digital transformation' },
      links: [
        { label: { ar: 'تطوير الويب', en: 'Web development' }},
        { label: { ar: 'تصميم الويب', en: 'Web design' }},
        { label: { ar: 'الهندسة الكاملة', en: 'Full-stack engineering' }},
        { label: { ar: 'تطوير الهواتف المحمولة', en: 'Mobile development' }},
        { label: { ar: 'تطوير الواجهة الأمامية', en: 'Front-end development' }},
      ],
    },
    {
      title: { ar: 'استشارات ادارية', en: 'Management consulting' },
      links: [
        {
          label: { ar: 'تطوير الاستراتيجيات وتنفيذها', en: 'Strategy development and execution' },
        },
        {
          label: {
            ar: 'تطوير النماذج التشغيلية واطر الحوكمة',
            en: 'Operating models and governance frameworks',
          }
        },
        {
          label: { ar: 'ادارة وتشغيل مكاتب ادارة المشاريع', en: 'PMO setup and operation' },
        },
        {
          label: { ar: 'تطوير ادلة واجراءات العمل', en: 'Manuals and work procedures' },
        },
      ],
    },
  ];
}
