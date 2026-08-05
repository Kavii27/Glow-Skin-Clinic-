import { Link } from "@tanstack/react-router";
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

import { CLINIC, googleMapsUrl, treatmentCategories } from "@/lib/clinic-data";
import { GoldLine } from "@/components/SectionHeading";

// Local dev: the admin dashboard runs as its own `vite dev` server, fixed
// to port 8081 in glow-admin-suite/vite.config.ts (the main site itself
// defaults to 8080), so both can run at the same time locally.
const ADMIN_PORTAL_URL = "http://localhost:8081/login";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Clinic Info */}
          <div className="min-w-0">
            <p className="font-[family-name:var(--font-display)] text-2xl tracking-[0.16em] uppercase">
              {CLINIC.name}
            </p>

            <p className="mt-1 text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              by {CLINIC.doctor}
            </p>

            <div className="mt-5 w-16">
              <GoldLine />
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Advanced medical aesthetics delivered with precision, discretion
              and an uncompromising standard of care.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={CLINIC.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 text-foreground/70 transition-colors hover:bg-gold-gradient hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href={CLINIC.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 text-foreground/70 transition-colors hover:bg-gold-gradient hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>


          {/* Treatments */}
          <div className="min-w-0">
            <p className="eyebrow">Treatments</p>

            <ul className="mt-6 space-y-3">
              {treatmentCategories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/treatments"
                    hash={c.slug}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Visit */}
          <div className="min-w-0">
            <p className="eyebrow">Visit</p>

            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">

              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{CLINIC.address}</span>
              </li>

              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{CLINIC.hours}</span>
              </li>

              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="hover:text-foreground"
                >
                  {CLINIC.phoneDisplay}
                </a>
              </li>

              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`mailto:${CLINIC.email}`}
                  className="break-all hover:text-foreground"
                >
                  {CLINIC.email}
                </a>
              </li>

            </ul>
          </div>


          {/* Consultation / Booking CTA */}
          <div className="min-w-0">
            <p className="eyebrow">Consultation</p>

            <div className="mt-6 rounded-xl border border-gold/40 bg-card/60 p-5 shadow-soft">
              <h4 className="font-[family-name:var(--font-display)] text-base leading-snug">
                Book a Consultation
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Private, one-on-one skin assessment and treatment planning with Dr. Apeksha Herath.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gold-gradient px-4 py-2.5 text-[10px] tracking-[0.24em] text-primary-foreground uppercase shadow-soft transition-transform duration-300 hover:scale-[1.02]"
              >
                Schedule Visit
              </Link>
            </div>
          </div>

        </div>


        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col gap-3 border-t border-border/70 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <p className="tracking-[0.18em] uppercase">
              Medical aesthetics · Kandy
            </p>

            <a
              href={ADMIN_PORTAL_URL}
              className="tracking-[0.18em] uppercase text-muted-foreground/80 transition-colors hover:text-foreground"
            >
              Admin Login
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}