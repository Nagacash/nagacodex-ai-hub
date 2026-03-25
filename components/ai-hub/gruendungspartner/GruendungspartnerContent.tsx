"use client";

import Image from "next/image";

import { MotionSection } from "../MotionSection";

function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-8 flex flex-col gap-3 md:mb-10">
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/90">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-[clamp(1.25rem,2.4vw,1.75rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-zinc-900">
        {title}
      </h2>
    </div>
  );
}

function PersonCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="bezel-card h-full">
      <div className="bezel-card-inner flex h-full flex-col gap-2">
        <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-900">{name}</h3>
        <p className="text-sm leading-relaxed text-zinc-600">{role}</p>
      </div>
    </div>
  );
}

export function GruendungspartnerContent() {
  return (
    <>
      <MotionSection className="relative isolate overflow-hidden bg-zinc-950 py-20 md:py-28 lg:py-36">
        <div
          className="absolute -left-1/4 top-0 h-[min(70vh,560px)] w-[min(90vw,680px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,181,226,0.25),transparent_62%)] blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-1/4 bottom-0 h-[min(50vh,420px)] w-[min(80vw,520px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(227,2,118,0.18),transparent_60%)] blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/90">Gründungspartner</p>
          <h1 className="mt-5 max-w-4xl text-balance text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-tight text-white">
            Gründungspartner
          </h1>
          <p className="mt-8 max-w-[65ch] text-pretty text-base leading-relaxed text-zinc-300 md:text-lg md:leading-relaxed">
            Die Initiative AI for Hamburg (AI.HAMBURG) wurde 2019 von den Smaato-Gründern Petra Vorsteher &amp; Ragnar
            Kruse gegründet und gemeinsam mit Hamburg@work, TUTECH, Hamburger Universitäten und städtischen Partnern ins
            Leben gerufen.
          </p>
        </div>
      </MotionSection>

      <MotionSection className="relative py-16 md:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/35 to-transparent" />
        <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
          <SectionTitle title="Petra Vorsteher &amp; Ragnar Kruse" />

          <div className="max-w-[65ch] space-y-6 text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
            <p>
              AI for Hamburg (AI.HAMBURG) wurde 2019 von den Smaato-Gründern Petra Vorsteher &amp; Ragnar Kruse
              gegründet.
            </p>
            <p>
              Smaato, Inc. wurde 2005 im Silicon Valley von Ragnar Kruse und Petra Vorsteher in ihrem Wohnzimmer in San
              Mateo, CA, gegründet. Von San Francisco aus bauten sie die Company über Jahre zu einem weltweit erfolgreichen
              IT-Unternehmen mit 240 Mitarbeitern und Standorten in den USA, Europa und Asien aus. Das privat geführte
              Unternehmen eröffnete bereits 2006 seinen ersten deutschen Standort in Hamburg. 2016 verkauften sie
              Smaato, im Juli 2019 verließen sie die Firma, um sich AI.HAMBURG zu widmen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="bezel-card overflow-hidden">
              <div className="bezel-card-inner flex h-full flex-col gap-6 sm:flex-row sm:items-stretch">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[240px] shrink-0 overflow-hidden rounded-xl bg-zinc-100 sm:mx-0 sm:max-w-[200px]">
                  <Image
                    src="/images/Petra-Vorsteher.jpg"
                    alt="Petra Vorsteher"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(min-width: 640px) 200px, 240px"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-900">Petra Vorsteher</h3>
                  <p className="text-sm leading-relaxed text-zinc-600 md:text-[15px]">
                    Gründer von AI.HAMBURG und Smaato Vorstand International | Hamburg@work
                  </p>
                </div>
              </div>
            </div>

            <PersonCard
              name="Ragnar Kruse"
              role="Gründer von AI.HAMBURG und Smaato Beirat für das Thema AI bei Hamburg@work"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="relative border-t border-zinc-200/80 bg-zinc-50/50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
          <SectionTitle eyebrow="Netzwerk" title="Hamburg@work | DigitalCluster.Hamburg" />

          <div className="max-w-[65ch] space-y-6 text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
            <p>
              Hamburg@work ist das Digital Cluster im Norden Deutschlands. Die Organisation ist mit rund 75 Veranstaltungen
              im Jahr, 1.500 Mitgliedern aus 600 Mitgliedsunternehmen und einem Netzwerk von 9.000 digitalen Machern und
              Meinungsführern in der Metropolregion zur Institution geworden.
            </p>
            <p>
              Hamburg@work versteht Digitalisierung nicht nur als technischen Prozess, sondern als Motor für
              Transformation mit erheblichen Veränderungen für Wirtschaft, Staat und Gesellschaft.
            </p>
            <p>
              In diesem Sinne treibt Hamburg@work die Vernetzung auch innerhalb des AI Eco-Systems voran und fasst die
              beteiligten Unternehmen, Organisationen und Institutionen in einer AI-Fokusgruppe zusammen. Ein
              spezifisches Veranstaltungsprogramm ergänzt das Angebot an Workshops und Trainings.
            </p>
            <p>
              1997 als eines der ersten Digitalnetzwerke in Deutschland gegründet, hat Hamburg@work im August 2019 die
              Auszeichnung als „GOLD Label Cluster“ der Europäischen Union erhalten. Mit diesem Qualitätslabel hat die
              Europäische Cluster-Exzellenzinitiative (ECEI) Hamburg@work ein hohes Exzellenzniveau im Bereich des
              Clustermanagements bescheinigt. Im Unterschied zu städtischen oder nationalen Cluster-Förderprogrammen ist
              das &ldquo;Cluster Organisation Management Excellence Label (Quality Label) GOLD&rdquo; ein unabhängiges und
              freiwilliges Prädikat für Spitzenleistungen im Clustermanagement, das in ganz Europa anerkannt ist.
            </p>
          </div>

          <div className="mt-10 max-w-xl">
            <PersonCard
              name="Uwe Jens Neumann"
              role="Vorsitzender &amp; Geschäftsführer Hamburg@work | Co-Founder AI.HAMBURG"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="relative py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
          <SectionTitle title="Tutech &amp; Hamburg Innovation" />

          <div className="max-w-[65ch] space-y-6 text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
            <p>
              Die Tutech Innovation GmbH ist ein privatwirtschaftlich organisiertes Tochterunternehmen der Technischen
              Universität Hamburg und der Freien und Hansestadt Hamburg. Gemeinsam mit der Schwestergesellschaft Hamburg
              Innovation verbinden die beiden Unternehmen alle öffentlich-rechtlichen Hochschulen der Freien und
              Hansestadt Hamburg sowie zahlreiche Forschungseinrichtungen der Metropolregion.
            </p>
            <p>
              Tutech und Hamburg Innovation sprechen beide Sprachen – die der Wissenschaft und die der Unternehmen – und
              verbinden seit 25 Jahren erfolgreich unternehmerisches und wissenschaftliches Potenzial. Sie sind als
              Berater, Makler, Initiator und Koordinator im Wissens- und Technologietransfer auf nationaler und
              internationaler Ebene aktiv. Und das mit dem klaren Ziel, nachhaltige Werte durch die Anwendung aktuellster
              Forschungsergebnisse und Erfindungen zu schaffen. Mit dem Menschen und für den Menschen.
            </p>
          </div>

          <div className="mt-10 max-w-xl">
            <PersonCard
              name="Martin Mahn"
              role="Geschäftsführer Tutech Innovation GmbH und Hamburg Innovation GmbH"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="relative border-t border-zinc-200/80 bg-zinc-50/50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
          <SectionTitle title="TUHH Technische Universität Hamburg" />

          <div className="max-w-[65ch] space-y-6 text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
            <p>
              Die TUHH ist eine innovative und wachsende technische Universität, die in den Ingenieursmethoden, Neuen
              Materialien und Digitalisierung für die Kompetenzfelder Green Technologies, Life Science Technologies sowie
              Aviation and Maritime Systems stark ist. Die TUHH versteht sich als gesellschaftlich verankerte Universität,
              die den Herausforderungen der Gegenwart und Zukunft durch technische Lösungen begegnet.
            </p>
            <p>
              Durch die hohe Interdisziplinarität in Forschung und Lehre an der TUHH ist sie besonders erfolgreich,
              disruptive Technologien wie Data Science, Künstliche Intelligenz, Digital Twin, Neue Materialien oder den
              3D-Druck in den Transfer und die Anwendung zu überführen. Artificial Intelligence ist eine
              Schlüsselkompetenz, die an der TUHH beispielsweise in Maschinenbau, Materialwissenschaften, Flugzeug- und
              Schiffbau, Verfahrenstechnik, Bauingenieurswesen und Elektrotechnik angewandt wird. AI wird in Kooperation mit
              der Mathematik und Informatik der TUHH sowie in Kooperation mit der Universität Hamburg und der
              hochschulübergreifenden Hamburger Informatikplattform ahoi.digital eingesetzt und weiterentwickelt.
            </p>
            <p>
              Die TUHH leistet ihren Beitrag zur Entwicklung der technisch-wissenschaftlichen Kompetenz der Gesellschaft,
              indem sie den ingenieurwissenschaftlichen Nachwuchs mit modernen Lehr- und Lernmethoden ausbildet und den
              Technologietransfer sowie die Gründung von Unternehmen fördert.
            </p>
          </div>

          <div className="mt-10 max-w-xl">
            <PersonCard
              name="Prof. Dr. Andreas Timm-Giel"
              role="Präsident TUHH, Leiter des Instituts für Kommunikationsnetze"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="relative py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
          <SectionTitle title="Hamburg Invest und Wirtschaftsförderungsgesellschaft" />

          <div className="max-w-[65ch] space-y-6 text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
            <p>
              Hamburg Invest ist die One Stop Agency für Investitionen in Hamburg. Es ist die zentrale Anlaufstelle für
              alle Unternehmen, die im Wirtschaftsraum Hamburg investieren, expandieren, umstrukturieren, neu ansiedeln
              oder gründen wollen. Unter der Dachmarke Hamburg Invest wirbt Hamburg national und international proaktiv um
              neue Unternehmen für den Investitionsstandort Hamburg. Die Mittelstandslotse hilft bei komplexen
              Genehmigungsverfahren und vermittelt bei Bedarf zwischen Unternehmen und Verwaltung.
            </p>
            <p>
              Insbesondere für kleine und mittlere Unternehmen bietet Hamburg Invest vielfältige Serviceangebote. Für die
              Bereiche Dienstleistung &amp; Tourismus, Digitale Ökonomie &amp; E-Commerce, Industrie &amp; Gewerbe sowie
              Forschung &amp; Innovation gibt es spezialisierte Ansprechpartner.
            </p>
            <p>
              Hamburg ist ein Hotspot der deutschen Gründerszene. Die starke und diversifizierte Wirtschaftsstruktur sowie
              ein lebendiges Startup-Ökosystem bilden eine gute Basis, um Ideen erfolgreich umzusetzen. Das Resultat ist
              eine wachsende und gut vernetzte Startup-Szene. Die Startup-Unit ist die erste Anlaufstelle für junge,
              innovative Unternehmen und bietet Unterstützung rund um die Themen Wachstum, Vernetzung und
              Internationalisierung.
            </p>
          </div>

          <div className="mt-10 max-w-xl">
            <PersonCard
              name="Dr. Rolf Strittmatter"
              role="Vorsitzender der Geschäftsführung HIW Hamburg Invest und Wirtschaftsförderung"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="relative border-t border-zinc-200/80 bg-zinc-50/50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
          <SectionTitle title="Ahoi digital" />

          <div className="max-w-[65ch] space-y-6 text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
            <p>
              Die Universität Hamburg, TU Hamburg, HAW Hamburg, HafenCity Universität Hamburg und Behörde für
              Wissenschaft, Forschung und Gleichstellung haben „ahoi.digital“ als Gemeinschaftsprojekt Anfang 2017
              aufgebaut. Ziel ist es, die Informatik auf Spitzenniveau auszubauen und Hamburg als Top-Informatikstandort zu
              etablieren. Das ganzheitliche Konzept der Informatikplattform ist deutschlandweit einzigartig: Die
              Plattform basiert auf den drei Säulen „Bildung“, „Forschung“ und „Transfer“. Sie dient dabei als Katalysator,
              indem sie Bildung und Forschung stärkt und als Kompetenzzentrum und Netzwerk Impulse für Gründungen und
              Innovation gibt.
            </p>
            <p>
              Zudem soll sie die Kooperationen mit städtischen Clustern stärken und die Verbindung zwischen Wissenschaft und
              Wirtschaft ausbauen. Inhaltlich legt das Konzept von „ahoi.digital“ den Fokus auf vier Kernthemen der
              Informatik: „Cross-Modal Learning“, „Cyber-physikalische Systeme (CPS) und Smarte Systeme“, „Information
              Governance Technologies“ und „Data Science“.
            </p>
          </div>

          <div className="mt-10 max-w-xl">
            <PersonCard
              name="Dr. Martin Semmann, M.Sc."
              role="Geschäftsführer Allianz Hamburger Hochschulen für Informatik (ahoi.digital)"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="relative py-16 md:pb-24 md:pt-20 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
          <SectionTitle title="Artificial Intelligence Center Hamburg (ARIC)" />

          <div className="max-w-[65ch] space-y-6 text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
            <p>
              Das KI-Kompetenzzentrum Artificial Intelligence Center Hamburg (ARIC) e.V. bündelt in der Metropolregion das
              Know-how im Bereich Künstlicher Intelligenz &amp; konvergenter Technologien in Wirtschaft und Wissenschaft
              (private und öffentliche Institutionen) und stellt es als Real-Plattform über verschiedene Formate zur
              Verfügung. Ein großes Kooperationsnetzwerk bindet das Hamburger Innovationsökosystem mit ein und ermöglicht
              einen beidseitigen Wissenstransfer. Das Zentrum wird nationale und internationale Kooperationen aufbauen
              und einen Austausch mit den weltweiten KI-Hotspots anstreben.
            </p>
          </div>

          <div className="mt-10 max-w-xl">
            <PersonCard name="Alois Krtil" role="Artificial Intelligence Center (ARIC) Hamburg" />
          </div>
        </div>
      </MotionSection>
    </>
  );
}
