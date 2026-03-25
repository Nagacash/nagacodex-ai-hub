"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { YOUTUBE_CLIPS, youtubeEmbedSrc } from "./constants";
import { MotionSection } from "./MotionSection";

import "swiper/css";
import "swiper/css/pagination";

export function VideoCarousel() {
  return (
    <MotionSection id="videos" className="relative py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-900/10 to-transparent" />
      <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/90">
            Mediathek
          </p>
          <h2 className="font-display mt-4 text-[clamp(1.5rem,3.2vw,2.25rem)] font-semibold tracking-[-0.02em] text-zinc-900">
            Videos &amp; Einblicke
          </h2>
          <p className="mt-5 max-w-[65ch] text-sm leading-relaxed text-zinc-600 md:text-base">
            Kuratierte Ausschnitte und Talks rund um KI, Umsetzung und den AI.HUB – ideal, um
            Orientierung zu gewinnen, bevor Sie ins Beratungsgespräch gehen.
          </p>
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 9000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            loop
            className="video-swiper pb-14"
          >
            {YOUTUBE_CLIPS.map((clip) => (
              <SwiperSlide key={clip.id}>
                <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-zinc-950 p-1 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.75)] ring-1 ring-white/10">
                  <div className="overflow-hidden rounded-[1.05rem] bg-zinc-950">
                    <div className="aspect-video w-full bg-zinc-900">
                      <iframe
                        title={`YouTube Video ${clip.id}`}
                        className="h-full w-full"
                        src={youtubeEmbedSrc(clip)}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-2 border-t border-white/10 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 px-5 py-3 text-[11px] text-white/70">
                      <span className="font-mono text-[10px] text-white/45">youtube.com/watch?v={clip.id}</span>
                      {clip.startSeconds > 0 ? (
                        <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/70">
                          Start {clip.startSeconds}s
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-secondary/20 blur-3xl"
                    aria-hidden
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </MotionSection>
  );
}
