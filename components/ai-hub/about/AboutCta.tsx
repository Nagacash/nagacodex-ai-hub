"use client";

import { MotionSection } from "../MotionSection";
import { AIRTABLE_FORM_URL } from "../constants";

export function AboutCta() {
  return (
    <MotionSection className="relative isolate overflow-hidden bg-zinc-950 py-20 md:py-28">
      <div className="absolute -left-1/4 top-0 h-[min(70vh,560px)] w-[min(90vw,680px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,181,226,0.35),transparent_62%)] blur-3xl" aria-hidden />
      <div className="absolute -right-1/4 bottom-0 h-[min(50vh,420px)] w-[min(80vw,520px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(227,2,118,0.28),transparent_60%)] blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-[min(56rem,calc(100%-2rem))] px-4 text-center md:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
          Mitmachen
        </p>
        <h2 className="font-display mt-5 text-balance text-[clamp(1.45rem,3.2vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
          Werde ein Teil von AI.HAMBURG
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/85">
          So können Sie sich einbringen und von AI.HAMBURG profitieren.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href={AIRTABLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-[10px] bg-[#DA297E] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(218,41,126,0.55)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgba(218,41,126,0.6)] active:scale-[0.98] md:text-base"
          >
            Newsletter abonnieren
          </a>
        </div>
      </div>
    </MotionSection>
  );
}
