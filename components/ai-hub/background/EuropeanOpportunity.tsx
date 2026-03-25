"use client";

import { MotionSection } from "../MotionSection";

export function EuropeanOpportunity() {
  return (
    <MotionSection className="relative py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#eef1f8] to-white" />
      <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        <div className="flex flex-col gap-4 md:max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/90">
            Chancen
          </p>
          <h2 className="font-display text-[clamp(1.35rem,2.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            Die europäische Chance
          </h2>
        </div>

        <div className="mt-10 max-w-[65ch] space-y-6 text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
          <p>
            Künstliche Intelligenz und Maschinelles Lernen bieten heute Möglichkeiten, die vor 5-10
            Jahren noch nicht vorstellbar waren. Durch exponentielles Wachstum der Cloud Computing
            Power und der verfügbaren Daten, Edge Computing und Standard Open Source Software Tools
            sowie mehr und mehr Standardlösungen ist die Anwendung von KI heute zugänglicher als
            jemals zuvor.
          </p>
          <p>
            Daraus ergibt sich einmalig die Chance, sehr schnell gewaltige Entwicklungsschritte nach
            vorne zu machen. Dazu gilt es, die Chancen zu erkennen, KI zum Bestandteil der
            Firmenstrategie zu machen und diese Technologien konstant zu implementieren und
            kontinuierlich weiter zu entwickeln.
          </p>
          <p>
            Dafür ist es entscheidend, verantwortungsbewusst und nachhaltig nach vorne zu schauen und
            von vornherein wichtige Themen wie Ethik, Sicherheit, Datenschutz und Gleichberechtigung
            auf der Basis Europäischer Normen einzubeziehen, ohne sich dabei in Diskussionen über
            Gefahren durch KI und Automatisierung zu verlieren.
          </p>
        </div>

        {/* Quote – Dr. Rolf Strittmatter */}
        <div className="mt-16">
          <div className="bezel-card">
            <div className="bezel-card-inner">
              <blockquote className="text-pretty text-base italic leading-relaxed text-zinc-700 md:text-lg md:leading-relaxed">
                &ldquo;Hamburgs Wirtschaft war schon immer ganz vorn dabei, die technischen
                Möglichkeiten zur Entwicklung neuer Verfahren und Produkte zu nutzen. Das gilt auch
                heute wieder. Insbesondere in den Bereichen Aviation, Life Science, Erneuerbare
                Energien, Maritime Wirtschaft und Logistik wird Künstliche Intelligenz schon bald
                die gesamte Produktion verändern. In Hamburg baut Zukunft auf Tradition.&rdquo;
              </blockquote>
              <div className="mt-6 flex flex-col gap-1">
                <p className="font-display text-base font-semibold tracking-tight text-zinc-900">
                  Dr. Rolf Strittmatter
                </p>
                <p className="text-sm text-zinc-500">Hamburg Invest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
