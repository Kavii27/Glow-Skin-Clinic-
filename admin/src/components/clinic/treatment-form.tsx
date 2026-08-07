import { useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ImagePlus, Plus, X } from "lucide-react";
import { treatmentCategories, type Treatment, type TreatmentStatus } from "@/data/clinic";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import defaultImage from "@/assets/treatment-1.jpg";

const fieldClass =
  "h-12 rounded-xl border-border bg-background text-sm shadow-none transition-all focus-visible:border-primary/60 focus-visible:ring-4 focus-visible:ring-primary/12";

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft sm:p-8">
      <div className="mb-6">
        <h2 className="font-serif text-2xl text-foreground">{title}</h2>
        {description ? (
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        ) : null}
      </div>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.62rem] tracking-luxe text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

export function TreatmentForm({
  initial,
  onSubmit,
  submitLabel,
}: {
  initial?: Treatment;
  onSubmit: (treatment: Omit<Treatment, "id">) => void;
  submitLabel: string;
}) {
  const navigate = useNavigate();
  const [name, setName] = useState(initial?.name ?? "");
  const [category, setCategory] = useState<string>(initial?.category ?? "Facial Aesthetics");
  const [price, setPrice] = useState(initial ? String(initial.price) : "");
  const [duration, setDuration] = useState(initial ? String(initial.duration) : "");
  const [shortDescription, setShortDescription] = useState(initial?.shortDescription ?? "");
  const [fullDescription, setFullDescription] = useState(initial?.fullDescription ?? "");
  const [benefits, setBenefits] = useState<string[]>(initial?.benefits ?? [""]);
  const [image, setImage] = useState(initial?.image ?? defaultImage);
  const [status, setStatus] = useState<TreatmentStatus>(initial?.status ?? "active");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim()) {
      toast.error("Please give the treatment a name.");
      return;
    }
    onSubmit({
      name: name.trim(),
      category,
      price: Number(price) || 0,
      duration: Number(duration) || 0,
      shortDescription: shortDescription.trim(),
      fullDescription: fullDescription.trim(),
      benefits: benefits.map((b) => b.trim()).filter(Boolean),
      image,
      status,
    });
    toast.success(initial ? "Treatment updated" : "Treatment added to the menu");
    navigate({ to: "/treatments" });
  };

  const handleImage = (file?: File) => {
    if (!file) return;
    setImage(URL.createObjectURL(file));
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-3xl space-y-6">
      <Section title="Essentials" description="How this treatment appears on the clinic menu.">
        <Field label="Treatment name">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Signature Glow Facial"
            className={fieldClass}
          />
        </Field>

        <Field label="Category">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className={`${fieldClass} w-full`}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {treatmentCategories.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Price (LKR)">
            <Input
              value={price}
              onChange={(e) => setPrice(e.target.value.replace(/[^0-9]/g, ""))}
              inputMode="numeric"
              placeholder="18500"
              className={fieldClass}
            />
          </Field>
          <Field label="Duration (minutes)">
            <Input
              value={duration}
              onChange={(e) => setDuration(e.target.value.replace(/[^0-9]/g, ""))}
              inputMode="numeric"
              placeholder="75"
              className={fieldClass}
            />
          </Field>
        </div>
      </Section>

      <Section title="Description" description="Written in the clinic's editorial voice.">
        <Field label="Short description">
          <Textarea
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            rows={2}
            placeholder="A bespoke resurfacing ritual for luminous, quiet radiance."
            className="rounded-xl border-border bg-background text-sm transition-all focus-visible:border-primary/60 focus-visible:ring-4 focus-visible:ring-primary/12"
          />
        </Field>
        <Field label="Full description">
          <Textarea
            value={fullDescription}
            onChange={(e) => setFullDescription(e.target.value)}
            rows={5}
            placeholder="Describe the protocol, the experience and the aftercare."
            className="rounded-xl border-border bg-background text-sm transition-all focus-visible:border-primary/60 focus-visible:ring-4 focus-visible:ring-primary/12"
          />
        </Field>
      </Section>

      <Section title="Benefits" description="Three concise outcomes work best.">
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <Input
                value={benefit}
                onChange={(e) =>
                  setBenefits((prev) =>
                    prev.map((item, i) => (i === index ? e.target.value : item)),
                  )
                }
                placeholder="Immediate luminosity"
                className={fieldClass}
              />
              {benefits.length > 1 ? (
                <button
                  type="button"
                  onClick={() => setBenefits((prev) => prev.filter((_, i) => i !== index))}
                  className="rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-destructive"
                >
                  <X className="size-4" strokeWidth={1.5} />
                  <span className="sr-only">Remove benefit</span>
                </button>
              ) : null}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setBenefits((prev) => [...prev, ""])}
          className="inline-flex items-center gap-2 text-xs tracking-wide text-bronze transition-colors hover:text-primary"
        >
          <Plus className="size-3.5" strokeWidth={1.5} />
          Add benefit
        </button>
      </Section>

      <Section title="Presentation" description="Imagery and availability.">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="h-28 w-40 shrink-0 overflow-hidden rounded-2xl border border-border/60 bg-secondary">
            <img
              src={image}
              alt="Treatment preview"
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
          <label className="inline-flex cursor-pointer items-center gap-2 self-start rounded-full border border-border bg-background px-5 py-3 text-xs tracking-wide text-foreground transition-all hover:border-primary/60 hover:bg-secondary">
            <ImagePlus className="size-4" strokeWidth={1.5} />
            Upload image
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImage(e.target.files?.[0])}
            />
          </label>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/40 px-5 py-4">
          <div>
            <p className="text-sm text-foreground">Visible on the clinic menu</p>
            <p className="text-xs text-muted-foreground">
              Drafts stay hidden from patients until published.
            </p>
          </div>
          <Switch
            checked={status === "active"}
            onCheckedChange={(checked) => setStatus(checked ? "active" : "draft")}
          />
        </div>
      </Section>

      <div className="flex flex-col-reverse gap-3 pb-4 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => navigate({ to: "/treatments" })}
          className="rounded-full border border-border bg-background px-8 py-4 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-full gold-gradient px-10 py-4 text-sm tracking-wide text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-lift hover:brightness-105 active:scale-[0.99]"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
