import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials as defaultTestimonials } from "@/lib/clinic-data";
import useEmblaCarousel from "embla-carousel-react";

export function TestimonialCarousel({
  items = defaultTestimonials,
}: {
  items?: typeof defaultTestimonials;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* Navigation Header & Controls */}
      <div className="mb-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-8 bg-gold"
                  : "w-2 bg-border/80 hover:bg-gold/50"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 bg-card/80 text-foreground shadow-soft transition-all duration-300 hover:border-gold hover:bg-gold-gradient hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 bg-card/80 text-foreground shadow-soft transition-all duration-300 hover:border-gold hover:bg-gold-gradient hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 active:scale-95"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Viewport */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="-ml-6 flex">
          {items.map((t, i) => (
            <div
              key={i}
              className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/2 lg:basis-1/3"
            >
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-luxe">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-gold">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-gold/30" />
                  </div>
                  <blockquote className="mt-6 font-[family-name:var(--font-display)] text-lg leading-relaxed text-foreground/90 italic">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-8 border-t border-border/70 pt-5">
                  <p className="font-medium text-sm text-foreground">{t.name}</p>
                  <p className="mt-1 text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                    {t.treatment}
                  </p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
