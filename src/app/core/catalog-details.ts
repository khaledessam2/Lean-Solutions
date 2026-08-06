import { ProjectDetail, ServiceDetail } from './catalog';

/**
 * Detail-page content, kept out of `catalog.ts` so the ~90 kB of copy only
 * ships with the lazily loaded detail route instead of the initial bundle.
 */

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'ui-ux-design': {
    title: { ar: 'تصميم واجهات وتجربة المستخدم (UI/UX)', en: 'User Interface and Experience (UI/UX) Design' },
    featuresTitle: { ar: 'المميزات الرئيسية', en: 'Main features' },
    features: [
      { ar: 'تجربة استخدام سلسة وبسيطة.', en: 'Smooth and simple user experience.' },
      { ar: 'واجهات عصرية ومتجاوبة.', en: 'Modern and responsive interfaces.' },
    ],
    processTitle: { ar: 'عمليتنا', en: 'Our process' },
    processLead: { ar: 'نتبع خطوات فعالة و مدروسة', en: 'We follow effective and thoughtful steps.' },
    steps: [
      {
        no: '01',
        title: { ar: 'البحث والتحليل', en: 'Research and Analysis' },
        text: { ar: 'دراسة أهداف المشروع، الجمهور المستهدف، وسلوكيات المستخدمين.', en: 'Study of project objectives, target audience, and user behaviors.' },
      },
      {
        no: '02',
        title: { ar: 'رسم رحلة المستخدم (User Journey)', en: 'User Journey Mapping' },
        text: { ar: 'تحديد خطوات التفاعل وتدفق المهام داخل المنتج.', en: 'Defining the interaction steps and task flow within the product.' },
      },
      {
        no: '03',
        title: { ar: 'التصميم المبدئي (Wireframes & Prototypes)', en: 'Wireframes & Prototypes' },
        text: { ar: 'بناء هيكلية وتجربة أولية قابلة للاختبار قبل البدء بالتطوير.', en: 'Building a structure and an initial testable experience before starting development.' },
      },
      {
        no: '04',
        title: { ar: 'التصميم النهائي (UI Design)', en: 'Final design ( UI Design )' },
        text: { ar: 'إنشاء واجهات عصرية متجاوبة، متوافقة مع الهوية البصرية.', en: 'Creating modern, responsive interfaces that are consistent with the visual identity.' },
      },
    ],
  },
  'database-services': {
    title: { ar: 'خدمات قواعد البيانات', en: 'Database Services' },
    featuresTitle: { ar: 'المميزات الرئيسية', en: 'Main features' },
    features: [
      { ar: 'موثوقية واستمرارية تشغيلية.', en: 'Reliability and operational continuity.' },
      { ar: 'أمان وحماية متقدمة.', en: 'Advanced security and protection.' },
    ],
    processTitle: { ar: 'عمليتنا', en: 'Our process' },
    processLead: { ar: 'نتبع خطوات فعالة و مدروسة', en: 'We follow effective and thoughtful steps.' },
    steps: [
      {
        no: '01',
        title: { ar: 'التحليل والتصميم', en: 'Analysis and Design' },
        text: { ar: 'تحديد احتياجات العميل وتصميم هيكل قاعدة بيانات يلائم العمليات.', en: 'Identify customer needs and design a database structure that fits the operations .' },
      },
      {
        no: '02',
        title: { ar: 'التنفيذ والإعداد', en: 'Implementation and Setup' },
        text: { ar: 'تثبيت وإعداد أنظمة قواعد البيانات مثل Oracle، SQL Server، MySQL، PostgreSQL، MongoDB.', en: 'Install and configure database systems such as Oracle, SQL Server, MySQL, PostgreSQL, MongoDB.' },
      },
      {
        no: '03',
        title: { ar: 'التحسين والتأمين', en: 'Optimization and Security' },
        text: { ar: 'ضبط الأداء، تأمين البيانات، وضمان الكفاءة التشغيلية.', en: 'Tuning performance, securing data, and ensuring operational efficiency .' },
      },
      {
        no: '04',
        title: { ar: 'الإدارة والدعم المستمر', en: 'Management and ongoing support' },
        text: { ar: 'مراقبة الأداء، تحديث الأنظمة، وإدارة النسخ الاحتياطية بشكل دوري.', en: 'monitoring performance, updating systems, and managing backups on a regular basis.' },
      },
    ],
  },
  'startup-services-mvp': {
    title: { ar: 'خدمات الشركات الناشئة (MVP)', en: 'Startup Services ( MVP )' },
    featuresTitle: { ar: 'المميزات الرئيسية', en: 'Main features' },
    features: [
      { ar: 'سرعة الوصول إلى السوق.', en: 'Speed to market.' },
      { ar: 'تقليل التكاليف والمخاطر.', en: 'Reducing costs and risks.' },
      { ar: 'اختبار الفكرة مع العملاء.', en: 'Test the idea with customers.' },
    ],
    processTitle: { ar: 'عمليتنا', en: 'Our process' },
    processLead: { ar: 'نتبع خطوات فعالة و مدروسة', en: 'We follow effective and thoughtful steps.' },
    steps: [
      {
        no: '01',
        title: { ar: 'التحليل والتخطيط', en: 'Analysis and Planning:' },
        text: { ar: 'فهم الفكرة، الجمهور المستهدف، وتحديد الخصائص الأساسية للـ MVP.', en: 'Understanding the idea, target audience, and defining the basic characteristics of the MVP.' },
      },
      {
        no: '02',
        title: { ar: 'التصميم والنمذجة', en: 'Design and Prototyping:' },
        text: { ar: 'إعداد واجهات بسيطة ونماذج أولية لاختبار تجربة المستخدم.', en: 'Preparing simple interfaces and prototypes for user experience testing.' },
      },
      {
        no: '03',
        title: { ar: 'التطوير السريع', en: 'Rapid development' },
        text: { ar: 'بناء المنتج الأولي باستخدام تقنيات مرنة مع التركيز على الوظائف الأساسية.', en: 'Build the initial product using agile techniques with a focus on core functionality .' },
      },
      {
        no: '04',
        title: { ar: 'الإطلاق والاختبار', en: 'Launch and Test' },
        text: { ar: 'طرح الـ MVP في السوق، جمع ملاحظات العملاء، وتحسين المنتج تدريجيًا.', en: 'Bring the MVP to market, collect customer feedback, and gradually improve the product .' },
      },
    ],
  },
  'comprehensive-ai-services': {
    title: { ar: 'خدمات الذكاء الاصطناعي الشاملة', en: 'Comprehensive AI services' },
    featuresTitle: { ar: 'المميزات الرئيسية', en: 'Main features' },
    features: [
      { ar: 'تغطية شاملة لجميع تقنيات AI.', en: 'Comprehensive coverage of all AI technologies.' },
      { ar: 'تحسين الكفاءة التشغيلية.', en: 'Improve operational efficiency.' },
      { ar: 'دعم الابتكار والنمو.', en: 'Support innovation and growth.' },
    ],
    processTitle: { ar: 'عمليتنا', en: 'Our process' },
    processLead: { ar: 'نتبع خطوات فعالة و مدروسة', en: 'We follow effective and thoughtful steps.' },
    steps: [
      {
        no: '01',
        title: { ar: 'التحليل والاكتشاف', en: 'Analysis and discovery' },
        text: { ar: 'تحديد الاحتياجات العملية وكيفية تطبيق تقنيات الذكاء الاصطناعي.', en: 'Identify practical needs and how to apply AI techniques .' },
      },
      {
        no: '02',
        title: { ar: 'التصميم والتخطيط', en: 'Design and planning to develop an integrated' },
        text: { ar: 'وضع استراتيجية AI متكاملة مناسبة لبيئة العمل.', en: 'An AI strategy suitable for the work environment.' },
      },
      {
        no: '03',
        title: { ar: 'التطوير والتدريب', en: 'Development and Training' },
        text: { ar: 'بناء النماذج الذكية وتدريبها باستخدام بيانات حقيقية.', en: 'Building and training smart models using real data .' },
      },
      {
        no: '04',
        title: { ar: 'النشر والتكامل', en: 'Deployment and Integration' },
        text: { ar: 'تطبيق الحلول ودمجها في الأنظمة مع تحسين مستمر للأداء.', en: 'Implementing solutions and integrating them into systems with continuous performance improvement .' },
      },
    ],
  },
  'chatbot-development': {
    title: { ar: 'تطوير روبوتات الدردشة', en: 'Chatbot development' },
    featuresTitle: { ar: 'المميزات الرئيسية', en: 'Main features' },
    features: [
      { ar: 'دعم فوري على مدار 24/7.', en: 'instant support.' },
      { ar: 'تجربة تواصل طبيعية وسلسة.', en: 'A natural and smooth communication experience.' },
      { ar: 'تقليل تكاليف التشغيل.', en: 'Reducing operating costs.' },
    ],
    processTitle: { ar: 'عمليتنا', en: 'Our process' },
    processLead: { ar: 'نتبع خطوات فعالة و مدروسة', en: 'We follow effective and thoughtful steps.' },
    steps: [
      {
        no: '01',
        title: { ar: 'التحليل والتخطيط', en: 'Analysis and Planning' },
        text: { ar: 'فهم احتياجات العمل وتحديد سيناريوهات المحادثة المثلى.', en: 'Understanding business needs and determining optimal conversation scenarios.' },
      },
      {
        no: '02',
        title: { ar: 'التصميم والتجربة', en: 'Design and Experience' },
        text: { ar: 'إعداد تدفقات محادثة سهلة ومبسطة لتجربة مستخدم أفضل.', en: 'Set up easy and streamlined conversation flows for a better user experience.' },
      },
      {
        no: '03',
        title: { ar: 'التطوير والدمج', en: 'Development and integration' },
        text: { ar: 'بناء الروبوت باستخدام تقنيات AI وتكامل مع الأنظمة الداخلية والخارجية.', en: 'Building robots using AI technologies and integrating them with internal and external systems.' },
      },
      {
        no: '04',
        title: { ar: 'الاختبار والتحسين', en: 'Testing and Optimization' },
        text: { ar: 'اختبار الأداء وضمان دقة الردود مع تحسين مستمر للتجربة.', en: 'Test performance and ensure accuracy of responses while continuously improving the experience.' },
      },
    ],
  },
  'data-analysis': {
    title: { ar: 'تحليل البيانات', en: 'Data analysis' },
    featuresTitle: { ar: 'المميزات الرئيسية', en: 'Main features' },
    features: [
      { ar: 'دقة وموثوقية عالية.', en: 'High accuracy and reliability.' },
      { ar: 'تقارير ولوحات تحكم فورية.', en: 'Instant reports and dashboards.' },
      { ar: 'دعم اتخاذ القرار الاستراتيجي.', en: 'Support strategic decision making.' },
    ],
    processTitle: { ar: 'عمليتنا', en: 'Our process' },
    processLead: { ar: 'نتبع خطوات فعالة و مدروسة', en: 'We follow effective and thoughtful steps.' },
    steps: [
      {
        no: '01',
        title: { ar: 'تجميع البيانات', en: 'Data collection:' },
        text: { ar: 'تحديد مصادر البيانات (داخلية وخارجية) وجمعها بشكل منظم.', en: 'Identify data sources (internal and external) and collect them in an organized manner .' },
      },
      {
        no: '02',
        title: { ar: 'تنظيف البيانات ومعالجتها', en: 'Data cleaning and processing,' },
        text: { ar: 'إزالة الأخطاء والتكرارات وضمان جودة البيانات.', en: 'removing errors and duplicates, and ensuring data quality.' },
      },
      {
        no: '03',
        title: { ar: 'التحليل والتفسير', en: 'Analyze and interpret' },
        text: { ar: 'استخدام أدوات تحليل متقدمة مثل Power BI، Tableau، Python، R لاستخراج الأنماط والمعاني.', en: 'using advanced analytics tools like Power BI, Tableau, Python, and R to extract patterns and meanings.' },
      },
      {
        no: '04',
        title: { ar: 'العرض والتوصيات', en: 'Presentation and recommendations:' },
        text: { ar: 'بناء تقارير ولوحات قيادة تفاعلية، وتقديم توصيات عملية تدعم قرارات الإدارة.', en: 'Build interactive reports and dashboards, and provide practical recommendations that support management decisions .' },
      },
    ],
  },
  'cybersecurity-services': {
    title: { ar: 'خدمات الأمن السيبراني', en: 'Cybersecurity Services' },
    featuresTitle: { ar: 'المميزات الرئيسية', en: 'Main features' },
    features: [
      { ar: 'حماية متكاملة ومتعددة الطبقات.', en: 'Integrated, multi-layered protection.' },
      { ar: 'رصد استباقي للتهديدات.', en: 'Proactive threat monitoring.' },
      { ar: 'تقليل مخاطر الهجمات.', en: 'Reducing the risk of attacks.' },
    ],
    processTitle: { ar: 'عمليتنا', en: 'Our process' },
    processLead: { ar: 'نتبع خطوات فعالة و مدروسة', en: 'We follow effective and thoughtful steps.' },
    steps: [
      {
        no: '01',
        title: { ar: 'التقييم والتحليل', en: 'Evaluation and Analysis' },
        text: { ar: 'فحص الأنظمة وتحديد المخاطر والثغرات الأمنية.', en: 'Examining systems and identifying risks and vulnerabilities .' },
      },
      {
        no: '02',
        title: { ar: 'التصميم والتخطيط', en: 'Design and plan' },
        text: { ar: 'بناء استراتيجية أمنية شاملة مناسبة لبيئة العمل.', en: 'to build a comprehensive security strategy appropriate to the work environment .' },
      },
      {
        no: '03',
        title: { ar: 'التنفيذ والتكامل', en: 'Implementation and integration' },
        text: { ar: 'تطبيق الحلول الأمنية وربطها بالأنظمة القائمة.', en: 'Applying security solutions and linking them to existing systems.' },
      },
      {
        no: '04',
        title: { ar: 'المراقبة والتحسين المستمر', en: 'Monitoring and continuous improvement' },
        text: { ar: 'متابعة الأداء الأمني والتحديث لمواجهة التهديدات الجديدة.', en: 'Monitor security performance and update to address new threats .' },
      },
    ],
  },
  'web-application-development': {
    title: { ar: 'تطوير تطبيقات الويب', en: 'Web application development' },
    featuresTitle: { ar: 'المميزات الرئيسية', en: 'Main features' },
    features: [
      { ar: 'تصميم تفاعلي متجاوب لجميع الأجهزة.', en: 'Responsive design for all devices.' },
      { ar: 'بنية مرنة قابلة للتوسع.', en: 'Flexible, scalable architecture.' },
      { ar: 'أداء سريع واستجابة فورية.', en: 'Fast performance and immediate response.' },
    ],
    processTitle: { ar: 'عمليتنا', en: 'Our process' },
    processLead: { ar: 'نتبع خطوات فعالة و مدروسة', en: 'We follow effective and thoughtful steps.' },
    steps: [
      {
        no: '01',
        title: { ar: 'التحليل وجمع المتطلبات', en: 'Analysis and Requirements Gathering' },
        text: { ar: 'فهم أهداف العميل، تحديد وظائف التطبيق، وتحليل تجربة المستخدم المستهدفة.', en: "Understanding the customer's goals, defining the application's functionality, and analyzing the target user experience ." },
      },
      {
        no: '02',
        title: { ar: 'التصميم والتخطيط', en: 'Design and planning' },
        text: { ar: 'بناء الهيكلية العامة للتطبيق (Architecture) وتصميم واجهات استخدام (UI/UX) تفاعلية ومتجاوبة.', en: 'Building the general structure of the application ( Architecture ) and designing interactive and responsive user interfaces ( UI/UX ).' },
      },
      {
        no: '03',
        title: { ar: 'التطوير والبرمجة', en: 'Development and programming' },
        text: { ar: 'بناء التطبيق باستخدام أحدث التقنيات وفق معايير عالية للجودة والأمان.', en: 'Building the application using the latest technologies according to high standards of quality and security .' },
      },
      {
        no: '04',
        title: { ar: 'الاختبار والإطلاق', en: 'Testing and Release' },
        text: { ar: 'تنفيذ اختبارات شاملة للأداء، الأمان، وقابلية الاستخدام قبل الإطلاق الرسمي.', en: 'Perform comprehensive performance, security, and usability tests before official launch.' },
      },
    ],
  },
  'mobile-application-development': {
    title: { ar: 'تطوير تطبيقات الجوال', en: 'Mobile application development' },
    featuresTitle: { ar: 'المميزات الرئيسية', en: 'Main features' },
    features: [
      { ar: 'تطبيقات قابلة للتوسع لتواكب نمو الأعمال.', en: 'Scalable applications to keep pace with business growth.' },
      { ar: 'أداء سريع وموثوق حتى مع عدد كبير من المستخدمين.', en: 'Fast and reliable performance even with a large number of users .' },
    ],
    processTitle: { ar: 'عمليتنا', en: 'Our process' },
    processLead: { ar: 'نتبع خطوات فعالة و مدروسة', en: 'We follow effective and thoughtful steps.' },
    steps: [
      {
        no: '01',
        title: { ar: 'التحليل والتخطيط', en: 'Analysis and Planning' },
        text: { ar: 'دراسة أهداف العميل ومتطلبات العمل، ووضع خارطة طريق واضحة للتطبيق.', en: 'Study the client’s goals and business requirements, and develop a clear roadmap for implementation.' },
      },
      {
        no: '02',
        title: { ar: 'التصميم والتجربة', en: 'Design and Experimentation' },
        text: { ar: 'إنشاء النماذج الأولية والواجهات التفاعلية بما يضمن تجربة مستخدم سهلة وجذابة.', en: 'Creating prototypes and interactive interfaces to ensure a smooth and engaging user experience .' },
      },
      {
        no: '03',
        title: { ar: 'التطوير والبرمجة', en: 'Development and Programming' },
        text: { ar: 'استخدام أحدث التقنيات وأفضل الممارسات البرمجية لتطوير تطبيق آمن وفعّال.', en: 'Using the latest technologies and best programming practices to develop a secure and effective application .' },
      },
      {
        no: '04',
        title: { ar: 'الاختبار والإطلاق', en: 'Testing and launching' },
        text: { ar: 'إجراء اختبارات شاملة للأداء والأمان والجودة، ثم إطلاق التطبيق في الأسواق المستهدفة.', en: 'Conduct comprehensive performance, security, and quality tests, then launch the app in target markets .' },
      },
    ],
  },
  'website-development': {
    title: { ar: 'تطوير المواقع الإلكترونية', en: 'Website development' },
    featuresTitle: { ar: 'المميزات الرئيسية', en: 'Main features' },
    features: [
      { ar: 'تصميم عصري متجاوب.', en: 'Modern responsive design.' },
      { ar: 'أداء وسرعة تحميل عالية.', en: 'High performance and download speed.' },
    ],
    processTitle: { ar: 'عمليتنا', en: 'Our process' },
    processLead: { ar: 'نتبع خطوات فعالة و مدروسة', en: 'We follow effective and thoughtful steps.' },
    steps: [
      {
        no: '01',
        title: { ar: 'التحليل والتخطيط', en: 'Analysis and Planning' },
        text: { ar: 'فهم هوية العلامة التجارية، أهداف الموقع، والجمهور المستهدف.', en: 'Understanding brand identity, site objectives, and target audience.' },
      },
      {
        no: '02',
        title: { ar: 'التصميم والتجربة', en: 'Design and Experience' },
        text: { ar: 'ابتكار واجهات استخدام عصرية مع تجربة مستخدم (UX) سلسة وفعّالة.', en: 'Creating modern user interfaces with a smooth and effective user experience ( UX ).' },
      },
      {
        no: '03',
        title: { ar: 'التطوير البرمجي', en: 'Software development' },
        text: { ar: 'بناء الموقع باستخدام أحدث التقنيات مع ضمان الأداء والأمان.', en: 'Building the website using the latest technologies while ensuring performance and security.' },
      },
      {
        no: '04',
        title: { ar: 'الاختبار والإطلاق', en: 'Testing and Launch' },
        text: { ar: 'إجراء اختبارات شاملة على مختلف الأجهزة والمتصفحات قبل الإطلاق الرسمي.', en: 'Conduct comprehensive testing on various devices and browsers before the official launch.' },
      },
    ],
  },
  'organization-design': {
    title: { ar: 'تصميم المنظمة', en: 'Organizational design' },
    featuresTitle: { ar: 'المزايا الرئيسية لاستشاراتنا', en: 'Key advantages of our consultations' },
    features: [
      { ar: 'رفع كفاءة الأداء المؤسسي.', en: 'Improving the efficiency of institutional performance.' },
      { ar: 'تعزيز وضوح الصلاحيات والمسؤوليات.', en: 'Enhance clarity of powers and responsibilities.' },
      { ar: 'تقليل التعقيد الإداري والتكرار.', en: 'Reducing administrative complexity and duplication.' },
    ],
    processTitle: { ar: 'خطوات عملنا مع العملاء', en: 'Our work steps with clients' },
    processLead: { ar: '', en: '' },
    steps: [
      {
        no: '01',
        title: { ar: 'التشخيص والتحليل', en: 'Diagnosis and analysis' },
        text: { ar: 'دراسة الهيكل التنظيمي القائم وتحديد الفجوات.', en: 'Study the existing organizational structure and identify gaps.' },
      },
      {
        no: '02',
        title: { ar: 'التصميم والتطوير', en: 'Design and development' },
        text: { ar: 'إعداد نموذج تنظيمي مرن يتماشى مع أهداف المؤسسة.', en: 'preparing a flexible organizational model that aligns with the organization’s objectives.' },
      },
      {
        no: '03',
        title: { ar: 'التطبيق والتوجيه', en: 'Implementation and Guidance' },
        text: { ar: 'دعم التنفيذ وضمان تبني التغييرات عبر جميع المستويات.', en: 'Support implementation and ensure adoption of changes across all levels .' },
      },
      {
        no: '04',
        title: { ar: 'التحسين المستمر', en: 'Continuous improvement' },
        text: { ar: 'تقييم فاعلية الهيكل وتقديم توصيات مستقبلية.', en: 'Evaluate the effectiveness of the structure and make future recommendations.' },
      },
    ],
  },
  'policies-and-management-systems': {
    title: { ar: 'السياسات وأنظمة الإدارة', en: 'Policies and management systems' },
    featuresTitle: { ar: 'المزايا الرئيسية لاستشاراتنا', en: 'Key advantages of our consultations' },
    features: [
      { ar: 'وضوح الأدوار والمسؤوليات.', en: 'Clarity of roles and responsibilities.' },
      { ar: 'تحسين الكفاءة التشغيلية للمؤسسة.', en: 'Improving the operational efficiency of the organization.' },
      { ar: 'تقليل المخاطر التشغيلية والقانونية.', en: 'Reducing operational and legal risks.' },
    ],
    processTitle: { ar: 'خطوات عملنا مع العملاء', en: 'Our work steps with clients' },
    processLead: { ar: '', en: '' },
    steps: [
      {
        no: '01',
        title: { ar: 'التحليل والتقييم', en: 'Analysis and Evaluation' },
        text: { ar: 'دراسة السياسات الحالية وتحديد الفجوات.', en: 'Study current policies and identify gaps .' },
      },
      {
        no: '02',
        title: { ar: 'التصميم والتطوير', en: 'Design and development' },
        text: { ar: 'إعداد سياسات وأنظمة إدارة متكاملة.', en: 'preparation of integrated management policies and systems .' },
      },
      {
        no: '03',
        title: { ar: 'التنفيذ والتدريب', en: 'Implementation and Training' },
        text: { ar: 'تفعيل السياسات مع تمكين الفرق على التطبيق.', en: 'Activate policies and enable teams to implement them .' },
      },
      {
        no: '04',
        title: { ar: 'المراجعة والتطوير المستمر', en: 'Continuous review and development' },
        text: { ar: 'تحديث السياسات وفق المتغيرات واللوائح.', en: 'updating policies according to changes and regulations.' },
      },
    ],
  },
  'governance-risk-and-compliance': {
    title: { ar: 'الحوكمة والمخاطر والامتثال', en: 'Governance, Risk, and Compliance' },
    featuresTitle: { ar: 'المزايا الرئيسية لاستشاراتنا', en: 'Key advantages of our consultations' },
    features: [
      { ar: 'تعزيز الشفافية والمساءلة المؤسسية.', en: 'Enhancing transparency and institutional accountability.' },
      { ar: 'تقليل التعرض للمخاطر التشغيلية والقانونية.', en: 'Reducing exposure to operational and legal risks.' },
      { ar: 'ضمان الامتثال للتشريعات واللوائح.', en: 'Ensure compliance with legislation and regulations.' },
    ],
    processTitle: { ar: 'خطوات عملنا مع العملاء', en: 'Our work steps with clients' },
    processLead: { ar: '', en: '' },
    steps: [
      {
        no: '01',
        title: { ar: 'التشخيص والتحليل', en: 'Diagnosis and Analysis' },
        text: { ar: 'تقييم الوضع الحالي للحوكمة والمخاطر والامتثال.', en: 'Assess the current state of governance, risk, and compliance' },
      },
      {
        no: '02',
        title: { ar: 'التصميم والتطوير', en: 'Design and development' },
        text: { ar: 'إعداد إطار متكامل لإدارة GRC يتناسب مع طبيعة المؤسسة.', en: 'preparing an integrated GRC management framework that suits the nature of the organization.' },
      },
      {
        no: '03',
        title: { ar: 'التنفيذ والتطبيق', en: 'Implementation and application' },
        text: { ar: 'تفعيل السياسات والإجراءات مع تدريب الكوادر.', en: 'Activating policies and procedures and training staff .' },
      },
      {
        no: '04',
        title: { ar: 'المراجعة والتحسين المستمر', en: 'Continuous review and improvement' },
        text: { ar: 'متابعة الأداء وتطويره لمواكبة التغيرات التنظيمية.', en: 'monitoring and developing performance to keep pace with organizational changes.' },
      },
    ],
  },
  'operational-excellence': {
    title: { ar: 'التفوق التشغيلي', en: 'operational excellence' },
    featuresTitle: { ar: 'المزايا الرئيسية لاستشاراتنا', en: 'Key advantages of our consultations' },
    features: [
      { ar: 'رفع الكفاءة التشغيلية وخفض التكاليف.', en: 'Increase operational efficiency and reduce costs.' },
      { ar: 'تحسين جودة المنتجات والخدمات.', en: 'Improving the quality of products and services.' },
      { ar: 'تعزيز رضا العملاء وثقتهم.', en: 'Enhance customer satisfaction and confidence.' },
    ],
    processTitle: { ar: 'خطوات عملنا مع العملاء', en: 'Our work steps with clients' },
    processLead: { ar: '', en: '' },
    steps: [
      {
        no: '01',
        title: { ar: 'التشخيص والتحليل', en: 'Diagnosis and Analysis' },
        text: { ar: 'تقييم شامل للعمليات وسلاسل القيمة.', en: 'A comprehensive assessment of operations and value chains.' },
      },
      {
        no: '02',
        title: { ar: 'إعادة التصميم', en: 'Redesign' },
        text: { ar: 'تطوير نماذج تشغيلية فعّالة ومتجددة.', en: 'Developing effective and innovative operating models .' },
      },
      {
        no: '03',
        title: { ar: 'التنفيذ والتدريب', en: 'Implementation and Training' },
        text: { ar: 'دعم الفرق في تبني أفضل الممارسات التشغيلية.', en: 'Supporting teams in adopting operational best practices .' },
      },
      {
        no: '04',
        title: { ar: 'التحسين المستمر', en: 'Continuous improvement' },
        text: { ar: 'مراجعة الأداء وتقديم حلول متقدمة للتطوير.', en: 'reviewing performance and providing advanced development solutions.' },
      },
    ],
  },
  'business-process-management': {
    title: { ar: 'إدارة عمليات الأعمال', en: 'Business Process Management' },
    featuresTitle: { ar: 'المزايا الرئيسية لاستشاراتنا', en: 'Key advantages of our consultations' },
    features: [
      { ar: 'تقليل التكاليف التشغيلية.', en: 'Reducing operating costs.' },
      { ar: 'رفع الإنتاجية وجودة المخرجات.', en: 'Increase productivity and quality of output.' },
      { ar: 'مرونة أكبر في الاستجابة للتغيرات.', en: 'Greater flexibility in responding to changes.' },
    ],
    processTitle: { ar: 'خطوات عملنا مع العملاء', en: 'Our work steps with clients' },
    processLead: { ar: '', en: '' },
    steps: [
      {
        no: '01',
        title: { ar: 'التشخيص والتحليل', en: 'Diagnosis and analysis' },
        text: { ar: 'دراسة العمليات القائمة ورسم خريطة شاملة لها.', en: 'studying existing processes and drawing a comprehensive map of them .' },
      },
      {
        no: '02',
        title: { ar: 'إعادة التصميم', en: 'Redesign' },
        text: { ar: 'تطوير نماذج عمليات أكثر كفاءة ومرونة.', en: 'Develop more efficient and flexible process models.' },
      },
      {
        no: '03',
        title: { ar: 'التنفيذ والأتمتة', en: 'Implementation and Automation' },
        text: { ar: 'تفعيل العمليات الجديدة باستخدام الأدوات الرقمية.', en: 'Activating new processes using digital tools.' },
      },
      {
        no: '04',
        title: { ar: 'التحسين المستمر', en: 'Continuous improvement' },
        text: { ar: 'قياس الأداء وتطوير العمليات بشكل دائم.', en: 'measuring performance and constantly developing processes .' },
      },
    ],
  },
  'strategy-management': {
    title: { ar: 'إدارة الإستراتيجية', en: 'Strategy Management' },
    featuresTitle: { ar: 'المزايا الرئيسية لاستشاراتنا', en: 'Main features of our consultations' },
    features: [
      { ar: 'خبرة عملية تتجاوز 25 عامًا.', en: 'Over 25 years of practical experience.' },
      { ar: 'استخدام أحدث منهجيات الإدارة الإستراتيجية.', en: 'Using the latest strategic management methodologies.' },
      { ar: 'حلول استشارية مصممة خصيصًا لكل قطاع.', en: 'Consulting solutions tailored to each sector.' },
    ],
    processTitle: { ar: 'خطوات عملنا مع العملاء', en: 'How do we work with our clients?' },
    processLead: { ar: '', en: '' },
    steps: [
      {
        no: '01',
        title: { ar: 'التشخيص والتحليل', en: 'Diagnosis and Analysis' },
        text: { ar: 'مراجعة الوضع الحالي والتحديات.', en: 'Review of the current situation and challenges.' },
      },
      {
        no: '02',
        title: { ar: 'التوجيه الإستراتيجي', en: 'Strategic guidance' },
        text: { ar: 'تقديم توصيات مدعومة بأدوات تحليلية.', en: 'Providing recommendations supported by analytical tools.' },
      },
      {
        no: '03',
        title: { ar: 'تصميم الإطار الإستراتيجي', en: 'Strategic Framework Design' },
        text: { ar: 'المساعدة في صياغة خارطة طريق متكاملة.', en: 'Assisting in formulating an integrated roadmap.' },
      },
      {
        no: '04',
        title: { ar: 'المتابعة والتطوير', en: 'Follow-up and development' },
        text: { ar: 'تقديم استشارات دورية لدعم التحسين المستمر.', en: 'Providing periodic consultations to support continuous improvement.' },
      },
    ],
  },
  'performance-management': {
    title: { ar: 'إدارة الأداء', en: 'Performance management' },
    featuresTitle: { ar: 'المزايا الرئيسية لاستشاراتنا', en: 'Main features of our consultations' },
    features: [
      { ar: 'خبرة في تطبيق أفضل الممارسات العالمية.', en: 'Experience in applying global best practices.' },
      { ar: 'نهج علمي وتحليلي يعتمد على البيانات.', en: 'A scientific and analytical approach based on data.' },
      { ar: 'ربط الأداء اليومي بالأهداف الإستراتيجية.', en: 'Linking daily performance to strategic objectives.' },
    ],
    processTitle: { ar: 'خطوات عملنا مع العملاء', en: 'Our work steps with clients' },
    processLead: { ar: '', en: '' },
    steps: [
      {
        no: '01',
        title: { ar: 'التحليل والتقييم', en: 'Analysis and evaluation' },
        text: { ar: 'دراسة الوضع الحالي للأداء وتحديد نقاط القوة والضعف.', en: 'Study the current status of performance and identify strengths and weaknesses .' },
      },
      {
        no: '02',
        title: { ar: 'التصميم والتخطيط', en: 'Design and Planning' },
        text: { ar: 'وضع إطار عمل متكامل لإدارة الأداء.', en: 'Develop an integrated performance management framework.' },
      },
      {
        no: '03',
        title: { ar: 'التوجيه والمواءمة', en: 'Guidance and alignment' },
        text: { ar: 'تقديم توصيات لضبط الأداء مع الاستراتيجية العامة.', en: 'Providing recommendations to align performance with the overall strategy.' },
      },
      {
        no: '04',
        title: { ar: 'المراجعة المستمرة', en: 'Continuous review' },
        text: { ar: 'استشارات دورية لضمان استدامة التحسين والتطوير.', en: 'periodic consultations to ensure sustainable improvement and development.' },
      },
    ],
  },
  'portfolio-management': {
    title: { ar: 'إدارة المحافظ', en: 'Portfolio Management' },
    featuresTitle: { ar: 'المزايا الرئيسية لاستشاراتنا', en: 'Key advantages of our consultations' },
    features: [
      { ar: 'رؤية استراتيجية شاملة للمشاريع والبرامج.', en: 'A comprehensive strategic vision for projects and programs.' },
      { ar: 'تحسين توزيع الموارد المالية والبشرية.', en: 'Improving the distribution of financial and human resources.' },
      { ar: 'تقليل المخاطر وتعزيز العائد الاستثماري.', en: 'Reduce risks and enhance investment returns.' },
    ],
    processTitle: { ar: 'خطوات عملنا مع العملاء', en: 'Our work steps with clients' },
    processLead: { ar: '', en: '' },
    steps: [
      {
        no: '01',
        title: { ar: 'التشخيص والتحليل', en: 'Diagnosis and Analysis' },
        text: { ar: 'دراسة المحفظة الحالية وتحديد الفجوات.', en: 'Study the current portfolio and identify gaps .' },
      },
      {
        no: '02',
        title: { ar: 'التصميم والتخطيط', en: 'Design and Planning' },
        text: { ar: 'بناء إطار عمل متكامل لإدارة المحافظ.', en: 'Building an integrated framework for portfolio management.' },
      },
      {
        no: '03',
        title: { ar: 'التوجيه والتوصيات', en: 'Guidance and recommendations' },
        text: { ar: 'تقديم استشارات في اختيار الأولويات وإدارة الموارد.', en: 'Providing advice on priority selection and resource management .' },
      },
      {
        no: '04',
        title: { ar: 'المراجعة المستمرة', en: 'Continuous review' },
        text: { ar: 'متابعة الأداء وضمان توافقه مع الأهداف الإستراتيجية.', en: 'monitoring performance and ensuring its alignment with strategic objectives.' },
      },
    ],
  },
  'program-management': {
    title: { ar: 'إدارة البرامج', en: 'Program Management' },
    featuresTitle: { ar: 'المزايا الرئيسية لاستشاراتنا', en: 'Key advantages of our consultations' },
    features: [
      { ar: 'تكامل المشاريع ضمن رؤية واحدة.', en: 'Integration of projects within a single vision .' },
      { ar: 'تحسين التنسيق بين فرق العمل.', en: 'Improve coordination between work teams.' },
      { ar: 'تقليل التعارضات والمخاطر.', en: 'Reducing conflicts and risks.' },
    ],
    processTitle: { ar: 'خطوات عملنا مع العملاء', en: 'Our work steps with clients' },
    processLead: { ar: '', en: '' },
    steps: [
      {
        no: '01',
        title: { ar: 'التشخيص والتحليل', en: 'Diagnosis and Analysis' },
        text: { ar: 'تقييم البرامج القائمة وتحديد الفجوات.', en: 'Evaluate existing programs and identify gaps.' },
      },
      {
        no: '02',
        title: { ar: 'التصميم والتخطيط', en: 'Design and Planning' },
        text: { ar: 'بناء إطار متكامل لإدارة البرامج.', en: 'Building an integrated framework for program management.' },
      },
      {
        no: '03',
        title: { ar: 'التنفيذ والإشراف', en: 'Implementation and Supervision' },
        text: { ar: 'تقديم الدعم الاستشاري خلال تطبيق البرامج.', en: 'Providing advisory support during program implementation.' },
      },
      {
        no: '04',
        title: { ar: 'المراجعة والتحسين', en: 'Review and Improvement' },
        text: { ar: 'متابعة الأداء وقياس المنافع المحققة.', en: 'Monitor performance and measure benefits achieved .' },
      },
    ],
  },
  'change-management': {
    title: { ar: 'إدارة التغيير', en: 'Change Management' },
    featuresTitle: { ar: 'المزايا الرئيسية لاستشاراتنا', en: 'Key advantages of our consultations' },
    features: [
      { ar: 'خبرة في إدارة مشاريع التغيير المعقدة.', en: 'Experience in managing complex change projects.' },
      { ar: 'استخدام أطر عمل عالمية مثبتة.', en: 'Use proven global frameworks.' },
      { ar: 'ربط التغيير بالأهداف الإستراتيجية.', en: 'Linking change to strategic objectives.' },
    ],
    processTitle: { ar: 'خطوات عملنا مع العملاء', en: 'Our work steps with clients' },
    processLead: { ar: '', en: '' },
    steps: [
      {
        no: '01',
        title: { ar: 'التشخيص والتحليل', en: 'Diagnosis and Analysis' },
        text: { ar: 'تحديد دوافع التغيير وأثره على المؤسسة.', en: 'Identifying the drivers of change and their impact on the organization.' },
      },
      {
        no: '02',
        title: { ar: 'التخطيط والتصميم', en: 'Planning and Design' },
        text: { ar: 'وضع استراتيجية واضحة لإدارة التغيير.', en: 'Develop a clear change management strategy.' },
      },
      {
        no: '03',
        title: { ar: 'التنفيذ والتوجيه', en: 'Implementation and Guidance' },
        text: { ar: 'تقديم الدعم الاستشاري أثناء تطبيق التغيير.', en: 'Providing advisory support during change implementation.' },
      },
      {
        no: '04',
        title: { ar: 'المراجعة والتحسين', en: 'Review and Improve' },
        text: { ar: 'متابعة النتائج وضمان استدامة التغيير.', en: 'Monitor results and ensure sustainability of change .' },
      },
    ],
  },
  'human-capital-development': {
    title: { ar: 'تنمية رأس المال البشري', en: 'Human capital development' },
    featuresTitle: { ar: 'المزايا الرئيسية لاستشاراتنا', en: 'Key advantages of our consultations' },
    features: [
      { ar: 'رفع مستوى الكفاءة والإنتاجية.', en: 'Raising the level of efficiency and productivity.' },
      { ar: 'استقطاب أفضل الكفاءات والحفاظ عليها.', en: 'Attracting and retaining the best talent.' },
      { ar: 'تعزيز ولاء الموظفين وانتمائهم.', en: 'Enhance employee loyalty and belonging.' },
    ],
    processTitle: { ar: 'خطوات عملنا مع العملاء', en: 'Our work steps with clients' },
    processLead: { ar: '', en: '' },
    steps: [
      {
        no: '01',
        title: { ar: 'التشخيص والتحليل', en: 'Diagnosis and Analysis' },
        text: { ar: 'تقييم واقع رأس المال البشري وتحديد الفجوات.', en: 'Assessing the reality of human capital and identifying gaps .' },
      },
      {
        no: '02',
        title: { ar: 'التصميم والتخطيط', en: 'Design and Planning' },
        text: { ar: 'بناء استراتيجيات وبرامج لتنمية الموارد البشرية.', en: 'Building strategies and programs for human resource development.' },
      },
      {
        no: '03',
        title: { ar: 'التنفيذ والتفعيل', en: 'Implementation and activation' },
        text: { ar: 'إطلاق المبادرات والخطط التطويرية.', en: 'launching development initiatives and plans.' },
      },
      {
        no: '04',
        title: { ar: 'القياس والتحسين', en: 'Measure and Improve' },
        text: { ar: 'متابعة الأداء وتطوير البرامج باستمرار.', en: 'Monitor performance and continually develop programs.' },
      },
    ],
  },
};

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  'e-learning-in-a-government-agency': {
    title: { ar: 'التعليم الإلكتروني لجهة حكومية', en: 'E-learning in a government agency' },
    image: 'images/WH64341.jpg',
    aboutTitle: { ar: 'حول المشروع', en: 'About the project' },
    aboutText: { ar: 'مشروع التعليم الإلكتروني لجهة حكومية (الأمن العام) يهدف إلى بناء منصة تدريبية رقمية مبتكرة تدعم تطوير مهارات الأفراد في الجوانب المهنية وإجراءات السلامة، إضافة إلى التدريب الميداني الافتراضي باستخدام أحدث التقنيات. يوفر المشروع تجربة تعلم مرنة، متقدمة، وقابلة للقياس بما يرفع من كفاءة كوادر الأمن العام.', en: 'A project for a government agency (Public Security) aims to build an innovative digital training platform that supports the development of individual skills in professional aspects and safety procedures, in addition to virtual field training using the latest technologies. The project provides a flexible, advanced, and measurable learning experience that enhances the efficiency of Public Security personnel.' },
    features: [
      { ar: 'محتوى تدريبي متنوع: يشمل الفيديو، المحاكاة التفاعلية، والعروض التعليمية الرقمية.', en: 'Diverse training content: including videos, interactive simulations, and digital educational presentations.' },
      { ar: 'إدارة أداء دقيقة: تتبع حضور وتقدم المتدربين لحظيًا مع اختبارات تقييمية.', en: "Accurate performance management: Track trainees' attendance and progress in real-time with assessment tests." },
      { ar: 'مرونة الوصول: دعم كامل عبر الويب والأجهزة المحمولة في أي وقت ومكان.', en: 'Flexible access: Full support across web and mobile devices anytime, anywhere.' },
    ],
    infoTitle: { ar: 'معلومات المشروع', en: 'Project information' },
    info: [
      { label: { ar: 'العميل:', en: 'Client:' }, value: { ar: 'الأمن العام', en: 'Public Security' } },
      { label: { ar: 'الخدمة:', en: 'Service:' }, value: { ar: 'تطوير منصة تدريبية إلكترونية متكاملة', en: 'Development of an integrated electronic training platform' } },
      { label: { ar: 'مدة التنفيذ:', en: 'Implementation period:' }, value: { ar: '4 شهور', en: '4 months' } },
      { label: { ar: 'الفئة:', en: 'Category:' }, value: { ar: 'التعليم الإلكتروني / التدريب الأمني', en: 'E-Learning / Security Training' } },
      { label: { ar: 'الفريق:', en: 'Team:' }, value: { ar: 'خبراء تعليم إلكتروني، مطورو برمجيات (ويب + موبايل)، مصممو محتوى تدريبي، مختصو محاكاة وتقييم', en: 'E-learning experts, software developers (web + mobile), training content designers, simulation and evaluation specialists' } },
    ],
  },
  'the-school-library-management-system': {
    title: { ar: 'نظام إدارة المكتبات المدرسية', en: 'The School Library Management System' },
    image: 'images/WH84131.jpg',
    aboutTitle: { ar: 'حول المشروع', en: 'About the project' },
    aboutText: { ar: 'مشروع نظام إدارة المكتبات المدرسية هو حل تقني متكامل يهدف إلى رقمنة عمليات المكتبة، من الفهرسة إلى الاستعارة والجرد، مع ربط النظام بأنظمة الطلاب وأولياء الأمور لضمان تجربة تعليمية أكثر تنظيمًا وكفاءة.', en: 'The School Library Management System project is an integrated technology solution that aims to digitize library operations, from cataloging to borrowing and inventory, while linking the system to student and parent systems to ensure a more organized and efficient learning experience.' },
    features: [
      { ar: 'فهرسة شاملة للكتب والمصادر التعليمية بطريقة منظمة وسهلة الوصول.', en: 'A comprehensive index of books and educational resources in an organized and easy-to-access manner.' },
      { ar: 'تكامل إلكتروني مع أنظمة الطلاب وأولياء الأمور لتبسيط الاستعارة والمتابعة.', en: 'Electronic integration with student and parent systems to simplify borrowing and follow-up.' },
      { ar: 'تقارير دقيقة لمراقبة حالة المكتبة والمخزون بشكل دوري.', en: 'Accurate reports to monitor library status and inventory on a regular basis.' },
    ],
    infoTitle: { ar: 'معلومات المشروع', en: 'Project information' },
    info: [
      { label: { ar: 'العميل:', en: 'Client:' }, value: { ar: 'نظام إدارة المكتبات المدرسية', en: 'School Library Management System' } },
      { label: { ar: 'الخدمة:', en: 'Service:' }, value: { ar: 'تطوير نظام إدارة مكتبات مدرسية رقمي', en: 'Development of a digital school library management system' } },
      { label: { ar: 'مدة التنفيذ:', en: 'Implementation period:' }, value: { ar: '6 شهور', en: '6 months' } },
      { label: { ar: 'الفئة:', en: 'Category:' }, value: { ar: 'أنظمة تعليمية / حلول إدارة مكتبات', en: 'Educational Systems / Library Management Solutions' } },
      { label: { ar: 'الفريق:', en: 'Team:' }, value: { ar: 'فريق Lean Business Solutions – محللو نظم، مطورو أنظمة، خبراء تكامل تعليم إلكتروني، مصممو UX/UI، إدارة مشروع', en: 'Lean Business Solutions Team – Systems Analysts, Systems Developers, E-Learning Integrators, UX/UI Designers, Project Managemen' } },
    ],
  },
  'the-corporate-website-development': {
    title: { ar: 'تطوير مواقع الشركات', en: 'The corporate website development' },
    image: 'images/WHD5171.jpg',
    aboutTitle: { ar: 'حول المشروع', en: 'About the project' },
    aboutText: { ar: 'مشروع تطوير مواقع الشركات يهدف إلى تعزيز الهوية الرقمية للشركات وزيادة حضورها على الإنترنت عبر مواقع احترافية تعكس قيم العلامة التجارية وتلبي احتياجات مختلف القطاعات.', en: "The corporate website development project aims to enhance companies' digital identity and increase their online presence through professional websites that reflect the brand's values and meet the needs of various sectors." },
    features: [
      { ar: 'مواقع احترافية متجاوبة مع جميع الأجهزة لضمان تجربة مستخدم مثالية.', en: 'Professional websites that are responsive to all devices to ensure an ideal user experience .' },
      { ar: 'تعزيز الحضور الرقمي عبر تحسين محركات البحث (SEO).', en: 'Boost your digital presence with SEO.' },
      { ar: 'تصميمات عصرية تواكب أحدث اتجاهات تجربة المستخدم (UX/UI).', en: 'Modern designs that keep pace with the latest user experience ( UX/UI ) trends.' },
    ],
    infoTitle: { ar: 'معلومات المشروع', en: 'Project information' },
    info: [
      { label: { ar: 'العميل:', en: 'Client:' }, value: { ar: 'تطوير مواقع الشركات', en: 'Corporate Website Development' } },
      { label: { ar: 'الخدمة:', en: 'Service:' }, value: { ar: 'تصميم وتطوير مواقع إلكترونية احترافية للشركات', en: 'Design and development of professional websites for companies' } },
      { label: { ar: 'مدة التنفيذ:', en: 'Implementation period:' }, value: { ar: '3 أشهر', en: '3 months' } },
      { label: { ar: 'الفئة:', en: 'Category:' }, value: { ar: 'تطوير مواقع / الهوية الرقمية', en: 'Website Development / Digital Identity' } },
      { label: { ar: 'الفريق:', en: 'Team:' }, value: { ar: 'فريق Lean Business Solutions – تصميم UX/UI، تطوير الويب، تحسين SEO، إدارة المشروع', en: 'Lean Business Solutions Team – UX/UI Design, Web Development, SEO Optimization, Project Management' } },
    ],
  },
  'masroufi-app': {
    title: { ar: 'مشروع تقنى – تطبيق مصروفي', en: 'Masroufi App' },
    image: 'images/WH05BA1.jpg',
    aboutTitle: { ar: 'حول المشروع', en: 'About the project' },
    aboutText: { ar: 'تطبيق "مصروفي" هو مشروع تقني مبتكر يهدف إلى تمكين الآباء من إصدار بطاقات بنكية مسبقة الدفع لأبنائهم، مع إدارة المصروف اليومي بطريقة آمنة وغير نقدية عبر التطبيق.', en: 'The "Masroufi" app is an innovative technology project that aims to enable parents to issue prepaid bank cards for their children, while managing daily expenses in a secure, cashless manner through the app.' },
    features: [
      { ar: 'إدارة مالية آمنة للأطفال من خلال بطاقات مدفوعة مسبقًا مرتبطة بالتطبيق.', en: 'Safe financial management for children with app-linked prepaid cards .' },
      { ar: 'تجربة مرنة للآباء عبر إشعارات فورية وتحديد ميزانيات يومية.', en: 'Flexible parenting experience with instant notifications and daily budgets.' },
      { ar: 'تعزيز ثقافة الادخار وتنمية مهارات الإدارة المالية لدى الأطفال.', en: 'Promoting a culture of saving and developing financial management skills in children.' },
    ],
    infoTitle: { ar: 'معلومات المشروع', en: 'Project information' },
    info: [
      { label: { ar: 'العميل:', en: 'Client:' }, value: { ar: 'مصروفي', en: 'My money' } },
      { label: { ar: 'الخدمة:', en: 'Service:' }, value: { ar: 'تطوير تطبيق تقني وإصدار بطاقات بنكية مسبقة الدفع', en: 'Development of a technical application and issuance of prepaid bank cards' } },
      { label: { ar: 'مدة التنفيذ:', en: 'Implementation period:' }, value: { ar: '12 شهرًا', en: '12 months' } },
      { label: { ar: 'الفئة:', en: 'Category:' }, value: { ar: 'التطبيقات المالية (FinTech)', en: 'Financial Applications ( FinTech' } },
      { label: { ar: 'الفريق:', en: 'Team:' }, value: { ar: 'فريق Lean Business Solutions – تطوير، تصميم واجهة وتجربة مستخدم، إدارة المشروع', en: 'Lean Business Solutions Team – Development, UI/UX Design, Project Management' } },
    ],
  },
  'an-integrated-training-platform-for-a-government-agency': {
    title: { ar: 'منصة تدريبية متكاملة لجهة حكومية', en: 'An integrated training platform for a government agency' },
    image: 'images/WH660B1.jpg',
    aboutTitle: { ar: 'حول المشروع', en: 'About the project' },
    aboutText: { ar: 'مشروع المنصة التدريبية المتكاملة هو حل تعليمي إلكتروني مبتكر صُمم خصيصًا لجهة حكومية بهدف تمكين الأشخاص ذوي الإعاقة وأسرهم من الوصول إلى محتوى تدريبي شامل ومرن. يعتمد المشروع على توفير تجربة تعلم تفاعلية مدعومة بلغة الإشارة والترجمة النصية لضمان شمولية التعليم وسهولة الوصول.', en: 'The Integrated Training Platform project is an innovative e-learning solution specifically designed for a government agency to enable people with disabilities and their families to access comprehensive and flexible training content. The project relies on providing an interactive learning experience supported by sign language and text translation to ensure educational inclusion and accessibility.' },
    features: [
      { ar: 'منصة تعليمية شاملة تضم 15 دورة تدريبية تغطي المهارات الأساسية والمتقدمة.', en: 'A comprehensive educational platform that includes 15 training courses covering basic and advanced skills .' },
      { ar: 'وصول شامل مع دعم لغة الإشارة والترجمة النصية (CC) في جميع الدروس.', en: 'Comprehensive access with sign language support and subtitles ( CC ) in all lessons.' },
      { ar: 'تجربة تفاعلية باستخدام الرسوم المتحركة والوسائط المتعددة لزيادة المشاركة والتحفيز.', en: 'An interactive experience using animation and multimedia to increase engagement and motivation.' },
    ],
    infoTitle: { ar: 'معلومات المشروع', en: 'Project information' },
    info: [
      { label: { ar: 'العميل:', en: 'Client:' }, value: { ar: 'جهة حكومية', en: 'Government entity' } },
      { label: { ar: 'الخدمة:', en: 'Service:' }, value: { ar: 'تطوير منصة تدريبية إلكترونية متكاملة', en: 'Development of an integrated electronic training platform' } },
      { label: { ar: 'مدة التنفيذ:', en: 'Implementation period:' }, value: { ar: '12 شهرًا', en: '12 months' } },
      { label: { ar: 'الفئة:', en: 'Category:' }, value: { ar: 'التعليم الإلكتروني / تدريب وتطوير الموارد البشرية', en: 'E-Learning / Human Resources Training and Development' } },
      { label: { ar: 'الفريق:', en: 'Team:' }, value: { ar: 'خبراء التعليم الإلكتروني، مصممو Motion Graphics، مطورو أنظمة (ويب + موبايل)، متخصصو لغة إشارة، مطورو محتوى تدريبي', en: 'E-learning experts, Motion Graphics designers, (web + mobile) developers, sign language specialists, training content developers' } },
    ],
  },
  'the-e-wallet-system': {
    title: { ar: 'نظام المحفظة الإلكترونية', en: 'The e-Wallet System' },
    image: 'images/WHB6BA1.jpg',
    aboutTitle: { ar: 'حول المشروع', en: 'About the project' },
    aboutText: { ar: 'مشروع نظام المحفظة الإلكترونية هو حل تقني مبتكر يهدف إلى أتمتة إدارة عمليات الكانتين المدرسي، من خلال تمكين الطلاب من الدفع الإلكتروني، وتوفير أدوات دقيقة للمدارس وأولياء الأمور لإدارة الطلبات والحسابات المالية بمرونة وأمان.', en: 'The e-Wallet System project is an innovative technical solution that aims to automate school canteen operations by enabling students to make electronic payments and providing schools and parents with precise tools to manage orders and financial accounts flexibly and securely.' },
    features: [
      { ar: 'إدارة مالية دقيقة وشفافة لحسابات الطلاب.', en: 'Accurate and transparent financial management of student accounts.' },
      { ar: 'تمكين أولياء الأمور من متابعة وضبط عمليات الشراء.', en: 'Enabling parents to monitor and control purchases .' },
      { ar: 'نظام متكامل لإدارة المخزون، المبيعات، والتقارير.', en: 'Integrated system for managing inventory, sales, and reports.' },
    ],
    infoTitle: { ar: 'معلومات المشروع', en: 'Project information' },
    info: [
      { label: { ar: 'العميل:', en: 'Client:' }, value: { ar: 'نظام المحفظة الإلكترونية', en: 'E-Wallet System' } },
      { label: { ar: 'الخدمة:', en: 'Service:' }, value: { ar: 'تطوير نظام محفظة إلكترونية متكامل لإدارة عمليات الكانتين المدرسي', en: 'Developing an integrated electronic wallet system to manage school canteen operations.' } },
      { label: { ar: 'مدة التنفيذ:', en: 'Implementation period:' }, value: { ar: '7 أشهر', en: '7 months' } },
      { label: { ar: 'الفئة:', en: 'Category:' }, value: { ar: 'أنظمة مالية مدرسية / حلول الدفع الإلكتروني', en: 'School Financial Systems / Electronic Payment Solutions' } },
      { label: { ar: 'الفريق:', en: 'Team:' }, value: { ar: 'فريق Lean Business Solutions – محللو نظم، مطورو أنظمة مالية، خبراء تكامل POS، مصممو UX/UI، إدارة مشروع', en: 'Lean Business Solutions Team – Systems Analysts, Financial Systems Developers, POS Integration Experts, UX/UI Designers, Project Management' } },
    ],
  },
  'automated-calling-system-for-schools': {
    title: { ar: 'نظام النداء الآلي للمدارس', en: 'Automated calling system for schools' },
    image: 'images/WHISK_2.jpg',
    aboutTitle: { ar: 'حول المشروع', en: 'About the project' },
    aboutText: { ar: 'مشروع نظام النداء الآلي للمدارس هو حل ذكي يهدف إلى تحسين تجربة استقبال الطلاب عند وصول أولياء الأمور، عبر أتمتة عملية النداء باستخدام تقنيات الذكاء الاصطناعي لتحويل النصوص المكتوبة إلى صوت واضح ومفهوم.', en: "The Automated School Pager System project is a smart solution that aims to improve the student reception experience upon parents' arrival by automating the pager process using artificial intelligence technologies to convert written text into clear, understandable audio." },
    features: [
      { ar: 'أتمتة النداء الصوتي للطلاب عند وصول أولياء الأمور.', en: 'Automate the voice calling of students when parents arrive .' },
      { ar: 'تكامل ذكي مع تطبيق ولي الأمر لتفعيل الخدمة بسهولة.', en: 'Smart integration with the parent app to activate the service easily .' },
      { ar: 'تقليل الأخطاء البشرية وتسريع التواصل بين الإدارة والطلاب.', en: 'Reduce human errors and speed up communication between the administration and students.' },
    ],
    infoTitle: { ar: 'معلومات المشروع', en: 'Project information' },
    info: [
      { label: { ar: 'العميل:', en: 'Client:' }, value: { ar: 'نظام النداء الآلي للمدارس', en: 'School Paging System' } },
      { label: { ar: 'الخدمة:', en: 'Service:' }, value: { ar: 'تطوير نظام نداء آلي للمدارس مع تطبيق مدمج', en: 'Development of an automated calling system for schools with an integrated application' } },
      { label: { ar: 'مدة التنفيذ:', en: 'Implementation period:' }, value: { ar: '6 أشهر', en: '6 months' } },
      { label: { ar: 'الفئة:', en: 'Category:' }, value: { ar: 'أنظمة تعليمية / حلول ذكية للمدارس', en: 'Educational Systems / Smart Solutions for Schools' } },
      { label: { ar: 'الفريق:', en: 'Team:' }, value: { ar: 'فريق Lean Business Solutions – مطورو تطبيقات موبايل، خبراء ذكاء اصطناعي (Text-to-Speech)، محللو نظم، مصممو واجهات UX/UI', en: 'Lean Business Solutions Team – Mobile App Developers, AI ( Text-to-Speech ) Experts, Systems Analysts, UX/UI Designers' } },
    ],
  },
  'appointment-booking-system-for-professional-exams-and-certifications': {
    title: { ar: 'نظام حجز المواعيد للاختبارات والشهادات الاحترافية', en: 'Appointment booking system for professional exams and certifications' },
    image: 'images/WH458A1.jpg',
    aboutTitle: { ar: 'حول المشروع', en: 'About the project' },
    aboutText: { ar: 'مشروع نظام حجز المواعيد للاختبارات والشهادات الاحترافية هو حل تقني متكامل يهدف إلى تسهيل عملية الحجز وإدارة الامتحانات عبر نظام إلكتروني مرن يوفر تجربة سلسة وآمنة للمستخدمين.', en: 'The Professional Exam and Certification Appointment Booking System project is an integrated technical solution that aims to facilitate the exam booking and management process through a flexible electronic system that provides a seamless and secure experience for users.' },
    features: [
      { ar: 'إدارة متكاملة للاختبارات، المراكز، والمقاعد المتاحة.', en: 'Integrated management of tests, centers, and available seats.' },
      { ar: 'حجز مواعيد لحظي مع نظام دفع إلكتروني آمن.', en: 'Instant appointment booking with a secure electronic payment system.' },
      { ar: 'إشعارات وتقارير ذكية لتعزيز تجربة المستخدم وتبسيط الإدارة.', en: 'Smart notifications and reports to enhance user experience and simplify management.' },
    ],
    infoTitle: { ar: 'معلومات المشروع', en: 'Project information' },
    info: [
      { label: { ar: 'العميل:', en: 'Client:' }, value: { ar: 'نظام حجز المواعيد للاختبارات والشهادات الاحترافية', en: 'Appointment booking system for professional exams and certifications' } },
      { label: { ar: 'الخدمة:', en: 'Service:' }, value: { ar: 'تطوير نظام حجز مواعيد إلكتروني للاختبارات والشهادات الاحترافية', en: 'Development of an electronic appointment booking system for professional exams and certifications' } },
      { label: { ar: 'مدة التنفيذ:', en: 'Implementation period:' }, value: { ar: '6 أشهر', en: '6 months' } },
      { label: { ar: 'الفئة:', en: 'Category:' }, value: { ar: 'الأنظمة التعليمية / الاختبارات الإلكترونية', en: 'Educational Systems / Electronic Tests' } },
      { label: { ar: 'الفريق:', en: 'Team:' }, value: { ar: 'فريق Lean Business Solutions – تحليل نظم، تطوير برمجيات، تصميم UX/UI، إدارة مشروع', en: 'Lean Business Solutions Team – Systems Analysis, Software Development, UX/UI Design, Project Management' } },
    ],
  },
  'bus-tracker-app': {
    title: { ar: 'تطبيق تعقب الحافلات', en: 'Bus Tracker App' },
    image: 'images/GEMINI2.jpg',
    aboutTitle: { ar: 'حول المشروع', en: 'About the project' },
    aboutText: { ar: 'مشروع Bus Tracker App هو تطبيق مخصص للهواتف الذكية (Android وiOS) يهدف إلى تمكين المدارس وأولياء الأمور من تتبع حركة الحافلات المدرسية ذهابًا وإيابًا، بما يعزز السلامة، يقلل المخاطر، ويوفر التكاليف التشغيلية.', en: 'The Bus Tracker App is a smartphone application ( Android and iOS ) that aims to enable schools and parents to track the movement of school buses back and forth, enhancing safety, reducing risks, and saving operational costs.' },
    features: [
      { ar: 'تعزيز سلامة الطلاب عبر تتبع الحافلات في الوقت الفعلي.', en: 'Enhance student safety through real-time bus tracking.' },
      { ar: 'إدارة ذكية للمسارات لتحقيق الانضباط وتوفير التكاليف.', en: 'Smart route management for discipline and cost savings.' },
      { ar: 'تواصل فعال مع أولياء الأمور عبر الإشعارات الفورية.', en: 'Effective communication with parents via instant notifications.' },
    ],
    infoTitle: { ar: 'معلومات المشروع', en: 'Project information' },
    info: [
      { label: { ar: 'العميل:', en: 'Client:' }, value: { ar: 'Bus Tracker App', en: 'Bus Tracker App' } },
      { label: { ar: 'الخدمة:', en: 'Service:' }, value: { ar: 'تطوير تطبيق تتبع ذكي للحافلات المدرسية', en: 'Development of a smart tracking application for school buses' } },
      { label: { ar: 'مدة التنفيذ:', en: 'Implementation period:' }, value: { ar: '8 أشهر', en: '8 months' } },
      { label: { ar: 'الفئة:', en: 'Category:' }, value: { ar: 'تطبيقات تعليمية / أنظمة تتبع ذكية (IoT & GPS)', en: 'Educational Applications / Smart Tracking Systems ( IoT & GPS )' } },
      { label: { ar: 'الفريق:', en: 'Team:' }, value: { ar: 'فريق Lean Business Solutions – تحليل نظم، تطوير تطبيقات Android & iOS، تكامل أنظمة GPS، تصميم UX/UI، إدارة مشروع', en: 'Lean Business Solutions Team – Systems Analysis, Android & iOS App Development, GPS System Integration, UX/UI Design, Project Management' } },
    ],
  },
  'school-one-app': {
    title: { ar: 'تطبيق المدرسة الأولى', en: 'School One App' },
    image: 'images/WHD8261.jpg',
    aboutTitle: { ar: 'حول المشروع', en: 'About the project' },
    aboutText: { ar: 'مشروع School One App هو تطبيق مخصص للهواتف الذكية (Android وiOS) يهدف إلى تسهيل تواصل المدرسة مع أولياء الأمور باستخدام أحدث التقنيات، مما يساهم في توفير الوقت والتكاليف التشغيلية للمدرسة وتحسين تجربة التعليم.', en: 'The School One App project is a smartphone application ( Android and iOS ) that aims to facilitate school communication with parents using the latest technologies, contributing to saving time and operational costs for the school and improving the educational experience.' },
    features: [
      { ar: 'تعزيز التواصل الفعّال بين المدرسة وأولياء الأمور عبر قنوات متعددة.', en: 'Enhancing effective communication between the school and parents through multiple channels.' },
      { ar: 'دعم العمليات التعليمية والإدارية بشكل رقمي مرن وسهل.', en: 'Supporting educational and administrative processes in a flexible and easy digital manner.' },
      { ar: 'خفض التكاليف التشغيلية وتوفير تجربة حديثة متكاملة.', en: 'Reduce operational costs and provide a modern, integrated experience.' },
    ],
    infoTitle: { ar: 'معلومات المشروع', en: 'Project information' },
    info: [
      { label: { ar: 'العميل:', en: 'Client:' }, value: { ar: 'School One App', en: 'School One App' } },
      { label: { ar: 'الخدمة:', en: 'Service:' }, value: { ar: 'تطوير تطبيق مدرسي متكامل للهاتف المحمول', en: 'Development of an integrated school mobile application' } },
      { label: { ar: 'مدة التنفيذ:', en: 'Implementation period:' }, value: { ar: 'XXXX', en: 'XXXX' } },
      { label: { ar: 'الفئة:', en: 'Category:' }, value: { ar: 'التعليم الإلكتروني / تطبيقات المدارس', en: 'E-Learning / School Apps' } },
      { label: { ar: 'الفريق:', en: 'Team:' }, value: { ar: 'فريق Lean Business Solutions – تحليل متطلبات، تصميم UX/UI، تطوير Android & iOS، تكامل أنظمة، إدارة مشروع', en: 'Lean Business Solutions Team – Requirements Analysis, UX/UI Design, Android & iOS Development, Systems Integration, Project Management' } },
    ],
  },
  'schools-erp-system': {
    title: { ar: 'نظام تخطيط موارد المؤسسات المدرسية', en: 'Schools ERP System' },
    image: 'images/WHB3C11.jpg',
    aboutTitle: { ar: 'حول المشروع', en: 'About the project' },
    aboutText: { ar: 'Schools ERP System هو مشروع تقني متكامل يهدف إلى أتمتة كافة العمليات الإدارية والأكاديمية داخل المدارس، لتسهيل الإدارة وتعزيز التواصل بين جميع الأطراف عبر منصة واحدة مرنة ومتكاملة.', en: "Schools' ERP System is an integrated technology project that aims to automate all administrative and academic processes within schools, facilitating management and enhancing communication between all parties through a single, flexible, and integrated platform." },
    features: [
      { ar: 'إدارة أكاديمية وإدارية شاملة تغطي الطلاب، الموظفين، الحسابات، والمخازن.', en: 'Comprehensive academic and administrative management covering students, employees, accounts, and stores.' },
      { ar: 'حلول تقنية متقدمة متاحة عبر الويب والموبايل لمرونة الوصول.', en: 'Advanced technology solutions are available via web and mobile for flexible access.' },
      { ar: 'تكامل إداري ومالي يعزز كفاءة المدارس ويوفر تقارير دقيقة وشاملة.', en: 'Administrative and financial integration enhances school efficiency and provides accurate and comprehensive reporting.' },
    ],
    infoTitle: { ar: 'معلومات المشروع', en: 'Project information' },
    info: [
      { label: { ar: 'العميل:', en: 'Client:' }, value: { ar: 'Schools ERP System', en: 'Schools ERP System' } },
      { label: { ar: 'الخدمة:', en: 'Service:' }, value: { ar: 'تطوير وتنفيذ نظام ERP للمدارس', en: 'Development and implementation of an ERP system for schools' } },
      { label: { ar: 'مدة التنفيذ:', en: 'Implementation period:' }, value: { ar: '24 شهرًا', en: '24 months' } },
      { label: { ar: 'الفئة:', en: 'Category:' }, value: { ar: 'الأنظمة التعليمية (EdTech / ERP)', en: 'Educational Systems ( EdTech / ERP )' } },
      { label: { ar: 'الفريق:', en: 'Team:' }, value: { ar: 'فريق Lean Business Solutions – تحليل الأنظمة، تطوير، تصميم، إدارة مشروع، دعم فني', en: 'Lean Business Solutions Team – Systems Analysis, Development, Design, Project Management, Technical Support' } },
    ],
  },
};
