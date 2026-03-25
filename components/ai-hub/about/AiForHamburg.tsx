"use client";

import Image from "next/image";

import { MotionSection } from "../MotionSection";

const AI4GERMANY_COPY =
  "AI.HAMBURG ist Gründungsmitglied der AI4Germany Initiative, bei der sich führende Initiativen im Bereich Künstliche Intelligenz (KI) zusammenschließen, um die lokale Wirtschaft und Gesellschaft in Deutschland aktiv bei der Anwendung von künstlicher Intelligenz zu unterstützen – und damit Deutschland ins KI-Zeitalter zu begleiten.";

export function AiForHamburg() {
  return (
    <MotionSection className="relative py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/35 to-transparent" />
      <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        <div className="flex flex-col gap-4 md:max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/90">
            AI for Hamburg
          </p>
          <h2 className="font-display text-[clamp(1.35rem,2.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            Wenn eine Maschine oder ein Computer Probleme löst
          </h2>
        </div>

        <div className="mt-10 max-w-[65ch] space-y-6 text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
          <p>
            Wenn eine Maschine oder ein Computer Probleme löst oder automatische Entscheidungen bei
            Aufgaben trifft, die normalerweise menschliche Intelligenz erfordern, dann reden wir von
            Künstlicher Intelligenz (KI) oder auch Artificial Intelligence (AI).
          </p>
          <p>
            Die Stärke von KI liegt in ihrer Fähigkeit aus (sehr vielen) Daten zu lernen.
            Unternehmen können durch den Einsatz von KI ihre Wertschöpfung und Effizienz steigern.
          </p>
          <p>
            AI.HAMBURG fördert das Wissen und den breiten Einsatz von künstlicher Intelligenz und
            insbesondere des maschinellen Lernens in Unternehmen der Region. Durch smarte Unternehmen
            wird die Hamburger Wirtschaft profitieren und die Wettbewerbsfähigkeit der gesamten
            Metropolregion positiv beeinflusst.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-10 lg:gap-12">
          <div className="mx-auto w-full max-w-[min(260px,85vw)] shrink-0 md:mx-0">
            <div className="rounded-[1.35rem] border border-zinc-200/90 bg-gradient-to-b from-white to-zinc-100/90 p-[5px] shadow-[0_22px_60px_-34px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.04]">
              <div className="overflow-hidden rounded-[1.05rem] bg-zinc-50 ring-1 ring-inset ring-zinc-950/5">
                <Image
                  src="/images/AI4Germany.jpg"
                  alt="AI4Germany Initiative – Künstliche Intelligenz für Deutschland"
                  width={560}
                  height={320}
                  unoptimized
                  className="h-auto w-full object-contain"
                  sizes="(min-width: 768px) 240px, 260px"
                />
              </div>
            </div>
          </div>
          <p className="text-pretty text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
            {AI4GERMANY_COPY}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        {/* Quote */}
        <div className="mt-16">
          <div className="bezel-card">
            <div className="bezel-card-inner">
              <blockquote className="text-pretty text-base italic leading-relaxed text-zinc-700 md:text-lg md:leading-relaxed">
                &ldquo;Künstliche Intelligenz automatisiert Denk- und Entscheidungsprozesse. Das ist
                Macht, die ein ungemeines Potenzial für positiven, wirtschaftlichen und
                gesellschaftlichen Wandel für eine Region wie Hamburg mit sich bringt. Unternehmen
                müssen sich in einem Verbund mit Wissenschaft und Politik, wie der AI.HAMBURG, um
                die verantwortungsvolle und profitable Gestaltung sowohl des KI-gesteuertem
                Datenhandels als auch der Symbiose zwischen KI und Mensch bemühen.&rdquo;
              </blockquote>
              <div className="mt-6 flex flex-col gap-1">
                <p className="font-display text-base font-semibold tracking-tight text-zinc-900">
                  Prof. Dr. Olaf Groth
                </p>
                <p className="text-sm text-zinc-500">
                  Founder of Cambrian.ai, Professor @ Hult International Business School, Haas
                  School of Business, UC Berkeley
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
