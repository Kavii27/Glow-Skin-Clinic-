import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="relative flex size-10 items-center justify-center rounded-full gold-gradient shadow-soft">
        <span className="absolute inset-[3px] rounded-full bg-card/85" />
        <span className="relative font-serif text-lg leading-none text-foreground">G</span>
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-lg tracking-tight text-foreground">
          Glow Skin Clinic
        </span>
        <span className="block text-[0.6rem] tracking-luxe text-muted-foreground">
          Dr. Apeksha Herath
        </span>
      </span>
    </div>
  );
}
