import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Search, SlidersHorizontal } from "lucide-react";
import { PageHeader } from "@/components/clinic/page-header";
import { StatusBadge } from "@/components/clinic/status-badge";
import { useClinic } from "@/data/clinic-store";
import { formatDate, type Appointment } from "@/data/clinic";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/appointments")({
  head: () => ({
    meta: [
      { title: "Appointments — Glow Skin Clinic Admin Portal" },
      {
        name: "description",
        content:
          "Review, filter and confirm patient appointments at Glow Skin Clinic by Dr. Apeksha Herath.",
      },
      { property: "og:title", content: "Appointments — Glow Skin Clinic Admin Portal" },
      {
        property: "og:description",
        content: "Review, filter and confirm patient appointments at Glow Skin Clinic.",
      },
    ],
  }),
  component: AppointmentsPage,
});

function AppointmentsPage() {
  const { appointments } = useClinic();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selected, setSelected] = useState<Appointment | null>(null);

  const filtered = useMemo(
    () =>
      appointments.filter((appointment) => {
        const matchesQuery =
          !query ||
          appointment.patient.toLowerCase().includes(query.toLowerCase()) ||
          appointment.treatment.toLowerCase().includes(query.toLowerCase());
        const matchesStatus = status === "all" || appointment.status === status;
        const matchesDate = !date || appointment.date === format(date, "yyyy-MM-dd");
        return matchesQuery && matchesStatus && matchesDate;
      }),
    [appointments, query, status, date],
  );

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Schedule"
        title="Appointments"
        description="Every consultation and treatment booked with the clinic, in one calm view."
      />

      <div className="animate-rise flex flex-col gap-3 rounded-3xl border border-border/60 bg-card p-4 shadow-soft sm:flex-row sm:items-center">
        <div className="group relative flex-1">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary"
            strokeWidth={1.5}
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by patient or treatment"
            className="h-12 w-full rounded-xl border border-border bg-background pl-11 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-4 focus:ring-primary/12"
          />
        </div>

        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="h-12 w-full rounded-xl border-border bg-background text-sm sm:w-48">
            <SlidersHorizontal className="size-3.5 text-bronze" strokeWidth={1.5} />
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="all">All statuses</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger className="inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-background px-4 text-sm text-muted-foreground transition-colors hover:border-primary/60 sm:w-48">
            <CalendarIcon className="size-3.5 text-bronze" strokeWidth={1.5} />
            {date ? format(date, "dd MMM yyyy") : "Any date"}
          </PopoverTrigger>
          <PopoverContent className="w-auto rounded-2xl p-0" align="end">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className={cn("pointer-events-auto p-3")}
            />
            <button
              onClick={() => setDate(undefined)}
              className="w-full border-t border-border/60 py-3 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Clear date
            </button>
          </PopoverContent>
        </Popover>
      </div>

      <div className="animate-rise overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft">
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-secondary/50">
                {["Patient", "Treatment", "Date", "Time", "Status", ""].map((heading) => (
                  <th
                    key={heading}
                    className="px-6 py-4 text-[0.58rem] font-medium tracking-luxe text-muted-foreground"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((appointment, index) => (
                <tr
                  key={appointment.id}
                  className={cn(
                    "border-b border-border/40 transition-colors last:border-0 hover:bg-secondary/40",
                    index % 2 === 1 && "bg-muted/30",
                  )}
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-full bg-secondary font-serif text-sm text-bronze">
                        {appointment.patient.charAt(0)}
                      </span>
                      <div>
                        <p className="text-foreground">{appointment.patient}</p>
                        <p className="text-xs text-muted-foreground">
                          {appointment.patientEmail}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-muted-foreground">{appointment.treatment}</td>
                  <td className="px-6 py-5 text-muted-foreground">
                    {formatDate(appointment.date)}
                  </td>
                  <td className="px-6 py-5 text-muted-foreground">{appointment.time}</td>
                  <td className="px-6 py-5">
                    <StatusBadge status={appointment.status} />
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button
                      onClick={() => setSelected(appointment)}
                      className="rounded-full border border-border px-4 py-2 text-xs text-foreground transition-all hover:border-primary/60 hover:bg-secondary"
                    >
                      View details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="divide-y divide-border/50 md:hidden">
          {filtered.map((appointment) => (
            <button
              key={appointment.id}
              onClick={() => setSelected(appointment)}
              className="flex w-full flex-col gap-3 p-5 text-left transition-colors hover:bg-secondary/40"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-foreground">{appointment.patient}</p>
                  <p className="text-xs text-muted-foreground">{appointment.treatment}</p>
                </div>
                <StatusBadge status={appointment.status} />
              </div>
              <p className="text-xs text-muted-foreground">
                {formatDate(appointment.date)} · {appointment.time}
              </p>
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="p-12 text-center text-sm text-muted-foreground">
            No appointments match these filters.
          </p>
        ) : null}
      </div>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="glass-panel max-w-lg rounded-3xl p-8 shadow-lift">
          <DialogTitle className="font-serif text-3xl font-light text-foreground">
            {selected?.patient}
          </DialogTitle>
          {selected ? (
            <div className="mt-4 space-y-5">
              <StatusBadge status={selected.status} />
              <dl className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Treatment", selected.treatment],
                  ["Date", formatDate(selected.date)],
                  ["Time", selected.time],
                  ["Email", selected.patientEmail],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[0.58rem] tracking-luxe text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="rounded-2xl bg-muted/60 p-5">
                <p className="text-[0.58rem] tracking-luxe text-muted-foreground">Clinic note</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{selected.note}</p>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
