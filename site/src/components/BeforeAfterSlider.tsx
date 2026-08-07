import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfterSlider({
  before,
  after,
  title,
  protocol,
}: {
  before: string;
  after: string;
  title: string;
  protocol: string;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <figure className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-luxe">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] cursor-ew-resize touch-none select-none"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          update(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && update(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <img
          src={after}
          alt={`${title} — after treatment`}
          loading="lazy"
          width={1024}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={before}
            alt={`${title} — before treatment`}
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>


        <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-charcoal/55 px-3 py-1 text-[10px] tracking-[0.24em] text-pearl uppercase backdrop-blur-sm">
          Before
        </span>
        <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-gold-gradient px-3 py-1 text-[10px] tracking-[0.24em] text-primary-foreground uppercase">
          After
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-gold-gradient"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-pearl text-foreground shadow-luxe">
            <MoveHorizontal className="h-4 w-4" />
          </span>
        </div>
      </div>
      <figcaption className="flex items-baseline justify-between gap-4 px-6 py-5">
        <span className="font-[family-name:var(--font-display)] text-xl">{title}</span>
        <span className="shrink-0 text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
          {protocol}
        </span>
      </figcaption>
    </figure>
  );
}
