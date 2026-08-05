import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { galleryImages, type GalleryImage } from "@/lib/clinic-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Glow Skin Clinic" },
      {
        name: "description",
        content:
          "A look inside Glow Skin Clinic — our treatment suites, facilities and a selection of patient results.",
      },
      { property: "og:title", content: "Gallery | Glow Skin Clinic" },
      {
        property: "og:description",
        content: "A look inside Glow Skin Clinic's treatment suites and facilities.",
      },
    ],
  }),
  component: GalleryPage,
});

const categories = ["All", "Clinic", "Treatments", "Results"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [active, setActive] = useState<GalleryImage | null>(null);

  const filtered =
    filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Inside the Clinic"
        description="A glimpse of our facilities, treatment suites and patient results."
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-6 py-2.5 text-[11px] tracking-[0.22em] uppercase transition-colors duration-300 ${
                  filter === cat
                    ? "border-gold bg-gold-gradient text-primary-foreground"
                    : "border-border/70 text-muted-foreground hover:border-gold/60 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filtered.map((img, i) => (
            <Reveal key={img.src} delay={(i % 6) * 0.06}>
              <button
                type="button"
                onClick={() => setActive(img)}
                className="group mb-6 block w-full overflow-hidden rounded-2xl border border-border/70 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          {active && (
            <div className="overflow-hidden rounded-2xl">
              <img src={active.src} alt={active.alt} className="w-full object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
