import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { Hero } from "@/components/Hero";
import { DoctorSection } from "@/components/DoctorSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { FaqSection } from "@/components/FaqSection";
import { beforeAfterCases, testimonials, treatmentCategories } from "@/lib/clinic-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glow Skin Clinic | Luxury Aesthetic Dermatology in Kandy" },
      {
        name: "description",
        content:
          "Reveal your natural glow with advanced medical aesthetic treatments by Dr. Apeksha Herath — laser, anti-aging, skin rejuvenation and body care.",
      },
      { property: "og:title", content: "Glow Skin Clinic | Luxury Aesthetic Dermatology" },
      {
        property: "og:description",
        content:
          "Advanced medical aesthetic treatments by Dr. Apeksha Herath in an exclusive Kandy clinic.",
      },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: Stethoscope,
    title: "Physician-Led",
    text: "Every protocol is prescribed and performed by a qualified medical doctor — never delegated.",
  },
  {
    icon: Sparkles,
    title: "Advanced Technology",
    text: "Pico, HIFU, diode and fractional platforms selected for results and comfort in equal measure.",
  },
  {
    icon: ShieldCheck,
    title: "Discreet & Safe",
    text: "Private suites, sterile medical standards and honest counsel on what you truly need.",
  },
];

function Index() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border/70 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-luxe">
                <p.icon className="h-6 w-6 text-gold" strokeWidth={1.2} />
                <h3 className="mt-6 text-2xl">{p.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <DoctorSection compact />

      <section className="bg-secondary/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Signature Treatments"
              title="Four Pillars of Care"
              description="From regenerative skin therapies to precision laser and refined facial enhancement — each category is built around a full medical assessment."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatmentCategories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08}>
                <Link
                  to="/treatments"
                  hash={c.slug}
                  className="group block h-full overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe"
                >
                  <div className="overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="aspect-4/5 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl leading-snug">{c.title}</h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                      {c.tagline}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[10px] tracking-[0.24em] text-foreground/70 uppercase transition-colors group-hover:text-gold">
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Before & After"
            title="Quietly Remarkable Results"
            description="Drag to reveal. Real protocols, documented under identical clinical lighting."
          />
        </Reveal>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {beforeAfterCases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <BeforeAfterSlider {...c} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-8 py-3.5 text-[11px] tracking-[0.26em] uppercase transition-colors duration-500 hover:bg-secondary"
          >
            View Full Gallery <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <section className="bg-secondary/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="Trusted by Discerning Patients"
            />
          </Reveal>
          <div className="mt-16">
            <TestimonialCarousel items={testimonials} />
          </div>
        </div>
      </section>

      <FaqSection />

      <ConsultationCTA />
    </>
  );
}
