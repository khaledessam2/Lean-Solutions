import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contact } from '../../components/contact/contact';
import { I18n, Text } from '../../core/i18n';
import { useSeo } from '../../core/seo';
import { CheckIcon } from '../../shared/check-icon/check-icon';
import { Pillars } from '../../shared/pillars/pillars';
import { Reveal } from '../../shared/reveal';

/** a heading + body pair, used for the two service write-ups in the intro */
interface Block {
  title: Text;
  text: Text;
}

/**
 * The About page — every string is the live site's own copy, taken from
 * leansolutions.com.sa/من-نحن/ and /en/about-us/.
 */
@Component({
  selector: 'app-about-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal, Pillars, CheckIcon, Contact, RouterLink],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);

  readonly banner = {
    title: { ar: 'من نحن', en: 'About Us' },
    home: { ar: 'الرئيسية', en: 'Home' },
  };

  constructor() {
    useSeo(() => ({
      path: '/about',
      title: this.banner.title,
      description: {
        ar: 'تعرف على لين بيزنس سوليشنز: رؤيتنا ورسالتنا وقيمنا، وكيف ندعم المؤسسات في المملكة بحلول التعليم الإلكتروني والتحول الرقمي والاستشارات الإدارية.',
        en: 'Meet Lean Business Solutions: our vision, mission and values, and how we support organisations across Saudi Arabia with e-learning, digital transformation and management consulting.',
      },
      image: 'images/why-us.png',
    }));
  }

  readonly intro = {
    eyebrow: { ar: 'من نحن', en: 'Who are we?' },
    title: { ar: 'في لين بيزنس سوليشنز', en: 'At Lean Business Solutions,' },
    paragraphs: [
      {
        ar: 'نحن نؤمن أن التعليم والتدريب هما حجر الأساس لبناء قدرات بشرية متميزة وقادرة على قيادة المستقبل. ومن هذا المنطلق، طورنا منصة رقمية متكاملة لإدارة التعليم والتدريب الإلكتروني، صُممت لتكون شريكًا استراتيجيًا للمؤسسات الحكومية والخاصة في تطوير كوادرها وتنمية رأس مالها البشري.',
        en: 'we believe education and training are the foundation for building human capabilities that lead the future. That’s why we developed an integrated digital platform for e-learning and training, serving as a strategic partner for government and private institutions. We also drive digital transformation and offer management consulting to help organizations enhance performance, embrace innovation, and achieve sustainable growth.',
      },
      {
        ar: 'منصتنا ليست مجرد أداة تعليمية، بل نظام متكامل لإدارة العملية التدريبية من البداية وحتى تحقيق الأثر. فهي تدعم كافة أنماط التدريب:',
        en: 'Our platform is not just an educational tool, but rather an integrated system for managing the training process from inception to impact. It supports all training styles:',
      },
    ],
    modes: [
      {
        ar: 'التدريب الذاتي (Self-paced): يتيح للمتعلم مرونة الوصول إلى المعرفة في أي وقت ومن أي مكان.',
        en: 'Self-paced: allows the learner the flexibility to access knowledge at any time and from anywhere.',
      },
      {
        ar: 'التدريب التفاعلي المباشر (Live Virtual): يجمع بين التقنية والتفاعل الإنساني في بيئة افتراضية متكاملة.',
        en: 'Virtual Training: Combines technology and human interaction in an integrated virtual environment.',
      },
      {
        ar: 'التدريب الحضوري (In-person): معزز بالأدوات الرقمية لإدارة الجلسات ومتابعة نتائجها.',
        en: 'In-person Training: enhanced with digital tools to manage sessions and monitor their results.',
      },
    ],
  };

  readonly blocks: Block[] = [
    {
      title: { ar: 'التحول الرقمي', en: 'Digital Transformation' },
      text: {
        ar: 'حوّل مؤسستك إلى بيئة عمل ذكية ومرنة مع حلولنا الرقمية المتكاملة. في Lean Business Solutions، نمكّن عملاءنا من أتمتة العمليات، وتحليل البيانات بذكاء، وتقديم تجربة رقمية متكاملة تعزز الكفاءة والإنتاجية، وتدعم قرارات مبنية على رؤية واضحة.',
        en: 'Transform your organization into a smart and agile workplace with our integrated digital solutions. At Lean Business Solutions, we empower our clients to automate processes, leverage intelligent data analytics, and deliver a seamless digital experience that enhances efficiency, boosts productivity, and supports well-informed decision-making.',
      },
    },
    {
      title: { ar: 'الاستشارات الإدارية', en: 'Management Consulting' },
      text: {
        ar: 'نساعدك على بناء مؤسستك بخطوات مدروسة نحو النمو المستدام. من تطوير الاستراتيجيات، وإعادة هيكلة العمليات، إلى إدارة التغيير المؤسسي، نعمل معك لتصميم حلول عملية تحقق نتائج ملموسة وتزيد من تنافسيتك في السوق.',
        en: 'We help you build your organization with well-structured steps toward sustainable growth. From strategy development and process re-engineering to organizational change management, we work with you to design practical solutions that deliver tangible results and strengthen your competitiveness in the market.',
      },
    },
  ];

  readonly why = {
    eyebrow: { ar: 'لماذا تختارنا', en: 'Why choose us?' },
    title: {
      ar: 'لأننا في لين بيزنس سوليشنز لا نكتفي بتقديم خدمات… بل نصنع قيمة حقيقية:',
      en: "Because at Lean Business Solutions, we don't just provide services... we create real value:",
    },
    imageAlt: {
      ar: 'متدربون يستخدمون منصة لين بيزنس سوليشنز',
      en: 'Trainees using the Lean Business Solutions platform',
    },
    points: [
      {
        ar: 'منصة متكاملة تغطي جميع مراحل التعليم والتدريب الإلكتروني.',
        en: 'An integrated platform covering all stages of e-learning and training.',
      },
      {
        ar: 'حلول ذكية مرنة تناسب احتياجات المؤسسات الحكومية والخاصة.',
        en: 'Flexible smart solutions that suit the needs of government and private institutions.',
      },
      {
        ar: 'تقنيات حديثة تعتمد على الذكاء الاصطناعي والتحليلات الذكية لقياس الأداء.',
        en: 'Modern technologies based on artificial intelligence and smart analytics are used to measure performance.',
      },
      {
        ar: 'خبرة عميقة تجمع بين التقنية والاستشارات والتعليم.',
        en: 'Deep expertise combining technology, consulting, and education.',
      },
      {
        ar: 'تجربة مستخدم سلسة تعزز تفاعل المتدرب وتحقق نتائج ملموسة.',
        en: 'A seamless user experience that enhances trainee engagement and achieves tangible results.',
      },
      {
        ar: 'شراكة استراتيجية تركز على النمو المستدام وبناء قدرات بشرية مستقبلية.',
        en: 'A strategic partnership focused on sustainable growth and building future human capabilities.',
      },
    ],
  };
}
