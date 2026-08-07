import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { PageHeader } from "@/components/clinic/page-header";
import { TreatmentForm } from "@/components/clinic/treatment-form";
import { ConfirmDeleteDialog } from "@/components/clinic/confirm-delete-dialog";
import { useClinic } from "@/data/clinic-store";
import { toast } from "sonner";

export const Route = createFileRoute("/treatments/$id")({
  head: () => ({
    meta: [
      { title: "Edit Treatment — Glow Skin Clinic Admin Portal" },
      {
        name: "description",
        content: "Refine the details, pricing and imagery of an existing Glow Skin Clinic treatment.",
      },
      { property: "og:title", content: "Edit Treatment — Glow Skin Clinic Admin Portal" },
      {
        property: "og:description",
        content: "Refine the details of an existing Glow Skin Clinic treatment.",
      },
    ],
  }),
  component: EditTreatmentPage,
});

function EditTreatmentPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const { treatments, updateTreatment, deleteTreatment } = useClinic();
  const [confirming, setConfirming] = useState(false);

  const treatment = treatments.find((item) => item.id === id);

  if (!treatment) {
    return (
      <div className="rounded-3xl border border-dashed border-border p-16 text-center">
        <h1 className="font-serif text-3xl text-foreground">Treatment not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          It may have been removed from the menu.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Editing"
        title={treatment.name}
        description="Changes appear on the clinic menu as soon as they are saved."
        className="mx-auto max-w-3xl"
        action={
          <button
            onClick={() => setConfirming(true)}
            className="inline-flex items-center gap-2 rounded-full border border-destructive/25 px-6 py-3 text-sm text-destructive transition-colors hover:bg-destructive/10"
          >
            <Trash2 className="size-4" strokeWidth={1.5} />
            Delete
          </button>
        }
      />

      <TreatmentForm
        initial={treatment}
        submitLabel="Save changes"
        onSubmit={(values) => updateTreatment(treatment.id, values)}
      />

      <ConfirmDeleteDialog
        open={confirming}
        onOpenChange={setConfirming}
        name={treatment.name}
        onConfirm={() => {
          deleteTreatment(treatment.id);
          toast.success(`${treatment.name} removed from the menu`);
          navigate({ to: "/treatments" });
        }}
      />
    </div>
  );
}
