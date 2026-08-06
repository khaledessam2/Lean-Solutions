import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { I18n, Text } from '../../core/i18n';
import { Lottie } from '../../shared/lottie/lottie';
import { RouterLink } from '@angular/router';

/** the animation shown beside a slide — the same files the live site plays */
interface Art {
  src: string;
  /** intrinsic width / height of the animation */
  ratio: number;
  label: Text;
}

interface Slide {
  title: Text;
  paragraphs: Text[];
  art: Art;
}

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Lottie, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly i18n = inject(I18n);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private timer: ReturnType<typeof setInterval> | undefined;

  readonly t = (value: Text): string => this.i18n.t(value);
  readonly isArabic = this.i18n.isArabic;

  readonly labels = {
    consult: { ar: 'طلب استشارة', en: 'Request a Consultation' },
    explore: { ar: 'استكشف حلولنا', en: 'Explore our solutions' },
    prev: { ar: 'الشريحة السابقة', en: 'Previous slide' },
    next: { ar: 'الشريحة التالية', en: 'Next slide' },
    slides: { ar: 'شرائح العرض', en: 'Hero slides' },
  };

  readonly slides: Slide[] = [
    {
      title: {
        ar: 'حلول متكاملة للتعلم الالكتروني والتحول الرقمي والاستشارات الادارية',
        en: 'Integrated solutions for e-learning, digital transformation, and management consulting',
      },
      paragraphs: [
        {
          ar: 'في لين بيزنس سوليشنز نقدّم منظومة شاملة للتعليم والتدريب الإلكتروني (LMS)، تركّز على تقديم تجربة تعليمية متكاملة عبر منصات ذكية تدعم جميع أنماط التعلّم: التعلّم الذاتي، التفاعلي المباشر، والحضوري.',
          en: 'At Lean Business Solutions, we provide a comprehensive Learning Management System (LMS) designed to deliver a holistic educational experience through smart platforms that support all learning modes: self-paced, interactive live, and in-person.',
        },
        {
          ar: 'ما يميّز حلولنا هو اعتمادنا على تقنيات الذكاء الاصطناعي والتحليلات الذكية، حيث نقوم بتخصيص مسارات التعلّم، وتقديم توصيات تفاعلية، وتتبع الأداء عبر تقارير متقدمة تدعم صانعي القرار في المؤسسات. كما نقدّم تكاملًا مرنًا مع الأنظمة الحكومية والمنصات المؤسسية',
          en: 'What sets our solutions apart is the integration of artificial intelligence and advanced analytics. We personalize learning paths, provide interactive recommendations, and track performance through advanced reporting tools that empower decision-makers within organizations. In addition, we offer flexible integration with government systems and enterprise platforms',
        },
      ],
      art: {
        src: 'lottie/online-learning-platform.json',
        ratio: 1,
        label: { ar: 'رسم متحرك لمنصة التعلم الإلكتروني', en: 'Animated online learning platform' },
      },
    },
    {
      title: {
        ar: 'حلول بالذكاء الاصطناعي في التعليم الالكتروني والتحول الرقمي والاستشارات الالكترونية',
        en: 'AI solutions in e-learning, digital transformation, and e-consulting',
      },
      paragraphs: [
        {
          ar: 'نستفيد من الذكاء الاصطناعي عبر خدماتنا الرقمية من خلال تعزيز المنصات الذكية وأتمتة العمليات إلى تحسين اتخاذ القرار.',
          en: 'We leverage artificial intelligence through our digital services by enhancing smart platforms, automating processes, and improving decision-making',
        },
      ],
      art: {
        src: 'lottie/ai-core.json',
        ratio: 1280 / 720,
        label: { ar: 'رسم متحرك لنواة ذكاء اصطناعي', en: 'Animated AI core' },
      },
    },
    {
      title: {
        ar: 'استشارات استراتيجية تدفع الأعمال إلى الأمام',
        en: 'Strategic consulting that drives businesses forward',
      },
      paragraphs: [
        {
          ar: 'نساعد المنظمات على التنقل في التعقيد والتغيير من خلال تقديم خدمات استشارية متخصصة تتماشى مع الاستراتيجية والتكنولوجيا لدفع النمو والقيمة على المدى الطويل.',
          en: 'We help organizations navigate complexity and change by providing specialized consulting services that align strategy and technology to drive long-term growth and value',
        },
      ],
      art: {
        src: 'lottie/consulting.json',
        ratio: 1,
        label: { ar: 'رسم متحرك للاستشارات الاستراتيجية', en: 'Animated strategic consulting' },
      },
    },
    {
      title: {
        ar: 'نحوّل أعمالك لمستقبل رقمي متكامل',
        en: 'We transform your business into a fully integrated digital future',
      },
      paragraphs: [
        {
          ar: 'عبر حلول الذكاء الاصطناعي، الأتمتة، وتطوير المنصات الذكية لرفع الكفاءة وتحقيق نمو أسرع',
          en: 'Through AI solutions, automation, and smart platform development to enhance efficiency and achieve faster growth',
        },
      ],
      art: {
        src: 'lottie/software-development.json',
        ratio: 1,
        label: { ar: 'رسم متحرك لتطوير المنصات الرقمية', en: 'Animated software development' },
      },
    }
  ];

  readonly active = signal(0);

  ngOnInit(): void {
    this.play();
    this.destroyRef.onDestroy(() => this.pause());
  }

  play(): void {
    if (!this.isBrowser) {
      return;
    }
    this.pause();
    this.timer = setInterval(() => this.next(), 7000);
  }

  pause(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  next(): void {
    this.active.update((i) => (i + 1) % this.slides.length);
  }

  prev(): void {
    this.active.update((i) => (i - 1 + this.slides.length) % this.slides.length);
  }

  goTo(index: number): void {
    this.active.set(index);
    this.play();
  }

  step(direction: 1 | -1): void {
    direction === 1 ? this.next() : this.prev();
    this.play();
  }
}
