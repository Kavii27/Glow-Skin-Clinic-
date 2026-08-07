//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-hURwVI_C.js
var manifest = {
	"66b64440c189ce50244b0879ffec532f08b57bdd13aa7ec11622d9baabdd6209": {
		functionName: "bookAppointment_createServerFn_handler",
		importer: () => import("./_ssr/appointments-server-CGg96bCh.mjs")
	},
	"b5c81c0194427fc006fb62e4d5e31e4e456d48c90b84cbb5f8c7a0ac9050a575": {
		functionName: "getBookedSlots_createServerFn_handler",
		importer: () => import("./_ssr/appointments-server-CGg96bCh.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
