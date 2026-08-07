import { a as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, g as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as galleryImages } from "./SectionHeading-Ch6lScgU.mjs";
import { t as Reveal } from "./Reveal-DqvvsA3G.mjs";
import { n as DialogContent, t as Dialog } from "./dialog-DtqG9M7g.mjs";
import { t as PageHeader } from "./PageHeader-CK7BxbWJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-hOPQOkYH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"All",
	"Clinic",
	"Treatments",
	"Results"
];
function GalleryPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [active, setActive] = (0, import_react.useState)(null);
	const filtered = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Gallery",
			title: "Inside the Clinic",
			description: "A glimpse of our facilities, treatment suites and patient results."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap justify-center gap-3",
				children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter(cat),
					className: `rounded-full border px-6 py-2.5 text-[11px] tracking-[0.22em] uppercase transition-colors duration-300 ${filter === cat ? "border-gold bg-gold-gradient text-primary-foreground" : "border-border/70 text-muted-foreground hover:border-gold/60 hover:text-foreground"}`,
					children: cat
				}, cat))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3",
				children: filtered.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 6 * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActive(img),
						className: "group mb-6 block w-full overflow-hidden rounded-2xl border border-border/70 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.src,
							alt: img.alt,
							loading: "lazy",
							className: "w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
						})
					})
				}, img.src))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!active,
			onOpenChange: (open) => !open && setActive(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
				className: "max-w-4xl border-none bg-transparent p-0 shadow-none",
				children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: active.src,
						alt: active.alt,
						className: "w-full object-contain"
					})
				})
			})
		})
	] });
}
//#endregion
export { GalleryPage as component };
