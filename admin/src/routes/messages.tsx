import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";
import { PageHeader } from "@/components/clinic/page-header";

export const Route = createFileRoute("/messages")({
  head: () => ({
    meta: [
      { title: "Messages — Glow Skin Clinic Admin Portal" },
      {
        name: "description",
        content: "Patient correspondence for Glow Skin Clinic — arriving in a future release.",
      },
      { property: "og:title", content: "Messages — Glow Skin Clinic Admin Portal" },
      {
        property: "og:description",
        content: "Patient correspondence for Glow Skin Clinic.",
      },
    ],
  }),
  component: MessagesPage,
});

function MessagesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Correspondence"
        title="Messages"
        description="Patient conversations will live here."
      />
      <div className="animate-rise flex flex-col items-center justify-center rounded-3xl border border-border/60 surface-gradient px-8 py-24 text-center shadow-soft">
        <span className="flex size-16 items-center justify-center rounded-full border border-primary/25 bg-card/70 text-primary">
          <MessageSquare className="size-6" strokeWidth={1.2} />
        </span>
        <h2 className="mt-7 font-serif text-3xl text-foreground">Coming shortly</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Secure messaging with patients, consultation follow-ups and aftercare notes are being
          prepared for the portal.
        </p>
      </div>
    </div>
  );
}
