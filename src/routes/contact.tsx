import { createFileRoute } from "@tanstack/react-router";
import { Clock, ExternalLink, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import clinicInterior from "@/assets/clinic-interior.jpg";
import { PageHeader } from "@/components/PageHeader";
import { AppointmentSection } from "@/components/AppointmentSection";
import { Reveal } from "@/components/Reveal";
import { CLINIC, googleMapsUrl, mapEmbedUrl, whatsappLink } from "@/lib/clinic-data";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    treatment: typeof search["treatment"] === "string" ? search["treatment"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book a Consultation | Glow Skin Clinic, Kandy" },
      {
        name: "description",
        content:
          "Request a private consultation with Dr. Apeksha Herath. Call, email or book instantly via WhatsApp.",
      },
      { property: "og:title", content: "Book a Consultation | Glow Skin Clinic" },
      {
        property: "og:description",
        content: "Private consultations with Dr. Apeksha Herath in Kandy.",
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: MapPin, label: "Clinic", value: CLINIC.address },
  { icon: Clock, label: "Hours", value: CLINIC.hours },
  { icon: Phone, label: "Telephone", value: CLINIC.phoneDisplay, href: `tel:${CLINIC.phone}` },
  { icon: Mail, label: "Email", value: CLINIC.email, href: `mailto:${CLINIC.email}` },
];

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Visit the Clinic"
        description="A private suite in Kandy, by appointment only."
      />

      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="group overflow-hidden rounded-2xl shadow-luxe">
              <img
                src={clinicInterior}
                alt="Glow Skin Clinic reception"
                loading="lazy"
                width={1536}
                height={1024}
                className="aspect-4/3 w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="space-y-8">
              {details.map((d) => (
                <li key={d.label} className="flex gap-5">
                  <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/50">
                    <d.icon className="h-4 w-4 text-gold" strokeWidth={1.4} />
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow">{d.label}</p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="mt-2 block text-[15px] break-words text-foreground transition-colors hover:text-gold"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-[15px] leading-relaxed text-foreground">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink(`Hello ${CLINIC.name}, I would like to enquire about a treatment.`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-soft transition-transform duration-500 hover:scale-[1.03]"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Message on WhatsApp
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-background/50 px-6 py-4 text-[11px] tracking-[0.2em] text-foreground uppercase backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
              >
                <Navigation className="h-3.5 w-3.5 text-gold" />
                Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border/70 shadow-soft">
            <iframe
              title={`${CLINIC.name} location`}
              src={mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 right-4 flex flex-wrap gap-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-card/90 px-4 py-2.5 text-xs font-medium text-foreground backdrop-blur-md shadow-md border border-border/80 transition-colors hover:border-gold hover:text-gold"
              >
                <ExternalLink className="h-3.5 w-3.5 text-gold" />
                View on Google Maps
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-4 py-2.5 text-xs font-medium text-primary-foreground shadow-md transition-transform hover:scale-105"
              >
                <Navigation className="h-3.5 w-3.5" />
                Get Directions
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <AppointmentSection />
    </>
  );
}
