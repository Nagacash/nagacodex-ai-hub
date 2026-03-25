"use client";

import { Buildings, PuzzlePiece, UsersThree } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { MotionSection } from "./MotionSection";

const INTRO_HEADLINE =
  "Künstliche Intelligenz strukturiert im Unternehmen verankern und messbare Ergebnisse erzielen.";

const items = [
  {
    title: "Für den Mittelstand gemacht",
    body: "Praxisnahe Begleitung, die Ihre Realität berücksichtigt – effizient, verständlich und umsetzbar.",
    icon: Buildings,
    span: "lg:col-span-7 lg:row-span-2",
  },
  {
    title: "Maßgeschneiderte Leistungen",
    body: "Trainings und Beratung werden auf Ihre Ziele zugeschnitten – für messbare Wirkung in Ihrem Unternehmensalltag.",
    icon: PuzzlePiece,
    span: "lg:col-span-5",
  },
  {
    title: "Profitieren Sie vom Netzwerk",
    body: "Vernetzen Sie sich mit Expert:innen, Partnern und AI.HUB-Unternehmen – für praxisnahe Einblicke und Kooperationen.",
    icon: UsersThree,
    span: "lg:col-span-12",
  },
] as const;

export function IntroBenefits() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <MotionSection id="intro" className="relative py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/35 to-transparent" />
      <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
          Positionierung
        </p>
      </div>

      {reduceMotion ? (
        <div className="mx-auto mt-5 max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
          <h2 className="font-display max-w-[min(100%,48rem)] text-[clamp(1.35rem,2.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            {INTRO_HEADLINE}
          </h2>
        </div>
      ) : (
        <>
          <h2 className="sr-only">{INTRO_HEADLINE}</h2>
          <div className="mt-5 w-full overflow-hidden border-y border-white/10 bg-zinc-950 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div className="intro-marquee-track flex w-max">
              {[0, 1].map((i) => (
                <span
                  key={i}
                  className="inline-flex shrink-0 items-center gap-8 px-6 md:px-10"
                >
                  <span className="font-display whitespace-nowrap text-[clamp(1.2rem,2.4vw,1.85rem)] font-medium tracking-[-0.02em] text-zinc-100">
                    {INTRO_HEADLINE}
                  </span>
                  <span className="select-none text-zinc-600" aria-hidden>
                    ·
                  </span>
                </span>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        <p className="mx-auto mt-8 max-w-[65ch] text-pretty text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
          Der AI.HUB ist das Schulungs- und Innovationsökosystem von AI.HAMBURG, das mittelständische
          Unternehmen von der Strategie bis zur Umsetzung begleitet. Im Mittelpunkt stehen
          strukturierte Weiterbildung, individuelle Beratung und verlässliche Unterstützung bei der
          Einführung praxistauglicher KI-Lösungen. Mit einem starken Netzwerk und 6+ Jahren
          Erfahrung schaffen wir Orientierung, qualifizieren Ihre Teams und sorgen dafür, dass KI
          messbar im Arbeitsalltag wirkt.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-12">
          {items.map(({ title, body, icon: Icon, span }) => (
            <div key={title} className={`${span}`}>
              <div className="bezel-card group h-full transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
                <div className="bezel-card-inner flex h-full flex-col gap-5 md:flex-row md:items-start lg:flex-col">
                  <div className="flex items-start gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#DA297E] to-[#7a0f4a] text-white shadow-[0_18px_40px_-18px_rgba(218,41,126,0.65)] ring-1 ring-white/25">
                      <Icon className="h-7 w-7" weight="duotone" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
                        {title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-[15px]">
                        {body}
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto hidden h-px w-full bg-gradient-to-r from-secondary/25 via-transparent to-accent/15 md:block lg:hidden" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
