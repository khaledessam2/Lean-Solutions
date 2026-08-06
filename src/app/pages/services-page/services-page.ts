import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contact } from '../../components/contact/contact';
import { SERVICES, ServiceCard } from '../../core/catalog';
import { I18n, Text } from '../../core/i18n';
import { PageBanner } from '../../shared/page-banner/page-banner';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-services-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageBanner, Reveal, Contact, RouterLink],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
})
export class ServicesPage {
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);

  readonly copy = {
    heading: { ar: 'الخدمات', en: 'Services' },
    eyebrow: { ar: 'خدماتنا', en: 'Our services' },
    title: {
      ar: 'تعلم الكتروني و تحول رقمي و استشارات ادارية',
      en: 'E-learning, digital transformation and management consulting',
    },
    lead: {
      ar: 'نقدم مجموعة شاملة من الخدمات من الحلول الرقمية المخصصة والاستشارات الاستراتيجية إلى منصات التعليم الإلكتروني الحديثة.',
      en: 'We offer a comprehensive range of services, from custom digital solutions and strategic consulting to modern e-learning platforms.',
    },
    read: { ar: 'اقرأ المزيد', en: 'Read more' },
    tabs: { ar: 'تصنيفات الخدمات', en: 'Service categories' },
  };

  /** the live page shows the three categories only — there is no "all" tab here */
  readonly filters: { key: ServiceCard['category']; label: Text }[] = [
    { key: 'elearning', label: { ar: 'التعليم الالكتروني', en: 'E-learning' } },
    { key: 'digital', label: { ar: 'التحول الرقمي', en: 'Digital transformation' } },
    { key: 'management', label: { ar: 'الاستشارات الإدارية', en: 'Management consulting' } },
  ];

  readonly steps = {
    eyebrow: { ar: 'خطوات العمل', en: 'Work steps' },
    title: { ar: 'خطوات العمل لشركتنا التقنية', en: "Our technical company's work steps" },
    lead: {
      ar: 'نحن فريق متخصص يساعدة المنظمات على التطور من خلال التكنولوجيا.',
      en: 'We are a dedicated team that helps organizations evolve through technology.',
    },
    imageAlt: {
      ar: 'فريق لين بيزنس سوليشنز أثناء العمل',
      en: 'The Lean Business Solutions team at work',
    },
    /**
     * Five cards numbered 01–05. Cards 4 and 5 repeat cards 1 and 2 word for word —
     * that is what the live page publishes, so it is reproduced here.
     */
    items: [
      {
        title: { ar: 'البحث والاستراتيجية', en: 'Research and strategy' },
        text: {
          ar: 'إجراء بحث شامل عن السوق لفهم سلوك الجمهور المستهدف.',
          en: 'Conduct comprehensive market research to understand target audience behavior.',
        },
      },
      {
        title: { ar: 'توليد الأفكار الإبداعية', en: 'Generating creative ideas' },
        text: {
          ar: 'بمجرد وضع الاستراتيجية، يتعاون الفريق الإبداعي لتطويرها.',
          en: 'Once the strategy is in place, the creative team collaborates to develop it.',
        },
      },
      {
        title: { ar: 'التصميم والتطوير', en: 'Design and development' },
        text: {
          ar: 'تشمل هذه العملية تحويل المفهوم الإبداعي إلى أصول ملموسة.',
          en: 'This process involves transforming the creative concept into tangible assets.',
        },
      },
      {
        title: { ar: 'البحث والاستراتيجية', en: 'Research and strategy' },
        text: {
          ar: 'إجراء بحث شامل عن السوق لفهم سلوك الجمهور المستهدف.',
          en: 'Conduct comprehensive market research to understand target audience behavior.',
        },
      },
      {
        title: { ar: 'توليد الأفكار الإبداعية', en: 'Generating creative ideas' },
        text: {
          ar: 'بمجرد وضع الاستراتيجية، يتعاون الفريق الإبداعي لتطويرها.',
          en: 'Once the strategy is in place, the creative team collaborates to develop it.',
        },
      },
    ],
  };

  /** 1 -> "01"; the live page numbers the cards rather than storing the number */
  stepNo(index: number): string {
    return String(index + 1).padStart(2, '0');
  }

  readonly services: ServiceCard[] = SERVICES;
  readonly activeFilter = signal<ServiceCard['category']>('elearning');

  readonly filtered = computed(() =>
    this.services.filter((s) => s.category === this.activeFilter()),
  );

  setFilter(key: ServiceCard['category']): void {
    this.activeFilter.set(key);
  }
}
