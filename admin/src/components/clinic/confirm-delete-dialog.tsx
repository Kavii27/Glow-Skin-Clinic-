import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function ConfirmDeleteDialog({
  open,
  onOpenChange,
  name,
  onConfirm,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  name?: string;
  onConfirm: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-panel max-w-md rounded-3xl p-8 shadow-lift">
        <DialogTitle className="font-serif text-3xl font-light text-foreground">
          Remove this treatment?
        </DialogTitle>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {name ? <span className="text-foreground">{name}</span> : "This treatment"} will be
          withdrawn from the clinic menu. This action cannot be undone.
        </p>
        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-full border border-border bg-muted/60 px-6 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
            className="rounded-full bg-destructive px-6 py-3 text-sm text-destructive-foreground shadow-soft transition-all hover:opacity-90"
          >
            Delete treatment
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
