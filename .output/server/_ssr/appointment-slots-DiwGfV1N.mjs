//#region node_modules/.nitro/vite/services/ssr/assets/appointment-slots-DiwGfV1N.js
var APPOINTMENT_SLOTS = [
	{
		id: "09:00-11:00",
		label: "9 AM - 11 AM"
	},
	{
		id: "11:00-13:00",
		label: "11 AM - 1 PM"
	},
	{
		id: "13:00-15:00",
		label: "1 PM - 3 PM"
	},
	{
		id: "15:00-17:00",
		label: "3 PM - 5 PM"
	},
	{
		id: "17:00-19:00",
		label: "5 PM - 7 PM"
	}
];
function isValidSlotId(id) {
	return APPOINTMENT_SLOTS.some((s) => s.id === id);
}
//#endregion
export { isValidSlotId as n, APPOINTMENT_SLOTS as t };
