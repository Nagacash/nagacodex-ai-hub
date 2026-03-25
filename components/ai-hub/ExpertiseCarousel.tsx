"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TRAINERS } from "./constants";
import { MotionSection } from "./MotionSection";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function ExpertiseCarousel() {
  return (
    <MotionSection id="expertise" className="relative py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-900/10 to-transparent" />
      <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        <div className="flex flex-col gap-4 md:max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/90">
            Expertise
          </p>
          <h2 className="font-display text-[clamp(1.35rem,2.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            Expertise aus Praxis, Forschung und Industrie –
            <br />
            Mit dem AI.HUB in besten Händen
          </h2>
        </div>
        <p className="mt-8 max-w-[65ch] text-sm leading-relaxed text-zinc-600 md:text-base">
          Im AI.HUB arbeiten erfahrene Trainer:innen, Berater:innen und Praktiker:innen aus
          unterschiedlichen Disziplinen zusammen. Sie bringen Mittelstands-Erfahrung, aktuelle
          KI-Expertise und praxisnahe Methoden in Ihre Organisation – für Inhalte mit Substanz und
          Ergebnisse mit Wirkung.
        </p>

        <div className="mt-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={18}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
            }}
            loop
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="expertise-swiper pb-12 [&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:border [&_.swiper-button-next]:border-white/15 [&_.swiper-button-next]:bg-white/10 [&_.swiper-button-next]:p-3 [&_.swiper-button-next]:text-zinc-900 [&_.swiper-button-next]:backdrop-blur [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:border [&_.swiper-button-prev]:border-white/15 [&_.swiper-button-prev]:bg-white/10 [&_.swiper-button-prev]:p-3 [&_.swiper-button-prev]:text-zinc-900 [&_.swiper-button-prev]:backdrop-blur"
          >
            {TRAINERS.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="group flex h-full flex-col items-center rounded-[1.25rem] border border-white/50 bg-gradient-to-b from-white to-zinc-50/90 p-6 text-center shadow-[0_24px_70px_-44px_rgba(15,23,42,0.45)] ring-1 ring-black/[0.04] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_34px_90px_-44px_rgba(0,181,226,0.25)]">
                  <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border border-white/60 bg-white shadow-[0_20px_60px_-34px_rgba(15,23,42,0.45)] ring-1 ring-black/[0.05]">
                    <Image src={t.image} alt={t.name} fill unoptimized className="object-cover" sizes="200px" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <p className="font-display mt-6 text-lg font-semibold tracking-tight text-zinc-900">
                    {t.name}
                  </p>
                  <Link
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm font-semibold text-secondary underline decoration-secondary/35 underline-offset-[6px] transition hover:text-zinc-900"
                  >
                    mehr erfahren
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </MotionSection>
  );
}
