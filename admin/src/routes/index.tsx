import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Clock3, Hourglass, Plus, Sparkles } from "lucide-react";
import { StatCard } from "@/components/clinic/stat-card";
import { StatusBadge } from "@/components/clinic/status-badge";
import { useClinic } from "@/data/clinic-store";
import heroImage from "@/assets/hero-glow.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Glow Skin Clinic Admin Portal" },
      {
        name: "description",
        content:
          "Today's appointments, treatment menu and clinic activity for Glow Skin Clinic by Dr. Apeksha Herath.",
      },
      { property: "og:title", content: "Dashboard — Glow Skin Clinic Admin Portal" },
      {
        property: "og:description",
        content: "Today's appointments, treatment menu and clinic activity at a glance.",
      },
    ],
  }),
  component: Dashboard,
});

const TODAY = "2026-08-04";

function Dashboard() {
  const { appointments, treatments } = useClinic();

  const today = appointments.filter((a) => a.date === TODAY && a.status !== "cancelled");
  const pending = appointments.filter((a) => a.status === "pending");
  const active = treatments.filter((t) => t.status === "active");

  return (
    <div className="space-y-8">
      <section className="animate-rise relative overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-soft">
        <img
          src={heroImage}
          alt=""
          width={1280}
          height={720}
          className="absolute inset-0 size-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.99_0.005_90/0.96),oklch(0.97_0.02_85/0.7)_55%,oklch(0.95_0.03_80/0.25))]" />
        <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="text-[0.62rem] tracking-luxe text-bronze">Clinic Management Portal</p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl">
              Good morning,
              <br />
              Dr. Apeksha
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              You have{" "}
              <span className="text-foreground">
                {today.length} appointment{today.length === 1 ? "" : "s"}
              </span>{" "}
              scheduled today, and {pending.length} request
              {pending.length === 1 ? "" : "s"} awaiting your confirmation.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/appointments"
                className="group inline-flex items-center gap-2 rounded-full gold-gradient px-7 py-3.5 text-sm tracking-wide text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-lift hover:brightness-105"
              >
                View today's schedule
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </Link>
              <Link
                to="/treatments/new"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-7 py-3.5 text-sm text-foreground backdrop-blur-sm transition-all hover:border-primary/60 hover:bg-card"
              >
                <Plus className="size-4" strokeWidth={1.5} />
                Add treatment
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card/80 p-7 backdrop-blur-md">
            <p className="text-[0.6rem] tracking-luxe text-muted-foreground">Today</p>
            <p className="mt-4 font-serif text-6xl text-foreground">{today.length}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              appointments · {new Date(`${TODAY}T00:00:00`).toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </p>
            <div className="mt-6 space-y-3 border-t border-border/60 pt-5">
              {today.slice(0, 2).map((appointment) => (
                <div key={appointment.id} className="flex items-center gap-3 text-xs">
                  <Clock3 className="size-3.5 text-primary" strokeWidth={1.5} />
                  <span className="text-foreground">{appointment.time}</span>
                  <span className="truncate text-muted-foreground">{appointment.patient}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={CalendarDays}
          label="Today"
          value={today.length}
          hint="Appointments scheduled"
        />
        <StatCard
          icon={Sparkles}
          label="Menu"
          value={treatments.length}
          hint="Treatments in the clinic menu"
        />
        <StatCard
          icon={Hourglass}
          label="Pending"
          value={pending.length}
          hint="Requests awaiting confirmation"
        />
        <StatCard
          icon={Sparkles}
          label="Active"
          value={active.length}
          hint="Services visible to patients"
        />
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <div className="animate-rise rounded-3xl border border-border/60 bg-card p-6 shadow-soft sm:p-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl text-foreground">Next in the room</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Upcoming appointments across the week.
              </p>
            </div>
            <Link
              to="/appointments"
              className="text-xs text-bronze underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              View all
            </Link>
          </div>

          <ul className="mt-7 divide-y divide-border/60">
            {appointments
              .filter((a) => a.status === "confirmed" || a.status === "pending")
              .slice(0, 5)
              .map((appointment) => (
                <li
                  key={appointment.id}
                  className="flex flex-wrap items-center gap-4 py-4 transition-colors first:pt-0 hover:bg-muted/40"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary font-serif text-lg text-bronze">
                    {appointment.patient.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-foreground">{appointment.patient}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {appointment.treatment}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(`${appointment.date}T00:00:00`).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                    })}{" "}
                    · {appointment.time}
                  </span>
                  <StatusBadge status={appointment.status} />
                </li>
              ))}
          </ul>
        </div>

        <div className="animate-rise rounded-3xl border border-border/60 surface-gradient p-6 shadow-soft sm:p-8">
          <h2 className="font-serif text-3xl text-foreground">Most requested</h2>
          <p className="mt-1 text-xs text-muted-foreground">By bookings this month.</p>
          <ul className="mt-7 space-y-5">
            {active.slice(0, 4).map((treatment, index) => (
              <li key={treatment.id} className="flex items-center gap-4">
                <span className="font-serif text-2xl text-primary/70">0{index + 1}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-foreground">{treatment.name}</p>
                  <p className="text-xs text-muted-foreground">{treatment.category}</p>
                </div>
                <span className="text-xs text-muted-foreground">{treatment.duration}m</span>
              </li>
            ))}
          </ul>
          <Link
            to="/treatments"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-border bg-card/70 py-3.5 text-xs tracking-wide text-foreground transition-all hover:border-primary/60"
          >
            Manage treatments
          </Link>
        </div>
      </section>
    </div>
  );
}
