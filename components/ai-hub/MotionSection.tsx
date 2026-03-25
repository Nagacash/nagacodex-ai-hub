"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Anchor id for in-page navigation; adds scroll-margin for the sticky header. */
  id?: string;
};

export function MotionSection({ children, className = "", style, id }: Props) {
  const reduce = useReducedMotion();
  const anchorOffset = id ? " scroll-mt-24 md:scroll-mt-28" : "";

  return (
    <motion.section
      id={id}
      className={`${className}${anchorOffset}`}
      style={style}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ type: "spring", stiffness: 100, damping: 22 }}
    >
      {children}
    </motion.section>
  );
}
