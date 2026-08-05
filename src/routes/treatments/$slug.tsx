import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Clock, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldLine } from "@/components/SectionHeading";
import { CLINIC, findTreatmentBySlug, slugify, whatsappLink } from "@/lib/clinic-data";

export const Route = createFileRoute("/treatments/$slug")({
  head: ({ params }) => {
    const found = findTreatmentBySlug(params.slug);
    const name = found?.treatment.name ?? "Treatment";
    return {
      meta: [
        { title: `${name} | Glow Skin Clinic, Kandy` },
        {
          name: "description",
          content: found?.treatment.blurb ?? "Explore this treatment at Glow Skin Clinic.",
        },
      ],
    };
  },
  component: TreatmentDetailPage,
});

function TreatmentDetailPage() {
  const { slug } = Route.useParams();
  const found = findTreatmentBySlug(slug);

  if (!found) {
    return (
      <section className="relative mx-auto max-w-2xl px-5 pt-44 pb-28 text-center sm:px-8">
        <p className="eyebrow">Not Found</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">We couldn't find that treatment</h1>
        <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
          The treatment you're looking for may have been renamed or moved.
        </p>
        <Link
          to="/treatments"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-soft"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Treatments
        </Link>
      </section>
    );
  }

  const { treatment, category } = found;
  const related = category.treatments.filter((t) => t.name !== treatment.name).slice(0, 3);
  const waMessage = `Hello ${CLINIC.name}, I would like to book "${treatment.name}" with ${CLINIC.doctor}.`;

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
        <img
          src={treatment.image}
          alt={treatment.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="-mt-20 rounded-2xl border border-border/70 bg-card p-7 shadow-luxe sm:-mt-24 sm:p-10">
            <Link
              to="/treatments"
              hash={category.slug}
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {category.title}
            </Link>

            <h1 className="mt-5 text-3xl leading-tight sm:text-5xl">{treatment.name}</h1>
            <div className="mt-5 w-16">
              <GoldLine />
            </div>

            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              {treatment.detail}
            </p>

            <div className="mt-6 flex items-center gap-2 text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              <Clock className="h-3.5 w-3.5 text-gold" />
              {treatment.duration}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                hash="appointment"
                search={{ treatment: treatment.name }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-soft transition-transform duration-500 hover:scale-[1.02] sm:w-auto"
              >
                Book This Treatment
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href={whatsappLink(waMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/60 px-8 py-4 text-[11px] tracking-[0.26em] text-foreground uppercase transition-colors duration-500 hover:bg-secondary sm:w-auto"
              >
                <MessageCircle className="h-3.5 w-3.5 text-gold" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>

        {related.length > 0 && (
          <Reveal delay={0.15}>
            <div className="mt-16 mb-24">
              <p className="eyebrow">Also in {category.title}</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                {related.map((t) => (
                  <Link
                    key={t.name}
                    to="/treatments/$slug"
                    params={{ slug: slugify(t.name) }}
                    className="group flex flex-col overflow-hidden rounded-xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-luxe"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={t.image}
                        alt={t.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-[family-name:var(--font-display)] text-lg leading-snug">
                        {t.name}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
