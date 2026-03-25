"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ASSETS } from "./constants";
import { MotionSection } from "./MotionSection";

const IMPLEMENTATION_HEADLINE =
  "Wir Unterstützen Sie auf Ihrer Reise durch die KI-Implementierung";

export function ImplementationSection() {
  const reduceMotion = useReducedMotion();
  const headlineWords = IMPLEMENTATION_HEADLINE.split(" ");

  return (
    <MotionSection
      id="implementation"
      className="relative overflow-hidden py-16 md:py-20 lg:py-24"
      style={{ backgroundImage: `url(${ASSETS.implementationBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/88 via-white/78 to-white/92 backdrop-blur-[3px]" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_0%,rgba(0,181,226,0.12),transparent_55%)]" aria-hidden />

      <div className="relative mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/90">
            Implementierung
          </p>
          {reduceMotion ? (
            <h2 className="font-display text-balance text-[clamp(1.35rem,2.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-zinc-900">
              {IMPLEMENTATION_HEADLINE}
            </h2>
          ) : (
            <h2 className="font-display flex flex-wrap justify-center gap-x-[0.35em] gap-y-1 text-center text-[clamp(1.35rem,2.8vw,2rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-zinc-900">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 22,
                    delay: 0.045 * i,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          )}
        </div>
        <p className="mx-auto mt-8 max-w-[65ch] text-pretty text-center text-sm leading-relaxed text-zinc-600 md:text-base">
          Vom ersten Orientierungsgespräch über Qualifizierung und Use-Case-Priorisierung bis zur
          Einführung und Skalierung – der AI.HUB bietet an jeder Schnittstelle konkrete Unterstützung
          und sorgt für nachvollziehbare Fortschritte.
        </p>

        <div className="relative mx-auto mt-12 max-w-[min(40rem,100%)] md:max-w-[min(48rem,92%)]">
          <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-secondary/25 via-white/40 to-accent/20 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.35rem] border border-white/60 bg-white/70 p-1 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.45)] ring-1 ring-black/[0.04] backdrop-blur-md">
            <div className="overflow-hidden rounded-[1.1rem] bg-zinc-950/5">
              <Image
                src={ASSETS.implementationDiagram}
                alt=""
                width={1920}
                height={800}
                className="h-auto w-full object-contain"
                unoptimized
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
