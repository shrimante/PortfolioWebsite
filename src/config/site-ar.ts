export const siteConfigAr = {
  name: "سريمان تيروباثي إيشوارابا",
  title: "مدير مشارك - التكامل | منصة MuleSoft والنظم البيئية لواجهة برمجة التطبيقات",
  tagline: "أقوم ببناء وتشغيل منصات تكامل MuleSoft الهجينة مع الحوكمة والموثوقية والتسليم المتوقع.",
  email: "shrimante@gmail.com",
  linkedIn: "https://www.linkedin.com/in/srimaneshwar/",
  resumePath: "/Sriman_Tirupathy_Eshwarappa_Resume.pdf",
  bookingLink: "/contact",
  location: "بنجالور، الهند",
  timezone: "توقيت الهند",
  headshot: {
    enabled: true,
    src: "/images/headshot-bust.jpg",
    alt: "سريمان تيروباثي إيشوارابا"
  },

  metrics: [
    { label: "سنوات الخبرة", value: "~20" },
    { label: "واجهات برمجة التطبيقات للإنتاج", value: "120+" },
    { label: "برامج رئيسية", value: "7+" },
    { label: "سرعة النشر", value: "40% أسرع" },
    { label: "وقت التشغيل", value: "99.9%" },
    { label: "التوفير السنوي", value: "$250K+" }
  ],

  ownership: [
    {
      title: "هندسة المنصات",
      description: "بناء مجموعات RTF على OpenShift عالية التوفر، وتحديث CloudHub 2.0، والبنية التحتية الهجينة المرنة.",
      icon: "cpu"
    },
    {
      title: "حوكمة وأمن واجهة برمجة التطبيقات",
      description: "تعريف السياسات، RBAC، ومعايير دورة حياة واجهة برمجة التطبيقات الكاملة عبر المؤسسة.",
      icon: "shield"
    },
    {
      title: "الموثوقية والتعافي من الكوارث",
      description: "إنشاء إمكانية الملاحظة (Splunk/ELK/Anypoint) ودليل التعافي من الكوارث.",
      icon: "activity"
    },
    {
      title: "نموذج تشغيل التسليم",
      description: "تنفيذ بوابات الجودة، وتيرة الإصدار، ومواءمة ART/PI.",
      icon: "layers"
    }
  ],

  caseStudies: [
    {
      id: "hybrid-mulesoft-platform-rtf-openshift",
      title: "منصة MuleSoft الهجينة: RTF على OpenShift",
      teaser: "تصميم منصة تكامل هجينة آمنة وعالية النطاق تخدم أكثر من 5 ملايين عضو مع أتمتة GitLab CI/CD.",
      image: "/images/case-study-1.png"
    },
    {
      id: "enterprise-api-strategy-governance",
      title: "استراتيجية واجهة برمجة التطبيقات وحوكمة المؤسسات",
      teaser: "توسيع نطاق أكثر من 120 واجهة برمجة تطبيقات مع أمان ومعايير دورة حياة وتوثيق موحّد.",
      image: "/images/case-study-2.png"
    },
    {
      id: "esb-to-mulesoft-migration",
      title: "الهجرة من ESB التقليدي إلى MuleSoft",
      teaser: "التحديث من Informatica إلى Anypoint، مما يوفر 3 أسابيع لكل دورة.",
      image: "/images/case-study-3.png"
    }
  ],

  leadership: [
    { label: "أقصى حجم للفريق", value: "30+ مهندس" },
    { label: "سرعة السبرنت", value: "+18% تحسن" },
    { label: "توافق الميزانية", value: "$10M+ مبادرات" }
  ],

  keywords: [
    "بنية المؤسسة", "استراتيجية وحوكمة واجهة برمجة التطبيقات", "هندسة المنصات",
    "نموذج تشغيل التكامل (C4E)", "تخطيط السعة", "هندسة الموثوقية",
    "MuleSoft Anypoint", "Runtime Fabric", "CloudHub 2.0", "API Manager", "RAML",
    "OAuth2", "TLS", "RBAC", "Solace", "Splunk", "ELK", "OpenShift",
    "Kubernetes", "التعافي من الكوارث", "GitLab CI/CD"
  ],

  accelerators: [
    {
      title: "مجموعة أدوات بدء برنامج واجهة برمجة التطبيقات",
      repo: "mulesoft-api-program-starter",
      description: "هيكل المجلد المرجعي، واتفاقيات التسمية، واستراتيجية التفرع، وهيكل Maven الأساسي، وأنماط تكوين البيئة، واتفاقيات معالجة الأخطاء، وتدفقات عينة، وهياكل اختبار الوحدة.",
      impact: "يوحد التسليم عبر جميع الفرق من اليوم الأول.",
      tags: ["Mule 4", "Maven", "أفضل الممارسات"]
    },
    {
      title: "حزمة حوكمة مواصفات واجهة برمجة التطبيقات",
      repo: "api-spec-governance-pack",
      description: "قواعد RAML/OAS linting، وأدلة النمط، وأمثلة 'المعيار الذهبي'، والسمات القابلة لإعادة الاستخدام، وإرشادات المحاكاة الآلية.",
      impact: "يضمن عقود واجهة برمجة تطبيقات عالية الجودة ومتسقة على مستوى المؤسسة.",
      tags: ["RAML", "OAS", "الحوكمة"]
    },
    {
      title: "قوالب أصول Exchange",
      repo: "exchange-asset-templates",
      description: "قوالب مشاريع API-led (EAPI/PAPI/SAPI)، ونماذج الأخطاء القياسية، وأنماط تقسيم الصفحات، ووحدات تكرار العمليات.",
      impact: "يسرع انضمام المطورين ويفرض الأنماط المعمارية.",
      tags: ["API-Led", "أصول قابلة لإعادة الاستخدام", "التدريب"]
    },
    {
      title: "معيار التسجيل والارتباط",
      repo: "mulesoft-logging-correlation-standard",
      description: "تسجيل JSON المهيكل، ونشر الارتباط عبر طبقات الخدمة، وتوافق جاهز مع Splunk/ELK/Datadog.",
      impact: "يوفر إمكانية ملاحظة على مستوى المؤسسة ويبسط استكشاف الأخطاء وإصلاحها.",
      tags: ["إمكانية الملاحظة", "Splunk", "ELK"],
      hasDetails: true
    },
    {
      slug: "mulesoft-cicd-pipeline-templates",
      title: "قوالب خطوط أنابيب CI/CD",
      repo: "mulesoft-cicd-pipeline-templates",
      description: "قوالب Jenkins و GitHub Actions موحدة لعمليات نشر MuleSoft.",
      icon: "settings",
      category: "الأتمتة",
      impact: "يعمل على أتمتة دورة حياة الإصدار بنسخ يمكن التنبؤ بها بنسبة 100٪.",
      tags: ["CI/CD", "GitHub Actions", "Jenkins", "DevOps"],
      hasDetails: true
    },
    {
      slug: "mulesoft-observability-contract",
      title: "عقد إمكانية الملاحظة",
      repo: "mulesoft-observability-contract",
      description: "إطار عمل تسجيل منظم JSON متقدم ثنائي الوضع مع إخفاء الحمولة المركزية والتتبع وتلخيص المقاييس.",
      icon: "activity",
      category: "التكامل",
      impact: "يقلل من وقت التشخيص (MTTR) ويركز منطق تنقيح الحمولة.",
      tags: ["إمكانية الملاحظة", "Splunk", "ELK", "DataWeave"],
      hasDetails: true
    }
  ]
};
