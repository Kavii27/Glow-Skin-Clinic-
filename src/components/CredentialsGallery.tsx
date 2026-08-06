import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { milestones, qualifications } from "@/lib/clinic-data";

export function CredentialsGallery() {
  return (
    <section className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Training & Recognition"
          title="Qualifications That Inspire Confidence"
          description="Every certification reflects Dr. Apeksha Herath's commitment to lifelong learning, evidence-based medicine, and delivering safe, natural-looking aesthetic results through internationally recognised training and continuous professional development."
        />

        {/* Qualification cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {qualifications.map((q, i) => (
            <Reveal key={q.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-luxe">
                <p className="text-[10px] tracking-[0.28em] text-gold uppercase">{q.category}</p>
                <h4 className="mt-3 font-[family-name:var(--font-display)] text-xl leading-snug">
                  {q.title}
                </h4>
                {q.institution && (
                  <p className="mt-1 text-[12px] tracking-[0.08em] text-muted-foreground uppercase">
                    {q.institution}
                  </p>
                )}
                <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
                  {q.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Journey timeline */}
        <div className="mt-24">
          <p className="eyebrow text-center">The Journey</p>
          <h3 className="mt-4 text-center font-[family-name:var(--font-display)] text-3xl sm:text-4xl">
            Medical Education to Modern Aesthetic Practice
          </h3>

          <div className="relative mt-16">
            <div className="absolute top-0 bottom-0 left-6 w-px bg-gold/30 sm:left-1/2 sm:-translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={m.title} delay={i * 0.08}>
                  <div
                    className={`relative flex flex-col gap-6 pl-16 sm:pl-0 ${
                      i % 2 === 0
                        ? "sm:flex-row"
                        : "sm:flex-row-reverse"
                    } sm:items-center`}
                  >
                    <span className="absolute top-1 left-6 -translate-x-1/2 sm:left-1/2">
                      <span className="block h-3.5 w-3.5 rounded-full border-2 border-gold bg-background shadow-soft" />
                    </span>

                    <div className="sm:w-1/2 sm:px-10">
                      <div
                        className={`overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft ${
                          i % 2 === 0 ? "sm:ml-auto sm:max-w-md" : "sm:mr-auto sm:max-w-md"
                        }`}
                      >
                        <div className="relative w-full overflow-hidden bg-muted">
                          <img
                            src={m.image}
                            alt={m.title}
                            loading="lazy"
                            className="block h-auto w-full object-cover object-center"
                          />
                          <span className="absolute top-3 left-3 rounded-full bg-charcoal/80 px-3 py-1 text-[10px] tracking-[0.22em] text-pearl uppercase backdrop-blur-sm">
                            {m.year}
                          </span>
                        </div>
                        <div className="p-6">
                          <h4 className="font-[family-name:var(--font-display)] text-lg leading-snug">
                            {m.title}
                          </h4>
                          <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                            {m.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
