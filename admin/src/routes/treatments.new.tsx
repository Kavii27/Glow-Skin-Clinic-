import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/clinic/page-header";
import { TreatmentForm } from "@/components/clinic/treatment-form";
import { useClinic } from "@/data/clinic-store";

export const Route = createFileRoute("/treatments/new")({
  head: () => ({
    meta: [
      { title: "Add Treatment — Glow Skin Clinic Admin Portal" },
      {
        name: "description",
        content: "Add a new treatment to the Glow Skin Clinic menu with pricing and imagery.",
      },
      { property: "og:title", content: "Add Treatment — Glow Skin Clinic Admin Portal" },
      {
        property: "og:description",
        content: "Add a new treatment to the Glow Skin Clinic menu.",
      },
    ],
  }),
  component: AddTreatmentPage,
});

function AddTreatmentPage() {
  const { addTreatment } = useClinic();

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="New service"
        title="Add treatment"
        description="Introduce a new protocol to the clinic menu."
        className="mx-auto max-w-3xl"
      />
      <TreatmentForm onSubmit={addTreatment} submitLabel="Save treatment" />
    </div>
  );
}
