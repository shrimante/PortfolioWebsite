import { c as createComponent, r as renderComponent, a as renderTemplate, d as createAstro, m as maybeRenderHead } from '../../../chunks/astro/server_fVXKcOoa.mjs';
import 'piccolore';
import { g as getCollection } from '../../../chunks/_astro_content_Dh8KftOh.mjs';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_DoHGDnlP.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const projects = await getCollection("projects", ({ id }) => {
    return id.startsWith("ar/");
  });
  return projects.map((project) => ({
    params: { slug: project.slug.split("/").pop() },
    props: { project }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { project } = Astro2.props;
  const { Content } = await project.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${project.data.title} | \u062F\u0631\u0627\u0633\u0629 \u062D\u0627\u0644\u0629` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="container mx-auto px-6 py-24 max-w-4xl text-right"> <a href="/ar/work" class="inline-flex items-center flex-row-reverse gap-2 text-slate-500 hover:text-accent transition-colors mb-12 group text-xs font-bold uppercase tracking-widest"> <span class="transform group-hover:translate-x-1 transition-transform">←</span> رجوع إلى التأثير
</a> <div class="mb-16"> <div class="flex flex-wrap gap-2 mb-6 justify-start flex-row-reverse"> ${project.data.tags.map((tag) => renderTemplate`<span class="text-[10px] font-bold text-accent uppercase tracking-tighter border border-accent/20 bg-accent/5 px-3 py-1 rounded-full"> ${tag} </span>`)} </div> <h1 class="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-l from-slate-900 to-slate-600"> ${project.data.title} </h1> <p class="text-xl text-slate-600 leading-relaxed max-w-2xl mr-auto font-outfit"> ${project.data.description} </p> </div> <div class="prose prose-lg prose-slate max-w-none text-right"> ${renderComponent($$result2, "Content", Content, {})} </div> <div class="mt-24 pt-12 border-t border-slate-200"> <h3 class="text-2xl font-bold text-slate-900 mb-6 font-outfit">هل تهمك التفاصيل التقنية؟</h3> <div class="flex justify-end gap-4"> <a href="mailto:shrimante@gmail.com" class="px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all shadow-md hover:shadow-lg">
ابدأ محادثة
</a> </div> </div> </article> ` })}`;
}, "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/ar/work/[slug].astro", void 0);

const $$file = "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/ar/work/[slug].astro";
const $$url = "/ar/work/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
