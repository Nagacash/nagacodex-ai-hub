"use client";

import {
  Barbell,
  CalendarBlank,
  ChalkboardTeacher,
  GraduationCap,
  Laptop,
  Lightbulb,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { MotionSection } from "./MotionSection";

const servicesIntroVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
} as const;

const servicesIntroItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 110, damping: 24 },
  },
} as const;

const row1 = [
  {
    title: (
      <>
        AI.ACADEMY Workshops
        <br />
        und Schulungen
      </>
    ),
    icon: GraduationCap,
  },
  {
    title: "Individuelles Trainings-Program für Ihre Teams",
    icon: ChalkboardTeacher,
  },
  {
    title: "AI.HUB Events",
    icon: CalendarBlank,
  },
] as const;

const row2 = [
  {
    title: "KI-Hackathons",
    icon: Laptop,
  },
  {
    title: (
      <>
        Strategische KI-Beratung
        <br />
        &amp; -Entwicklung
      </>
    ),
    icon: Lightbulb,
  },
  {
    title: "KI Bootcamp",
    icon: Barbell,
  },
] as const;

function Row({
  items,
}: {
  items: readonly { title: ReactNode; icon: ElementType }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
      {items.map(({ title, icon: Icon }) => (
        <div
          key={String(title)}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-[1px] shadow-[0_24px_80px_-40px_rgba(0,0,0,0.65)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_34px_90px_-38px_rgba(0,181,226,0.35)]"
        >
          <div className="flex min-h-[112px] items-center gap-4 rounded-[0.95rem] bg-zinc-950/90 px-5 py-5 md:min-h-[120px] md:px-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/90 to-cyan-700/70 text-white shadow-[0_16px_40px_-18px_rgba(0,181,226,0.55)] ring-1 ring-white/15">
              <Icon className="h-6 w-6" weight="duotone" aria-hidden />
            </span>
            <h3 className="font-display text-[15px] font-semibold leading-snug tracking-tight text-white md:text-base">
              {title}
            </h3>
          </div>
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-secondary/15 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden
          />
        </div>
      ))}
    </div>
  );
}

export function ServicesGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionSection id="services" className="relative py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-zinc-950/[0.03] to-transparent" />
      <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        <div className="flex flex-col gap-4 md:max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/90">
            Leistungsportfolio
          </p>
          <h2 className="font-display text-[clamp(1.35rem,2.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            Die verschiedenen AI.HUB Leistungen im Überblick
          </h2>
        </div>
        {reduceMotion ? (
          <p className="mx-auto mt-8 max-w-[65ch] text-pretty text-sm leading-relaxed text-zinc-600 md:text-base">
            Der AI.HUB unterstützt Sie mit bedarfsgerechten Formaten – von der Teamqualifizierung bis
            zur praktischen Umsetzung und Einführung von KI in Ihrem Unternehmen. Als AI.HUB-Mitglied
            wählen Sie flexibel die Bausteine und Angebote, die Ihre Ziele wirkungsvoll unterstützen –
            abgestimmt auf Ihre Prioritäten, den Wissensstand Ihrer Teams und den bisherigen Fortschritt.
          </p>
        ) : (
          <motion.div
            className="mx-auto mt-8 max-w-[65ch] text-pretty text-sm leading-relaxed text-zinc-600 md:text-base"
            variants={servicesIntroVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-12% 0px" }}
          >
            <motion.span variants={servicesIntroItem} className="block">
              Der AI.HUB unterstützt Sie mit bedarfsgerechten Formaten – von der Teamqualifizierung bis
              zur praktischen Umsetzung und Einführung von KI in Ihrem Unternehmen.
            </motion.span>
            <motion.span variants={servicesIntroItem} className="mt-3 block">
              Als AI.HUB-Mitglied wählen Sie flexibel die Bausteine und Angebote, die Ihre Ziele
              wirkungsvoll unterstützen – abgestimmt auf Ihre Prioritäten, den Wissensstand Ihrer Teams
              und den bisherigen Fortschritt.
            </motion.span>
          </motion.div>
        )}
        <div className="mt-12 flex flex-col gap-5">
          <Row items={row1} />
          <Row items={row2} />
        </div>
      </div>
    </MotionSection>
  );
}
