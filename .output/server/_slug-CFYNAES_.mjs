import { _ as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { u as findBlogPostBySlug } from "./_ssr/SectionHeading-Ch6lScgU.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./_slug-C__3N1KJ.mjs";
import { t as Reveal } from "./_ssr/Reveal-DqvvsA3G.mjs";
import { I as ArrowLeft } from "./_libs/lucide-react.mjs";
import { t as ConsultationCTA } from "./_ssr/ConsultationCTA-CS_bNQT-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CFYNAES_.js
var import_jsx_runtime = require_jsx_runtime();
function formatDate(dateStr) {
	return new Date(dateStr).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});
}
function renderInline(text) {
	return text.split(/(\*\*.+?\*\*)/g).map((part, i) => part.startsWith("**") && part.endsWith("**") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
		className: "font-semibold text-foreground",
		children: part.slice(2, -2)
	}, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, i));
}
function groupContentBlocks(content) {
	const blocks = [];
	for (const line of content) if (line.startsWith("## ")) blocks.push({
		type: "heading",
		text: line.slice(3)
	});
	else if (line.startsWith("- ")) {
		const last = blocks[blocks.length - 1];
		if (last?.type === "list") last.items.push(line.slice(2));
		else blocks.push({
			type: "list",
			items: [line.slice(2)]
		});
	} else blocks.push({
		type: "paragraph",
		text: line
	});
	return blocks;
}
function BlogDetailPage() {
	const { slug } = Route.useParams();
	const post = findBlogPostBySlug(slug);
	if (!post) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative mx-auto max-w-2xl px-5 pt-44 pb-28 text-center sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Not Found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl sm:text-5xl",
				children: "We couldn't find that article"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-[15px] leading-relaxed text-muted-foreground",
				children: "The article you're looking for may have been renamed or moved."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/blog",
				className: "mt-9 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), "Back to Journal"]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative pt-36 pb-16 sm:pt-44",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog",
						className: "inline-flex items-center gap-2 text-[11px] tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:text-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), "Back to Journal"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow mt-8",
						children: [
							post.category,
							" · ",
							formatDate(post.date)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-4xl leading-tight sm:text-5xl",
						children: post.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-[13px] tracking-[0.1em] text-muted-foreground uppercase",
						children: ["By ", post.author]
					})
				] })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl shadow-luxe",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: post.image,
						alt: post.title,
						className: "aspect-16/9 w-full object-cover"
					})
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .15,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "mx-auto max-w-7xl space-y-6 px-5 py-16 text-[15px] leading-relaxed text-foreground/90 sm:px-8",
				children: groupContentBlocks(post.content).map((block, i) => {
					if (block.type === "heading") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "pt-4 font-[family-name:var(--font-display)] text-2xl leading-snug text-foreground sm:text-[28px]",
						children: block.text
					}, i);
					if (block.type === "list") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "list-none space-y-2.5 pl-1",
						children: block.items.map((item, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: renderInline(item) })]
						}, j))
					}, i);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: renderInline(block.text) }, i);
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultationCTA, {})
	] });
}
//#endregion
export { BlogDetailPage as component };
