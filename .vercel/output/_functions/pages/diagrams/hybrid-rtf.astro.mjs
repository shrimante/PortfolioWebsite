import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_fVXKcOoa.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DoHGDnlP.mjs';
import { $ as $$MermaidDiagram } from '../../chunks/MermaidDiagram_D4IrNU87.mjs';
export { renderers } from '../../renderers.mjs';

const $$HybridRtf = createComponent(($$result, $$props, $$slots) => {
  const diagramSpec = `graph TD
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
  class F5 lb;`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-6 py-24"> <div class="mb-12"> <a href="/#case-studies" class="text-accent hover:text-slate-900 transition-colors text-sm uppercase tracking-widest font-bold mb-8 inline-block">&larr; Back to Portfolio</a> <h1 class="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">Hybrid RTF Architecture</h1> <p class="text-slate-600 max-w-2xl text-lg mb-8">
A generic hybrid architecture topology routing external traffic through an F5 Big-IP Load Balancer to either CloudHub 2.0 or an on-premise OpenShift cluster running MuleSoft Runtime Fabric.
</p> <a href="/case-studies/hybrid-mulesoft-platform-rtf-openshift" class="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white hover:bg-accent-muted text-[10px] uppercase font-bold tracking-widest rounded-lg transition-all shadow-sm group">
Read Full Case Study
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> </a> </div> ${renderComponent($$result2, "MermaidDiagram", $$MermaidDiagram, { "diagram": diagramSpec, "id": "hybrid-rtf-diagram" })} </div> ` })}`;
}, "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/diagrams/hybrid-rtf.astro", void 0);

const $$file = "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/diagrams/hybrid-rtf.astro";
const $$url = "/diagrams/hybrid-rtf";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HybridRtf,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
