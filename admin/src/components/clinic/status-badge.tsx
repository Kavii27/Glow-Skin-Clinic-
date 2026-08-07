import { cn } from "@/lib/utils";
import type { AppointmentStatus } from "@/data/clinic";

const styles: Record<AppointmentStatus, string> = {
  confirmed: "bg-sage/15 text-sage border-sage/30",
  pending: "bg-primary/15 text-bronze border-primary/35",
  completed: "bg-muted text-muted-foreground border-border",
  cancelled: "bg-destructive/10 text-destructive border-destructive/25",
};

const labels: Record<AppointmentStatus, string> = {
  confirmed: "Confirmed",
  pending: "Pending",
  completed: "Completed",
  cancelled: "Cancelled",
};

export function StatusBadge({
  status,
  className,
}: {
  status: AppointmentStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.68rem] font-medium tracking-wide",
        styles[status],
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current opacity-70" />
      {labels[status]}
    </span>
  );
}
