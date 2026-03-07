import { c as createComponent, r as renderComponent, a as renderTemplate, d as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_fVXKcOoa.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_Dh8KftOh.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DoHGDnlP.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const projects = await getCollection("projects", ({ id }) => !id.startsWith("ar/"));
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: { project }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { project } = Astro2.props;
  const { Content } = await project.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${project.data.title} | Case Study` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="container mx-auto px-6 py-24 max-w-4xl"> <a href="/work" class="inline-flex items-center gap-2 text-slate-500 hover:text-accent transition-colors mb-12 group text-xs font-bold uppercase tracking-widest"> <span class="transform group-hover:-translate-x-1 transition-transform">←</span> Back to Impact
</a> <div class="mb-16"> <div class="flex flex-wrap gap-2 mb-6"> ${project.data.tags.map((tag) => renderTemplate`<span class="text-[10px] font-bold text-accent uppercase tracking-tighter border border-accent/20 bg-accent/5 px-3 py-1 rounded-full"> ${tag} </span>`)} </div> <h1 class="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600"> ${project.data.title} </h1> <p class="text-xl text-slate-600 leading-relaxed max-w-2xl font-outfit"> ${project.data.description} </p> </div> <div class="prose prose-lg prose-slate max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </div> <div class="mt-24 pt-12 border-t border-slate-200"> <h3 class="text-2xl font-bold text-slate-900 mb-6 font-outfit">Interested in the technical details?</h3> <div class="flex gap-4"> <a href="mailto:sriman.eshwarappa@gmail.com" class="px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all shadow-md hover:shadow-lg">
Start a conversation
</a> </div> </div> </article> ` })}`;
}, "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/work/[slug].astro", void 0);

const $$file = "C:/ArchitecturePortfolio/Sriman-Architecture-Portfolio/src/pages/work/[slug].astro";
const $$url = "/work/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
