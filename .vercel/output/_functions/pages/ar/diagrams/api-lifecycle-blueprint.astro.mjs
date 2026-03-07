import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_fVXKcOoa.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_DoHGDnlP.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ApiLifecycleBlueprint = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u0645\u062E\u0637\u0637 \u062F\u0648\u0631\u0629 \u062D\u064A\u0627\u0629 \u0627\u0644\u0640 API | \u0633\u0631\u064A\u0645\u0627\u0646 \u062A\u064A\u0631\u0648\u0628\u0627\u062B\u064A \u0625\u064A\u0634\u0648\u0627\u0631\u0627\u0628\u0627" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="container mx-auto px-6 py-24 text-right"> <div class="mb-12"> <a href="/ar/#case-studies" class="text-accent hover:text-slate-900 transition-colors text-sm uppercase tracking-widest font-bold mb-8 inline-block flex items-center flex-row-reverse gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="rotate-180"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
\u0627\u0644\u0631\u062C\u0648\u0639 \u0625\u0644\u0649 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A
</a> <h1 class="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">\u0645\u062E\u0637\u0637 \u062F\u0648\u0631\u0629 \u062D\u064A\u0627\u0629 \u0627\u0644\u0640 API</h1> <p class="text-slate-600 max-w-2xl text-lg">
\u0627\u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u0625\u062F\u0627\u0631\u0629 \u062F\u0648\u0631\u0629 \u062D\u064A\u0627\u0629 \u0627\u0644\u0640 API \u0639\u0644\u0649 \u0645\u0646\u0635\u0629 Anypoint. \u064A\u0648\u0636\u062D \u062D\u0644\u0642\u0629 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0645\u0633\u062A\u0645\u0631 \u0645\u0646 \u0627\u0644\u062A\u0635\u0645\u064A\u0645 (RAML) \u0648\u0627\u0644\u0628\u0646\u0627\u0621 (Studio) \u0625\u0644\u0649 \u0627\u0644\u062A\u0623\u0645\u064A\u0646 (API Manager) \u0648\u0627\u0644\u0646\u0634\u0631 (Runtime Manager) \u0648\u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 (Anypoint Monitoring).
</p> </div> <div class="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 overflow-x-auto diagram-container" dir="ltr"> <div class="mermaid min-w-[800px] flex justify-center">
stateDiagram-v2
          direction LR
          
          Design: 1. Design & Mock
          note right of Design: Design Center (RAML/OAS)\\nExchange (Mocking Service)
          
          Build: 2. Build & Test
          note right of Build: Anypoint Studio\\nMUnit Framework
          
          Secure: 3. Secure & Manage
          note right of Secure: API Manager\\nAutomated Policies
          
          Deploy: 4. CI/CD Deploy
          note right of Deploy: GitHub Actions / Jenkins\\nRuntime Manager (CloudHub)
          
          Monitor: 5. Operate & Monitor
          note right of Monitor: Anypoint Monitoring\\nSplunk Integration
          
          Design --> Build: Publish Asset
          Build --> Secure: Package Artifact
          Secure --> Deploy: Policy Enforcement
          Deploy --> Monitor: Traffic Analytics
          Monitor --> Design: Feedback Loop & Iteration
          
          classDef state fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1d4ed8;
          class Design, Build, Secure, Deploy, Monitor state;
</div> </div> </div> <script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ 
      startOnLoad: true, 
      theme: 'base',
      themeVariables: {
        primaryColor: '#ffffff',
        primaryTextColor: '#1e293b',
        primaryBorderColor: '#cbd5e1',
        lineColor: '#94a3b8',
        secondaryColor: '#f8fafc',
        tertiaryColor: '#f1f5f9',
        fontFamily: 'system-ui, sans-serif'
      }
    });
  <\/script> `], [" ", `<div class="container mx-auto px-6 py-24 text-right"> <div class="mb-12"> <a href="/ar/#case-studies" class="text-accent hover:text-slate-900 transition-colors text-sm uppercase tracking-widest font-bold mb-8 inline-block flex items-center flex-row-reverse gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="rotate-180"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
\u0627\u0644\u0631\u062C\u0648\u0639 \u0625\u0644\u0649 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A
</a> <h1 class="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">\u0645\u062E\u0637\u0637 \u062F\u0648\u0631\u0629 \u062D\u064A\u0627\u0629 \u0627\u0644\u0640 API</h1> <p class="text-slate-600 max-w-2xl text-lg">
\u0627\u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u0625\u062F\u0627\u0631\u0629 \u062F\u0648\u0631\u0629 \u062D\u064A\u0627\u0629 \u0627\u0644\u0640 API \u0639\u0644\u0649 \u0645\u0646\u0635\u0629 Anypoint. \u064A\u0648\u0636\u062D \u062D\u0644\u0642\u0629 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0645\u0633\u062A\u0645\u0631 \u0645\u0646 \u0627\u0644\u062A\u0635\u0645\u064A\u0645 (RAML) \u0648\u0627\u0644\u0628\u0646\u0627\u0621 (Studio) \u0625\u0644\u0649 \u0627\u0644\u062A\u0623\u0645\u064A\u0646 (API Manager) \u0648\u0627\u0644\u0646\u0634\u0631 (Runtime Manager) \u0648\u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 (Anypoint Monitoring).
</p> </div> <div class="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 overflow-x-auto diagram-container" dir="ltr"> <div class="mermaid min-w-[800px] flex justify-center">
stateDiagram-v2
          direction LR
          
          Design: 1. Design & Mock
          note right of Design: Design Center (RAML/OAS)\\\\nExchange (Mocking Service)
          
          Build: 2. Build & Test
          note right of Build: Anypoint Studio\\\\nMUnit Framework
          
          Secure: 3. Secure & Manage
          note right of Secure: API Manager\\\\nAutomated Policies
          
          Deploy: 4. CI/CD Deploy
          note right of Deploy: GitHub Actions / Jenkins\\\\nRuntime Manager (CloudHub)
          
          Monitor: 5. Operate & Monitor
          note right of Monitor: Anypoint Monitoring\\\\nSplunk Integration
          
          Design --> Build: Publish Asset
          Build --> Secure: Package Artifact
          Secure --> Deploy: Policy Enforcement
          Deploy --> Monitor: Traffic Analytics
          Monitor --> Design: Feedback Loop & Iteration
          
          classDef state fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1d4ed8;
          class Design, Build, Secure, Deploy, Monitor state;
</div> </div> </div> <script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ 
      startOnLoad: true, 
      theme: 'base',
      themeVariables: {
        primaryColor: '#ffffff',
        primaryTextColor: '#1e293b',
        primaryBorderColor: '#cbd5e1',
        lineColor: '#94a3b8',
        secondaryColor: '#f8fafc',
        tertiaryColor: '#f1f5f9',
        fontFamily: 'system-ui, sans-serif'
      }
    });
  <\/script> `])), maybeRenderHead()) })}`;
}, "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/ar/diagrams/api-lifecycle-blueprint.astro", void 0);

const $$file = "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/ar/diagrams/api-lifecycle-blueprint.astro";
const $$url = "/ar/diagrams/api-lifecycle-blueprint";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ApiLifecycleBlueprint,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
