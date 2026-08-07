import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as testimonials } from "./SectionHeading-Ch6lScgU.mjs";
import { t as Reveal } from "./Reveal-DqvvsA3G.mjs";
import { o as Star } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-CK7BxbWJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-DWlEzRIH.js
var import_jsx_runtime = require_jsx_runtime();
function TestimonialGrid({ items = testimonials }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: items.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: i * .08,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "flex h-full flex-col rounded-2xl border border-border/70 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 text-gold",
						children: Array.from({ length: t.rating }).map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current" }, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "mt-6 grow font-[family-name:var(--font-display)] text-lg leading-relaxed text-foreground/85 italic",
						children: [
							"“",
							t.quote,
							"”"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-8 border-t border-border/70 pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-foreground",
							children: t.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[10px] tracking-[0.22em] text-muted-foreground uppercase",
							children: t.treatment
						})]
					})
				]
			})
		}, t.name))
	});
}
function TestimonialsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Testimonials",
		title: "In Their Own Words",
		description: "Trust is earned quietly, one consultation at a time."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialGrid, {})
	})] });
}
//#endregion
export { TestimonialsPage as component };
