import {
  Stethoscope,
  GraduationCap,
  Award,
  Syringe,
  ClipboardCheck,
  Sparkles,
  UserCheck,
  ShieldCheck,
  BookOpen,
  Zap,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { whyChoose } from "@/lib/clinic-data";

const icons = [
  Stethoscope,
  GraduationCap,
  Award,
  Syringe,
  ClipboardCheck,
  Sparkles,
  UserCheck,
  ShieldCheck,
  BookOpen,
  Zap,
];

export function WhyChooseSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Patient Trust"
        title="Why Patients Choose Dr. Herath"
        description="A physician-led practice defined by qualification, discipline, and genuine care for every outcome."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {whyChoose.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={item} delay={i * 0.05}>
              <div className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-luxe">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-gradient text-primary-foreground shadow-soft transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-[13px] leading-relaxed font-medium text-foreground/85">
                  {item}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
