"use client";

import { CheckCircle } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { MotionSection } from "./MotionSection";
import { PrimaryCta } from "./PrimaryCta";

const tiers: {
  name: ReactNode;
  badge?: string;
  items: ReactNode[];
  highlight?: boolean;
}[] = [
  {
    name: (
      <>
        Basis
        <br />
        Mitgliedschaft
      </>
    ),
    badge: "Ideal für erste Schritte mit KI",
    items: [
      <>
        Teilnahme an
        <br />
        AI.HUB Events
      </>,
      <>
        Zugang zu
        <br />
        AI.HUB Services
      </>,
      <>
        Mitglied des KI
        <br />
        Ökosystems
      </>,
    ],
  },
  {
    name: (
      <>
        Explorer
        <br />
        Mitgliedschaft
      </>
    ),
    highlight: true,
    items: [
      "Zugang zu Schulungsformaten",
      "Exklusive Inhouse Trainings und Workshops / Bootcamps",
      "2 AI.SUMMIT 2026 Tickets",
    ],
  },
  {
    name: (
      <>
        Developer
        <br />
        Mitgliedschaft
      </>
    ),
    items: [
      "Inhouse-Hackathons, Project Sprints und Leadership Coachings",
      "Strategie Consulting und Scouting KI Solutions",
      "Premium Partner des AI.HUB und Mitgliedschaft im AI Executive Circle",
      "5 AI.SUMMIT 2026 Tickets",
    ],
  },
  {
    name: (
      <>
        Champion
        <br />
        Mitgliedschaft
      </>
    ),
    items: [
      "1:1 Leadership Mentoring und Coaching",
      "Talent Matching",
      "Platinum Partner des AI.HUB und Mitgliedschaft im AI.HUB Advisory Board",
      "10 AI.SUMMIT 2026 Tickets",
    ],
  },
];

export function MembershipSection() {
  return (
    <MotionSection id="membership" className="relative py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#eef1f8] to-white" />
      <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        <div className="flex flex-col gap-4 md:max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/90">
            Mitgliedschaften
          </p>
          <h2 className="font-display text-[clamp(1.35rem,2.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            Alle Mitgliedschaften auf einen Blick - Werden Sie Teil des AI.HUB
          </h2>
        </div>
        <p className="mt-8 max-w-[65ch] text-sm leading-relaxed text-zinc-600 md:text-base">
          Wählen Sie die Mitgliedschaft, die am besten zu Ihren Zielen und dem Stand Ihrer
          KI-Aktivitäten passt. Als Mitglied buchen Sie flexibel die Bausteine, die Ihre Ziele
          wirkungsvoll unterstützen – abgestimmt auf Prioritäten und Wissensstand Ihrer Teams.
          Unser Team berät Sie gern bei der Auswahl der passenden Mitgliedschaft.
        </p>

        <div className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <div className="pointer-events-none absolute -top-4 left-1/2 z-10 hidden -translate-x-1/2 md:block lg:left-[12.5%] lg:translate-x-0">
            <span className="pointer-events-auto inline-flex rounded-full bg-gradient-to-r from-[#E30276] to-[#DA297E] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_14px_40px_-14px_rgba(227,2,118,0.75)] ring-1 ring-white/25 md:text-[11px]">
              Ideal für erste Schritte mit KI
            </span>
          </div>

          {tiers.map((tier, index) => (
            <div key={index} className="relative">
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-[1.15rem] p-[1px] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 ${
                  tier.highlight
                    ? "bg-gradient-to-br from-secondary/70 via-accent/45 to-secondary/50 shadow-[0_30px_90px_-40px_rgba(0,181,226,0.45)]"
                    : "bg-gradient-to-br from-zinc-200/80 via-white to-zinc-100/90 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.25)]"
                }`}
              >
                <div className="flex h-full flex-col rounded-[1.1rem] bg-white/95 p-6 backdrop-blur-sm">
                  {tier.badge ? (
                    <div className="mb-4 md:hidden">
                      <span className="inline-flex rounded-full bg-gradient-to-r from-[#E30276] to-[#DA297E] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                        {tier.badge}
                      </span>
                    </div>
                  ) : null}
                  <h3 className="font-display text-center text-lg font-semibold tracking-tight text-zinc-900">
                    {tier.name}
                  </h3>
                  <div className="my-5 h-px w-[88%] self-center bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
                  <ul className="flex flex-1 flex-col gap-3 text-sm leading-snug text-zinc-700">
                    {tier.items.map((text, i) => (
                      <li key={i} className="flex gap-2.5">
                        <CheckCircle
                          className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                          weight="duotone"
                          aria-hidden
                        />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <PrimaryCta />
        </div>
      </div>
    </MotionSection>
  );
}
