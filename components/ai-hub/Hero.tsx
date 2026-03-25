"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ASSETS } from "./constants";
import { PrimaryCta } from "./PrimaryCta";

const HERO_HEADLINE_LINE1 = "Transformieren Sie Ihr Unternehmen mit KI:";
const HERO_HEADLINE_LINE2 = "Von der Strategie bis zur Umsetzung";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const line1Words = HERO_HEADLINE_LINE1.split(" ");
  const line2Words = HERO_HEADLINE_LINE2.split(" ");

  return (
    <div className="relative p-[1px] md:px-0">
      <div className="rounded-[clamp(1.4rem,3.2vw,2.2rem)] bg-gradient-to-br from-white/35 via-white/[0.08] to-[#00b5e2]/25 p-[1px] shadow-[0_48px_120px_-56px_rgba(8,12,28,0.55)]">
        <section
          id="hero"
          className="relative isolate scroll-mt-24 overflow-hidden rounded-[clamp(1.32rem,3.05vw,2.08rem)] ring-1 ring-white/12 md:scroll-mt-32"
        >
          <div
            className="absolute inset-0 scale-105 bg-cover bg-bottom"
            style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-zinc-950/82 via-zinc-950/48 to-[#001018]/62"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,8,16,0.5)_100%)]"
            aria-hidden
          />
          <div
            className="absolute -left-1/3 top-0 h-[min(70vh,640px)] w-[min(92vw,760px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,181,226,0.42),transparent_62%)] blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -right-1/4 bottom-0 h-[min(52vh,500px)] w-[min(84vw,580px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(227,2,118,0.34),transparent_60%)] blur-3xl"
            aria-hidden
          />

          <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.09] mix-blend-overlay">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.5'/%3E%3C/svg%3E\")",
              }}
              aria-hidden
            />
          </div>

          <div className="relative z-[2] mx-auto flex min-h-[min(100dvh,940px)] w-full flex-col justify-center px-5 py-24 md:px-10 lg:max-w-[min(76rem,92%)] lg:py-32">
            <div className="mb-12 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.08] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md md:text-[11px]">
                AI.HUB · Hamburg · 2026
              </span>
              <span className="hidden h-px flex-1 max-w-[min(14rem,30vw)] bg-gradient-to-r from-white/55 to-transparent md:block" />
            </div>

            <div className="mb-11 w-full max-w-[min(100%,580px)] md:max-w-[50%]">
              <Image
                src={ASSETS.heroLogo}
                alt=""
                width={2560}
                height={522}
                className="h-auto w-full object-contain drop-shadow-[0_28px_80px_rgba(0,0,0,0.5)]"
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 580px"
              />
            </div>

            {reduceMotion ? (
              <h1 className="font-display max-w-[min(100%,48rem)] text-balance text-[clamp(2.1rem,4.8vw,3.85rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-white [text-shadow:0_2px_60px_rgba(0,0,0,0.35)]">
                <span className="text-gradient-hero">Transformieren</span> Sie Ihr Unternehmen mit KI:
                <br />
                <span className="mt-1 inline-block font-medium text-white/[0.94]">
                  Von der Strategie bis zur Umsetzung
                </span>
              </h1>
            ) : (
              <h1 className="font-display flex max-w-[min(100%,48rem)] flex-col text-[clamp(2.1rem,4.8vw,3.85rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-white [text-shadow:0_2px_60px_rgba(0,0,0,0.35)]">
                <span className="flex flex-wrap gap-x-[0.35em] gap-y-1 text-balance">
                  {line1Words.map((word, i) => (
                    <motion.span
                      key={`h1-l1-${word}-${i}`}
                      className={i === 0 ? "inline-block text-gradient-hero" : "inline-block"}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 115,
                        damping: 22,
                        delay: 0.055 * i,
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
                <span className="mt-1 flex flex-wrap gap-x-[0.35em] gap-y-1 text-balance font-medium text-white/[0.94]">
                  {line2Words.map((word, i) => (
                    <motion.span
                      key={`h1-l2-${word}-${i}`}
                      className="inline-block"
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 115,
                        damping: 22,
                        delay: 0.055 * (line1Words.length + i),
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </h1>
            )}

            <p className="mt-9 max-w-[min(65ch,52rem)] text-pretty text-base font-normal leading-[1.75] text-white/[0.88] md:text-lg md:leading-[1.75] gap-y-8">
              Der AI.HUB ist Ihr Partner für die kontinuierliche KI-Reise im Mittelstand: ein
              Schulungs- und Innovationsökosystem, das Ambitionen in messbare Ergebnisse überführt.
              Mitglieder erhalten ein umfangreiches, bedarfsgerechtes Leistungsangebot, zugeschnitten
              auf die Ziele Ihres Unternehmens – sowie Zugang zu einem wachsenden Netzwerk und
              regelmäßigem Austausch im Ökosystem.
            </p>

            <div className="mt-14 flex flex-wrap items-center gap-6">
              <PrimaryCta />
              <p className="max-w-[15rem] text-xs leading-snug text-white/50 md:text-[13px] md:leading-relaxed">
                Unverbindlich · Remote &amp; vor Ort · Für den Mittelstand gebaut
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
