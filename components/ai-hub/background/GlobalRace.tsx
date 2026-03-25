"use client";

import { MotionSection } from "../MotionSection";

export function GlobalRace() {
  return (
    <MotionSection className="relative py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/35 to-transparent" />
      <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        <div className="flex flex-col gap-4 md:max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/90">
            Globaler Wettbewerb
          </p>
          <h2 className="font-display text-[clamp(1.35rem,2.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            Der internationale KI-Wettlauf
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="bezel-card">
            <div className="bezel-card-inner flex flex-col gap-4">
              <span className="inline-flex w-fit rounded-full bg-secondary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
                China
              </span>
              <p className="text-sm leading-relaxed text-zinc-600 md:text-[15px] md:leading-relaxed">
                China will bis 2030 zur führenden Nation bei Forschung und Anwendung von Artificial
                Intelligence (AI) werden. Dafür investiert China mehr als 150 Milliarden US$, um AI
                in deren Unternehmen, Verwaltung, Universitäten und schulischen Einrichtungen zu
                bringen.
              </p>
            </div>
          </div>

          <div className="bezel-card">
            <div className="bezel-card-inner flex flex-col gap-4">
              <span className="inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                USA
              </span>
              <p className="text-sm leading-relaxed text-zinc-600 md:text-[15px] md:leading-relaxed">
                Die USA haben große digitale Firmen wie Google, Facebook, IBM, Amazon/AWS, Microsoft,
                Adobe, Nvidia und viele andere, die Milliarden an US$ jedes Jahr in Forschung und
                Adaption von Artificial Intelligence (AI) und Machine Learning (ML) investieren.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-[65ch] text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
          Hamburg, Deutschland und Europa geraten dadurch ins Hintertreffen. Es gilt, die
          Entwicklungen in China und den USA als Inspiration zu begreifen und mit europäischem Know
          How zu verbinden.
        </p>

        <p className="mt-6 max-w-[65ch] text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
          Europäische Unternehmen können über die verstärkte Kollaboration und Zusammenarbeit, einem
          intensiven Austausch von Erfahrungen, der gezielten Bündelung von Knowhow aus Firmen und
          Wissenschaft sowie gemeinsam betriebenen Weiterentwicklungen wettbewerbsfähig bleiben.
        </p>

        {/* Quote – Prof. Dr.-Ing. Andreas Timm-Giel */}
        <div className="mt-16">
          <div className="bezel-card">
            <div className="bezel-card-inner">
              <blockquote className="text-pretty text-base italic leading-relaxed text-zinc-700 md:text-lg md:leading-relaxed">
                &ldquo;AI ist eine Schlüsseltechnologie in allen technischen Disziplinen, die wir an
                der Technischen Universität Hamburg schon hervorragend anwenden und
                weiterentwickeln. Die Zusammenführung der einzelnen Experten, der Austausch über
                entwickelte Lösungen ist notwendig, um im internationalen Wettbewerb zu
                bestehen.&rdquo;
              </blockquote>
              <div className="mt-6 flex flex-col gap-1">
                <p className="font-display text-base font-semibold tracking-tight text-zinc-900">
                  Prof. Dr.-Ing. Andreas Timm-Giel
                </p>
                <p className="text-sm text-zinc-500">
                  Präsident TUHH, Leiter des Instituts für Kommunikationsnetze
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
