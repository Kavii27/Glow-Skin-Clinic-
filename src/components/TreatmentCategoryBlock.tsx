import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { slugify, type TreatmentCategory } from "@/lib/clinic-data";
import { Reveal } from "@/components/Reveal";
import { GoldLine } from "@/components/SectionHeading";

export function TreatmentCategoryBlock({
  category,
  index,
}: {
  category: TreatmentCategory;
  index: number;
}) {
  return (
    <section id={category.slug} className="scroll-mt-28">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-6 border-b border-border/70 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">0{index + 1} — Category</p>
            <h3 className="mt-4 text-3xl leading-tight sm:text-4xl">{category.title}</h3>
            <div className="mt-5 w-16">
              <GoldLine />
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              {category.tagline}
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.treatments.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.06}>
            <Link
              to="/treatments/$slug"
              params={{ slug: slugify(t.name) }}
              className="group/card flex h-full flex-col overflow-hidden rounded-xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-luxe"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                />
              </div>
              <div className="flex grow flex-col p-6">
                <h4 className="font-[family-name:var(--font-display)] text-xl leading-snug">
                  {t.name}
                </h4>
                <p className="mt-3 grow text-[13px] leading-relaxed text-muted-foreground">
                  {t.blurb}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 self-start text-[10px] tracking-[0.24em] text-foreground/70 uppercase transition-colors group-hover/card:text-gold">
                  View Details
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
