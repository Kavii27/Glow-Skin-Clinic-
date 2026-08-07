import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useSearch } from "@tanstack/react-router";
import { toast } from "sonner";
import { CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
import { CLINIC, treatmentCategories, whatsappLink } from "@/lib/clinic-data";
import { APPOINTMENT_SLOTS } from "@/lib/appointment-slots";
import { bookAppointment, getBookedSlots } from "@/lib/appointments-server";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ParticleField } from "@/components/ParticleField";

const allTreatments = treatmentCategories.flatMap((c) => c.treatments.map((t) => t.name));

const todayIso = () => new Date().toISOString().slice(0, 10);

export function AppointmentSection() {
  const search = useSearch({ strict: false }) as { treatment?: string };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    date: "",
    slot: "",
    message: "",
  });

  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (search.treatment && allTreatments.includes(search.treatment)) {
      setForm((f) => ({ ...f, treatment: search.treatment ?? "" }));
    }
  }, [search.treatment]);

  // Whenever the selected date changes, refresh which slots are already taken.
  useEffect(() => {
    if (!form.date) {
      setBookedSlots([]);
      return;
    }
    let cancelled = false;
    setLoadingSlots(true);
    getBookedSlots({ data: { date: form.date } })
      .then((slots) => {
        if (!cancelled) setBookedSlots(slots);
      })
      .catch(() => {
        if (!cancelled) setBookedSlots([]);
      })
      .finally(() => {
        if (!cancelled) setLoadingSlots(false);
      });
    return () => {
      cancelled = true;
    };
  }, [form.date]);

  // If the previously chosen slot becomes unavailable (e.g. someone else just
  // booked it), clear the selection so the patient must pick another.
  useEffect(() => {
    if (form.slot && bookedSlots.includes(form.slot)) {
      setForm((f) => ({ ...f, slot: "" }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookedSlots]);

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const availableSlots = useMemo(
    () => APPOINTMENT_SLOTS.map((s) => ({ ...s, taken: bookedSlots.includes(s.id) })),
    [bookedSlots],
  );

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.date) {
      toast.error("Please select a preferred date.");
      return;
    }
    if (!form.slot) {
      toast.error("Please select a time slot.");
      return;
    }

    setSubmitting(true);
    try {
      const result = await bookAppointment({
        data: {
          name: form.name,
          phone: form.phone,
          email: form.email,
          treatment: form.treatment,
          message: form.message,
          date: form.date,
          slot: form.slot,
        },
      });

      if (!result.ok) {
        toast.error(result.error);
        // Refresh booked slots in case this failed due to a race condition.
        const refreshed = await getBookedSlots({ data: { date: form.date } });
        setBookedSlots(refreshed);
        return;
      }

      setSubmitted(true);
      toast.success("Consultation request received", {
        description: `Thank you, ${form.name.split(" ")[0] || "there"}. Our team has received your request and will review it soon.`,
      });
      setForm({ name: "", phone: "", email: "", treatment: "", date: "", slot: "", message: "" });
      setBookedSlots([]);
    } catch {
      toast.error("Something went wrong submitting your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const waMessage = `Hello ${CLINIC.name}, I would like to book a consultation with ${CLINIC.doctor}.`;

  const fieldClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <section id="appointment" className="relative overflow-hidden bg-secondary/50 py-24 sm:py-32">
      <ParticleField count={14} />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Appointments"
            title="Begin Your Consultation"
            description="Share a few details and our patient coordinator will contact you to arrange a private consultation with Dr. Apeksha Herath. Clinic hours are 9:00 AM – 7:00 PM."
          />
        </Reveal>

        <Reveal delay={0.15}>
          {submitted ? (
            <div className="mt-14 flex flex-col items-center rounded-2xl border border-gold/40 bg-card p-10 text-center shadow-luxe sm:p-14">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-gold-gradient text-primary-foreground shadow-soft">
                <CheckCircle2 className="h-8 w-8" />
              </span>
              <h3 className="font-display mt-6 text-2xl">
                Request Submitted
              </h3>
              <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                Thank you — your consultation request has been received. Our patient coordinator
                will call you shortly to confirm your appointment.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 px-8 py-3.5 text-[11px] tracking-[0.26em] uppercase transition-colors duration-500 hover:bg-secondary"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
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
                    required
                    type="date"
                    min={todayIso()}
                    value={form.date}
                    onChange={set("date")}
                    className={`mt-3 ${fieldClass}`}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="eyebrow">Preferred Time Slot</label>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Clinic hours: 9:00 AM – 7:00 PM · 2-hour appointment slots
                  </p>
                  {!form.date ? (
                    <p className="mt-4 rounded-lg border border-dashed border-border px-4 py-3 text-[12px] text-muted-foreground">
                      Select a preferred date above to see available time slots.
                    </p>
                  ) : (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {availableSlots.map((s) => {
                        const selected = form.slot === s.id;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            disabled={s.taken || loadingSlots}
                            onClick={() => setForm((f) => ({ ...f, slot: s.id }))}
                            aria-pressed={selected}
                            title={s.label}
                            className={`flex min-w-21 flex-col items-center gap-1 rounded-full border px-5 py-2.5 text-[13px] font-medium transition-colors duration-300 ${
                              s.taken
                                ? "cursor-not-allowed border-border/60 bg-muted text-muted-foreground/45"
                                : selected
                                  ? "border-gold bg-gold-gradient text-primary-foreground shadow-soft"
                                  : "border-border bg-background text-foreground hover:border-gold/60"
                            }`}
                          >
                            <span>{s.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {loadingSlots && (
                    <p className="mt-2 flex items-center gap-2 text-[11px] text-muted-foreground">
                      <Loader2 className="h-3 w-3 animate-spin" /> Checking availability…
                    </p>
                  )}
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
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-soft transition-transform duration-500 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {submitting ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Send className="h-3.5 w-3.5" />
                  )}
                  {submitting ? "Submitting…" : "Request Consultation"}
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
          )}
        </Reveal>
      </div>
    </section>
  );
}
