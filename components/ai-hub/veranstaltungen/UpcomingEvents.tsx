"use client";

import { CalendarBlank, MapPin, ArrowRight } from "@phosphor-icons/react";
import { MotionSection } from "../MotionSection";

const events = [
  {
    date: "2026-05-15",
    title: "AI.SUMMIT 2026",
    description:
      "Die führende KI-Konferenz in Hamburg – mit Keynotes, Panels und Networking für Entscheider:innen und Fachkräfte.",
    location: "Hamburg",
    href: "https://ai.hamburg/de/ai-summit/",
  },
  {
    date: "2026-04-10",
    title: "AI.ACADEMY Workshop: Generative AI im Unternehmen",
    description:
      "Praxisnaher Workshop zur Einführung und Anwendung von generativer KI in mittelständischen Unternehmen.",
    location: "Hamburg",
    href: "https://ai.hamburg/de/ai-hub/",
  },
  {
    date: "2026-06-20",
    title: "KI-Hackathon: Daten zu Wert",
    description:
      "Interdisziplinärer Hackathon – entwickeln Sie in 48 Stunden prototypische KI-Lösungen für reale Unternehmensherausforderungen.",
    location: "Hamburg",
    href: "https://ai.hamburg/de/ai-hub/",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function UpcomingEvents() {
  return (
    <MotionSection className="relative py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/35 to-transparent" />
      <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        <div className="flex flex-col gap-4 md:max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/90">
            Kalender
          </p>
          <h2 className="font-display text-[clamp(1.35rem,2.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            Anstehende Events
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          {events.map((event) => (
            <a
              key={event.title}
              href={event.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bezel-card group transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]"
            >
              <div className="bezel-card-inner flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
                <div className="flex shrink-0 items-center gap-2 text-sm text-zinc-500">
                  <CalendarBlank className="h-5 w-5 text-secondary" weight="duotone" aria-hidden />
                  <span>{formatDate(event.date)}</span>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{event.description}</p>
                </div>

                <div className="flex shrink-0 items-center gap-4">
                  <span className="flex items-center gap-1.5 text-sm text-zinc-500">
                    <MapPin className="h-4 w-4" weight="duotone" aria-hidden />
                    {event.location}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                    <ArrowRight className="h-5 w-5" weight="bold" aria-hidden />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
