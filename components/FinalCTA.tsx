"use client";

import { ArrowRight, CalendarDays, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { reveal, stagger, viewport } from "./motion";

export function FinalCTA() {
  return (
    <section className="bg-blue-700 px-4 py-20 text-white sm:px-6 lg:py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end"
      >
        <motion.div variants={reveal}>
          <span className="text-sm font-semibold text-blue-200">Start with the context you have</span>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-.055em] sm:text-6xl">
            Have a product to build—or one that needs fixing?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100/80">
            Send the business goal, the difficult workflow, or the current problem. The scope does not need to be polished. We will reply with useful questions and a clear way to start.
          </p>
        </motion.div>

        <motion.div variants={reveal} className="border-t border-white/25 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <span className="text-[10px] font-bold uppercase tracking-[.15em] text-blue-200">Choose the next step</span>
          <div className="mt-5 grid gap-3">
            <a
              href="/contact"
              className="group flex items-center justify-between rounded-lg bg-white px-5 py-4 text-sm font-bold text-slate-950"
            >
              Tell us about the project
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="/contact"
              className="flex items-center justify-between rounded-lg border border-white/30 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> Book a 30-minute call</span>
              <ArrowRight size={16} />
            </a>
          </div>
          <a href="mailto:hello@growcodesolution.com" className="mt-5 inline-flex items-center gap-2 text-xs text-blue-100">
            <Mail size={14} /> hello@growcodesolution.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
