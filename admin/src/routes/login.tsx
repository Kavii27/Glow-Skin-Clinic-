import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Lock, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import clinicImage from "@/assets/clinic-login.jpg";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Glow Skin Clinic Admin Portal" },
      {
        name: "description",
        content:
          "Secure sign in to the Glow Skin Clinic administration portal by Dr. Apeksha Herath.",
      },
      { property: "og:title", content: "Sign in — Glow Skin Clinic Admin Portal" },
      {
        property: "og:description",
        content: "Secure sign in to the Glow Skin Clinic administration portal.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("apeksha@glowskinclinic.lk");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate({ to: "/" });
  };

  return (
    <div className="grid min-h-screen bg-background lg:grid-cols-[1.05fr_1fr]">
      <div className="relative hidden overflow-hidden lg:block">
        <img
          src={clinicImage}
          alt="Interior of Glow Skin Clinic treatment room"
          width={1024}
          height={1536}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(190deg,oklch(0.94_0.03_82/0.45),oklch(0.36_0.02_70/0.55))]" />
        <div className="relative flex h-full flex-col justify-between p-14">
          <p className="text-[0.62rem] tracking-luxe text-background/85">
            Colombo · Aesthetic Dermatology
          </p>
          <div className="animate-rise">
            <h1 className="font-serif text-6xl leading-[1.05] text-background">
              Glow Skin
              <br />
              Clinic
            </h1>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/85">
              An exclusive practice in aesthetic dermatology, led by Dr. Apeksha Herath. This
              portal is reserved for clinic staff.
            </p>
            <p className="mt-10 text-[0.62rem] tracking-luxe text-background/80">Admin Portal</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-16 sm:px-10">
        <div className="animate-rise glass-panel w-full max-w-md rounded-[2rem] p-8 shadow-lift sm:p-10">
          <p className="text-[0.6rem] tracking-luxe text-muted-foreground">Welcome back</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground">Sign in</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Please enter your clinic credentials to continue.
          </p>

          <form onSubmit={handleSubmit} className="mt-9 space-y-5">
            <label className="block">
              <span className="mb-2 block text-[0.62rem] tracking-luxe text-muted-foreground">
                Email
              </span>
              <div className="relative">
                <Mail
                  className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-bronze/70"
                  strokeWidth={1.5}
                />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-13 rounded-xl border-border bg-background/70 pl-11 text-sm transition-all focus-visible:border-primary/60 focus-visible:ring-4 focus-visible:ring-primary/12"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-[0.62rem] tracking-luxe text-muted-foreground">
                Password
              </span>
              <div className="relative">
                <Lock
                  className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-bronze/70"
                  strokeWidth={1.5}
                />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-13 rounded-xl border-border bg-background/70 pl-11 text-sm transition-all focus-visible:border-primary/60 focus-visible:ring-4 focus-visible:ring-primary/12"
                />
              </div>
            </label>

            <div className="flex items-center justify-between pt-1">
              <label className="flex cursor-pointer items-center gap-2.5 text-xs text-muted-foreground">
                <Checkbox className="rounded-[6px] border-border data-[state=checked]:border-primary data-[state=checked]:bg-primary" />
                Remember me
              </label>
              <button
                type="button"
                className="text-xs text-bronze transition-colors hover:text-primary"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-full gold-gradient py-4 text-sm tracking-wide text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-lift hover:brightness-105 active:scale-[0.99]"
            >
              Enter portal
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Not a staff member?{" "}
            <Link to="/" className="text-bronze underline-offset-4 hover:underline">
              Return to the clinic
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
