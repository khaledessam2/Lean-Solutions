import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contact } from '../../components/contact/contact';
import { PROJECTS, ProjectCard } from '../../core/catalog';
import { I18n, Text } from '../../core/i18n';
import { SITE, clamp, useSeo } from '../../core/seo';
import { PageBanner } from '../../shared/page-banner/page-banner';
import { Reveal } from '../../shared/reveal';

type ProjectFilter = ProjectCard['category'] | 'all';

@Component({
  selector: 'app-projects-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageBanner, Reveal, Contact, RouterLink],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {
  private readonly i18n = inject(I18n);

  readonly t = (value: Text): string => this.i18n.t(value);

  constructor() {
    useSeo(() => {
      const lang = this.i18n.lang();

      return {
        path: '/projects',
        title: this.copy.heading,
        // deliberately not `copy.lead`: the services page carries the same paragraph
        description: {
          ar: 'أعمال لين بيزنس سوليشنز مع جهات حكومية وشركات: منصات تدريب رقمية، أنظمة إدارة مدرسية، تطبيقات جوال ومحافظ إلكترونية وأنظمة حجز وتتبع.',
          en: 'Work delivered by Lean Business Solutions for government entities and companies: digital training platforms, school management systems, mobile apps, e-wallets, booking and tracking systems.',
        },
        image: this.projects[0]?.image,
        jsonLd: [
          {
            '@type': 'ItemList',
            name: `${this.copy.title[lang]} — ${SITE.name[lang]}`,
            numberOfItems: this.projects.length,
            itemListElement: this.projects.map((project, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'CreativeWork',
                name: project.title[lang],
                description: clamp(project.text[lang]),
                image: `${SITE.origin}/${project.image}`,
                url: `${SITE.origin}/projects/${project.slug}`,
                creator: { '@id': `${SITE.origin}/#organization` },
              },
            })),
          },
        ],
      };
    });
  }

  readonly copy = {
    heading: { ar: 'المشاريع', en: 'Projects' },
    eyebrow: { ar: 'مشاريعنا', en: 'Our projects' },
    title: {
      ar: 'تكنولوجيا و استشارات و تعليم إلكتروني',
      en: 'Technology, consulting and e-learning',
    },
    lead: {
      ar: 'نقدم مجموعة شاملة من الخدمات من الحلول الرقمية المخصصة والاستشارات الاستراتيجية إلى منصات التعليم الإلكتروني الحديثة.',
      en: 'We offer a comprehensive range of services, from custom digital solutions and strategic consulting to modern e-learning platforms.',
    },
    view: { ar: 'عرض المشروع', en: 'View project' },
    tabs: { ar: 'تصنيفات المشاريع', en: 'Project categories' },
    emptyTitle: {
      ar: 'لا توجد مشاريع في هذا التصنيف حالياً',
      en: 'No projects in this category yet',
    },
    emptyText: {
      ar: 'نعمل على إضافة أعمالنا في هذا المجال قريباً، ويمكنك تصفح باقي المشاريع في الوقت الحالي.',
      en: 'We are adding our work in this area soon — in the meantime, browse the rest of our projects.',
    },
    emptyAction: { ar: 'عرض كل المشاريع', en: 'View all projects' },
  };

  /** unlike the services page, the projects listing opens on "all" */
  readonly filters: { key: ProjectFilter; label: Text }[] = [
    { key: 'all', label: { ar: 'الكل', en: 'All' } },
    { key: 'elearning', label: { ar: 'التعليم الالكتروني', en: 'E-learning' } },
    { key: 'digital', label: { ar: 'التحول الرقمي', en: 'Digital transformation' } },
    { key: 'management', label: { ar: 'الاستشارات الإدارية', en: 'Management consulting' } },
  ];

  readonly projects: ProjectCard[] = PROJECTS;
  readonly activeFilter = signal<ProjectFilter>('all');

  readonly filtered = computed(() => {
    const key = this.activeFilter();
    return key === 'all' ? this.projects : this.projects.filter((p) => p.category === key);
  });

  setFilter(key: ProjectFilter): void {
    this.activeFilter.set(key);
  }
}
