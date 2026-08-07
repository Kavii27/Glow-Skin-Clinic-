import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="animate-rise">
        {eyebrow ? (
          <p className="text-[0.62rem] tracking-luxe text-muted-foreground">{eyebrow}</p>
        ) : null}
        <h1 className="mt-2 font-serif text-4xl text-foreground sm:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="animate-rise shrink-0">{action}</div> : null}
    </div>
  );
}
