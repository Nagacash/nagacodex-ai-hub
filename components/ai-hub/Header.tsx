"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS, AIRTABLE_FORM_URL } from "./constants";

const linkClass =
  "whitespace-nowrap text-[11px] font-semibold tracking-tight text-zinc-800 transition-colors duration-200 hover:text-zinc-950 xl:text-[13px]";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shellClass = scrolled ? "nav-shell nav-shell-scrolled" : "nav-shell";

  return (
    <header className="sticky top-4 z-[60] px-4 md:top-6 md:px-6">
      <div
        className={`mx-auto flex max-w-[min(92rem,calc(100%-0rem))] items-center gap-2 rounded-full px-3 py-2.5 transition-[box-shadow,background-color,border-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:gap-3 md:px-5 md:py-3 lg:px-7 ${shellClass}`}
      >
        <Link
          href="/ai-hub"
          className="relative block w-[min(132px,36vw)] shrink-0 transition-opacity duration-200 hover:opacity-90 md:w-[min(158px,30vw)]"
        >
          <Image
            src={ASSETS.headerLogo}
            alt="AI.HUB Hamburg"
            width={800}
            height={163}
            className="h-auto w-full object-contain drop-shadow-sm"
            priority
            unoptimized
            sizes="158px"
          />
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden min-h-0 min-w-0 flex-1 items-center justify-center gap-x-2 overflow-x-auto overscroll-x-contain py-0.5 [-ms-overflow-style:none] [scrollbar-width:none] md:flex lg:gap-x-3 xl:gap-x-4 [&::-webkit-scrollbar]:hidden"
        >
          <Link href="/ai-hub" className={linkClass}>
            AI.HUB
          </Link>
          <Link href="/about" className={linkClass}>
            About
          </Link>
          <Link href="/gruendungspartner" className={linkClass}>
            Gründungspartner
          </Link>
          <Link href="/background" className={linkClass}>
            Background
          </Link>
          <Link href="/ai-ecosystem" className={linkClass}>
            AI Ecosystem
          </Link>
          <Link href="/veranstaltungen" className={linkClass}>
            Veranstaltungen
          </Link>
        </nav>

        <a
          href={AIRTABLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex max-w-[9.5rem] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#E30276] to-[#DA297E] px-2.5 py-2 text-center text-[8px] font-semibold uppercase leading-tight tracking-[0.08em] text-white shadow-[0_12px_36px_-16px_rgba(227,2,118,0.75)] ring-1 ring-white/35 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-px hover:shadow-[0_18px_48px_-18px_rgba(227,2,118,0.88)] active:scale-[0.98] sm:max-w-none sm:px-4 sm:text-[10px] sm:tracking-[0.1em] md:px-5 md:py-2.5 md:text-[11px]"
        >
          Beratungsgespräch Anfragen
        </a>
      </div>
    </header>
  );
}
