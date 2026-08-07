import { Link } from "@tanstack/react-router";
import { Clock3, Pencil, Trash2 } from "lucide-react";
import { formatPrice, type Treatment } from "@/data/clinic";

export function TreatmentCard({
  treatment,
  onDelete,
}: {
  treatment: Treatment;
  onDelete: (treatment: Treatment) => void;
}) {
  return (
    <article className="group hover-lift animate-rise overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft">
      <div className="relative aspect-4/3 overflow-hidden bg-secondary">
        <img
          src={treatment.image}
          alt={treatment.name}
          loading="lazy"
          width={800}
          height={600}
          className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-card/85 px-3 py-1 text-[0.6rem] tracking-luxe text-bronze backdrop-blur-sm">
          {treatment.category}
        </span>
        {treatment.status === "draft" ? (
          <span className="absolute right-4 top-4 rounded-full bg-foreground/80 px-3 py-1 text-[0.6rem] tracking-luxe text-background">
            Draft
          </span>
        ) : null}
      </div>

      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-2xl text-foreground">{treatment.name}</h3>
          <span className="shrink-0 text-sm text-bronze">{formatPrice(treatment.price)}</span>
        </div>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
          {treatment.shortDescription}
        </p>
        <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
          <Clock3 className="size-3.5" strokeWidth={1.5} />
          {treatment.duration} minutes
        </div>

        <div className="mt-6 flex gap-2">
          <Link
            to="/treatments/$id"
            params={{ id: treatment.id }}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-xs tracking-wide text-foreground transition-all hover:border-primary/60 hover:bg-secondary"
          >
            <Pencil className="size-3.5" strokeWidth={1.5} />
            Edit
          </Link>
          <button
            onClick={() => onDelete(treatment)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-destructive/25 px-4 py-2.5 text-xs tracking-wide text-destructive transition-all hover:bg-destructive/10"
          >
            <Trash2 className="size-3.5" strokeWidth={1.5} />
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
