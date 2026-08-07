import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CLINIC } from "@/lib/clinic-data";
import logo from "@/assets/glow-skin-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Doctor" },
  { to: "/treatments", label: "Treatments" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !overHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "glass-panel shadow-soft" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:py-5">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt={`${CLINIC.name} logo`}
            className="h-11 w-11 shrink-0 rounded-full object-cover shadow-soft sm:h-12 sm:w-12"
          />
          <span className="min-w-0">
            <span
              className={`block truncate font-[family-name:var(--font-display)] text-xl tracking-[0.16em] uppercase transition-colors sm:text-2xl ${
                solid ? "text-foreground" : "text-pearl"
              }`}
            >
              {CLINIC.name}
            </span>
            <span
              className={`block truncate text-[10px] tracking-[0.3em] uppercase transition-colors ${
                solid ? "text-muted-foreground" : "text-pearl/75"
              }`}
            >
              by {CLINIC.doctor}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={`relative text-[11px] tracking-[0.22em] uppercase transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold-gradient after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100 data-[status=active]:after:origin-left data-[status=active]:after:scale-x-100 ${
                solid
                  ? "text-foreground/75 hover:text-foreground"
                  : "text-pearl/85 hover:text-pearl"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            hash="appointment"
            className="rounded-full border border-gold/60 px-6 py-2.5 text-[11px] tracking-[0.22em] uppercase transition-all duration-500 hover:bg-gold-gradient hover:text-primary-foreground"
            style={{ color: solid ? undefined : "var(--pearl)" }}
          >
            Book
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`shrink-0 lg:hidden ${solid ? "text-foreground" : "text-pearl"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`glass-panel overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pt-2 pb-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="border-b border-border/60 py-3.5 text-[12px] tracking-[0.22em] text-foreground/80 uppercase last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            hash="appointment"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3.5 text-[11px] tracking-[0.22em] text-primary-foreground uppercase"
          >
            Book
          </Link>
        </nav>
      </div>
    </header>
  );
}
