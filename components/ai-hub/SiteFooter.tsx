"use client";

import Link from "next/link";
import { MotionSection } from "./MotionSection";

const col1 = [
  { label: "About Us", href: "https://ai.hamburg/de/about/" },
  { label: "Background", href: "https://ai.hamburg/de/background/" },
  { label: "Advisors", href: "https://ai.hamburg/de/advisors/" },
  { label: "Gründungspartner", href: "https://ai.hamburg/de/founders/" },
  { label: "Jobs", href: "https://join.com/companies/ai" },
];

const col2 = [
  { label: "AI Insights", href: "https://ai.hamburg/de/insights/" },
  { label: "AI Ecosystem", href: "https://ai.hamburg/de/ecosystem/" },
  { label: "AI Events", href: "https://ai.hamburg/de/veranstaltungen/" },
  { label: "AI News", href: "https://ai.hamburg/de/ai-news/" },
  { label: "Blog", href: "https://ai.hamburg/de/blog/" },
];

const col3 = [
  { label: "Kontakt", href: "/kontakt" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutzerklärung", href: "https://ai.hamburg/de/privacy-policy/" },
  { label: "Cookie Policy", href: "https://ai.hamburg/de/cookie-policy/" },
];

export function SiteFooter() {
  return (
    <MotionSection className="relative mt-auto">
      <div className="border-t border-white/10 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black py-14 md:py-16">
        <div className="mx-auto grid max-w-[min(92rem,calc(100%-2rem))] grid-cols-1 gap-12 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-4 lg:gap-10">
          <ul className="space-y-3 text-sm text-zinc-300">
            {col1.map((l) => (
              <li key={l.href}>
                <Link className="transition hover:text-white" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-3 text-sm text-zinc-300">
            {col2.map((l) => (
              <li key={l.href}>
                <Link className="transition hover:text-white" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-3 text-sm text-zinc-300">
            {col3.map((l) => (
              <li key={l.href}>
                <Link className="transition hover:text-white" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-5 text-sm text-zinc-300">
            <p className="leading-relaxed text-zinc-400">
              Kontaktieren Sie uns direkt mit einer Anfrage, und werden Sie kostenfrei Mitglied
              unserer Community.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex rounded-full bg-gradient-to-r from-zinc-100 to-white px-5 py-2.5 text-xs font-semibold text-zinc-900 shadow-[0_16px_40px_-22px_rgba(255,255,255,0.35)] ring-1 ring-white/25 transition hover:translate-y-[-1px]"
            >
              Kontakt/Anmeldung
            </Link>
            <p className="pt-1 text-zinc-400">Melden Sie sich für den Newsletter an.</p>
            <Link
              href="https://ai.hamburg/de/newsletter/"
              className="inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Newsletter
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black py-10">
        <div className="mx-auto flex max-w-[min(92rem,calc(100%-2rem))] flex-wrap items-center justify-center gap-3 px-4">
          {[
            { label: "Instagram", href: "https://www.instagram.com/ai.hamburg/" },
            { label: "Youtube", href: "https://www.youtube.com/channel/UCOn7jPYBNGjDh-yLAAd91Fg" },
            { label: "Facebook", href: "https://www.facebook.com/aiforhamburg/" },
            { label: "Linkedin", href: "https://de.linkedin.com/company/ai-hamburg" },
            { label: "X", href: "https://twitter.com/hamburg_ai?lang=en" },
            { label: "Xing", href: "https://www.xing.com/pages/ai-hamburg/about_us" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-200 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-[11px] font-light tracking-wide text-zinc-500">
          Copyright © 2026 AI.HAMBURG, All rights reserved.
        </p>
      </div>
    </MotionSection>
  );
}
