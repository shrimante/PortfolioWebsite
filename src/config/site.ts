export const siteConfig = {
  name: "Sriman Tirupathy Eshwarappa",
  title: "Associate Director – Integrations | MuleSoft Platform & API Ecosystems",
  tagline: "I build and run hybrid MuleSoft integration platforms with governance, reliability, and predictable delivery.",
  email: "shrimante@gmail.com",
  linkedIn: "https://www.linkedin.com/in/srimaneshwar/",
  resumePath: "/Sriman_Tirupathy_Eshwarappa_Resume.pdf",
  bookingLink: "/contact",
  location: "Bangalore, India",
  timezone: "IST",
  headshot: {
    enabled: true,
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

  ownership: [
    {
      title: "Platform Engineering",
      description: "Architecting high-availability RTF on OpenShift clusters, CloudHub 2.0 modernization, and elastic hybrid infrastructure.",
      icon: "cpu"
    },
    {
      title: "API Governance & Security",
      description: "Defining policies, RBAC, and full API lifecycle standards across the enterprise.",
      icon: "shield"
    },
    {
      title: "Reliability & DR",
      description: "Establishing observability (Splunk/ELK/Anypoint) and disaster recovery playbooks.",
      icon: "activity"
    },
    {
      title: "Delivery Operating Model",
      description: "Implementing quality gates, release cadence, and ART/PI alignment.",
      icon: "layers"
    }
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
    "Enterprise Architecture", "API Strategy & Governance", "Platform Engineering",
    "Integration Operating Model (C4E)", "Capacity Planning", "Reliability Engineering",
    "MuleSoft Anypoint", "Runtime Fabric", "CloudHub 2.0", "API Manager", "RAML",
    "OAuth2", "TLS", "RBAC", "Solace", "Splunk", "ELK", "OpenShift",
    "Kubernetes", "Disaster Recovery", "GitLab CI/CD"
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
      slug: "mulesoft-error-handling-standard",
      title: "MuleSoft Error Handling Standard",
      repo: "mulesoft-error-handling-standard",
      description: "Reusable, standardized enterprise error handling for Mule 4 APIs.",
      icon: "alert",
      category: "Integration",
      impact: "Reduces MTTR and provides a consistent experience for API consumers.",
      tags: ["Mule 4", "Error Handling", "AOP"],
      hasDetails: true
    },
    {
      title: "Logging & Correlation Standard",
      repo: "mulesoft-logging-correlation-standard",
      description: "JSON structured logging, correlation propagation across service tiers, and out-of-the-box Splunk/ELK/Datadog compatibility.",
      impact: "Provides enterprise-grade observability and simplifies troubleshooting.",
      tags: ["Observability", "Splunk", "ELK"],
      hasDetails: true
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
