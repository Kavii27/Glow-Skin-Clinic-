import { Link } from "@tanstack/react-router";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import { CLINIC, doctorProfile, professionalPhilosophy } from "@/lib/clinic-data";
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
            <p className="eyebrow">{doctorProfile.heading}</p>
            <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">{doctorProfile.name}</h2>
            <p className="mt-3 text-[11px] tracking-[0.28em] text-gold uppercase">
              {doctorProfile.title}
            </p>
            <div className="mt-6 w-20">
              <GoldLine />
            </div>
            {(compact ? doctorProfile.paragraphs.slice(0, 1) : doctorProfile.paragraphs).map(
              (p, i) => (
                <p key={i} className="mt-4 text-[15px] leading-relaxed text-muted-foreground first:mt-7">
                  {p}
                </p>
              ),
            )}
            <p className="mt-4 text-[15px] leading-relaxed font-medium text-foreground/90">
              {doctorProfile.closing}
            </p>
          </Reveal>

          {!compact && (
            <Reveal delay={0.12}>
              <div className="mt-9 rounded-2xl border border-gold/30 bg-card p-7 shadow-soft">
                <p className="eyebrow">{professionalPhilosophy.eyebrow}</p>
                <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                  {professionalPhilosophy.description}
                </p>
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
