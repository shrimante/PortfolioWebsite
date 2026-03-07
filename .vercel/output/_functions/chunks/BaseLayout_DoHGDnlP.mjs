import { c as createComponent, b as addAttribute, v as renderHead, w as renderSlot, a as renderTemplate, d as createAstro } from './astro/server_fVXKcOoa.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const siteConfig = {
  name: "Sriman Tirupathy Eshwarappa",
  title: "Associate Director – Integrations | MuleSoft Platform & API Ecosystems",
  tagline: "I build and run hybrid MuleSoft integration platforms with governance, reliability, and predictable delivery.",
  email: "shrimante@gmail.com",
  linkedIn: "https://www.linkedin.com/in/srimaneshwar/",
  resumePath: "/Sriman_Tirupathy_Eshwarappa_Resume.pdf",
  bookingLink: "/contact",
  // Redirect to internal contact page
  location: "Bangalore, India",
  timezone: "IST",
  headshot: {
    src: "/images/headshot-bust.jpg",
    alt: "Sriman Tirupathy Eshwarappa"
  },
  metrics: [
    { label: "Years Experience", value: "~20" },
    { label: "Production APIs", value: "120+" },
    { label: "Major Programs", value: "7+" },
    { label: "Deployment Speed", value: "40% Faster" },
    { label: "Uptime", value: "99.9%" },
    { label: "Annual Savings", value: "$250K+" }
  ],
  ownershipChecklist: [
    {
      category: "Build",
      description: "Architecting high-availability integration topology and automated delivery pipelines.",
      items: [
        "Runtime Topology (CloudHub / RTF)",
        "Automated CI/CD Workflows",
        "Standards & Core Frameworks",
        "API Program Skeletons",
        "Observability Dashboard Baseline"
      ]
    },
    {
      category: "Run",
      description: "Ensuring 99.9% uptime through proactive reliability engineering and operations.",
      items: [
        "SLOs & Error Budgets",
        "Proactive Alerting (Splunk/ELK)",
        "Disaster Recovery Playbooks",
        "Incident Management",
        "Release Governance"
      ]
    },
    {
      category: "Govern",
      description: "Scaling API adoption with enforced security and enterprise guardrails.",
      items: [
        "Full API Lifecycle Model",
        "Mandatory Security Policies",
        "RBAC & IAU Strategy",
        "Architectural Reviews",
        "Platform Quality Guardrails"
      ]
    }
  ],
  caseStudies: [
    {
      id: "hybrid-mulesoft-platform-rtf-openshift",
      title: "Hybrid MuleSoft Platform: RTF on OpenShift",
      teaser: "Architected a secure, high-scale hybrid integration platform serving 5M+ members with automated GitLab CI/CD.",
      image: "/images/case-study-1.png"
    },
    {
      id: "enterprise-api-strategy-governance",
      title: "Enterprise API Strategy & Governance",
      teaser: "Scaling 120+ APIs with standardized security, lifecycle, and documentation.",
      image: "/images/case-study-2.png"
    },
    {
      id: "esb-to-mulesoft-migration",
      title: "Legacy ESB to MuleSoft Migration",
      teaser: "Modernizing from Informatica to Anypoint, saving 3 weeks per cycle.",
      image: "/images/case-study-3.png"
    }
  ],
  leadership: [
    { label: "Peak Team Size", value: "30+ Engineers" },
    { label: "Sprint Velocity", value: "+18% Improvement" },
    { label: "Budget Alignment", value: "$10M+ Initiatives" }
  ],
  recommendations: [
    {
      name: "Henry Lazo",
      title: "Staff Software Engineer at Living Security | IAM",
      text: "Sriman was a consultant at Daon and worked with me on a project that required him to learn a number of different technologies. Due to his relentless drive to learn, Sriman was able to quickly pick up Spring MVC and Hibernate, and was able to make a significant contribution to the project. I’m confident that Sriman can work with Spring, Hibernate and any other technologies that are thrown his way."
    },
    {
      name: "Pradeep Ganesha",
      title: "VP | Product Engineering Leader at Fidelity Investments | Bengaluru | India",
      text: "Sriman had worked on my team as an associate at Sapient a few years back. Sriman was a person with high level of energy and was a person keen interest to learn new things. He was quick to learn on the job, would roll up his sleves and started effectively contributing within a short span. He was a lively person on the team whom other team members wanted to work with.."
    }
  ],
  keywords: [
    "Enterprise Architecture",
    "API Strategy & Governance",
    "Platform Engineering",
    "Integration Operating Model (C4E)",
    "Capacity Planning",
    "Reliability Engineering",
    "MuleSoft Anypoint",
    "Runtime Fabric",
    "CloudHub 2.0",
    "API Manager",
    "RAML",
    "OAuth2",
    "TLS",
    "RBAC",
    "Solace",
    "Splunk",
    "ELK",
    "OpenShift",
    "Kubernetes",
    "Disaster Recovery",
    "GitLab CI/CD"
  ],
  accelerators: [
    {
      title: "API Program Starter Kit",
      repo: "mulesoft-api-program-starter",
      description: "Reference folder structure, naming conventions, branching strategy, baseline Maven structure, env config patterns, error handling conventions, sample flows, and unit test skeletons.",
      impact: "Standardizes delivery across all squads from day one.",
      tags: ["Mule 4", "Maven", "Best Practices"]
    },
    {
      title: "API Spec Governance Pack",
      repo: "api-spec-governance-pack",
      description: "RAML/OAS linting rules, style guides, 'gold standard' examples, reusable traits, and automated mocking guidance.",
      impact: "Ensures high-quality, consistent API contracts enterprise-wide.",
      tags: ["RAML", "OAS", "Governance"]
    },
    {
      title: "Exchange Asset Templates",
      repo: "exchange-asset-templates",
      description: "API-led project templates (EAPI/PAPI/SAPI), standard error models, pagination patterns, and idempotency modules.",
      impact: "Accelerates developer onboarding and enforces architectural patterns.",
      tags: ["API-Led", "Reusable Assets", "Onboarding"]
    },
    {
      title: "CI/CD Pipeline Templates",
      repo: "mulesoft-cicd-templates",
      description: "GitHub Actions and Jenkins pipelines for CloudHub 2.0 & RTF. Includes MUnit gates, environment promotion, and rollback strategies.",
      impact: "Automates the release lifecycle with 100% predictable deployments.",
      tags: ["GitHub Actions", "Jenkins", "DevOps"]
    },
    {
      title: "MUnit Test Accelerator",
      repo: "munit-accelerator",
      description: "Test templates, mocking patterns for common connectors (Salesforce, SAP, DB), and automated coverage gate configurations.",
      impact: "Ensures engineering excellence through robust automated testing.",
      tags: ["MUnit", "Quality Gates", "Testing"]
    },
    {
      title: "Error Handling Standard",
      repo: "mulesoft-error-handling-standard",
      description: "Canonical error taxonomy, global error handler implementation, correlation ID strategy, and REST-aligned response models.",
      impact: "Reduces MTTR and provides a consistent experience for API consumers.",
      tags: ["Error Handling", "REST", "Reliability"]
    },
    {
      title: "Logging & Correlation Standard",
      repo: "mulesoft-logging-standard",
      description: "JSON structured logging, correlation propagation across service tiers, and out-of-the-box Splunk/ELK/Datadog compatibility.",
      impact: "Provides enterprise-grade observability and simplifies troubleshooting.",
      tags: ["Observability", "Splunk", "ELK"]
    },
    {
      title: "Security Baseline Accelerator",
      repo: "mulesoft-security-baseline",
      description: "Implementation patterns for OAuth2, mTLS, JWT enforcement, secret management, and PII masking.",
      impact: "Hardens the platform security posture by default.",
      tags: ["Security", "OAuth2", "mTLS"]
    },
    {
      title: "Policy-as-Code Automation",
      repo: "apim-policy-automation",
      description: "Scripts to automate API Manager setup, policy application (Rate Limiting, Client ID enforcement), and SLA tier promotion.",
      impact: "Eliminates manual configuration errors at scale.",
      tags: ["Automation", "API Manager", "Policy-as-Code"]
    },
    {
      title: "Secret Management Integration",
      repo: "mulesoft-secret-management",
      description: "Reference implementations for AWS Secrets Manager and Azure Key Vault integration with MuleSoft properties.",
      impact: "Enables secure, externalized credential management for modern cloud envs.",
      tags: ["AWS", "Azure", "Secrets Manager"]
    },
    {
      title: "Reusable Integration Modules",
      repo: "integration-modules-library",
      description: "Common library for Salesforce composite wrappers, SFTP ingestion modules, and circuit breaker patterns.",
      impact: "Promotes code reuse and reduces 'point-to-point' anti-patterns.",
      tags: ["Modules", "Reuse", "Efficiency"]
    },
    {
      title: "Canonical Data Model Kit",
      repo: "canonical-model-mapping-kit",
      description: "JSON schemas and DataWeave mapping patterns for core enterprise domains (Customer, Order, Product).",
      impact: "Proves enterprise integration thinking through data consistency.",
      tags: ["Data Modeling", "DataWeave", "JSON Schema"]
    },
    {
      title: "DataWeave Utilities Pack",
      repo: "dataweave-utils-pack",
      description: "Collection of DWL functions for null-safe operations, date normalization, masking, and complex transformations.",
      impact: "Significant daily productivity boost for integration developers.",
      tags: ["DataWeave", "Utility", "Productivity"]
    },
    {
      title: "Performance & Resilience Patterns",
      repo: "mulesoft-resilience-patterns",
      description: "Implementation guides for Bulkheads, Circuit Breakers, Retries with Backoff, and Application Tuning checklists.",
      impact: "Ensures production-grade resilience for high-concurrency APIs.",
      tags: ["Resilience", "Performance", "SRE"]
    },
    {
      title: "Operational Runbooks",
      repo: "mulesoft-ops-runbooks",
      description: "SRE-style playbooks for incident response, common failure modes, DR checklists, and health check definitions.",
      impact: "Provides a leadership-level safety net for platform operations.",
      tags: ["SRE", "Operations", "Runbooks"]
    },
    {
      title: "ADR & NFR Architecture Kit",
      repo: "integration-architecture-adr-kit",
      description: "Templates for Architecture Decision Records (ADR), Non-Functional Requirement (NFR) checklists, and decision trees.",
      impact: "Formalizes architectural decision-making and ensures project alignment.",
      tags: ["Architecture", "Governance", "ADR"]
    },
    {
      title: "API Documentation Portal",
      repo: "api-docs-portal-starter",
      description: "Static documentation site template (Docusaurus) integrated with Anypoint Exchange for consumer-facing docs.",
      impact: "Improves API adoption and developer experience (DX).",
      tags: ["Documentation", "DX", "Portal"]
    },
    {
      title: "Lifecycle & Release Governance",
      repo: "integration-lifecycle-governance",
      description: "Checklists for Definition of Ready/Done, versioning strategies, and deprecation lifecycle policies.",
      impact: "Provides executive-level control over the entire API lifecycle.",
      tags: ["Governance", "Lifecycle", "Leadership"]
    }
  ]
};

const siteConfigAr = {
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
    "بنية المؤسسة",
    "استراتيجية وحوكمة واجهة برمجة التطبيقات",
    "هندسة المنصات",
    "نموذج تشغيل التكامل (C4E)",
    "تخطيط السعة",
    "هندسة الموثوقية",
    "MuleSoft Anypoint",
    "Runtime Fabric",
    "CloudHub 2.0",
    "API Manager",
    "RAML",
    "OAuth2",
    "TLS",
    "RBAC",
    "Solace",
    "Splunk",
    "ELK",
    "OpenShift",
    "Kubernetes",
    "التعافي من الكوارث",
    "GitLab CI/CD"
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
    }
  ]
};

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const currentLocale = Astro2.currentLocale || "en";
  const isRtl = currentLocale === "ar";
  const config = isRtl ? siteConfigAr : siteConfig;
  const {
    title = config.title,
    description = isRtl ? "\u0645\u062F\u064A\u0631 \u0645\u0634\u0627\u0631\u0643 \u2013 \u062A\u0643\u0627\u0645\u0644 (MuleSoft) \u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u0627\u0644\u0645\u0646\u0635\u0627\u062A \u0627\u0644\u0647\u062C\u064A\u0646\u0629\u060C \u0648\u062D\u0648\u0643\u0645\u0629 \u0627\u0644\u0640 API\u060C \u0648\u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u0648\u0633\u0639." : "Associate Director \u2013 Integrations (MuleSoft) specializing in hybrid platforms, API governance, and scalable delivery.",
    image = "/og-image.jpg"
    // Placeholder
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site || "https://sriman.arch");
  const localePath = isRtl ? "/ar" : "";
  return renderTemplate`<html${addAttribute(currentLocale, "lang")}${addAttribute(isRtl ? "rtl" : "ltr", "dir")}> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- SEO --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- OpenGraph --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Outfit:wght@400;700&family=IBM+Plex+Sans+Arabic:wght@400;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen flex flex-col bg-primary"> <!-- Sticky Header --> <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 py-4 shadow-sm"> <div class="container mx-auto px-6 flex justify-between items-center"> <a${addAttribute(localePath || "/", "href")} class="flex flex-col"> <span class="text-lg font-bold text-slate-900 tracking-tighter leading-none">SRIMAN.</span> <span class="text-[10px] text-accent font-bold tracking-widest uppercase">${isRtl ? "\u0627\u0644\u062A\u0643\u0627\u0645\u0644" : "Integrations"}</span> </a> <div${addAttribute(`hidden lg:flex gap-8 items-center text-[11px] uppercase font-bold tracking-widest text-slate-500 ${isRtl ? "ml-8" : "mr-8"}`, "class")}> <a${addAttribute(`${localePath}/#ownership`, "href")} class="hover:text-accent transition-colors">${isRtl ? "\u0646\u0637\u0627\u0642 \u0627\u0644\u0639\u0645\u0644" : "Ownership"}</a> <a${addAttribute(`${localePath}/#case-studies`, "href")} class="hover:text-accent transition-colors">${isRtl ? "\u0627\u0644\u0623\u062B\u0631" : "Impact"}</a> <a${addAttribute(`${localePath}/#leadership`, "href")} class="hover:text-accent transition-colors">${isRtl ? "\u0627\u0644\u0642\u064A\u0627\u062F\u0629" : "Leadership"}</a> <a${addAttribute(`${localePath}/accelerators`, "href")} class="hover:text-accent transition-colors">${isRtl ? "\u0627\u0644\u0645\u0633\u0631\u0639\u0627\u062A" : "Accelerators"}</a> </div> <div class="flex gap-3 items-center"> <!-- Language Switcher --> <div class="flex bg-slate-100 p-1 rounded-lg border border-slate-200 mx-2"> <a${addAttribute(isRtl ? Astro2.url.pathname.replace(/^\/ar/, "") || "/" : "/ar" + (Astro2.url.pathname === "/" ? "" : Astro2.url.pathname), "href")} class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-white shadow-sm text-accent hover:text-accent-muted transition-all"> ${isRtl ? "English" : "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"} </a> </div> <a${addAttribute(config.resumePath, "href")} class="hidden sm:inline-flex px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-[10px] uppercase font-bold tracking-wider rounded-md transition-all shadow-sm" download> ${isRtl ? "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0633\u064A\u0631\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629" : "Download Resume"} </a> <a${addAttribute(config.bookingLink, "href")} class="px-4 py-2 bg-accent hover:bg-accent-muted text-white text-[10px] uppercase font-bold tracking-wider rounded-md transition-all shadow-sm"> ${isRtl ? "\u0627\u062D\u062C\u0632 \u0645\u0643\u0627\u0644\u0645\u0629 15 \u062F\u0642\u064A\u0642\u0629" : "Book 15-min intro"} </a> </div> </div> </nav> <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> <!-- Floating Mobile CTA --> <div${addAttribute(`fixed bottom-6 ${isRtl ? "left-6" : "right-6"} z-50 sm:hidden`, "class")}> <a${addAttribute(config.resumePath, "href")} class="flex items-center justify-center w-14 h-14 bg-accent text-white rounded-full shadow-lg active:scale-95 transition-transform hover:bg-accent-muted" download${addAttribute(isRtl ? "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0633\u064A\u0631\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629" : "Download Resume", "aria-label")}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> </a> </div> <footer class="bg-secondary border-t border-slate-200 pt-20 pb-10"> <div class="container mx-auto px-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"> <div${addAttribute(isRtl ? "text-right" : "", "class")}> <h3 class="text-xl font-bold mb-6 text-slate-900">${isRtl ? "\u0644\u0646\u0646\u062A\u0648\u0627\u0635\u0644." : "Let's connect."}</h3> <p class="text-slate-600 mb-8 max-w-sm"> ${isRtl ? "\u062A\u062D\u0633\u064A\u0646 \u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u062A\u0643\u0627\u0645\u0644 \u0648\u0645\u0648\u062B\u0648\u0642\u064A\u0629 \u0627\u0644\u0645\u0646\u0635\u0629 \u0644\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0628\u064A\u0626\u064A\u0629 \u0639\u0644\u0649 \u0646\u0637\u0627\u0642 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062A." : "Optimizing integration delivery and platform reliability for enterprise-scale ecosystems."} </p> <div${addAttribute(`flex gap-4 ${isRtl ? "flex-row-reverse justify-start" : ""}`, "class")}> <a${addAttribute(`mailto:${config.email}`, "href")} class="text-slate-500 hover:text-accent transition-colors font-medium">${isRtl ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email"}</a> <a${addAttribute(config.linkedIn, "href")} class="text-slate-500 hover:text-accent transition-colors font-medium">${isRtl ? "\u0644\u064A\u0646\u0643\u062F \u0625\u0646" : "LinkedIn"}</a> </div> </div> <div${addAttribute(isRtl ? "text-right" : "", "class")}> <h4 class="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-6">${isRtl ? "\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u062E\u0628\u0631\u0627\u062A" : "Expertise Taxonomy"}</h4> <div${addAttribute(`flex flex-wrap gap-x-6 gap-y-3 ${isRtl ? "flex-row-reverse justify-start" : ""}`, "class")}> ${config.keywords.map((kw) => renderTemplate`<span class="text-sm font-semibold text-slate-700 hover:text-accent transition-colors cursor-default">${kw}</span>`)} </div> </div> </div> <div${addAttribute(`pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-400 font-bold ${isRtl ? "md:flex-row-reverse" : ""}`, "class")}> <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.name}</p> <p>${isRtl ? "\u0628\u064F\u0646\u064A \u0628\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A" : "Built with AI Assistance"}</p> </div> </div> </footer> </body></html>`;
}, "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, siteConfigAr as a, siteConfig as s };
