import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_fVXKcOoa.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DoHGDnlP.mjs';
import { $ as $$MermaidDiagram } from '../../chunks/MermaidDiagram_D4IrNU87.mjs';
export { renderers } from '../../renderers.mjs';

const $$EsbToMulesoftMigration = createComponent(($$result, $$props, $$slots) => {
  const title = "Legacy ESB to MuleSoft Migration";
  const teaser = "Modernized a critical legacy integration layer from Informatica ESB to Anypoint Platform, reducing cycle times by 3 weeks and saving $250K annually.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${title} | Sriman Tirupathy Eshwarappa` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="pt-32 pb-24"> <div class="container mx-auto px-6 max-w-5xl"> <a href="/#case-studies" class="inline-flex items-center gap-2 text-accent text-[10px] uppercase font-bold tracking-widest mb-12 hover:translate-x-[-4px] transition-transform"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
Back to Case Studies
</a> <header class="mb-16"> <div class="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold tracking-widest text-accent uppercase bg-accent/5 rounded-full border border-accent/10">
Legacy Modernization
</div> <h1 class="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tighter italic">${title}</h1> <p class="text-xl text-slate-600 leading-relaxed font-outfit max-w-3xl">${teaser}</p> </header> <!-- Quick Summary / Metrics --> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"> <div class="glass p-6 rounded-2xl border-b-4 border-blue-500"> <div class="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Annual Savings</div> <div class="text-2xl font-bold text-slate-900">$250K+</div> </div> <div class="glass p-6 rounded-2xl border-b-4 border-orange-500"> <div class="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Dev Cycle</div> <div class="text-2xl font-bold text-slate-900">-3 Weeks</div> </div> <div class="glass p-6 rounded-2xl border-b-4 border-green-500"> <div class="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Integrations</div> <div class="text-2xl font-bold text-slate-900">150+</div> </div> <div class="glass p-6 rounded-2xl border-b-4 border-purple-500"> <div class="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Downtime</div> <div class="text-2xl font-bold text-slate-900">Zero</div> </div> </div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-16"> <!-- Main Content --> <div class="lg:col-span-8 space-y-16"> <!-- Context & Problem --> <section> <h2 class="text-sm uppercase tracking-widest font-bold text-slate-400 mb-8 flex items-center gap-2"> <span class="w-8 h-[1px] bg-slate-200"></span> Context & Problem
</h2> <div class="space-y-6"> <p class="text-lg text-slate-600 leading-relaxed font-outfit">
The enterprise's legacy Informatica ESB had devolved into a rigid, monolithic bottleneck. With <span class="text-slate-900 font-semibold underline decoration-accent/30">exorbitant licensing costs</span> and an aging bare-metal footprint, simple changes required weeks of risky, manual testing.
</p> <div class="bg-red-50/50 border-l-4 border-red-500 p-6 rounded-r-xl"> <h4 class="text-red-800 font-bold mb-2">The Risk</h4> <p class="text-red-700/80 text-sm italic">Product releases were delayed by months because the core integration layer reached end-of-life status, creating a massive single point of failure for the entire business.</p> </div> </div> </section> <!-- The Approach: Result -> Method --> <section> <h2 class="text-sm uppercase tracking-widest font-bold text-slate-400 mb-8 flex items-center gap-2"> <span class="w-8 h-[1px] bg-slate-200"></span> Strategic Approach
</h2> <div class="grid gap-6"> ${[
    { res: "40% Faster Development", meth: "Built custom Python automation to parse Informatica XML and generate DataWeave 2.0 transformations." },
    { res: "Real-Time Agility", meth: "Replaced sluggish overnight batches with Solace PubSub+ event-driven architecture." },
    { res: "Zero Business Interruption", meth: "Implemented a 'Strangler Fig' pattern with intelligent routing proxies for seamless migration." },
    { res: "Guaranteed Data Integrity", meth: "Deployed an automated MUnit regression suite in CI/CD to handle 100% of legacy edge cases." },
    { res: "Infrastructure Deflection", meth: "Decommissioned 3 racks of bare-metal servers by migrating to target-state cloud runtimes." }
  ].map((item) => renderTemplate`<div class="flex gap-6 p-6 glass rounded-2xl hover:bg-slate-50/50 transition-colors group"> <div class="text-accent mt-1 group-hover:scale-110 transition-transform"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> </div> <div> <div class="text-slate-900 font-bold text-lg mb-1">${item.res}</div> <div class="text-slate-500 text-sm leading-relaxed">${item.meth}</div> </div> </div>`)} </div> </section> <!-- Architecture --> <section> <h2 class="text-sm uppercase tracking-widest font-bold text-slate-400 mb-8 flex items-center gap-2"> <span class="w-8 h-[1px] bg-slate-200"></span> Modernized Architecture
</h2> <div class="mb-4"> ${renderComponent($$result2, "MermaidDiagram", $$MermaidDiagram, { "id": "migration-map", "diagram": `graph LR
                  subgraph Legacy[Legacy ESB Zone]
                    Infor[Informatica ESB]
                    DB_Batch[(Monolithic DB)]
                    Batch[Nightly Batch Job]
                  end

                  subgraph Target[MuleSoft Agile Zone]
                    Solace{Solace PubSub+}
                    Mule[Anypoint Platform]
                    SAPI[System APIs]
                    PAPI[Process APIs]
                  end

                  Legacy -- Strangler Fig Proxy --> Target
                  Batch -- Event-Driven Migration --> Solace
                  Solace --> Mule
                  Mule --> SAPI
                  Mule --> PAPI

                  classDef legacy fill:#f1f5f9,stroke:#94a3b8,stroke-width:1px,color:#64748b;
                  classDef target fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1d4ed8;
                  class Infor,DB_Batch,Batch legacy;
                  class Solace,Mule,SAPI,PAPI target;` }, { "callouts": ($$result3) => renderTemplate`<div> <div class="absolute top-[45%] left-[30%] animate-pulse"> <div class="bg-accent text-white text-[8px] px-2 py-1 rounded shadow-lg font-bold">Strangler Proxy</div> </div> <div class="absolute bottom-[20%] right-[30%] animate-pulse" style="animation-delay: 1s"> <div class="bg-green-600 text-white text-[8px] px-2 py-1 rounded shadow-lg font-bold">API-Led Reuse</div> </div> </div>` })} </div> <p class="text-slate-500 text-xs italic text-center">Reference: Migration path from batch-oriented monolith (Legacy) to event-driven API architecture (MuleSoft).</p> </section> <!-- Retrospective --> <section> <div class="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group"> <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"> <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg> </div> <h3 class="text-xl font-bold mb-6 flex items-center gap-3"> <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-blue-400"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> </div>
Executive Retrospective
</h3> <p class="text-slate-300 text-lg leading-relaxed italic font-outfit">
"If I could redo this, I'd push for a 'big bang' cutover on the simplest 20% of sync services. We over-engineered the 'dual-run' for basic data-syncs that had zero rollback risk, which could have saved us an additional 200+ engineering hours."
</p> </div> </section> </div> <!-- Sidebar / Meta --> <div class="lg:col-span-4 space-y-12"> <!-- Personally Owned --> <div class="glass p-8 rounded-3xl border-l-4 border-accent"> <h3 class="text-slate-900 font-bold mb-6">What I Personally Owned</h3> <ul class="space-y-4"> ${[
    "End-to-End Migration Strategy",
    "Dual-Run Architecture Design",
    "Automated Tooling Development",
    "Executive Stakeholder Alignment",
    "Infrastructure Decommissioning Plan"
  ].map((item) => renderTemplate`<li class="flex items-start gap-3"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="text-accent mt-0.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span class="text-slate-600 text-sm font-semibold">${item}</span> </li>`)} </ul> </div> <!-- Tooling --> <div> <h3 class="text-sm uppercase tracking-widest font-bold text-slate-400 mb-6">Technologies</h3> <div class="flex flex-wrap gap-2"> ${["MuleSoft Anypoint", "Informatica (Legacy)", "Solace PubSub+", "Python", "GitLab CI/CD", "Mainframe", "SAP"].map((tech) => renderTemplate`<span class="px-3 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-200">${tech}</span>`)} </div> </div> <!-- CTA Placeholder --> <div class="bg-accent/5 border border-accent/10 p-8 rounded-3xl text-center"> <div class="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mx-auto mb-4"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> </div> <h4 class="text-slate-900 font-bold mb-2 text-sm">Case Study One-Pager</h4> <p class="text-slate-500 text-xs mb-6">Download the executive summary (NDA Safe PDF).</p> <button class="w-full py-4 bg-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-accent-muted transition-colors shadow-lg shadow-accent/20 cursor-not-allowed opacity-50">
Download Coming Soon
</button> </div> </div> </div> </div> </article> ` })}`;
}, "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/case-studies/esb-to-mulesoft-migration.astro", void 0);

const $$file = "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/case-studies/esb-to-mulesoft-migration.astro";
const $$url = "/case-studies/esb-to-mulesoft-migration";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EsbToMulesoftMigration,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
