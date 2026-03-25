import Link from "next/link";

import { PrimaryCta } from "../PrimaryCta";

export function KontaktContent() {
  return (
    <article className="mx-auto max-w-[min(48rem,calc(100%-2rem))] px-4 pb-24 pt-12 md:px-6 md:pt-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-zinc-900 md:text-[2rem]">
        Kontakt/Anmeldung
      </h1>

      <p className="mt-8 text-pretty text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
        Wenn Sie allgemeine Anfragen, Workshop-Anfragen oder Anfragen zu einer Inhouse-Schulung haben,
        können Sie uns mit diesem Formular kontaktieren. Darüber hinaus können Sie sich für unseren
        Newsletter anmelden oder sich kostenlos unserer Community anschließen.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <PrimaryCta>Zum Kontaktformular</PrimaryCta>
        <Link
          href="https://ai.hamburg/de/newsletter/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-zinc-400 hover:bg-zinc-50"
        >
          Newsletter
        </Link>
      </div>

      <div className="mt-16 space-y-12 border-t border-zinc-200/80 pt-16">
        <section className="space-y-3">
          <h2 className="font-display text-lg font-semibold tracking-tight text-zinc-900">Adresse</h2>
          <address className="not-italic text-sm leading-relaxed text-zinc-600 md:text-[15px]">
            Neuer Jungfernstieg 5
            <br />
            20354 Hamburg
            <br />
            Deutschland
          </address>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg font-semibold tracking-tight text-zinc-900">Telefon</h2>
          <p className="text-sm text-zinc-600 md:text-[15px]">
            <a
              href="tel:+494024822851"
              className="font-medium text-secondary underline decoration-secondary/30 underline-offset-2 transition hover:text-zinc-900"
            >
              +49 40 2482 2851
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg font-semibold tracking-tight text-zinc-900">E-Mail</h2>
          <p className="text-sm text-zinc-600 md:text-[15px]">
            <a
              href="mailto:info@ai.hamburg"
              className="font-medium text-secondary underline decoration-secondary/30 underline-offset-2 transition hover:text-zinc-900"
            >
              info@ai.hamburg
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
