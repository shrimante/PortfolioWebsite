import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_fVXKcOoa.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_DoHGDnlP.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$HybridRtf = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u0628\u0646\u064A\u0629 RTF \u0627\u0644\u0647\u062C\u064A\u0646\u0629 | \u0633\u0631\u064A\u0645\u0627\u0646 \u062A\u064A\u0631\u0648\u0628\u0627\u062B\u064A \u0625\u064A\u0634\u0648\u0627\u0631\u0627\u0628\u0627" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="container mx-auto px-6 py-24 text-right"> <div class="mb-12"> <a href="/ar/#case-studies" class="text-accent hover:text-slate-900 transition-colors text-sm uppercase tracking-widest font-bold mb-8 inline-block flex items-center flex-row-reverse gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="rotate-180"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
\u0627\u0644\u0631\u062C\u0648\u0639 \u0625\u0644\u0649 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A
</a> <h1 class="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">\u0628\u0646\u064A\u0629 RTF \u0627\u0644\u0647\u062C\u064A\u0646\u0629</h1> <p class="text-slate-600 max-w-2xl text-lg mb-8">
\u0637\u0648\u0628\u0648\u0644\u0648\u062C\u064A\u0627 \u0628\u0646\u064A\u0629 \u0647\u062C\u064A\u0646\u0629 \u0639\u0627\u0645\u0629 \u062A\u0648\u062C\u0647 \u062D\u0631\u0643\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0645\u0648\u0627\u0632\u0646 \u062A\u062D\u0645\u064A\u0644 F5 Big-IP \u0625\u0644\u0649 CloudHub 2.0 \u0623\u0648 \u0645\u062C\u0645\u0648\u0639\u0629 OpenShift \u0645\u062D\u0644\u064A\u0629 \u062A\u0634\u063A\u0644 MuleSoft Runtime Fabric.
</p> <a href="/ar/case-studies/hybrid-mulesoft-platform-rtf-openshift" class="inline-flex items-center flex-row-reverse gap-2 px-6 py-3 bg-accent text-white hover:bg-accent-muted text-[10px] uppercase font-bold tracking-widest rounded-lg transition-all shadow-sm group">
\u0642\u0631\u0627\u0621\u0629 \u062F\u0631\u0627\u0633\u0629 \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:-translate-x-1 transition-transform rotate-180"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> </a> </div> <div class="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 overflow-x-auto diagram-container" dir="ltr"> <div class="mermaid min-w-[800px] flex justify-center">
graph TD
          Client[External Clients / Mobile / Web] --> F5[F5 Big-IP Load Balancer]
          
          subgraph ControlPlane[MuleSoft Anypoint Platform]
              API_Manager[API Manager]
              Runtime_Manager[Runtime Manager]
          end

          subgraph AWS[AWS Region - CloudHub 2.0]
              CH2_Ingress[CloudHub 2.0 Ingress]
              Exp_API[Experience APIs]
              Sys_API_CH[External System APIs]
              CH2_Ingress --> Exp_API
              Exp_API --> Sys_API_CH
          end

          subgraph OnPrem[On-Premise Data Center]
              OpenShift[Red Hat OpenShift Cluster]
              subgraph RTF[Runtime Fabric]
                  RTF_Ingress[RTF Ingress Controller]
                  Process_API[Process / Orchestration APIs]
                  Sys_API_OP[Internal System APIs]
                  RTF_Ingress --> Process_API
                  Process_API --> Sys_API_OP
              end
              Backends[(Legacy DB / ERP / Mainframe)]
              Sys_API_OP --> Backends
          end

          F5 -->|External Traffic| CH2_Ingress
          F5 -->|Internal/Secure Traffic| RTF_Ingress
          
          Sys_API_CH -.->|VPN/Direct Connect| RTF_Ingress
          
          ControlPlane -.->|Management| Exp_API
          ControlPlane -.->|Management| Process_API
          ControlPlane -.->|Management| Sys_API_CH
          ControlPlane -.->|Management| Sys_API_OP

          classDef aws fill:#fff7ed,stroke:#f97316,stroke-width:2px,color:#c2410c;
          classDef onprem fill:#fef2f2,stroke:#ef4444,stroke-width:2px,color:#b91c1c;
          classDef control fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1d4ed8;
          classDef lb fill:#f0fdf4,stroke:#22c55e,stroke-width:2px,color:#15803d;
          
          class AWS aws;
          class OnPrem onprem;
          class ControlPlane control;
          class F5 lb;
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
}, "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/ar/diagrams/hybrid-rtf.astro", void 0);

const $$file = "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/ar/diagrams/hybrid-rtf.astro";
const $$url = "/ar/diagrams/hybrid-rtf";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HybridRtf,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
