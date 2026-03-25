"use client";

import {
  Chalkboard,
  Handshake,
  GraduationCap,
  Globe,
  Buildings,
} from "@phosphor-icons/react";
import type { ElementType } from "react";
import { MotionSection } from "../MotionSection";

const areas: { title: string; body: string; icon: ElementType }[] = [
  {
    title: "Wissen vermitteln & austauschen",
    body: "Vermittlung und Austausch von Wissen zur Anwendung von KI z.B. über Workshops, Informationsveranstaltungen und Online Veranstaltungen.",
    icon: Chalkboard,
  },
  {
    title: "KI-Dienstleister & Lösungen",
    body: "coems für KI, das Hilfestellung bietet bei der Auswahl von KI Dienstleistern und Lösungsanbietern und Unterstützung bei der Implementation von KI Projekten bietet.",
    icon: Handshake,
  },
  {
    title: "Weiterbildung fördern",
    body: "Förderung der KI Weiterbildungsangebote für Firmenmitarbeiter. Dies geschieht in enger Zusammenarbeit mit Hamburger Universitäten wie der TU Hamburg und (inter)nationalen Partnern.",
    icon: GraduationCap,
  },
  {
    title: "Ökosystem vernetzen",
    body: "Hamburg@work treibt mit seinem DigitalCluster.Hamburg die Vernetzung innerhalb des AI Ökosystem in der Metropolregion voran und fasst die beteiligten Unternehmen, Organisationen und Institutionen in einer AI-Fokusgruppe zusammen.",
    icon: Buildings,
  },
  {
    title: "International vernetzen",
    body: "Vernetzung mit nationalen und internationalen KI Initiativen und Experten.",
    icon: Globe,
  },
];

export function FocusAreas() {
  return (
    <MotionSection className="relative py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#eef1f8] to-white" />
      <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        <div className="flex flex-col gap-4 md:max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/90">
            Fokus
          </p>
          <h2 className="font-display text-[clamp(1.35rem,2.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            AI.HAMBURG Konzentriert Sich auf Folgende Aufgaben
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ title, body, icon: Icon }) => (
            <div
              key={title}
              className="bezel-card group transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]"
            >
              <div className="bezel-card-inner flex h-full flex-col gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/90 to-cyan-700/70 text-white shadow-[0_16px_40px_-18px_rgba(0,181,226,0.55)] ring-1 ring-white/15">
                  <Icon className="h-7 w-7" weight="duotone" aria-hidden />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-900">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 md:text-[15px]">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second quote */}
        <div className="mt-16">
          <div className="bezel-card">
            <div className="bezel-card-inner">
              <blockquote className="text-pretty text-base italic leading-relaxed text-zinc-700 md:text-lg md:leading-relaxed">
                &ldquo;Die AI-Szene in der Metropolregion Hamburg ist lebendig und hat ein riesiges
                Potential. Als zertifiziertes europäisches Excellence Cluster ist Hamburg@work
                prädestiniert, den Aufbau eines Netzwerkes von Digital Leadern für
                Anwendungsgebiete von Artificial Intelligence und Maschine Learning voran zu
                treiben. Wir wissen, dass diese Aufgabe so gewaltig ist, dass sie nur gemeinsam
                bewältigt werden kann.&rdquo;
              </blockquote>
              <div className="mt-6 flex flex-col gap-1">
                <p className="font-display text-base font-semibold tracking-tight text-zinc-900">
                  Uwe Jens Neumann
                </p>
                <p className="text-sm text-zinc-500">Hamburg@Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
