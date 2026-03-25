"use client";

import Link from "next/link";
import { MotionSection } from "../MotionSection";

const posts = [
  {
    title:
      "Silicon Valley Legend Andreas von Bechtolsheim Joins AI.SUMMIT 2025 for Keynote and Fire-Side Chat",
    excerpt:
      "We are incredibly proud to announce Andreas von Bechtolsheim as the newest...",
    href: "https://ai.hamburg/de/blog/",
  },
  {
    title: "Official Speaker Drop #1 – AI.SUMMIT 2025",
    excerpt:
      "AI.SUMMIT 2025 unveils its powerhouse speaker lineup featuring industry visionaries who are...",
    href: "https://ai.hamburg/de/blog/",
  },
  {
    title:
      "Introducing the AI.ACADEMY Stage: Your Gateway to Practical AI Learning at AI.SUMMIT 2025",
    excerpt:
      "Transform your AI expertise at AI.SUMMIT 2025's groundbreaking AI.ACADEMY Stage—a dedicated learning...",
    href: "https://ai.hamburg/de/blog/",
  },
];

export function BlogHighlights() {
  return (
    <MotionSection className="relative py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/35 to-transparent" />
      <div className="mx-auto max-w-[min(92rem,calc(100%-2rem))] px-4 md:px-6">
        <div className="flex flex-col gap-4 md:max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/90">
            Blog
          </p>
          <h2 className="font-display text-[clamp(1.35rem,2.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            Neueste Blog-Beiträge und Neuigkeiten
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map(({ title, excerpt, href }) => (
            <Link
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bezel-card group transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]"
            >
              <div className="bezel-card-inner flex h-full flex-col gap-4">
                <h3 className="font-display text-base font-semibold leading-snug tracking-tight text-zinc-900 md:text-lg">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">{excerpt}</p>
                <p className="mt-auto pt-2 text-sm font-semibold text-secondary">Read More →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
