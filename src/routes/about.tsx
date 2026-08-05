import { createFileRoute } from "@tanstack/react-router";
import { DoctorSection } from "@/components/DoctorSection";
import { CredentialsGallery } from "@/components/CredentialsGallery";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Dr. Apeksha Herath | Aesthetic Physician — Glow Skin Clinic" },
      {
        name: "description",
        content:
          "Meet Dr. Apeksha Herath — consultant aesthetic physician behind Glow Skin Clinic, with advanced training in dermatology, injectables and laser medicine.",
      },
      { property: "og:title", content: "Dr. Apeksha Herath | Glow Skin Clinic" },
      {
        property: "og:description",
        content:
          "Advanced training in dermatology, injectables and energy-based devices, practised with restraint.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Doctor"
        title="Medicine First, Beauty Always"
        description="A clinical philosophy built on assessment, restraint and results that age well."
      />
      <DoctorSection />
      <CredentialsGallery />
    </>
  );
}
