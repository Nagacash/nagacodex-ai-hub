"use client";

import { ArrowUp, List } from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Start" },
  { id: "intro", label: "Positionierung" },
  { id: "services", label: "Leistungen" },
  { id: "videos", label: "Videos" },
  { id: "implementation", label: "Implementierung" },
  { id: "membership", label: "Mitgliedschaft" },
  { id: "expertise", label: "Expertise" },
  { id: "cta", label: "Kontakt" },
] as const;

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SectionScrollNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const goTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  }, []);

  const goSection = useCallback((id: string) => {
    scrollToId(id);
    setOpen(false);
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-50 flex flex-col items-end gap-2 md:bottom-8 md:right-8"
    >
      {open ? (
        <nav
          id="section-scroll-nav"
          aria-label="Abschnitte auf dieser Seite"
          className="glass-panel pointer-events-auto max-h-[min(70vh,28rem)] w-[min(calc(100vw-2rem),17rem)] overflow-y-auto rounded-2xl py-2"
        >
          <p className="px-4 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Zu Abschnitt
          </p>
          <ul className="divide-y divide-zinc-200/80">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => goSection(id)}
                  className="w-full px-4 py-2.5 text-left text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <div className="pointer-events-auto flex gap-2">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={open ? "section-scroll-nav" : undefined}
          aria-haspopup="true"
          className="glass-panel inline-flex h-12 w-12 items-center justify-center rounded-full text-zinc-800 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:shadow-[0_28px_70px_-36px_rgba(0,181,226,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          title="Abschnitte"
        >
          <List className="h-5 w-5" weight="bold" aria-hidden />
          <span className="sr-only">Abschnitte wählen</span>
        </button>
        <button
          type="button"
          onClick={goTop}
          className="glass-panel inline-flex h-12 w-12 items-center justify-center rounded-full text-zinc-800 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:shadow-[0_28px_70px_-36px_rgba(227,2,118,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          title="Nach oben"
        >
          <ArrowUp className="h-5 w-5" weight="bold" aria-hidden />
          <span className="sr-only">Nach oben scrollen</span>
        </button>
      </div>
    </div>
  );
}
