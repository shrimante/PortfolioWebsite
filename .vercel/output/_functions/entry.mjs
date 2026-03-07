import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D0g-zDGi.mjs';
import { manifest } from './manifest_Bnw3E906.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/accelerators.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/ar/about.astro.mjs');
const _page5 = () => import('./pages/ar/accelerators.astro.mjs');
const _page6 = () => import('./pages/ar/case-studies/enterprise-api-strategy-governance.astro.mjs');
const _page7 = () => import('./pages/ar/case-studies/esb-to-mulesoft-migration.astro.mjs');
const _page8 = () => import('./pages/ar/case-studies/hybrid-mulesoft-platform-rtf-openshift.astro.mjs');
const _page9 = () => import('./pages/ar/contact.astro.mjs');
const _page10 = () => import('./pages/ar/diagrams/api-lifecycle-blueprint.astro.mjs');
const _page11 = () => import('./pages/ar/diagrams/hybrid-rtf.astro.mjs');
const _page12 = () => import('./pages/ar/diagrams/mulesoft-security-model.astro.mjs');
const _page13 = () => import('./pages/ar/diagrams/solace-event-topology.astro.mjs');
const _page14 = () => import('./pages/ar/leadership.astro.mjs');
const _page15 = () => import('./pages/ar/readings.astro.mjs');
const _page16 = () => import('./pages/ar/resume.astro.mjs');
const _page17 = () => import('./pages/ar/work/_slug_.astro.mjs');
const _page18 = () => import('./pages/ar/work.astro.mjs');
const _page19 = () => import('./pages/ar.astro.mjs');
const _page20 = () => import('./pages/case-studies/enterprise-api-strategy-governance.astro.mjs');
const _page21 = () => import('./pages/case-studies/esb-to-mulesoft-migration.astro.mjs');
const _page22 = () => import('./pages/case-studies/hybrid-mulesoft-platform-deep-dive.astro.mjs');
const _page23 = () => import('./pages/case-studies/hybrid-mulesoft-platform-rtf-openshift.astro.mjs');
const _page24 = () => import('./pages/contact.astro.mjs');
const _page25 = () => import('./pages/diagrams/api-lifecycle-blueprint.astro.mjs');
const _page26 = () => import('./pages/diagrams/hybrid-rtf.astro.mjs');
const _page27 = () => import('./pages/diagrams/mulesoft-security-model.astro.mjs');
const _page28 = () => import('./pages/diagrams/solace-event-topology.astro.mjs');
const _page29 = () => import('./pages/leadership.astro.mjs');
const _page30 = () => import('./pages/readings.astro.mjs');
const _page31 = () => import('./pages/resume.astro.mjs');
const _page32 = () => import('./pages/uae-integration-hub-mulesoft.astro.mjs');
const _page33 = () => import('./pages/work/_slug_.astro.mjs');
const _page34 = () => import('./pages/work.astro.mjs');
const _page35 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/accelerators.astro", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/ar/about.astro", _page4],
    ["src/pages/ar/accelerators.astro", _page5],
    ["src/pages/ar/case-studies/enterprise-api-strategy-governance.astro", _page6],
    ["src/pages/ar/case-studies/esb-to-mulesoft-migration.astro", _page7],
    ["src/pages/ar/case-studies/hybrid-mulesoft-platform-rtf-openshift.astro", _page8],
    ["src/pages/ar/contact.astro", _page9],
    ["src/pages/ar/diagrams/api-lifecycle-blueprint.astro", _page10],
    ["src/pages/ar/diagrams/hybrid-rtf.astro", _page11],
    ["src/pages/ar/diagrams/mulesoft-security-model.astro", _page12],
    ["src/pages/ar/diagrams/solace-event-topology.astro", _page13],
    ["src/pages/ar/leadership.astro", _page14],
    ["src/pages/ar/readings.astro", _page15],
    ["src/pages/ar/resume.astro", _page16],
    ["src/pages/ar/work/[slug].astro", _page17],
    ["src/pages/ar/work/index.astro", _page18],
    ["src/pages/ar/index.astro", _page19],
    ["src/pages/case-studies/enterprise-api-strategy-governance.astro", _page20],
    ["src/pages/case-studies/esb-to-mulesoft-migration.astro", _page21],
    ["src/pages/case-studies/hybrid-mulesoft-platform-deep-dive.astro", _page22],
    ["src/pages/case-studies/hybrid-mulesoft-platform-rtf-openshift.astro", _page23],
    ["src/pages/contact.astro", _page24],
    ["src/pages/diagrams/api-lifecycle-blueprint.astro", _page25],
    ["src/pages/diagrams/hybrid-rtf.astro", _page26],
    ["src/pages/diagrams/mulesoft-security-model.astro", _page27],
    ["src/pages/diagrams/solace-event-topology.astro", _page28],
    ["src/pages/leadership.astro", _page29],
    ["src/pages/readings.astro", _page30],
    ["src/pages/resume.astro", _page31],
    ["src/pages/uae-integration-hub-mulesoft.astro", _page32],
    ["src/pages/work/[slug].astro", _page33],
    ["src/pages/work/index.astro", _page34],
    ["src/pages/index.astro", _page35]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "be3f40d6-1018-4fdd-9e8a-1bf9c5ba533b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
