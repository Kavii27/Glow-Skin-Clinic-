import { createServerFn } from "@tanstack/react-start";
import { isValidSlotId } from "@/lib/appointment-slots";

export type Appointment = {
  id: string;
  name: string;
  phone: string;
  email: string;
  treatment: string;
  message: string;
  date: string; // YYYY-MM-DD
  slot: string; // e.g. "09:00-11:00"
  createdAt: string; // ISO timestamp
};

// Server-only helpers for reading/writing the appointments JSON file.
// Isolated behind isomorphic dynamic imports so this module stays safe to
// import from client components (the Node-only code never runs in the browser).
const DATA_FILE_RELATIVE = "data/appointments.json";

async function readAppointments(): Promise<Appointment[]> {
  const { readFile, mkdir } = await import("node:fs/promises");
  const { join, dirname } = await import("node:path");
  const filePath = join(process.cwd(), DATA_FILE_RELATIVE);
  try {
    const raw = await readFile(filePath, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Appointment[]) : [];
  } catch (err: any) {
    if (err?.code === "ENOENT") {
      await mkdir(dirname(filePath), { recursive: true });
      return [];
    }
    throw err;
  }
}

async function writeAppointments(appointments: Appointment[]): Promise<void> {
  const { writeFile, mkdir } = await import("node:fs/promises");
  const { join, dirname } = await import("node:path");
  const filePath = join(process.cwd(), DATA_FILE_RELATIVE);
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(appointments, null, 2), "utf-8");
}

// A tiny in-process mutex so two near-simultaneous submissions can't both
// read the file before either has written back (classic race condition).
let writeQueue: Promise<unknown> = Promise.resolve();
function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const result = writeQueue.then(fn, fn);
  writeQueue = result.catch(() => undefined);
  return result;
}

export const getBookedSlots = createServerFn({ method: "GET" })
  .validator((data: { date: string }) => data)
  .handler(async ({ data }) => {
    const appointments = await readAppointments();
    return appointments.filter((a) => a.date === data.date).map((a) => a.slot);
  });

export const bookAppointment = createServerFn({ method: "POST" })
  .validator(
    (data: {
      name: string;
      phone: string;
      email: string;
      treatment: string;
      message: string;
      date: string;
      slot: string;
    }) => data,
  )
  .handler(async ({ data }) => {
    if (!data.name?.trim() || !data.phone?.trim()) {
      return { ok: false as const, error: "Please provide your name and phone number." };
    }
    if (!data.date) {
      return { ok: false as const, error: "Please select a date." };
    }
    if (!data.slot || !isValidSlotId(data.slot)) {
      return { ok: false as const, error: "Please select a valid time slot." };
    }

    return withLock(async () => {
      const appointments = await readAppointments();

      const alreadyTaken = appointments.some(
        (a) => a.date === data.date && a.slot === data.slot,
      );
      if (alreadyTaken) {
        return {
          ok: false as const,
          error: "That time slot was just booked by someone else. Please choose another.",
        };
      }

      const appointment: Appointment = {
        id: `${data.date}-${data.slot}-${Math.random().toString(36).slice(2, 9)}`,
        name: data.name.trim(),
        phone: data.phone.trim(),
        email: data.email?.trim() ?? "",
        treatment: data.treatment ?? "",
        message: data.message ?? "",
        date: data.date,
        slot: data.slot,
        createdAt: new Date().toISOString(),
      };

      appointments.push(appointment);
      await writeAppointments(appointments);

      return { ok: true as const, appointment };
    });
  });