import { Star } from "lucide-react";
import { testimonials } from "@/lib/clinic-data";
import { Reveal } from "@/components/Reveal";

export function TestimonialGrid({ items = testimonials }: { items?: typeof testimonials }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.08}>
          <figure className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe">
            <div className="flex gap-1 text-gold">
              {Array.from({ length: t.rating }).map((_, s) => (
                <Star key={s} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <blockquote className="mt-6 grow font-[family-name:var(--font-display)] text-lg leading-relaxed text-foreground/85 italic">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-8 border-t border-border/70 pt-5">
              <p className="text-sm text-foreground">{t.name}</p>
              <p className="mt-1 text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                {t.treatment}
              </p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

