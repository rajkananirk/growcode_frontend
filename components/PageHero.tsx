"use client";

import { motion } from "framer-motion";
import { reveal, stagger } from "./motion";

export function PageHero({ eyebrow, title, accent, description }: { eyebrow: string; title: string; accent: string; description: string }) {
  return <section className="relative isolate overflow-hidden bg-[#080b12] px-4 pb-20 pt-44 text-white sm:px-6 lg:pb-28 lg:pt-52"><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_10%,rgba(59,130,246,.16),transparent_32%),radial-gradient(circle_at_15%_60%,rgba(6,182,212,.08),transparent_30%)]" /><div className="absolute inset-0 -z-10 bg-dot-grid bg-[length:32px_32px] opacity-[0.07]" /><motion.div variants={stagger} initial="hidden" animate="visible" className="mx-auto max-w-7xl"><motion.span variants={reveal} className="section-label">{eyebrow}</motion.span><motion.h1 variants={reveal} className="mt-6 max-w-5xl text-balance font-display text-5xl font-semibold leading-[.98] tracking-[-0.06em] sm:text-7xl">{title} <span className="text-brand-400">{accent}</span></motion.h1><motion.p variants={reveal} className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">{description}</motion.p></motion.div></section>;
}
