import { Text } from './i18n';

/**
 * Every service and project on the site, plus the content of their detail pages.
 * Generated from leansolutions.com.sa — Arabic and English copy are the site's own.
 */

export interface ServiceCard {
  slug: string;
  icon: string;
  category: 'elearning' | 'digital' | 'management';
  title: Text;
  text: Text;
  /** false for the one card whose button links straight to the contact section */
  hasDetail: boolean;
}

export interface ProcessStep {
  no: string;
  title: Text;
  text: Text;
}

export interface ServiceDetail {
  title: Text;
  featuresTitle: Text;
  features: Text[];
  processTitle: Text;
  processLead: Text;
  steps: ProcessStep[];
}

export interface ProjectCard {
  slug: string;
  image: string;
  /** drives the filter tabs on the projects page — same three families as the services */
  category: 'elearning' | 'digital' | 'management';
  tag: Text;
  title: Text;
  text: Text;
}

export interface InfoPair {
  label: Text;
  value: Text;
}

export interface ProjectDetail {
  title: Text;
  image: string;
  aboutTitle: Text;
  aboutText: Text;
  features: Text[];
  infoTitle: Text;
  info: InfoPair[];
}

/** the cover art every service detail page shares on the live site */
export const SERVICE_COVER = 'images/service-cover.png';

export const SERVICES: ServiceCard[] = [
  {
    slug: 'lean-academy-lms',
    icon: 'icons/lms.gif',
    category: 'elearning',
    title: { ar: 'نظام لين أكاديمي (Lean Academy LMS)', en: 'Lean Academy LMS' },
    text: {
      ar: 'لين أكاديمي هو نظام متكامل لإدارة التعليم والتدريب الإلكتروني (LMS)، صُمم خصيصًا ليلبي احتياجات المؤسسات الحكومية، الشركات، والمراكز التدريبية في تطوير رأس المال البشري باستخدام أحدث التقنيات الرقمية. يوفر النظام تجربة تعليمية مرنة تدعم أنماط التدريب المختلفة',
      en: 'Lean Academy is an integrated e-learning and training management system (LMS), specifically designed to meet the needs of government institutions, companies, and training centers in developing human capital using the latest digital technologies. The system provides a flexible learning experience that supports various training styles.',
    },
    hasDetail: false,
  },
  {
    slug: 'ui-ux-design',
    icon: 'icons/uiux.gif',
    category: 'digital',
    title: { ar: 'تصميم واجهات وتجربة المستخدم (UI/UX)', en: 'UI/UX Design' },
    text: {
      ar: 'في عالم رقمي سريع، التجربة البصرية والتفاعلية هي ما يحدد نجاح أي منتج رقمي. في لين بيزنس سوليشنز نقدم خدمة تصميم واجهات وتجربة المستخدم (UI/UX) لضمان أن تطبيقاتك ومواقعك الإلكترونية ليست فقط جميلة الشكل، بل أيضًا سهلة الاستخدام، سلسة، وتوفر تجربة ممتعة ومؤثرة للمستخدمين.',
      en: 'In a fast-paced digital world, the visual and interactive experience determines the success of any digital product. At Lean Business Solutions, we offer UI/UX design services to ensure that your apps and websites are not only visually appealing, but also user-friendly, seamless, and provide an engaging and engaging experience for users.',
    },
    hasDetail: true,
  },
  {
    slug: 'database-services',
    icon: 'icons/database.gif',
    category: 'digital',
    title: { ar: 'خدمات قواعد البيانات', en: 'Database services' },
    text: {
      ar: 'في عالم الأعمال الرقمي، تُعد قواعد البيانات العمود الفقري للأنظمة والتطبيقات الحديثة. في لين بيزنس سوليشنز نقدم حلولًا متكاملة لإدارة وتصميم وصيانة قواعد البيانات، بما يضمن كفاءة عالية، أمانًا متقدمًا، وسرعة في الوصول إلى المعلومات. نساعد المؤسسات على بناء بنية بيانات مرنة تدعم أعمالها الحالية وقابلة للتوسع في المستقبل.',
      en: 'In the digital business world, databases are the backbone of modern systems and applications. At Lean Business Solutions, we offer integrated solutions for database management, design, and maintenance, ensuring high efficiency, advanced security, and rapid access to information. We help organizations build a flexible data architecture that supports their current business and is scalable for the future.',
    },
    hasDetail: true,
  },
  {
    slug: 'startup-services-mvp',
    icon: 'icons/mvp.gif',
    category: 'digital',
    title: { ar: 'خدمات الشركات الناشئة (MVP)', en: 'Startup Services (MVP)' },
    text: {
      ar: 'في بيئة ريادة الأعمال، الوقت والسوق لا ينتظران. لذلك في لين بيزنس سوليشنز نوفر خدمة تطوير النماذج الأولية للمنتجات (MVP – Minimum Viable Product) لمساعدة الشركات الناشئة على اختبار أفكارها بسرعة وبدقة، بأقل تكلفة وأعلى كفاءة. نمنحك منتجًا أوليًا يعمل بكامل الوظائف الأساسية، جاهزًا للتجربة مع العملاء والمستثمرين، مع قابلية التوسع مستقبلاً ليصبح منصة متكاملة.',
      en: "In the entrepreneurial environment, time and market wait for nothing. That's why at Lean Business Solutions, we offer a Minimum Viable Product (MVP) development service to help startups test their ideas quickly and accurately, at the lowest cost and with the highest efficiency. We provide a fully functional prototype, ready to be tested with customers and investors, with the potential to expand into a full-fledged platform in the future.",
    },
    hasDetail: true,
  },
  {
    slug: 'comprehensive-ai-services',
    icon: 'icons/ai.gif',
    category: 'digital',
    title: { ar: 'خدمات الذكاء الاصطناعي الشاملة', en: 'Comprehensive AI services' },
    text: {
      ar: 'في لين بيزنس سوليشنز نوفّر مجموعة متكاملة من خدمات وحلول الذكاء الاصطناعي التي تغطي جميع الاحتياجات الرقمية للمؤسسات، بدءًا من التعلم الآلي وصولًا إلى معالجة اللغة الطبيعية ورؤية الحاسوب، وذلك بهدف دعم الابتكار، رفع الكفاءة التشغيلية، وتحويل البيانات إلى قيمة حقيقية تدعم قراراتك الاستراتيجية.',
      en: "At Lean Business Solutions, we offer a comprehensive suite of AI services and solutions that cover all of an organization's digital needs, from machine learning to natural language processing and computer vision. This is designed to support innovation, increase operational efficiency, and transform data into real value that supports your strategic decisions.",
    },
    hasDetail: true,
  },
  {
    slug: 'chatbot-development',
    icon: 'icons/chatbot.gif',
    category: 'digital',
    title: { ar: 'تطوير روبوتات الدردشة', en: 'Chatbot development' },
    text: {
      ar: 'في لين بيزنس سوليشنز نصمم ونطوّر روبوتات دردشة ذكية تعتمد على تقنيات الذكاء الاصطناعي ومعالجة اللغة الطبيعية (NLP) لتقديم تجربة تواصل سلسة وفعّالة مع العملاء والموظفين. نساعد المؤسسات على تعزيز خدمة العملاء، أتمتة التفاعلات الروتينية، وتوفير دعم فوري على مدار الساعة.',
      en: 'At Lean Business Solutions, we design and develop intelligent chatbots powered by artificial intelligence and natural language processing (NLP) to deliver a seamless and effective communication experience with customers and employees. We help organizations enhance customer service, automate routine interactions, and provide immediate, 24/7 support.',
    },
    hasDetail: true,
  },
  {
    slug: 'data-analysis',
    icon: 'icons/data-analysis.gif',
    category: 'digital',
    title: { ar: 'تحليل البيانات', en: 'Data analysis' },
    text: {
      ar: 'في عالم يعتمد على المعلومات، تُعتبر البيانات الوقود الذي يدفع المؤسسات نحو قرارات أكثر ذكاءً ونمواً مستداماً. في لين بيزنس سوليشنز نقدّم خدمة تحليل البيانات كأداة استراتيجية لتحويل الأرقام الضخمة إلى رؤى عملية قابلة للتنفيذ، تساعد المؤسسات على تحسين الأداء، فهم العملاء، والتنبؤ بالفرص المستقبلية.',
      en: 'In an information-driven world, data is the fuel that drives organizations toward smarter decisions and sustainable growth. At Lean Business Solutions, we offer data analytics as a strategic tool for transforming big data into actionable insights, helping organizations improve performance, understand customers, and predict future opportunities.',
    },
    hasDetail: true,
  },
  {
    slug: 'cybersecurity-services',
    icon: 'icons/cybersecurity.gif',
    category: 'digital',
    title: { ar: 'خدمات الأمن السيبراني', en: 'Cybersecurity Services' },
    text: {
      ar: 'في لين بيزنس سوليشنز ندرك أن الأمن الرقمي أصبح الركيزة الأساسية لاستمرارية الأعمال في عصر التحول الرقمي. لذلك نوفر حلول أمن سيبراني شاملة تحمي أنظمة المؤسسات، بياناتها، وبنيتها التحتية من التهديدات والهجمات الإلكترونية. نعتمد على أحدث التقنيات والمعايير العالمية لتأمين بيئة عملك الرقمية وضمان استمرارية أعمالك بثقة وأمان.',
      en: "At Lean Business Solutions, we understand that digital security has become the cornerstone of business continuity in the era of digital transformation. That's why we provide comprehensive cybersecurity solutions that protect organizations' systems, data, and infrastructure from threats and cyberattacks. We rely on the latest technologies and global standards to secure your digital environment and ensure your business continuity with confidence and security.",
    },
    hasDetail: true,
  },
  {
    slug: 'web-application-development',
    icon: 'icons/web-apps.gif',
    category: 'digital',
    title: { ar: 'تطوير تطبيقات الويب', en: 'Web application development' },
    text: {
      ar: 'تُعتبر تطبيقات الويب ركيزة أساسية لأي مؤسسة تسعى للتحول الرقمي وتعزيز كفاءتها التشغيلية. في لين بيزنس سوليشنز نقدم خدمة تطوير تطبيقات ويب متكاملة تجمع بين الوظائف المتقدمة، الأداء العالي، وتجربة المستخدم المتميزة، مع قابلية التوسع والتكامل مع الأنظمة المختلفة.',
      en: 'Web applications are a fundamental pillar for any organization seeking digital transformation and enhancing operational efficiency. At Lean Business Solutions, we offer integrated web application development services that combine advanced functionality, high performance, and a superior user experience, along with scalability and integration with various systems.',
    },
    hasDetail: true,
  },
  {
    slug: 'mobile-application-development',
    icon: 'icons/mobile-apps.gif',
    category: 'digital',
    title: { ar: 'تطوير تطبيقات الجوال', en: 'Mobile application development' },
    text: {
      ar: 'تُعَدّ تطبيقات الجوال اليوم إحدى الركائز الأساسية في التحول الرقمي، إذ أصبحت وسيلة مباشرة للتفاعل مع العملاء، وأداة فعّالة لتبسيط العمليات الداخلية وتحسين تجربة المستخدم. في لين بيزنس سوليشنز نقدم خدمة تطوير تطبيقات الجوال كجزء من منظومة متكاملة للابتكار الرقمي، حيث نصمم ونبني تطبيقات احترافية مخصصة تلبي احتياجات المؤسسات بمختلف أحجامها وقطاعاتها.',
      en: 'Today, mobile applications are a cornerstone of digital transformation. They have become a direct means of interacting with customers and an effective tool for streamlining internal processes and enhancing user experience. At Lean Business Solutions, we offer mobile application development services as part of an integrated digital innovation ecosystem. We design and build professional, custom applications that meet the needs of organizations of all sizes and sectors.',
    },
    hasDetail: true,
  },
  {
    slug: 'website-development',
    icon: 'icons/websites.gif',
    category: 'digital',
    title: { ar: 'تطوير المواقع الإلكترونية', en: 'Website development' },
    text: {
      ar: 'يُعتبر الموقع الإلكتروني الواجهة الرقمية الأولى لأي مؤسسة، وهو الانطباع الذي يكوّنه العملاء عن العلامة التجارية منذ اللحظة الأولى. في لين بيزنس سوليشنز نقدّم خدمة تطوير مواقع إلكترونية احترافية تجمع بين التصميم العصري، الأداء العالي، وتجربة المستخدم المتميزة، مع التركيز على بناء مواقع متجاوبة وآمنة تلبي أهداف المؤسسات وتدعم حضورها الرقمي.',
      en: "A website is the first digital interface for any organization, and it's the first impression customers form of a brand. At Lean Business Solutions, we offer professional website development services that combine modern design, high performance, and an outstanding user experience, with a focus on building responsive and secure websites that meet organizations' goals and support their digital presence.",
    },
    hasDetail: true,
  },
  {
    slug: 'organization-design',
    icon: 'icons/org-design.gif',
    category: 'management',
    title: { ar: 'تصميم المنظمة', en: 'Organization design' },
    text: {
      ar: 'في Lean Business Solution نؤمن أن نجاح أي مؤسسة يبدأ من بنيتها التنظيمية. لذلك نقدم استشارات متخصصة في تصميم المنظمة تركز على بناء هياكل مرنة وفعّالة تدعم الاستراتيجية وتواكب التغيرات في بيئة الأعمال.',
      en: 'At Lean Business Solutions, we believe that the success of any organization begins with its organizational structure. Therefore, we provide specialized organizational design consulting focused on building flexible and effective structures that support strategy and keep pace with changes in the business environment.',
    },
    hasDetail: true,
  },
  {
    slug: 'policies-and-management-systems',
    icon: 'icons/policies.gif',
    category: 'management',
    title: { ar: 'السياسات وأنظمة الإدارة', en: 'Policies and management systems' },
    text: {
      ar: 'في Lean Business Solution ندرك أن السياسات وأنظمة الإدارة هي العمود الفقري لأي مؤسسة ناجحة، فهي التي ترسم القواعد وتحدد المسؤوليات وتضمن الانضباط في جميع العمليات.',
      en: 'At Lean Business Solution, we understand that policies and management systems are the backbone of any successful organization, setting rules, defining responsibilities, and ensuring discipline across all operations.',
    },
    hasDetail: true,
  },
  {
    slug: 'governance-risk-and-compliance',
    icon: 'icons/governance.gif',
    category: 'management',
    title: { ar: 'الحوكمة والمخاطر والامتثال', en: 'Governance, Risk and Compliance' },
    text: {
      ar: 'في Lean Business Solution نساعد المؤسسات على بناء أطر حوكمة فعّالة تضمن الشفافية، وتقوية نظم الرقابة الداخلية، وإدارة المخاطر بشكل استباقي.',
      en: 'At Lean Business Solution, we help organizations build effective governance frameworks that ensure transparency, strengthen internal control systems, and proactively manage risks.',
    },
    hasDetail: true,
  },
  {
    slug: 'operational-excellence',
    icon: 'icons/operations.gif',
    category: 'management',
    title: { ar: 'التفوق التشغيلي', en: 'Operational excellence' },
    text: {
      ar: 'في Lean Business Solution نساعد المؤسسات على تحقيق التفوق التشغيلي من خلال تطوير استراتيجيات تشغيلية مرنة وفعّالة تضمن الجودة العالية، خفض التكاليف، وتسريع الإنجاز.',
      en: 'At Lean Business Solutions, we help organizations achieve operational excellence by developing flexible and effective operational strategies that ensure high quality, reduce costs, and accelerate completion.',
    },
    hasDetail: true,
  },
  {
    slug: 'business-process-management',
    icon: 'icons/business-process.gif',
    category: 'management',
    title: { ar: 'إدارة عمليات الأعمال', en: 'Business process management' },
    text: {
      ar: 'في Lean Business Solution نؤمن أن نجاح المؤسسات يبدأ من كفاءة عملياتها الداخلية. لذلك نقدم استشارات متخصصة في إدارة وتحسين عمليات الأعمال، بما يضمن تبسيط الإجراءات، تقليل الهدر، وزيادة الإنتاجية.',
      en: "At Lean Business Solutions, we believe that an organization's success begins with the efficiency of its internal operations. That's why we offer specialized consulting in managing and improving business processes, ensuring simplified procedures, reduced waste, and increased productivity.",
    },
    hasDetail: true,
  },
  {
    slug: 'strategy-management',
    icon: 'icons/strategy.gif',
    category: 'management',
    title: { ar: 'إدارة الإستراتيجية', en: 'Strategy management' },
    text: {
      ar: 'في Lean Business Solution نساعد المؤسسات على بناء وتطوير استراتيجيات فعّالة من خلال تقديم الاستشارات الإدارية المتخصصة، وتوظيف أفضل الممارسات العالمية في التخطيط والتوجيه الاستراتيجي.',
      en: 'At Lean Business Solutions, we help organizations build and develop effective strategies by providing specialized management consulting and employing global best practices in strategic planning and direction.',
    },
    hasDetail: true,
  },
  {
    slug: 'performance-management',
    icon: 'icons/performance.gif',
    category: 'management',
    title: { ar: 'إدارة الأداء', en: 'Performance management' },
    text: {
      ar: 'في Lean Business Solution نساعد المؤسسات على بناء أنظمة فعّالة لإدارة الأداء تضمن ترجمة الأهداف الاستراتيجية إلى نتائج قابلة للقياس، وتعزز ثقافة الإنجاز المستدام داخل بيئة العمل.',
      en: 'At Lean Business Solutions, we help organizations build effective performance management systems that ensure strategic objectives are translated into measurable results and foster a culture of sustainable achievement within the workplace.',
    },
    hasDetail: true,
  },
  {
    slug: 'portfolio-management',
    icon: 'icons/portfolio.gif',
    category: 'management',
    title: { ar: 'إدارة المحافظ', en: 'Portfolio management' },
    text: {
      ar: 'في Lean Business Solution ندرك أن نجاح أي مؤسسة يعتمد على قدرتها في اختيار وإدارة مزيج المشاريع والبرامج الذي يحقق أعلى قيمة استراتيجية.',
      en: 'At Lean Business Solutions we understand that the success of any organization depends on its ability to select and manage the mix of projects and programs that delivers the highest strategic value.',
    },
    hasDetail: true,
  },
  {
    slug: 'program-management',
    icon: 'icons/database.gif',
    category: 'management',
    title: { ar: 'إدارة البرامج', en: 'Program management' },
    text: {
      ar: 'في Lean Business Solution نساعد المؤسسات على الانتقال من إدارة المشاريع الفردية إلى إدارة البرامج المتكاملة التي تضم مجموعة مترابطة من المشاريع تخدم هدفًا استراتيجيًا موحدًا.',
      en: 'At Lean Business Solution, we help organizations move from managing individual projects to managing integrated programs that comprise a set of interconnected projects serving a unified strategic goal.',
    },
    hasDetail: true,
  },
  {
    slug: 'change-management',
    icon: 'icons/change.gif',
    category: 'management',
    title: { ar: 'إدارة التغيير', en: 'Change management' },
    text: {
      ar: 'في Lean Business Solution ندرك أن التغيير ليس مجرد خيار، بل ضرورة استراتيجية لتمكين المؤسسات من النمو والتكيف مع بيئة أعمال متسارعة.',
      en: 'At Lean Business Solution, we understand that change is not just an option, but a strategic necessity to enable organizations to grow and adapt to a rapidly evolving business environment.',
    },
    hasDetail: true,
  },
  {
    slug: 'human-capital-development',
    icon: 'icons/human-capital.gif',
    category: 'management',
    title: { ar: 'تنمية رأس المال البشري', en: 'Human capital development' },
    text: {
      ar: 'في Lean Business Solution نؤمن أن الإنسان هو المحرك الحقيقي لكل نجاح مؤسسي. لذلك نقدم استشارات متخصصة في تنمية رأس المال البشري، تهدف إلى تطوير الكفاءات، تعزيز القدرات، وتمكين الفرق من أداء أدوارهم بكفاءة وفاعلية.',
      en: "At Lean Business Solutions, we believe that people are the true engine of every organizational success. That's why we offer specialized human capital development consulting, aiming to develop competencies, enhance capabilities, and enable teams to perform their roles efficiently and effectively.",
    },
    hasDetail: true,
  },
];

export const PROJECTS: ProjectCard[] = [
  {
    slug: 'e-learning-for-a-government-agency',
    image: 'images/WHISK_4.jpg',
    category: 'elearning',
    tag: { ar: 'تعليم الكتروني', en: 'E-learning' },
    title: { ar: 'التعليم الإلكتروني في جهة حكومية', en: 'E-learning for a government agency' },
    text: { ar: '', en: '' },
  },
  {
    slug: 'e-learning-in-a-government-agency',
    image: 'images/WH64341.jpg',
    category: 'elearning',
    tag: { ar: 'تعليم الكتروني', en: 'E-learning' },
    title: { ar: 'التعليم الإلكتروني لجهة حكومية', en: 'E-learning in a government agency' },
    text: { ar: 'مشروع التعليم الإلكتروني لجهة حكومية (الأمن العام) يهدف إلى بناء منصة تدريبية رقمية مبتكرة تدعم تطوير مهارات الأفراد في الجوانب المهنية وإجراءات السلامة، إضافة إلى التدريب الميداني الافتراضي باستخدام أحدث التقنيات. يوفر المشروع تجربة تعلم مرنة، متقدمة، وقابلة للقياس بما يرفع من كفاءة كوادر الأمن العام.', en: 'A project for a government agency (Public Security) aims to build an innovative digital training platform that supports the development of individual skills in professional aspects and safety procedures, in addition to virtual field training using the latest technologies. The project provides a flexible, advanced, and measurable learning experience that enhances the efficiency of Public Security personnel.' },
  },
  {
    slug: 'the-school-library-management-system',
    image: 'images/WH84131.jpg',
    category: 'digital',
    tag: { ar: 'تحول رقمي', en: 'Digital transformation' },
    title: { ar: 'نظام إدارة المكتبات المدرسية', en: 'The School Library Management System' },
    text: { ar: 'مشروع نظام إدارة المكتبات المدرسية هو حل تقني متكامل يهدف إلى رقمنة عمليات المكتبة، من الفهرسة إلى الاستعارة والجرد، مع ربط النظام بأنظمة الطلاب وأولياء الأمور لضمان تجربة تعليمية أكثر تنظيمًا وكفاءة.', en: 'The School Library Management System project is an integrated technology solution that aims to digitize library operations, from cataloging to borrowing and inventory, while linking the system to student and parent systems to ensure a more organized and efficient learning experience.' },
  },
  {
    slug: 'the-corporate-website-development',
    image: 'images/WHD5171.jpg',
    category: 'digital',
    tag: { ar: 'تحول رقمي', en: 'Digital transformation' },
    title: { ar: 'تطوير مواقع الشركات', en: 'The corporate website development' },
    text: { ar: 'مشروع تطوير مواقع الشركات يهدف إلى تعزيز الهوية الرقمية للشركات وزيادة حضورها على الإنترنت عبر مواقع احترافية تعكس قيم العلامة التجارية وتلبي احتياجات مختلف القطاعات.', en: "The corporate website development project aims to enhance companies' digital identity and increase their online presence through professional websites that reflect the brand's values and meet the needs of various sectors." },
  },
  {
    slug: 'masroufi-app',
    image: 'images/WH05BA1.jpg',
    category: 'digital',
    tag: { ar: 'تحول رقمي', en: 'Digital transformation' },
    title: { ar: 'مشروع تقنى – تطبيق مصروفي', en: 'Masroufi App' },
    text: { ar: 'تطبيق "مصروفي" هو مشروع تقني مبتكر يهدف إلى تمكين الآباء من إصدار بطاقات بنكية مسبقة الدفع لأبنائهم، مع إدارة المصروف اليومي بطريقة آمنة وغير نقدية عبر التطبيق.', en: 'The "Masroufi" app is an innovative technology project that aims to enable parents to issue prepaid bank cards for their children, while managing daily expenses in a secure, cashless manner through the app.' },
  },
  {
    slug: 'an-integrated-training-platform-for-a-government-agency',
    image: 'images/WH660B1.jpg',
    category: 'elearning',
    tag: { ar: 'تعليم الكتروني', en: 'E-learning' },
    title: { ar: 'منصة تدريبية متكاملة لجهة حكومية', en: 'An integrated training platform for a government agency' },
    text: { ar: 'مشروع المنصة التدريبية المتكاملة هو حل تعليمي إلكتروني مبتكر صُمم خصيصًا لجهة حكومية بهدف تمكين الأشخاص ذوي الإعاقة وأسرهم من الوصول إلى محتوى تدريبي شامل ومرن. يعتمد المشروع على توفير تجربة تعلم تفاعلية مدعومة بلغة الإشارة والترجمة النصية لضمان شمولية التعليم وسهولة الوصول.', en: 'The Integrated Training Platform project is an innovative e-learning solution specifically designed for a government agency to enable people with disabilities and their families to access comprehensive and flexible training content. The project relies on providing an interactive learning experience supported by sign language and text translation to ensure educational inclusion and accessibility.' },
  },
  {
    slug: 'the-e-wallet-system',
    image: 'images/WHB6BA1.jpg',
    category: 'digital',
    tag: { ar: 'تحول رقمي', en: 'Digital transformation' },
    title: { ar: 'نظام المحفظة الإلكترونية', en: 'The e-Wallet System' },
    text: { ar: 'مشروع نظام المحفظة الإلكترونية هو حل تقني مبتكر يهدف إلى أتمتة إدارة عمليات الكانتين المدرسي، من خلال تمكين الطلاب من الدفع الإلكتروني، وتوفير أدوات دقيقة للمدارس وأولياء الأمور لإدارة الطلبات والحسابات المالية بمرونة وأمان.', en: 'The e-Wallet System project is an innovative technical solution that aims to automate school canteen operations by enabling students to make electronic payments and providing schools and parents with precise tools to manage orders and financial accounts flexibly and securely.' },
  },
  {
    slug: 'automated-calling-system-for-schools',
    image: 'images/WHISK_2.jpg',
    category: 'digital',
    tag: { ar: 'تحول رقمي', en: 'Digital transformation' },
    title: { ar: 'نظام النداء الآلي للمدارس', en: 'Automated calling system for schools' },
    text: { ar: 'مشروع نظام النداء الآلي للمدارس هو حل ذكي يهدف إلى تحسين تجربة استقبال الطلاب عند وصول أولياء الأمور، عبر أتمتة عملية النداء باستخدام تقنيات الذكاء الاصطناعي لتحويل النصوص المكتوبة إلى صوت واضح ومفهوم.', en: "The Automated School Pager System project is a smart solution that aims to improve the student reception experience upon parents' arrival by automating the pager process using artificial intelligence technologies to convert written text into clear, understandable audio." },
  },
  {
    slug: 'appointment-booking-system-for-professional-exams-and-certifications',
    image: 'images/WH458A1.jpg',
    category: 'digital',
    tag: { ar: 'تحول رقمي', en: 'Digital transformation' },
    title: { ar: 'نظام حجز المواعيد للاختبارات والشهادات الاحترافية', en: 'Appointment booking system for professional exams and certifications' },
    text: { ar: 'مشروع نظام حجز المواعيد للاختبارات والشهادات الاحترافية هو حل تقني متكامل يهدف إلى تسهيل عملية الحجز وإدارة الامتحانات عبر نظام إلكتروني مرن يوفر تجربة سلسة وآمنة للمستخدمين.', en: 'The Professional Exam and Certification Appointment Booking System project is an integrated technical solution that aims to facilitate the exam booking and management process through a flexible electronic system that provides a seamless and secure experience for users.' },
  },
  {
    slug: 'bus-tracker-app',
    image: 'images/GEMINI2.jpg',
    category: 'digital',
    tag: { ar: 'تحول رقمي', en: 'Digital transformation' },
    title: { ar: 'تطبيق تعقب الحافلات', en: 'Bus Tracker App' },
    text: { ar: 'مشروع Bus Tracker App هو تطبيق مخصص للهواتف الذكية (Android وiOS) يهدف إلى تمكين المدارس وأولياء الأمور من تتبع حركة الحافلات المدرسية ذهابًا وإيابًا، بما يعزز السلامة، يقلل المخاطر، ويوفر التكاليف التشغيلية.', en: 'The Bus Tracker App is a smartphone application ( Android and iOS ) that aims to enable schools and parents to track the movement of school buses back and forth, enhancing safety, reducing risks, and saving operational costs.' },
  },
  {
    slug: 'school-one-app',
    image: 'images/WHD8261.jpg',
    category: 'digital',
    tag: { ar: 'تحول رقمي', en: 'Digital transformation' },
    title: { ar: 'تطبيق المدرسة الأولى', en: 'School One App' },
    text: { ar: 'مشروع School One App هو تطبيق مخصص للهواتف الذكية (Android وiOS) يهدف إلى تسهيل تواصل المدرسة مع أولياء الأمور باستخدام أحدث التقنيات، مما يساهم في توفير الوقت والتكاليف التشغيلية للمدرسة وتحسين تجربة التعليم.', en: 'The School One App project is a smartphone application ( Android and iOS ) that aims to facilitate school communication with parents using the latest technologies, contributing to saving time and operational costs for the school and improving the educational experience.' },
  },
  {
    slug: 'schools-erp-system',
    image: 'images/WHB3C11.jpg',
    category: 'digital',
    tag: { ar: 'تحول رقمي', en: 'Digital transformation' },
    title: { ar: 'نظام تخطيط موارد المؤسسات المدرسية', en: 'Schools ERP System' },
    text: { ar: 'Schools ERP System هو مشروع تقني متكامل يهدف إلى أتمتة كافة العمليات الإدارية والأكاديمية داخل المدارس، لتسهيل الإدارة وتعزيز التواصل بين جميع الأطراف عبر منصة واحدة مرنة ومتكاملة.', en: "Schools' ERP System is an integrated technology project that aims to automate all administrative and academic processes within schools, facilitating management and enhancing communication between all parties through a single, flexible, and integrated platform." },
  },
];
