import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_D65J7M9V.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_jFtGhgax.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BxtlERN1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects", ({ id }) => {
    return id.startsWith("ar/");
  });
  projects.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u0627\u0644\u0623\u0639\u0645\u0627\u0644 | \u0633\u0631\u064A\u0645\u0627\u0646 \u062A\u064A\u0631\u0648\u0628\u0627\u062B\u064A \u0625\u064A\u0634\u0648\u0627\u0631\u0627\u0628\u0627" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto px-6 py-24 text-right"> <h1 class="text-4xl font-bold text-slate-900 mb-4">دراسات الحالة</h1> <p class="text-slate-600 mb-12 max-w-2xl ml-auto">تعمق في الهندسة المعمارية التقنية والتحديات والنتائج لأكثر مشاريعي تأثيرًا.</p> <section class="py-12"> <h2 class="text-4xl font-bold text-slate-900 mb-12">التأثير <span class="text-gradient">المعماري</span></h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${projects.map((project) => renderTemplate`<a${addAttribute(`/ar/work/${project.slug.split("/").pop()}`, "href")} class="glass p-8 rounded-3xl group hover:border-accent/40 shadow-sm transition-all border border-slate-200"> <div class="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">دراسة حالة</div> <h3 class="text-2xl font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors">${project.data.title}</h3> <p class="text-slate-600 line-clamp-3 mb-6 leading-relaxed">${project.data.description}</p> <div class="flex flex-wrap gap-2 justify-start flex-row-reverse"> ${project.data.tags.map((tag) => renderTemplate`<span class="text-[10px] font-bold text-slate-500 uppercase tracking-tighter border border-slate-200 bg-slate-100 px-2 py-0.5 rounded"> ${tag} </span>`)} </div> </a>`)} </div> </section> </section> ` })}`;
}, "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/ar/work/index.astro", void 0);

const $$file = "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/ar/work/index.astro";
const $$url = "/ar/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
