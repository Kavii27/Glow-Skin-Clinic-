import { u as findBlogPostBySlug } from "./_ssr/SectionHeading-Ch6lScgU.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-C__3N1KJ.js
var $$splitComponentImporter = () => import("./_slug-CFYNAES_.mjs");
var Route = createFileRoute("/blog/$slug")({
	head: ({ params }) => {
		const post = findBlogPostBySlug(params.slug);
		return { meta: [{ title: post ? `${post.title} | Glow Skin Clinic` : "Blog | Glow Skin Clinic" }, {
			name: "description",
			content: post?.excerpt ?? "Skincare insight from Glow Skin Clinic."
		}] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
