"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { AIRTABLE_FORM_URL } from "./constants";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function PrimaryCta({ className = "", children = "Beratungsgespräch Anfragen" }: Props) {
  return (
    <span className={`relative inline-flex ${className}`}>
      <span
        className="absolute inset-0 translate-x-2 translate-y-2 rounded-full bg-[#DA297E]/18 blur-[2px]"
        aria-hidden
      />
      <Link
        href={AIRTABLE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#c7026a] via-[#E30276] to-[#DA297E] py-2.5 pl-8 pr-2 text-center text-sm font-semibold tracking-wide text-white shadow-[0_22px_60px_-24px_rgba(227,2,118,0.85)] ring-1 ring-white/30 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform hover:-translate-y-0.5 hover:shadow-[0_32px_80px_-28px_rgba(227,2,118,0.95)] active:scale-[0.98] md:py-3 md:pl-10 md:text-base"
      >
        <span className="pr-1">{children}</span>
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px md:h-11 md:w-11">
          <ArrowUpRight className="h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]" weight="bold" aria-hidden />
        </span>
      </Link>
    </span>
  );
}
