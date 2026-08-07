import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-DqvvsA3G.js
var import_jsx_runtime = require_jsx_runtime();
var variants = {
	hidden: {
		opacity: 0,
		y: 28
	},
	visible: (delay) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: .9,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	})
};
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		variants,
		custom: delay,
		initial: "hidden",
		whileInView: "visible",
		viewport: {
			once: true,
			margin: "-80px"
		},
		children
	});
}
//#endregion
export { Reveal as t };
