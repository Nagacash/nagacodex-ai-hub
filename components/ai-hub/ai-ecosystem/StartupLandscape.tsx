"use client";

import Image from "next/image";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { MotionSection } from "../MotionSection";

export function StartupLandscape() {
  return (
    <MotionSection className="relative py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#eef1f8] to-white" />
      <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        <div className="flex flex-col gap-4 md:max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/90">
            Startups
          </p>
          <h2 className="font-display text-[clamp(1.35rem,2.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            German Startup Landscape (DE)
          </h2>
        </div>

        <p className="mt-8 max-w-[65ch] text-sm leading-relaxed text-zinc-600 md:text-base md:leading-relaxed">
          Die AI Startup Landscape enthält private Start-up-Unternehmen mit Hauptsitz in Deutschland,
          die nach 2009 gegründet wurden. Diese Unternehmen nutzen alle das Maschinelles Lernen (ML)
          in erheblichem Maße.
        </p>

        <p className="mt-3 text-sm text-zinc-500">
          Source:{" "}
          <a
            href="https://www.appliedai-institute.de"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-secondary underline decoration-secondary/35 underline-offset-[5px] transition hover:text-zinc-900"
          >
            appliedAI
          </a>
        </p>

        <div className="mt-12 overflow-hidden rounded-[1.35rem] border border-black/[0.06] bg-white/80 p-1 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.35)]">
          <div className="overflow-hidden rounded-[1.15rem] bg-zinc-100/80">
            {/* Intrinsic size 946×1080 — wrong aspect in width/height breaks next/image layout */}
            <Image
              src="/images/German-AI-Startup-Landscape-2024-1-scaled.jpg"
              alt="German AI Startup Landscape 2024 – Übersicht deutscher KI-Startups"
              width={946}
              height={1080}
              className="h-auto w-full object-contain object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, min(1100px, 92vw)"
              priority={false}
              unoptimized
            />
          </div>
        </div>

        <div className="mt-10">
          <a
            href="https://www.appliedai-institute.de/assets/files/German-AI-Startup-Landscape-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bezel-card group inline-flex items-center gap-3 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]"
          >
            <span className="bezel-card-inner flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/90 to-cyan-700/70 text-white shadow-[0_16px_40px_-18px_rgba(0,181,226,0.55)] ring-1 ring-white/15">
                <ArrowSquareOut className="h-6 w-6" weight="duotone" aria-hidden />
              </span>
              <span>
                <span className="block font-display text-base font-semibold tracking-tight text-zinc-900">
                  AI Startup Landscape 2024
                </span>
                <span className="block text-sm text-zinc-500">
                  In höherer Auflösung herunterladen (PDF)
                </span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </MotionSection>
  );
}
