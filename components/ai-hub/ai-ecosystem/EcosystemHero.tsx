"use client";

import { MotionSection } from "../MotionSection";

export function EcosystemHero() {
  return (
    <MotionSection className="relative isolate overflow-hidden bg-zinc-950 py-24 md:py-32 lg:py-40">
      <div className="absolute -left-1/4 top-0 h-[min(70vh,560px)] w-[min(90vw,680px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,181,226,0.25),transparent_62%)] blur-3xl" aria-hidden />
      <div className="absolute -right-1/4 bottom-0 h-[min(50vh,420px)] w-[min(80vw,520px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(227,2,118,0.18),transparent_60%)] blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/90">
          AI Ecosystem
        </p>
        <h1 className="mt-5 max-w-4xl text-balance text-[clamp(1.75rem,4.5vw,3.25rem)] font-bold leading-[1.1] tracking-tight text-white">
          AI Ecosystem
        </h1>
        <p className="mt-6 max-w-[60ch] text-pretty text-base font-light leading-relaxed text-white/80 md:text-lg">
          An dieser Stelle entsteht im Laufe der Zeit eine Übersicht über das AI Ecosystem in der
          Metropolregion Hamburg. Die wichtigsten Bezüge zum Ecosystem von AI for Germany werden
          ebenfalls in die Darstellung integriert.
        </p>
      </div>
    </MotionSection>
  );
}
