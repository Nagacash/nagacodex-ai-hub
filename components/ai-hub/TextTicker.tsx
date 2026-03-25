"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  /** Screen-reader label (defaults to full text) */
  label?: string;
  className?: string;
};

export function TextTicker({ text, label, className = "" }: Props) {
  const srLabel = label ?? text;
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reduceMotion) {
    return (
      <div
        className={`border-y border-white/10 bg-black px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:px-8 ${className}`}
      >
        <p className="text-pretty font-display text-sm font-medium leading-relaxed text-zinc-100 md:text-base">
          {text}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`w-full overflow-hidden border-y border-white/10 bg-black py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${className}`}
    >
      <p className="sr-only">{srLabel}</p>
      <div aria-hidden className="intro-marquee-track flex w-max">
        {[0, 1].map((i) => (
          <span key={i} className="inline-flex shrink-0 items-center gap-8 px-6 md:px-10">
            <span className="whitespace-nowrap font-display text-[clamp(0.95rem,2vw,1.1rem)] font-medium tracking-[-0.01em] text-zinc-100 md:text-[1.05rem]">
              {text}
            </span>
            <span className="select-none text-zinc-600">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
