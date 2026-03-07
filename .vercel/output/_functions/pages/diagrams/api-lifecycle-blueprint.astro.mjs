import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_fVXKcOoa.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DoHGDnlP.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ApiLifecycleBlueprint = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="container mx-auto px-6 py-24"> <div class="mb-12"> <a href="/#case-studies" class="text-accent hover:text-slate-900 transition-colors text-sm uppercase tracking-widest font-bold mb-8 inline-block">&larr; Back to Portfolio</a> <h1 class="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">API Lifecycle Blueprint</h1> <p class="text-slate-600 max-w-2xl text-lg">
The full-lifecycle API management blueprint on Anypoint Platform. It demonstrates the continuous delivery loop from Design (RAML) and Build (Studio) to Secure (API Manager), Deploy (Runtime Manager), and Monitor (Anypoint Monitoring).
</p> </div> <div class="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 overflow-x-auto diagram-container"> <div class="mermaid min-w-[800px] flex justify-center">
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
  <\/script> `], [" ", `<div class="container mx-auto px-6 py-24"> <div class="mb-12"> <a href="/#case-studies" class="text-accent hover:text-slate-900 transition-colors text-sm uppercase tracking-widest font-bold mb-8 inline-block">&larr; Back to Portfolio</a> <h1 class="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">API Lifecycle Blueprint</h1> <p class="text-slate-600 max-w-2xl text-lg">
The full-lifecycle API management blueprint on Anypoint Platform. It demonstrates the continuous delivery loop from Design (RAML) and Build (Studio) to Secure (API Manager), Deploy (Runtime Manager), and Monitor (Anypoint Monitoring).
</p> </div> <div class="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 overflow-x-auto diagram-container"> <div class="mermaid min-w-[800px] flex justify-center">
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
}, "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/diagrams/api-lifecycle-blueprint.astro", void 0);

const $$file = "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/diagrams/api-lifecycle-blueprint.astro";
const $$url = "/diagrams/api-lifecycle-blueprint";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ApiLifecycleBlueprint,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
