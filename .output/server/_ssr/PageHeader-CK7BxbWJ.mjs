import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as GoldLine } from "./SectionHeading-Ch6lScgU.mjs";
import { t as ParticleField } from "./ParticleField-CJwk96fg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-CK7BxbWJ.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-secondary/60 pt-36 pb-20 sm:pt-44 sm:pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleField, { count: 12 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-3xl px-5 text-center sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "eyebrow",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					initial: {
						opacity: 0,
						y: 22
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: 1,
						delay: .15,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "mt-4 text-4xl leading-[1.08] sm:text-6xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-7 w-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldLine, {})
				}),
				description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: 1,
						delay: .3,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-muted-foreground",
					children: description
				}) : null
			]
		})]
	});
}
//#endregion
export { PageHeader as t };
