import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as isValidSlotId } from "./appointment-slots-DiwGfV1N.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/appointments-server-CGg96bCh.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var DATA_FILE_RELATIVE = "data/appointments.json";
async function readAppointments() {
	const { readFile, mkdir } = await import("node:fs/promises");
	const { join, dirname } = await import("node:path");
	const filePath = join(processModule.cwd(), DATA_FILE_RELATIVE);
	try {
		const raw = await readFile(filePath, "utf-8");
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch (err) {
		if (err?.code === "ENOENT") {
			await mkdir(dirname(filePath), { recursive: true });
			return [];
		}
		throw err;
	}
}
async function writeAppointments(appointments) {
	const { writeFile, mkdir } = await import("node:fs/promises");
	const { join, dirname } = await import("node:path");
	const filePath = join(processModule.cwd(), DATA_FILE_RELATIVE);
	await mkdir(dirname(filePath), { recursive: true });
	await writeFile(filePath, JSON.stringify(appointments, null, 2), "utf-8");
}
var writeQueue = Promise.resolve();
function withLock(fn) {
	const result = writeQueue.then(fn, fn);
	writeQueue = result.catch(() => void 0);
	return result;
}
var getBookedSlots_createServerFn_handler = createServerRpc({
	id: "b5c81c0194427fc006fb62e4d5e31e4e456d48c90b84cbb5f8c7a0ac9050a575",
	name: "getBookedSlots",
	filename: "src/lib/appointments-server.ts"
}, (opts) => getBookedSlots.__executeServer(opts));
var getBookedSlots = createServerFn({ method: "GET" }).validator((data) => data).handler(getBookedSlots_createServerFn_handler, async ({ data }) => {
	return (await readAppointments()).filter((a) => a.date === data.date).map((a) => a.slot);
});
var bookAppointment_createServerFn_handler = createServerRpc({
	id: "66b64440c189ce50244b0879ffec532f08b57bdd13aa7ec11622d9baabdd6209",
	name: "bookAppointment",
	filename: "src/lib/appointments-server.ts"
}, (opts) => bookAppointment.__executeServer(opts));
var bookAppointment = createServerFn({ method: "POST" }).validator((data) => data).handler(bookAppointment_createServerFn_handler, async ({ data }) => {
	if (!data.name?.trim() || !data.phone?.trim()) return {
		ok: false,
		error: "Please provide your name and phone number."
	};
	if (!data.date) return {
		ok: false,
		error: "Please select a date."
	};
	if (!data.slot || !isValidSlotId(data.slot)) return {
		ok: false,
		error: "Please select a valid time slot."
	};
	return withLock(async () => {
		const appointments = await readAppointments();
		if (appointments.some((a) => a.date === data.date && a.slot === data.slot)) return {
			ok: false,
			error: "That time slot was just booked by someone else. Please choose another."
		};
		const appointment = {
			id: `${data.date}-${data.slot}-${Math.random().toString(36).slice(2, 9)}`,
			name: data.name.trim(),
			phone: data.phone.trim(),
			email: data.email?.trim() ?? "",
			treatment: data.treatment ?? "",
			message: data.message ?? "",
			date: data.date,
			slot: data.slot,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		appointments.push(appointment);
		await writeAppointments(appointments);
		return {
			ok: true,
			appointment
		};
	});
});
//#endregion
export { bookAppointment_createServerFn_handler, getBookedSlots_createServerFn_handler };
