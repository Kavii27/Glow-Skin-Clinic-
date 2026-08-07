import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({
  icon: Icon,
  label,
  value,
  hint,
  className,
}: {
  icon: LucideIcon;
  label: string;
  value: string | number;
  hint?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group hover-lift animate-rise rounded-3xl border border-border/60 surface-gradient p-6 shadow-soft",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <span className="flex size-11 items-center justify-center rounded-2xl border border-primary/25 bg-card/70 text-primary transition-transform duration-500 group-hover:scale-105">
          <Icon className="size-[1.15rem]" strokeWidth={1.4} />
        </span>
        <span className="text-[0.58rem] tracking-luxe text-muted-foreground">{label}</span>
      </div>
      <p className="mt-8 font-serif text-4xl text-foreground">{value}</p>
      {hint ? <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
