import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/clinic/page-header";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Glow Skin Clinic Admin Portal" },
      {
        name: "description",
        content: "Clinic profile, hours and notification preferences for Glow Skin Clinic.",
      },
      { property: "og:title", content: "Settings — Glow Skin Clinic Admin Portal" },
      {
        property: "og:description",
        content: "Clinic profile, hours and notification preferences.",
      },
    ],
  }),
  component: SettingsPage,
});

const fieldClass =
  "h-12 rounded-xl border-border bg-background text-sm transition-all focus-visible:border-primary/60 focus-visible:ring-4 focus-visible:ring-primary/12";

function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Preferences"
        title="Settings"
        description="How the clinic presents itself and how you are notified."
        className="mx-auto max-w-3xl"
      />

      <div className="mx-auto max-w-3xl space-y-6">
        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft sm:p-8">
          <h2 className="font-serif text-2xl text-foreground">Clinic profile</h2>
          <div className="mt-6 space-y-5">
            <label className="block">
              <span className="mb-2 block text-[0.62rem] tracking-luxe text-muted-foreground">
                Clinic name
              </span>
              <Input defaultValue="Glow Skin Clinic" className={fieldClass} />
            </label>
            <label className="block">
              <span className="mb-2 block text-[0.62rem] tracking-luxe text-muted-foreground">
                Lead practitioner
              </span>
              <Input defaultValue="Dr. Apeksha Herath" className={fieldClass} />
            </label>
            <label className="block">
              <span className="mb-2 block text-[0.62rem] tracking-luxe text-muted-foreground">
                Contact email
              </span>
              <Input defaultValue="hello@glowskinclinic.lk" className={fieldClass} />
            </label>
          </div>
        </section>

        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft sm:p-8">
          <h2 className="font-serif text-2xl text-foreground">Notifications</h2>
          <div className="mt-6 space-y-3">
            {[
              ["New appointment requests", "Notify me the moment a request arrives."],
              ["Daily schedule summary", "A quiet morning digest at 7:00."],
              ["Cancellations", "Alert me when a patient cancels."],
            ].map(([title, description], index) => (
              <div
                key={title}
                className="flex items-center justify-between gap-6 rounded-2xl border border-border/60 bg-muted/40 px-5 py-4"
              >
                <div>
                  <p className="text-sm text-foreground">{title}</p>
                  <p className="text-xs text-muted-foreground">{description}</p>
                </div>
                <Switch defaultChecked={index !== 2} />
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-end pb-4">
          <button className="rounded-full gold-gradient px-10 py-4 text-sm tracking-wide text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-lift hover:brightness-105">
            Save preferences
          </button>
        </div>
      </div>
    </div>
  );
}
