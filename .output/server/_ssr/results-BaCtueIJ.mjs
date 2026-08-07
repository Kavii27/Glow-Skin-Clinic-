import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as beforeAfterCases } from "./SectionHeading-Ch6lScgU.mjs";
import { t as Reveal } from "./Reveal-DqvvsA3G.mjs";
import { t as PageHeader } from "./PageHeader-CK7BxbWJ.mjs";
import { t as BeforeAfterSlider } from "./BeforeAfterSlider-CDPyQZTc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/results-BaCtueIJ.js
var import_jsx_runtime = require_jsx_runtime();
function ResultsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Before & After",
		title: "Transformations, Documented",
		description: "Drag each slider to reveal the result. All images are captured under identical clinical lighting, unretouched."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-10 lg:grid-cols-2",
			children: beforeAfterCases.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfterSlider, { ...c })
			}, c.title))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .2,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-16 max-w-2xl text-center text-[13px] leading-relaxed text-muted-foreground",
				children: "Individual results vary with skin type, age, lifestyle and adherence to the prescribed course. During your consultation Dr. Apeksha will discuss realistic outcomes for your skin — never more than can be honestly promised."
			})
		})]
	})] });
}
//#endregion
export { ResultsPage as component };
