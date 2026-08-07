import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as slugify, n as GoldLine, y as treatmentCategories } from "./SectionHeading-Ch6lScgU.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Reveal } from "./Reveal-DqvvsA3G.mjs";
import { P as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-CK7BxbWJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/treatments-BEWJMzBA.js
var import_jsx_runtime = require_jsx_runtime();
function TreatmentCategoryBlock({ category, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: category.slug,
		className: "scroll-mt-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col items-start justify-between gap-6 border-b border-border/70 pb-8 sm:flex-row sm:items-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [
						"0",
						index + 1,
						" — Category"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 text-3xl leading-tight sm:text-4xl",
					children: category.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 w-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldLine, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-sm leading-relaxed text-muted-foreground",
					children: category.tagline
				})
			] })
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: category.treatments.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/treatments/$slug",
					params: { slug: slugify(t.name) },
					className: "group/card flex h-full flex-col overflow-hidden rounded-xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-luxe",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-[4/3] w-full overflow-hidden bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: t.image,
							alt: t.name,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex grow flex-col p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-[family-name:var(--font-display)] text-xl leading-snug",
								children: t.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 grow text-[13px] leading-relaxed text-muted-foreground",
								children: t.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-6 inline-flex items-center gap-2 self-start text-[10px] tracking-[0.24em] text-foreground/70 uppercase transition-colors group-hover/card:text-gold",
								children: ["View Details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
							})
						]
					})]
				})
			}, t.name))
		})]
	});
}
function TreatmentsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Treatments",
		title: "A Considered Menu of Care",
		description: "Nothing here is sold as a package. Each treatment is prescribed after a full consultation and skin assessment."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl space-y-28 px-5 py-24 sm:px-8 sm:py-32",
		children: treatmentCategories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreatmentCategoryBlock, {
			category: c,
			index: i
		}, c.slug))
	})] });
}
//#endregion
export { TreatmentsPage as component };
