import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_fVXKcOoa.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_DoHGDnlP.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$SolaceEventTopology = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u0637\u0648\u0628\u0648\u0644\u0648\u062C\u064A\u0627 \u0623\u062D\u062F\u0627\u062B Solace | \u0633\u0631\u064A\u0645\u0627\u0646 \u062A\u064A\u0631\u0648\u0628\u0627\u062B\u064A \u0625\u064A\u0634\u0648\u0627\u0631\u0627\u0628\u0627" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="container mx-auto px-6 py-24 text-right"> <div class="mb-12"> <a href="/ar/#case-studies" class="text-accent hover:text-slate-900 transition-colors text-sm uppercase tracking-widest font-bold mb-8 inline-block flex items-center flex-row-reverse gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="rotate-180"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
\u0627\u0644\u0631\u062C\u0648\u0639 \u0625\u0644\u0649 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A
</a> <h1 class="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">\u0637\u0648\u0628\u0648\u0644\u0648\u062C\u064A\u0627 \u0623\u062D\u062F\u0627\u062B Solace</h1> <p class="text-slate-600 max-w-2xl text-lg">
\u062A\u0635\u0645\u064A\u0645 \u0628\u0646\u064A\u0629 \u0645\u0639\u0645\u0627\u0631\u064A\u0629 \u0645\u062F\u0641\u0648\u0639\u0629 \u0628\u0627\u0644\u0623\u062D\u062F\u0627\u062B \u064A\u0636\u0645 Solace PubSub+ \u0644\u0625\u0646\u0634\u0627\u0621 "\u0634\u0628\u0643\u0629 \u0623\u062D\u062F\u0627\u062B" (Event Mesh) \u0645\u0648\u0632\u0639\u0629. \u0648\u0647\u0648 \u064A\u0648\u0636\u062D \u0643\u064A\u0641 \u062A\u0642\u0648\u0645 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u063A\u064A\u0631 \u0627\u0644\u0645\u062A\u0631\u0627\u0628\u0637\u0629 \u0628\u0646\u0634\u0631 \u0627\u0644\u0623\u062D\u062F\u0627\u062B \u0641\u064A \u0645\u0648\u0627\u0636\u064A\u0639 \u0645\u062D\u062F\u062F\u0629\u060C \u0648\u0627\u0644\u062A\u064A \u064A\u062A\u0645 \u062A\u0648\u062C\u064A\u0647\u0647\u0627 \u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A\u0627\u064B \u0625\u0644\u0649 \u0642\u0648\u0627\u0626\u0645 \u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0645\u0634\u062A\u0631\u0643\u064A\u0646 \u0627\u0644\u0645\u0633\u062A\u0647\u0644\u0643\u064A\u0646.
</p> </div> <div class="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 overflow-x-auto diagram-container" dir="ltr"> <div class="mermaid min-w-[800px] flex justify-center">
graph LR
          subgraph Publishers[Event Publishers]
            Order[Order Service]
            Billing[Billing Service]
            User[User Service]
          end

          subgraph Mesh[Solace PubSub+ Event Mesh]
            Broker1((Broker Node 1))
            Broker2((Broker Node 2))
            Broker3((Broker Node 3))
            
            Broker1 --- Broker2
            Broker2 --- Broker3
            Broker3 --- Broker1
            
            Topic1[[orders/created]]
            Topic2[[billing/invoice/generated]]
            
            Broker1 -.-> Topic1
            Broker2 -.-> Topic2
          end

          subgraph Subscribers[Event Subscribers]
            Q1[(Order Queue)]
            Q2[(Audit Queue)]
            Q3[(Notification Queue)]
            
            OrderSync[ERP Sync App]
            AuditApp[Audit Logger]
            NotifApp[Email Service]
          end

          Order -->|Publish| Topic1
          Billing -->|Publish| Topic2
          
          Topic1 ==>|Route to Sub| Q1
          Topic1 ==>|Route to Sub| Q2
          Topic2 ==>|Route to Sub| Q3
          
          Q1 -->|Consume| OrderSync
          Q2 -->|Consume| AuditApp
          Q3 -->|Consume| NotifApp

          classDef pub fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1d4ed8;
          classDef sub fill:#f0fdf4,stroke:#22c55e,stroke-width:2px,color:#15803d;
          classDef mesh fill:#fef2f2,stroke:#ef4444,stroke-width:2px,color:#b91c1c;
          
          class Publishers pub;
          class Subscribers sub;
          class Mesh mesh;
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
}, "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/ar/diagrams/solace-event-topology.astro", void 0);

const $$file = "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/ar/diagrams/solace-event-topology.astro";
const $$url = "/ar/diagrams/solace-event-topology";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SolaceEventTopology,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
