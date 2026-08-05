import { ArrowDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { GoldLine } from "@/components/SectionHeading";
import { CLINIC } from "@/lib/clinic-data";

export function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 sm:py-28">
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow text-gold">Ready When You Are</p>
          <h2 className="mt-4 text-3xl leading-[1.15] text-pearl sm:text-4xl">
            Begin With a Private Consultation
          </h2>
          <div className="mx-auto mt-6 w-20">
            <GoldLine />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-pearl/70">
            Every treatment at {CLINIC.name} starts with an honest, physician-led assessment.
            Tell us a little about your skin and {CLINIC.doctor} will guide you from there.
          </p>
          <Link
            to="/contact"
            hash="appointment"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-9 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-soft transition-transform duration-500 hover:scale-[1.03]"
          >
            Book a Consultation
            <ArrowDown className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
