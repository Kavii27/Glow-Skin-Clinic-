import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import { CLINIC, credentials } from "@/lib/clinic-data";
import { Reveal } from "@/components/Reveal";
import { GoldLine } from "@/components/SectionHeading";

export function DoctorSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="absolute -top-5 -left-5 hidden h-40 w-40 rounded-tl-2xl border-t border-l border-gold/50 sm:block" />
            <div className="group overflow-hidden rounded-2xl shadow-luxe">
              <img
                src={doctorPortrait}
                alt={`${CLINIC.doctor}, consultant aesthetic physician`}
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-4/5 w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
            </div>
            <div className="absolute -right-5 -bottom-5 hidden h-40 w-40 rounded-br-2xl border-r border-b border-gold/50 sm:block" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">The Physician</p>
            <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">{CLINIC.doctor}</h2>
            <p className="mt-3 text-[11px] tracking-[0.28em] text-gold uppercase">
              Consultant Aesthetic Physician & Dermatology Practitioner
            </p>
            <div className="mt-6 w-20">
              <GoldLine />
            </div>
            <p className="mt-7 text-[15px] leading-relaxed text-muted-foreground">
              Dr. Apeksha Herath practises aesthetic medicine as a clinical discipline first and an
              art second. Every consultation begins with a full skin assessment — never a menu of
              treatments — so that each protocol is prescribed for your skin, your anatomy and the
              result you genuinely want.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              With advanced training in dermatology, injectables and energy-based devices, she is
              known for restraint: enhancements that look rested and refined, never altered.
            </p>
          </Reveal>

          {!compact && (
            <Reveal delay={0.15}>
              <div className="mt-9 rounded-2xl border border-border/70 bg-card p-7 shadow-soft">
                <p className="eyebrow">Credentials</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {credentials.map((c) => (
                    <li key={c} className="flex gap-3 text-[13px] leading-relaxed text-foreground/80">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-gold-gradient px-8 py-3.5 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-soft transition-transform duration-500 hover:scale-[1.03]"
              >
                Book Consultation
              </Link>
              {compact && (
                <Link
                  to="/about"
                  className="rounded-full border border-gold/60 px-8 py-3.5 text-[11px] tracking-[0.26em] uppercase transition-colors duration-500 hover:bg-secondary"
                >
                  Full Profile
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
