import { useMemo } from "react";

type Particle = {
  left: number;
  size: number;
  duration: number;
  delay: number;
  bottom: number;
};

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const r1 = seed / 233280;
    const r2 = ((i * 4517 + 1231) % 997) / 997;
    return {
      left: r1 * 100,
      size: 3 + r2 * 7,
      duration: 12 + r1 * 14,
      delay: -(r2 * 20),
      bottom: r2 * 40,
    };
  });
}

export function ParticleField({ count = 22 }: { count?: number }) {
  const particles = useMemo(() => makeParticles(count), [count]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
