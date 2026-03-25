"use client";

import { ArrowSquareOut } from "@phosphor-icons/react";
import { MotionSection } from "../MotionSection";

/** Same interactive view as ai.hamburg (Airtable); no Cookiebot on this site — embed directly. */
const ECOSYSTEM_MAP_EMBED =
  "https://airtable.com/embed/appzPcYkRmYnsOyyN/shrnE7uWGekkqjLtI?backgroundColor=pink&viewControls=on";

export function HamburgEcosystem() {
  return (
    <MotionSection className="relative py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/35 to-transparent" />
      <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        <div className="flex flex-col gap-4 md:max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/90">
            Hamburg
          </p>
          <h2 className="font-display text-[clamp(1.35rem,2.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            Metropolregion Hamburg AI Ecosystem
          </h2>
        </div>

        <p className="mt-8 max-w-[65ch] text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
          Dies ist eine Übersicht von Firmen, die derzeit AI Technology und AI Lösungen anbieten oder
          auch als Dienstleister auftreten, um Firmen bei der Implementation zu helfen.
        </p>

        <p className="mt-6 max-w-[65ch] text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
          Sollte Ihre AI Firma in dieser Übersicht fehlen,{" "}
          <a
            href="https://ai.hamburg/de/ai-ecosystem/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-secondary underline decoration-secondary/35 underline-offset-[5px] transition hover:text-zinc-900"
          >
            fügen Sie hier Ihr Unternehmen dem AI-Ecosystem hinzu
            <ArrowSquareOut className="h-4 w-4" weight="bold" aria-hidden />
          </a>
          .
        </p>

        <div className="mt-12 overflow-hidden rounded-[1.35rem] border border-black/[0.06] bg-white p-1 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.35)]">
          <div className="overflow-hidden rounded-[1.15rem] bg-zinc-50/80">
            <iframe
              title="Metropolregion Hamburg AI Ecosystem – interaktive Karte"
              src={ECOSYSTEM_MAP_EMBED}
              width="100%"
              height={833}
              className="block min-h-[min(833px,85vh)] w-full border-0 bg-transparent"
              loading="lazy"
              allow="fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="px-4 py-3 text-center text-xs leading-relaxed text-zinc-500">
            Die Karte wird von{" "}
            <a
              href="https://airtable.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-secondary underline decoration-secondary/30 underline-offset-2 hover:text-zinc-800"
            >
              Airtable
            </a>{" "}
            geladen (Inhalt Drittanbieter).
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
