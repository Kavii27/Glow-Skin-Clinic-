import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { TreatmentCategoryBlock } from "@/components/TreatmentCategoryBlock";
import { treatmentCategories } from "@/lib/clinic-data";

export const Route = createFileRoute("/treatments/")({
  head: () => ({
    meta: [
      { title: "Treatments | Laser, Anti-Aging & Skin Care — Glow Skin Clinic" },
      {
        name: "description",
        content:
          "Explore skin rejuvenation, laser therapy, anti-aging enhancement and body treatments prescribed by Dr. Apeksha Herath at Glow Skin Clinic.",
      },
      { property: "og:title", content: "Treatments | Glow Skin Clinic" },
      {
        property: "og:description",
        content:
          "Hydrafacial, Pico laser, PRP, HIFU, fillers and more — medical aesthetics tailored to your skin.",
      },
    ],
  }),
  component: TreatmentsPage,
});

function TreatmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Treatments"
        title="A Considered Menu of Care"
        description="Nothing here is sold as a package. Each treatment is prescribed after a full consultation and skin assessment."
      />
      <div className="mx-auto max-w-7xl space-y-28 px-5 py-24 sm:px-8 sm:py-32">
        {treatmentCategories.map((c, i) => (
          <TreatmentCategoryBlock key={c.slug} category={c} index={i} />
        ))}
      </div>
    </>
  );
}
