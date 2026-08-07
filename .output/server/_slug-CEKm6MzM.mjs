import { d as findTreatmentBySlug } from "./_ssr/SectionHeading-Ch6lScgU.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CEKm6MzM.js
var $$splitComponentImporter = () => import("./_slug-CbIUzn1T.mjs");
var Route = createFileRoute("/treatments/$slug")({
	head: ({ params }) => {
		const found = findTreatmentBySlug(params.slug);
		return { meta: [{ title: `${found?.treatment.name ?? "Treatment"} | Glow Skin Clinic, Kandy` }, {
			name: "description",
			content: found?.treatment.blurb ?? "Explore this treatment at Glow Skin Clinic."
		}] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
