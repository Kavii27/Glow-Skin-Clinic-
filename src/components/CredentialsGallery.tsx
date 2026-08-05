import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { milestones } from "@/lib/clinic-data";

export function CredentialsGallery() {
  return (
    <section className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Training & Recognition"
          title="A Career Built on Proof, Not Promises"
          description="Every credential behind Glow Skin Clinic — from medical school to the latest certification — documented along the way."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-luxe">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                  <img
                    src={m.image}
                    alt={m.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-charcoal/80 px-3 py-1 text-[10px] tracking-[0.22em] text-pearl uppercase backdrop-blur-sm">
                    {m.year}
                  </span>
                </div>
                <div className="flex grow flex-col p-6">
                  <h4 className="font-[family-name:var(--font-display)] text-lg leading-snug">
                    {m.title}
                  </h4>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                    {m.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
