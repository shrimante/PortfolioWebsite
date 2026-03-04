# Arabic Localization (i18n) Plan - Full Site

This plan documents the expansion of the Arabic localization to cover all pages on the website, ensuring proper RTL support and technical keyword preservation.

## Proposed Changes

### [Pages]
#### [NEW] [src/pages/ar/about.astro](file:///c:/Portfolio/Sriman-Architecture-Portfolio/src/pages/ar/about.astro)
- Localize the manifesto, leadership principles, and strategic narrative.
- Keep keywords like **MuleSoft**, **Aadhaar/UIDAI**, and **Agentic Enterprise** in English.

#### [NEW] [src/pages/ar/resume.astro](file:///c:/Portfolio/Sriman-Architecture-Portfolio/src/pages/ar/resume.astro)
- Translate the executive summary, experience, and certifications.
- Ensure all technical stacks and metrics are accurately presented in Arabic while maintaining English for technical names.

#### [NEW] [src/pages/ar/leadership.astro](file:///c:/Portfolio/Sriman-Architecture-Portfolio/src/pages/ar/leadership.astro)
- Localize team leadership statistics and outcomes.

#### [NEW] [src/pages/ar/contact.astro](file:///c:/Portfolio/Sriman-Architecture-Portfolio/src/pages/ar/contact.astro)
- Translate contact forms/details.

#### [NEW] [src/pages/ar/work/index.astro](file:///c:/Portfolio/Sriman-Architecture-Portfolio/src/pages/ar/work/index.astro)
#### [NEW] [src/pages/ar/work/[slug].astro](file:///c:/Portfolio/Sriman-Architecture-Portfolio/src/pages/ar/work/[slug].astro)
- Localize the project directory and individual case studies.

#### [NEW] [src/pages/ar/case-studies/](file:///c:/Portfolio/Sriman-Architecture-Portfolio/src/pages/ar/case-studies/)
- Localize specifically deep-dive pages:
  - `enterprise-api-strategy-governance.astro`
  - `esb-to-mulesoft-migration.astro`
  - `hybrid-mulesoft-platform-rtf-openshift.astro`

---

### [Content Collections]
#### [NEW] [src/content/projects/ar/](file:///c:/Portfolio/Sriman-Architecture-Portfolio/src/content/projects/ar/)
- Create Arabic versions of project content files to support localized dynamic routes.

---

## Technical Keyword Strategy
Maintain the following in English for professional clarity:
- Platform Names: **MuleSoft**, **Solace**, **OpenShift**, **AWS**, **GitLab**.
- Role Titles: **Associate Director – Integrations**, **Principal Architect**.
- Technical Terms: **API Governance**, **RTF**, **CI/CD**, **OAuth2**, **mTLS**, **LLM**, **GenAI**.

## Verification Plan
### Manual Verification
- Verify RTL alignment on all new pages.
- Check navigation links (ensure they point to `/ar/` equivalents).
- Validate font rendering for **IBM Plex Sans Arabic**.
