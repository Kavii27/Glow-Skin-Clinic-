import { useState, type ReactNode } from "react";
import { Bell, Menu, Search, Settings } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";
import { SidebarNav } from "./sidebar-nav";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function AppShell({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-background">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:hidden">
              <Menu className="size-5" strokeWidth={1.5} />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 bg-card p-0">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="border-b border-border/60 p-4">
                <Logo />
              </div>
              <SidebarNav onNavigate={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>

          <Link to="/" className="shrink-0">
            <Logo />
          </Link>

          <div className="ml-auto hidden max-w-sm flex-1 items-center md:flex">
            <div className="group relative w-full">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
                strokeWidth={1.5}
              />
              <input
                type="search"
                placeholder="Search patients, treatments…"
                className="h-11 w-full rounded-full border border-border bg-card/70 pl-11 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-4 focus:ring-primary/12"
              />
            </div>
          </div>

          <div className="ml-auto flex items-center gap-1 md:ml-0">
            <button className="relative rounded-full p-2.5 text-bronze transition-colors hover:bg-muted">
              <Bell className="size-[1.15rem]" strokeWidth={1.5} />
              <span className="absolute right-2 top-2 size-1.5 rounded-full gold-gradient" />
              <span className="sr-only">Notifications</span>
            </button>
            <Link
              to="/settings"
              className="rounded-full p-2.5 text-bronze transition-colors hover:bg-muted"
            >
              <Settings className="size-[1.15rem]" strokeWidth={1.5} />
              <span className="sr-only">Settings</span>
            </Link>
            <div className="ml-2 flex items-center gap-3 rounded-full border border-border/70 bg-card/70 py-1 pl-1 pr-4">
              <span className="flex size-8 items-center justify-center rounded-full gold-gradient font-serif text-sm text-foreground">
                A
              </span>
              <span className="hidden leading-tight sm:block">
                <span className="block text-xs font-medium text-foreground">Dr. Apeksha</span>
                <span className="block text-[0.6rem] text-muted-foreground">Administrator</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1600px] gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <aside className="sticky top-24 hidden h-[calc(100vh-8rem)] w-64 shrink-0 rounded-3xl border border-border/60 bg-card shadow-soft lg:block">
          <SidebarNav />
        </aside>
        <main className="min-w-0 flex-1 pb-16">{children}</main>
      </div>
    </div>
  );
}
