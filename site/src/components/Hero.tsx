import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImage from "@/assets/hero-clinic.jpg";
import { ParticleField } from "@/components/ParticleField";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[620px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury treatment room at Glow Skin Clinic"
          width={1920}
          height={1280}
          className="ken-burns h-full w-full object-cover"
        />
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.28 0.01 65 / 0.55) 0%, oklch(0.28 0.01 65 / 0.38) 45%, oklch(0.988 0.004 95 / 0.92) 100%)",
        }}
      />

      <ParticleField count={26} />

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 flex h-full items-center justify-center px-5 text-center sm:px-8"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] tracking-[0.42em] text-pearl/85 uppercase"
          >
            Medical Aesthetic Excellence
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl leading-[1.05] text-pearl sm:text-6xl lg:text-7xl"
          >
            Reveal Your <span className="italic">Natural Glow</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 h-px w-28 bg-gold-gradient"
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-pearl/90 sm:text-base"
          >
            Advanced medical aesthetic treatments by Dr. Apeksha Herath
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="w-full rounded-full bg-gold-gradient px-9 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-luxe transition-transform duration-500 hover:scale-[1.03] sm:w-auto"
            >
              Book Consultation
            </Link>
            <Link
              to="/treatments"
              className="w-full rounded-full border border-pearl/60 px-9 py-4 text-[11px] tracking-[0.26em] text-pearl uppercase backdrop-blur-sm transition-colors duration-500 hover:bg-pearl/15 sm:w-auto"
            >
              Explore Treatments
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
