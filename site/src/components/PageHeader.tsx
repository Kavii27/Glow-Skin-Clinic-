import { GoldLine } from "@/components/SectionHeading";
import { ParticleField } from "@/components/ParticleField";
import { motion } from "motion/react";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-secondary/60 pt-36 pb-20 sm:pt-44 sm:pb-24">
      <ParticleField count={12} />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-4xl leading-[1.08] sm:text-6xl"
        >
          {title}
        </motion.h1>
        <div className="mx-auto mt-7 w-24">
          <GoldLine />
        </div>
        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-muted-foreground"
          >
            {description}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
