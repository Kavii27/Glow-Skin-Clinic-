import { useEffect, useState, type FormEvent } from "react";
import { useSearch } from "@tanstack/react-router";
import { toast } from "sonner";
import { MessageCircle, Send } from "lucide-react";
import { CLINIC, treatmentCategories, whatsappLink } from "@/lib/clinic-data";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ParticleField } from "@/components/ParticleField";

const allTreatments = treatmentCategories.flatMap((c) => c.treatments.map((t) => t.name));

export function AppointmentSection() {
  const search = useSearch({ strict: false }) as { treatment?: string };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    date: "",
    message: "",
  });

  useEffect(() => {
    if (search.treatment && allTreatments.includes(search.treatment)) {
      setForm((f) => ({ ...f, treatment: search.treatment ?? "" }));
    }
  }, [search.treatment]);

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Consultation request received", {
      description: `Thank you, ${form.name.split(" ")[0] || "there"}. Our patient coordinator will call you shortly to confirm.`,
    });
    setForm({ name: "", phone: "", email: "", treatment: "", date: "", message: "" });
  };

  const waMessage = `Hello ${CLINIC.name}, I would like to book a consultation with ${CLINIC.doctor}.`;

  const fieldClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

  return (
    <section id="appointment" className="relative overflow-hidden bg-secondary/50 py-24 sm:py-32">
      <ParticleField count={14} />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Appointments"
            title="Begin Your Consultation"
            description="Share a few details and our patient coordinator will contact you to arrange a private consultation with Dr. Apeksha Herath."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={onSubmit}
            className="mt-14 rounded-2xl border border-border/70 bg-card p-7 shadow-luxe sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="eyebrow">
                  Full Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your name"
                  className={`mt-3 ${fieldClass}`}
                />
              </div>
              <div>
                <label htmlFor="phone" className="eyebrow">
                  Phone
                </label>
                <input
                  id="phone"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+94 7X XXX XXXX"
                  className={`mt-3 ${fieldClass}`}
                />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@email.com"
                  className={`mt-3 ${fieldClass}`}
                />
              </div>
              <div>
                <label htmlFor="date" className="eyebrow">
                  Preferred Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={form.date}
                  onChange={set("date")}
                  className={`mt-3 ${fieldClass}`}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="treatment" className="eyebrow">
                  Treatment of Interest
                </label>
                <select
                  id="treatment"
                  value={form.treatment}
                  onChange={set("treatment")}
                  className={`mt-3 ${fieldClass}`}
                >
                  <option value="">Not sure yet — please advise</option>
                  {allTreatments.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="eyebrow">
                  Your Concern
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us briefly what you would like to address."
                  className={`mt-3 resize-none ${fieldClass}`}
                />
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-soft transition-transform duration-500 hover:scale-[1.02] sm:w-auto"
              >
                <Send className="h-3.5 w-3.5" />
                Request Consultation
              </button>
              <a
                href={whatsappLink(waMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/60 px-8 py-4 text-[11px] tracking-[0.26em] text-foreground uppercase transition-colors duration-500 hover:bg-secondary sm:w-auto"
              >
                <MessageCircle className="h-3.5 w-3.5 text-gold" />
                Book via WhatsApp
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
