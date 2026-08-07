import { MessageCircleMore } from "lucide-react";

import { CLINIC, whatsappLink } from "@/lib/clinic-data";

export function WhatsAppWidget() {
  const message = `Hello ${CLINIC.name}, I would like to book a consultation.`;

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Glow Skin Clinic on WhatsApp"
      title="Chat with Glow Skin Clinic on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-end gap-3 sm:bottom-6 sm:right-6"
    >
      <span className="hidden rounded-full border border-white/10 bg-charcoal/90 px-4 py-2 text-[11px] tracking-[0.22em] text-pearl/90 uppercase shadow-luxe backdrop-blur-md transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 lg:inline-flex">
        Book on WhatsApp
      </span>

      <span className="relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_24px_50px_-20px_rgba(37,211,102,0.7)] transition-transform duration-300 group-hover:scale-105">
        <span aria-hidden className="whatsapp-ripple absolute inset-0 rounded-full border border-[#25D366]/50" />
        <span
          aria-hidden
          className="whatsapp-ripple whatsapp-ripple-delay-1 absolute inset-0 rounded-full border border-[#25D366]/35"
        />
        <span aria-hidden className="absolute -inset-2.5 rounded-full bg-[#25D366]/25 blur-2xl" />
        <span aria-hidden className="whatsapp-float relative grid h-full w-full place-items-center rounded-full">
          <MessageCircleMore className="h-8 w-8 drop-shadow-sm" strokeWidth={1.9} />
        </span>
      </span>
    </a>
  );
}