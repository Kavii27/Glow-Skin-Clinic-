import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  MessageCircle,
  ShieldAlert,
  Sparkles,
  UserCheck,
} from "lucide-react";
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

        {(treatment.benefits || treatment.idealFor) && (
          <Reveal delay={0.05}>
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {treatment.benefits && (
                <div className="rounded-2xl border border-border/70 bg-card p-7 shadow-soft sm:p-8">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="h-4 w-4 text-gold" />
                    <p className="eyebrow">Key Benefits</p>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {treatment.benefits.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {treatment.idealFor && (
                <div className="rounded-2xl border border-border/70 bg-card p-7 shadow-soft sm:p-8">
                  <div className="flex items-center gap-2.5">
                    <UserCheck className="h-4 w-4 text-gold" />
                    <p className="eyebrow">Ideal For</p>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {treatment.idealFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
        )}

        {treatment.sessions && (
          <Reveal delay={0.08}>
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-gold/30 bg-secondary/60 px-7 py-5 sm:px-8">
              <Clock className="h-4 w-4 shrink-0 text-gold" />
              <p className="text-[14px] leading-relaxed text-foreground">
                <span className="text-muted-foreground">Recommended course: </span>
                {treatment.sessions}
              </p>
            </div>
          </Reveal>
        )}

        {treatment.sideEffects && (
          <Reveal delay={0.1}>
            <div className="mt-5 rounded-2xl border border-border/70 bg-card p-7 shadow-soft sm:p-8">
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="h-4 w-4 text-gold" />
                <p className="eyebrow">Possible Side Effects</p>
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
                As with any medical aesthetic procedure, individual responses vary. These effects are
                typically mild and temporary when the treatment is performed and followed up correctly.
              </p>
              <ul className="mt-4 space-y-3">
                {treatment.sideEffects.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        {treatment.aftercare && (
          <Reveal delay={0.12}>
            <div className="mt-5 rounded-2xl border border-border/70 bg-card p-7 shadow-soft sm:p-8">
              <p className="eyebrow">Aftercare Guidance</p>
              <ul className="mt-5 space-y-3">
                {treatment.aftercare.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[12px] leading-relaxed text-muted-foreground italic">
                General guidance only — always follow the specific aftercare instructions given to you by
                Dr. Apeksha Herath after your consultation.
              </p>
            </div>
          </Reveal>
        )}

        {treatment.resultImage && (
          <Reveal delay={0.15}>
            <div className="mt-16">
              <p className="eyebrow">Before &amp; After</p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl leading-snug sm:text-3xl">
                Real results, medically guided
              </h3>
              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
                {/* NOTE: this is a placeholder photo — see the `resultImage` field on this
                    treatment in src/lib/clinic-data.ts to swap in a real before/after photo. */}
                Individual results vary by skin type, concern and the number of sessions completed.
              </p>
              <figure className="mt-6 max-w-xl overflow-hidden rounded-2xl border border-border/70 bg-card shadow-luxe">
                <img
                  src={treatment.resultImage}
                  alt={`${treatment.name} — before and after result`}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </figure>
            </div>
          </Reveal>
        )}

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
