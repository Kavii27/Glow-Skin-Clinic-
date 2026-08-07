import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as GoldLine, t as CLINIC } from "./SectionHeading-Ch6lScgU.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Reveal } from "./Reveal-DqvvsA3G.mjs";
import { L as ArrowDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ConsultationCTA-CS_bNQT-.js
var import_jsx_runtime = require_jsx_runtime();
function ConsultationCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-charcoal py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-3xl px-5 text-center sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "Ready When You Are"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl leading-[1.15] text-pearl sm:text-4xl",
					children: "Begin With a Private Consultation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-6 w-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldLine, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-pearl/70",
					children: [
						"Every treatment at ",
						CLINIC.name,
						" starts with an honest, physician-led assessment. Tell us a little about your skin and ",
						CLINIC.doctor,
						" will guide you from there."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					hash: "appointment",
					className: "mt-9 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-9 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-soft transition-transform duration-500 hover:scale-[1.03]",
					children: ["Book a Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "h-3.5 w-3.5" })]
				})
			] })
		})
	});
}
//#endregion
export { ConsultationCTA as t };
