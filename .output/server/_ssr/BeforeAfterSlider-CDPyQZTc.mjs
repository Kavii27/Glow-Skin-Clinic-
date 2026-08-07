import { a as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, g as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { m as MoveHorizontal } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BeforeAfterSlider-CDPyQZTc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BeforeAfterSlider({ before, after, title, protocol }) {
	const [pos, setPos] = (0, import_react.useState)(50);
	const containerRef = (0, import_react.useRef)(null);
	const dragging = (0, import_react.useRef)(false);
	const update = (0, import_react.useCallback)((clientX) => {
		const el = containerRef.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const next = (clientX - rect.left) / rect.width * 100;
		setPos(Math.min(100, Math.max(0, next)));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-luxe",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: containerRef,
			className: "relative aspect-[4/3] cursor-ew-resize touch-none select-none",
			onPointerDown: (e) => {
				dragging.current = true;
				e.currentTarget.setPointerCapture(e.pointerId);
				update(e.clientX);
			},
			onPointerMove: (e) => dragging.current && update(e.clientX),
			onPointerUp: () => dragging.current = false,
			onPointerCancel: () => dragging.current = false,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: after,
					alt: `${title} — after treatment`,
					loading: "lazy",
					width: 1024,
					height: 1024,
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { clipPath: `inset(0 ${100 - pos}% 0 0)` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: before,
						alt: `${title} — before treatment`,
						loading: "lazy",
						width: 1024,
						height: 1024,
						className: "h-full w-full object-cover"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "pointer-events-none absolute top-4 left-4 rounded-full bg-charcoal/55 px-3 py-1 text-[10px] tracking-[0.24em] text-pearl uppercase backdrop-blur-sm",
					children: "Before"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "pointer-events-none absolute top-4 right-4 rounded-full bg-gold-gradient px-3 py-1 text-[10px] tracking-[0.24em] text-primary-foreground uppercase",
					children: "After"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-y-0 w-px bg-gold-gradient",
					style: { left: `${pos}%` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-pearl text-foreground shadow-luxe",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveHorizontal, { className: "h-4 w-4" })
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "flex items-baseline justify-between gap-4 px-6 py-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-[family-name:var(--font-display)] text-xl",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0 text-[10px] tracking-[0.22em] text-muted-foreground uppercase",
				children: protocol
			})]
		})]
	});
}
//#endregion
export { BeforeAfterSlider as t };
