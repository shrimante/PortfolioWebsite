import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BTp668lt.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_DeQAqPjO.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CAv1gZfy.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects", ({ id }) => !id.startsWith("ar/"));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Work | Sriman Tirupathy Eshwarappa" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto px-6 py-24"> <h1 class="text-4xl font-bold text-slate-900 mb-4">Case Studies</h1> <p class="text-slate-600 mb-12 max-w-2xl">A deep dive into the technical architecture, challenges, and results of my most impactful projects.</p> <section class="container mx-auto px-6 py-24"> <h1 class="text-4xl font-bold text-slate-900 mb-12">Architectural <span class="text-gradient">Impact</span></h1> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${projects.map((project) => renderTemplate`<a${addAttribute(`/work/${project.slug}`, "href")} class="glass p-8 rounded-3xl group hover:border-accent/40 shadow-sm transition-all border border-slate-200"> <div class="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">Case Study</div> <h3 class="text-2xl font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors">${project.data.title}</h3> <p class="text-slate-600 line-clamp-3 mb-6 leading-relaxed">${project.data.description}</p> <div class="flex flex-wrap gap-2"> ${project.data.tags.map((tag) => renderTemplate`<span class="text-[10px] font-bold text-slate-500 uppercase tracking-tighter border border-slate-200 bg-slate-100 px-2 py-0.5 rounded"> ${tag} </span>`)} </div> </a>`)} </div> </section> </section> ` })}`;
}, "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/work/index.astro", void 0);

const $$file = "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/work/index.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
