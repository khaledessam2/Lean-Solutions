import { ContentRows } from './content-rows';

/**
 * A small but complete set of content rows, for tests.
 *
 * It is deliberately not the live copy: the specs check that the pages render
 * and that every binding resolves, not what the marketing text says. Keeping it
 * small means a spec can assert exact counts — three training modes, two
 * services — without those numbers going stale every time someone edits the
 * site in the admin.
 */

const text = (value: string) => ({ ar: `${value} بالعربي`, en: value });

export const CONTENT_FIXTURE: ContentRows = {
  settings: {
    origin: 'https://example.test',
    name: text('Lean'),
    legal_name: 'Lean Business Solutions',
    logo: 'logo/logo-full.png',
    og_image: 'images/hero-bg.jpg',
    service_cover: 'images/service-cover.png',
    phone: '+966500000000',
    email: 'info@example.test',
    city: text('Riyadh'),
    country: text('Saudi Arabia'),
    linkedin: 'https://www.linkedin.com/company/example/',
    map_embed: 'https://www.google.com/maps?q=Riyadh&output=embed',
  },

  blocks: [
    { key: 'common', data: { home: text('Home') } },
    {
      key: 'header',
      data: {
        links: [
          { label: text('Home'), path: '/' },
          { label: text('About'), path: '/about' },
        ],
        cta: text('Talk to us'),
        nav: text('Main navigation'),
        menu: text('Open menu'),
      },
    },
    {
      key: 'hero',
      data: {
        consult: text('Consult'),
        explore: text('Explore'),
        prev: text('Previous'),
        next: text('Next'),
        slides: text('Slides'),
        items: [
          {
            title: text('Slide one'),
            paragraphs: [text('First paragraph')],
            art: { src: 'lottie/ai-core.json', ratio: 1, label: text('Art') },
          },
        ],
      },
    },
    {
      key: 'about',
      data: {
        eyebrow: text('About us'),
        title: text('Integrated solutions'),
        lead: text('What we do'),
        cta: text('Learn more'),
      },
    },
    {
      key: 'pillars',
      data: {
        imageAlt: text('The team'),
        cards: [
          { key: 'vision', icon: 'icons/telescope.gif', title: text('Vision'), text: text('Ours') },
        ],
      },
    },
    {
      key: 'services',
      data: {
        eyebrow: text('Our services'),
        title: text('What we offer'),
        more: text('View more'),
        read: text('Read more'),
        tabs: text('Categories'),
        prev: text('Previous'),
        next: text('Next'),
        filters: [
          { key: 'all', label: text('All') },
          { key: 'elearning', label: text('E-learning') },
        ],
      },
    },
    {
      key: 'projects',
      data: {
        eyebrow: text('Our projects'),
        title: text('Success stories'),
        lead: text('Built with our clients'),
        more: text('View more'),
        view: text('View project'),
        prev: text('Previous'),
        next: text('Next'),
      },
    },
    {
      key: 'clients',
      data: {
        eyebrow: text('Our clients'),
        title: text('Proud of these'),
        lead: text('Partnerships'),
        logos: [{ name: text('A ministry'), logo: 'partners/image-63.png' }],
      },
    },
    {
      key: 'contact',
      data: {
        eyebrow: text('Contact us'),
        title: text('We are here'),
        lead: text('Get in touch'),
        name: text('Name'),
        namePh: text('Your name'),
        nameErr: text('Enter a name'),
        phone: text('Phone'),
        phonePh: text('Your phone'),
        phoneErr: text('Enter a phone'),
        email: text('Email'),
        emailPh: text('Your email'),
        emailErr: text('Enter an email'),
        company: text('Company'),
        companyPh: text('Your company'),
        companyErr: text('Enter a company'),
        message: text('Message'),
        messagePh: text('Tell us more'),
        submit: text('Send'),
        ok: text('Received'),
        reach: text('Reach us'),
        info: [
          { key: 'phone', label: text('Hotline'), value: text('+966500000000'), href: 'tel:+966500000000' },
          { key: 'pin', label: text('Office'), value: text('Riyadh'), href: null },
        ],
      },
    },
    {
      key: 'footer',
      data: {
        about: text('One integrated platform'),
        rights: text('All rights reserved'),
        privacy: text('Privacy policy'),
        terms: text('Terms'),
        columns: [{ title: text('Quick links'), links: [{ label: text('Home') }] }],
      },
    },
    {
      key: 'home',
      data: { seo: { title: text('Lean'), description: text('E-learning and more') } },
    },

    {
      key: 'page.about',
      data: {
        seo: { title: text('About Us'), description: text('Who we are') },
        heading: { ar: 'من نحن', en: 'About Us' },
        intro: {
          eyebrow: text('Who are we?'),
          title: text('At Lean'),
          paragraphs: [text('We believe in training')],
          // the spec counts these
          modes: [text('Self-paced'), text('Live virtual'), text('In person')],
        },
        blocks: [{ title: text('Digital transformation'), text: text('We automate') }],
        why: {
          eyebrow: text('Why choose us'),
          title: text('We create value'),
          imageAlt: text('Trainees'),
          // and these
          points: [text('One platform'), text('Flexible'), text('Modern')],
        },
      },
    },
    {
      key: 'page.services',
      data: {
        seo: { title: text('Services'), description: text('Our catalogue') },
        heading: text('Services'),
        eyebrow: text('Our services'),
        title: text('What we offer'),
        lead: text('A comprehensive range'),
        read: text('Read more'),
        tabs: text('Categories'),
        filters: [{ key: 'elearning', label: text('E-learning') }],
        steps: {
          eyebrow: text('Work steps'),
          title: text('How we work'),
          lead: text('A dedicated team'),
          imageAlt: text('The team at work'),
          items: [{ title: text('Research'), text: text('We study the market') }],
        },
      },
    },
    {
      key: 'page.projects',
      data: {
        seo: { title: text('Projects'), description: text('Our work') },
        heading: text('Projects'),
        eyebrow: text('Our projects'),
        title: text('Technology and consulting'),
        lead: text('A comprehensive range'),
        view: text('View project'),
        tabs: text('Categories'),
        emptyTitle: text('Nothing here yet'),
        emptyText: text('Browse the rest'),
        emptyAction: text('View all'),
        filters: [
          { key: 'all', label: text('All') },
          { key: 'elearning', label: text('E-learning') },
        ],
      },
    },
    {
      key: 'page.contact',
      data: {
        seo: { title: text('Contact Us'), description: text('Get in touch') },
        heading: text('Contact Us'),
        mapTitle: text('Office on the map'),
      },
    },
    {
      key: 'page.detail',
      data: {
        servicesCrumb: text('Services'),
        projectsCrumb: text('Projects'),
        notFoundTitle: text('Page not found'),
        notFoundText: text('Browse the rest'),
      },
    },
  ],

  services: [
    {
      slug: 'lms',
      icon: 'icons/lms.gif',
      category: 'elearning',
      title: text('Lean Academy LMS'),
      body: text('An integrated learning platform'),
      has_detail: true,
      external_url: null,
      detail: {
        title: text('Lean Academy LMS'),
        featuresTitle: text('Why Lean Academy?'),
        features: [text('Smart'), text('Flexible')],
        processTitle: text('Key capabilities'),
        processLead: { ar: '', en: '' },
        steps: [{ no: '01', title: text('Course management'), text: text('Create and manage') }],
      },
    },
    {
      slug: 'ui-ux',
      icon: 'icons/uiux.gif',
      category: 'digital',
      title: text('UI/UX Design'),
      body: text('Interfaces people enjoy'),
      has_detail: false,
      external_url: null,
      detail: null,
    },
  ],

  projects: [
    {
      slug: 'school-erp',
      image: 'images/WHB3C11.jpg',
      category: 'digital',
      tag: text('Digital transformation'),
      title: text('Schools ERP'),
      body: text('Automating school operations'),
      detail: {
        title: text('Schools ERP'),
        image: 'images/WHB3C11.jpg',
        aboutTitle: text('About the project'),
        aboutText: text('An integrated system'),
        features: [text('Admissions')],
        infoTitle: text('Details'),
        info: [{ label: text('Client'), value: text('A school group') }],
      },
    },
    {
      slug: 'bus-tracker',
      image: 'images/GEMINI2.jpg',
      category: 'elearning',
      tag: text('E-learning'),
      title: text('Bus Tracker'),
      body: text('Tracking school buses'),
      detail: null,
    },
  ],
};
