// Clinic operating hours: 9:00 AM – 7:00 PM, in fixed 2-hour appointment slots.
export const APPOINTMENT_SLOTS = [
  { id: "09:00-11:00", label: "9 AM - 11 AM" },
  { id: "11:00-13:00", label: "11 AM - 1 PM" },
  { id: "13:00-15:00", label: "1 PM - 3 PM" },
  { id: "15:00-17:00", label: "3 PM - 5 PM" },
  { id: "17:00-19:00", label: "5 PM - 7 PM" },
] as const;

export type AppointmentSlotId = (typeof APPOINTMENT_SLOTS)[number]["id"];

export function isValidSlotId(id: string): id is AppointmentSlotId {
  return APPOINTMENT_SLOTS.some((s) => s.id === id);
}

export function slotLabel(id: string): string {
  return APPOINTMENT_SLOTS.find((s) => s.id === id)?.label ?? id;
}