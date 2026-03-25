"use client";

import { ASSETS } from "./constants";
import { PrimaryCta } from "./PrimaryCta";
import { MotionSection } from "./MotionSection";

export function FinalCta() {
  return (
    <MotionSection
      id="cta"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/80 via-zinc-950/55 to-[#001018]/80" aria-hidden />
      <div className="absolute -left-1/4 top-0 h-[min(70vh,560px)] w-[min(90vw,680px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,181,226,0.35),transparent_62%)] blur-3xl" aria-hidden />
      <div className="absolute -right-1/4 bottom-0 h-[min(50vh,420px)] w-[min(80vw,520px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(227,2,118,0.28),transparent_60%)] blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-[min(56rem,calc(100%-2rem))] px-4 text-center md:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
          Nächster Schritt
        </p>
        <h2 className="font-display mt-5 text-balance text-[clamp(1.45rem,3.2vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
          Jetzt Mitglied im AI.HUB werden und mit Künstlicher
          <br />
          Intelligenz strukturiert durchstarten!
        </h2>
        <div className="mx-auto mt-10 max-w-2xl space-y-5 text-base font-medium leading-relaxed text-white/85">
          <p>
            Buchen Sie sich jetzt einen unverbindlichen Beratungs Termin bei unserem AI.HUB Team und
            erfahren Sie mehr über den
          </p>
          <p>AI.HUB und die verschiedenen Mitgliedschaftsoptionen.</p>
        </div>
        <div className="mt-12 flex justify-center">
          <PrimaryCta />
        </div>
      </div>
    </MotionSection>
  );
}
