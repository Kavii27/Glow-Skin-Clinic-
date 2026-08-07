import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/clinic/page-header";
import { formatDate, patients } from "@/data/clinic";

export const Route = createFileRoute("/patients")({
  head: () => ({
    meta: [
      { title: "Patients — Glow Skin Clinic Admin Portal" },
      {
        name: "description",
        content: "The Glow Skin Clinic patient register with visit history and preferred treatments.",
      },
      { property: "og:title", content: "Patients — Glow Skin Clinic Admin Portal" },
      {
        property: "og:description",
        content: "The Glow Skin Clinic patient register with visit history.",
      },
    ],
  }),
  component: PatientsPage,
});

function PatientsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Register"
        title="Patients"
        description="A discreet record of everyone in the care of the clinic."
      />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {patients.map((patient) => (
          <article
            key={patient.id}
            className="hover-lift animate-rise rounded-3xl border border-border/60 bg-card p-6 shadow-soft"
          >
            <div className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-full gold-gradient font-serif text-lg text-primary-foreground">
                {patient.name.charAt(0)}
              </span>
              <div className="min-w-0">
                <h2 className="truncate font-serif text-2xl text-foreground">{patient.name}</h2>
                <p className="truncate text-xs text-muted-foreground">{patient.email}</p>
              </div>
            </div>
            <dl className="mt-6 space-y-3 border-t border-border/60 pt-5 text-xs">
              {[
                ["Phone", patient.phone],
                ["Visits", String(patient.visits)],
                ["Last visit", formatDate(patient.lastVisit)],
                ["Preferred", patient.preferred],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd className="truncate text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
