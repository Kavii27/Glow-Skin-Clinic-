import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { TestimonialGrid } from "@/components/TestimonialGrid";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient Testimonials | Glow Skin Clinic" },
      {
        name: "description",
        content:
          "Read what patients say about their experience with Dr. Apeksha Herath and the team at Glow Skin Clinic.",
      },
      { property: "og:title", content: "Patient Testimonials | Glow Skin Clinic" },
      {
        property: "og:description",
        content: "Discerning patients on care, comfort and results at Glow Skin Clinic.",
      },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="In Their Own Words"
        description="Trust is earned quietly, one consultation at a time."
      />
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <TestimonialGrid />
      </div>
    </>
  );
}
