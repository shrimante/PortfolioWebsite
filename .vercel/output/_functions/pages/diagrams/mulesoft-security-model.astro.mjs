import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_fVXKcOoa.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DoHGDnlP.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$MulesoftSecurityModel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="container mx-auto px-6 py-24"> <div class="mb-12"> <a href="/#case-studies" class="text-accent hover:text-slate-900 transition-colors text-sm uppercase tracking-widest font-bold mb-8 inline-block">&larr; Back to Portfolio</a> <h1 class="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">MuleSoft Security Model</h1> <p class="text-slate-600 max-w-2xl text-lg">
A comprehensive security architecture demonstrating OAuth2 Client Credentials flow, JWT enforcement at the API Gateway, and Role-Based Access Control (RBAC) linking Anypoint platform users to granular permissions.
</p> </div> <div class="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 overflow-x-auto diagram-container"> <div class="mermaid min-w-[800px] flex justify-center">
flowchart TD
          Client[Client Application] -->|1. Request Token| AuthZ[OAuth2 Authorization Server]
          AuthZ -->|2. Issue JWT| Client
          Client -->|3. API Request + JWT| Gateway[MuleSoft API Gateway]
          
          Gateway -->|4. Validate Token Signature| AuthZ
          Gateway -->|5. Apply Security Policies| Policy[API Manager Policies]
          Policy -->|6. Forward Request| Backend[(Backend API / Microservice)]

          subgraph RBAC[Anypoint Role-Based Access Control]
            User[Platform User] -->|Assigned To| Role[Custom Role]
            Role -->|Contains| Perm1[API Owner Permission]
            Role -->|Contains| Perm2[Env Admin Permission]
          end

          classDef default fill:#fff,stroke:#cbd5e1,stroke-width:1px,color:#1e293b;
          classDef auth fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1d4ed8;
          classDef gw fill:#f0fdf4,stroke:#22c55e,stroke-width:2px,color:#15803d;
          classDef rbac fill:#fef2f2,stroke:#ef4444,stroke-width:2px,color:#b91c1c;
          
          class AuthZ auth;
          class Gateway gw;
          class RBAC rbac;
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
}, "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/diagrams/mulesoft-security-model.astro", void 0);

const $$file = "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/diagrams/mulesoft-security-model.astro";
const $$url = "/diagrams/mulesoft-security-model";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MulesoftSecurityModel,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
