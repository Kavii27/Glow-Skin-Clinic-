import { Link, useRouterState } from "@tanstack/react-router";
import {
  CalendarDays,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Plus,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const navItems = [
  { label: "Dashboard", to: "/", icon: LayoutDashboard },
  { label: "Appointments", to: "/appointments", icon: CalendarDays },
  { label: "Treatments", to: "/treatments", icon: Sparkles },
  { label: "Add Treatment", to: "/treatments/new", icon: Plus },
  { label: "Patients", to: "/patients", icon: Users },
  { label: "Messages", to: "/messages", icon: MessageSquare },
  { label: "Settings", to: "/settings", icon: Settings },
] as const;

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname === to);

  return (
    <nav className="flex h-full flex-col gap-1 p-3">
      <p className="px-3 pt-2 pb-4 text-[0.58rem] tracking-luxe text-muted-foreground">
        Portal
      </p>
      {navItems.map((item) => {
        const active = isActive(item.to);
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className={cn(
              "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-300",
              active
                ? "bg-secondary text-foreground shadow-soft"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <span
              className={cn(
                "absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full transition-all duration-300",
                active ? "gold-gradient opacity-100" : "opacity-0",
              )}
            />
            <item.icon
              className={cn(
                "size-[1.05rem] transition-colors",
                active ? "text-primary" : "text-bronze/70 group-hover:text-primary",
              )}
              strokeWidth={1.5}
            />
            <span className="truncate">{item.label}</span>
          </Link>
        );
      })}

      <div className="mt-auto px-1 pt-6">
        <div className="mb-4 rounded-2xl bg-secondary/60 p-4">
          <p className="font-serif text-base text-foreground">Clinic hours</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Mon – Sat, 9:00 – 18:00
            <br />
            Consultations by appointment.
          </p>
        </div>
        <Link
          to="/login"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
        >
          <LogOut className="size-[1.05rem]" strokeWidth={1.5} />
          Logout
        </Link>
      </div>
    </nav>
  );
}
