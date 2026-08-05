import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Reveal } from "@/components/Reveal";
import { beforeAfterCases } from "@/lib/clinic-data";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Before & After Gallery | Glow Skin Clinic" },
      {
        name: "description",
        content:
          "Documented before and after transformations from pigmentation, anti-aging and skin rejuvenation protocols at Glow Skin Clinic.",
      },
      { property: "og:title", content: "Before & After | Glow Skin Clinic" },
      {
        property: "og:description",
        content: "Real patient results from laser, HIFU and regenerative skin protocols.",
      },
    ],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Before & After"
        title="Transformations, Documented"
        description="Drag each slider to reveal the result. All images are captured under identical clinical lighting, unretouched."
      />
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-2">
          {beforeAfterCases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <BeforeAfterSlider {...c} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-16 max-w-2xl text-center text-[13px] leading-relaxed text-muted-foreground">
            Individual results vary with skin type, age, lifestyle and adherence to the prescribed
            course. During your consultation Dr. Apeksha will discuss realistic outcomes for your
            skin — never more than can be honestly promised.
          </p>
        </Reveal>
      </div>
    </>
  );
}
