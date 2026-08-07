import { a as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, g as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ParticleField-CJwk96fg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function makeParticles(count) {
	return Array.from({ length: count }, (_, i) => {
		const r1 = (i * 9301 + 49297) % 233280 / 233280;
		const r2 = (i * 4517 + 1231) % 997 / 997;
		return {
			left: r1 * 100,
			size: 3 + r2 * 7,
			duration: 12 + r1 * 14,
			delay: -(r2 * 20),
			bottom: r2 * 40
		};
	});
}
function ParticleField({ count = 22 }) {
	const particles = (0, import_react.useMemo)(() => makeParticles(count), [count]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: particles.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "particle",
			style: {
				left: `${p.left}%`,
				bottom: `${p.bottom}%`,
				width: `${p.size}px`,
				height: `${p.size}px`,
				animationDuration: `${p.duration}s`,
				animationDelay: `${p.delay}s`
			}
		}, i))
	});
}
//#endregion
export { ParticleField as t };
