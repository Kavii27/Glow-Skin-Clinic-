import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as blogPosts } from "./SectionHeading-Ch6lScgU.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Reveal } from "./Reveal-DqvvsA3G.mjs";
import { F as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-CK7BxbWJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-WEYNQZe_.js
var import_jsx_runtime = require_jsx_runtime();
function formatDate(dateStr) {
	return new Date(dateStr).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});
}
function BlogIndexPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Journal",
		title: "The Glow Journal",
		description: "Skincare insight, treatment guidance and clinic news from Dr. Apeksha Herath."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-3",
			children: blogPosts.map((post, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: post.slug },
					className: "group block h-full overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-luxe",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: post.image,
							alt: post.title,
							loading: "lazy",
							className: "aspect-4/3 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[10px] tracking-[0.24em] text-gold uppercase",
								children: [
									post.category,
									" · ",
									formatDate(post.date)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-xl leading-snug",
								children: post.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[13px] leading-relaxed text-muted-foreground",
								children: post.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-5 inline-flex items-center gap-2 text-[10px] tracking-[0.24em] text-foreground/70 uppercase transition-colors group-hover:text-gold",
								children: ["Read More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})
						]
					})]
				})
			}, post.slug))
		})
	})] });
}
//#endregion
export { BlogIndexPage as component };
