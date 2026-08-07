import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/clinic/page-header";
import { TreatmentCard } from "@/components/clinic/treatment-card";
import { ConfirmDeleteDialog } from "@/components/clinic/confirm-delete-dialog";
import { useClinic } from "@/data/clinic-store";
import type { Treatment } from "@/data/clinic";
import { toast } from "sonner";

export const Route = createFileRoute("/treatments/")({
  head: () => ({
    meta: [
      { title: "Treatments — Glow Skin Clinic Admin Portal" },
      {
        name: "description",
        content:
          "Curate the treatment menu of Glow Skin Clinic — facials, injectables, laser and skin health protocols.",
      },
      { property: "og:title", content: "Treatments — Glow Skin Clinic Admin Portal" },
      {
        property: "og:description",
        content: "Curate the treatment menu of Glow Skin Clinic.",
      },
    ],
  }),
  component: TreatmentsPage,
});

function TreatmentsPage() {
  const { treatments, deleteTreatment } = useClinic();
  const [pendingDelete, setPendingDelete] = useState<Treatment | null>(null);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="The menu"
        title="Treatments"
        description="Each service is presented to patients exactly as it appears here."
        action={
          <Link
            to="/treatments/new"
            className="inline-flex items-center gap-2 rounded-full gold-gradient px-7 py-3.5 text-sm tracking-wide text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-lift hover:brightness-105"
          >
            <Plus className="size-4" strokeWidth={1.5} />
            Add treatment
          </Link>
        }
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {treatments.map((treatment) => (
          <TreatmentCard
            key={treatment.id}
            treatment={treatment}
            onDelete={setPendingDelete}
          />
        ))}
      </div>

      {treatments.length === 0 ? (
        <p className="rounded-3xl border border-dashed border-border p-16 text-center text-sm text-muted-foreground">
          The menu is empty. Add your first treatment to begin.
        </p>
      ) : null}

      <ConfirmDeleteDialog
        open={Boolean(pendingDelete)}
        onOpenChange={(open) => !open && setPendingDelete(null)}
        {...(pendingDelete ? { name: pendingDelete.name } : {})}
        onConfirm={() => {
          if (!pendingDelete) return;
          deleteTreatment(pendingDelete.id);
          toast.success(`${pendingDelete.name} removed from the menu`);
        }}
      />
    </div>
  );
}
