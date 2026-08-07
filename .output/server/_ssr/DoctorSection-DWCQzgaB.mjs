import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as doctor_portrait_default, g as professionalPhilosophy, n as GoldLine, s as doctorProfile, t as CLINIC } from "./SectionHeading-Ch6lScgU.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Reveal } from "./Reveal-DqvvsA3G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DoctorSection-DWCQzgaB.js
var import_jsx_runtime = require_jsx_runtime();
function DoctorSection({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-5 -left-5 hidden h-40 w-40 rounded-tl-2xl border-t border-l border-gold/50 sm:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "group overflow-hidden rounded-2xl shadow-luxe",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: doctor_portrait_default,
							alt: `${CLINIC.doctor}, consultant aesthetic physician`,
							loading: "lazy",
							width: 1024,
							height: 1280,
							className: "aspect-4/5 w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-5 -bottom-5 hidden h-40 w-40 rounded-br-2xl border-r border-b border-gold/50 sm:block" })
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: doctorProfile.heading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl leading-[1.1] sm:text-5xl",
						children: doctorProfile.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[11px] tracking-[0.28em] text-gold uppercase",
						children: doctorProfile.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 w-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldLine, {})
					}),
					(compact ? doctorProfile.paragraphs.slice(0, 1) : doctorProfile.paragraphs).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[15px] leading-relaxed text-muted-foreground first:mt-7",
						children: p
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[15px] leading-relaxed font-medium text-foreground/90",
						children: doctorProfile.closing
					})
				] }),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .12,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 rounded-2xl border border-gold/30 bg-card p-7 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: professionalPhilosophy.eyebrow
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[14px] leading-relaxed text-muted-foreground",
							children: professionalPhilosophy.description
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "rounded-full bg-gold-gradient px-8 py-3.5 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-soft transition-transform duration-500 hover:scale-[1.03]",
							children: "Book Consultation"
						}), compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "rounded-full border border-gold/60 px-8 py-3.5 text-[11px] tracking-[0.26em] uppercase transition-colors duration-500 hover:bg-secondary",
							children: "Full Profile"
						})]
					})
				})
			] })]
		})
	});
}
//#endregion
export { DoctorSection as t };
