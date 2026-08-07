import { useState } from "react";
import { Expand } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { milestones } from "@/lib/clinic-data";

export function CredentialsGallery() {
  const [active, setActive] = useState<(typeof milestones)[number] | null>(null);

  return (
    <section className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Journey timeline */}
        <div>
          <p className="eyebrow text-center">The Journey</p>
          <h3 className="mt-4 text-center font-[family-name:var(--font-display)] text-3xl sm:text-4xl">
            Medical Education to Modern Aesthetic Practice
          </h3>
          <p className="mt-4 text-center text-[13px] text-muted-foreground">
            Tap any certificate to view it in full.
          </p>

          <div className="relative mt-16">
            <div className="absolute top-0 bottom-0 left-6 w-px bg-gold/30 sm:left-1/2 sm:-translate-x-1/2" />
            <div className="space-y-16">
              {milestones.map((m, i) => (
                <Reveal key={m.title} delay={i * 0.08}>
                  <div
                    className={`relative flex flex-col gap-6 pl-16 sm:pl-0 ${
                      i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    } sm:items-center`}
                  >
                    <span className="absolute top-1 left-6 -translate-x-1/2 sm:left-1/2">
                      <span className="block h-3.5 w-3.5 rounded-full border-2 border-gold bg-background shadow-soft" />
                    </span>

                    {/* Certificate card — click to view full certificate, image + title only */}
                    <div className="sm:w-1/2 sm:px-10">
                      <button
                        type="button"
                        onClick={() => setActive(m)}
                        className={`group block w-full overflow-hidden rounded-2xl border border-border/70 bg-card text-left shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-luxe ${
                          i % 2 === 0 ? "sm:ml-auto sm:max-w-sm" : "sm:mr-auto sm:max-w-sm"
                        }`}
                      >
                        <div className={`relative w-full overflow-hidden bg-muted ${m.aspect ?? "aspect-[3/4]"}`}>
                          <img
                            src={m.image}
                            alt={m.title}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                          <span className="absolute top-3 left-3 rounded-full bg-charcoal/80 px-3 py-1 text-[10px] tracking-[0.22em] text-pearl uppercase backdrop-blur-sm">
                            {m.year}
                          </span>
                          <span className="absolute inset-0 flex items-center justify-center bg-charcoal/0 opacity-0 transition-all duration-300 group-hover:bg-charcoal/30 group-hover:opacity-100">
                            <span className="flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-[10px] tracking-[0.18em] text-foreground uppercase shadow-soft">
                              <Expand className="h-3.5 w-3.5" />
                              View
                            </span>
                          </span>
                        </div>
                        <div className="p-4">
                          <h4 className="font-[family-name:var(--font-display)] text-sm leading-snug">
                            {m.title}
                          </h4>
                        </div>
                      </button>
                    </div>

                    {/* Detailed description — sits opposite the certificate card */}
                    <div className="sm:w-1/2 sm:px-10">
                      <div
                        className={`sm:max-w-md ${i % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"}`}
                      >
                        <p className="text-[11px] tracking-[0.22em] text-gold uppercase">
                          {m.year}
                        </p>
                        <h5 className="mt-2 font-[family-name:var(--font-display)] text-lg leading-snug text-foreground">
                          {m.title}
                        </h5>
                        <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
          {active && (
            <div className="overflow-hidden rounded-2xl bg-card">
              <img
                src={active.image}
                alt={active.title}
                className="max-h-[85vh] w-full object-contain"
              />
              <div className="p-5">
                <p className="text-[11px] tracking-[0.22em] text-gold uppercase">{active.year}</p>
                <h4 className="mt-1 font-[family-name:var(--font-display)] text-lg leading-snug">
                  {active.title}
                </h4>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
