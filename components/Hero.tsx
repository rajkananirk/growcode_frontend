"use client";

import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CalendlyModal } from "./CalendlyModal";
import { reveal, stagger } from "./motion";
import { ServiceInquiryModal } from "./ServiceInquiryModal";

const fit = ["New digital products", "Internal workflow platforms", "Web and mobile modernization"];

export function Hero() {
  const [estimateOpen, setEstimateOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <>
      <section id="top" className="relative overflow-hidden bg-[#080c13] px-4 pb-20 pt-40 text-white sm:px-6 lg:pb-24 lg:pt-44">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.06fr_.94fr] lg:items-center xl:gap-16"
        >
          <div>
            <motion.p variants={reveal} className="text-sm font-semibold text-blue-300">
              Product strategy · UX design · software engineering
            </motion.p>
            <motion.h1
              variants={reveal}
              className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[.98] tracking-[-.062em] sm:text-6xl xl:text-[4.6rem]"
            >
              We turn complex workflows into software people can{" "}
              <span className="text-blue-400">actually use.</span>
            </motion.h1>
            <motion.p variants={reveal} className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Growcode plans, designs, and builds web platforms and mobile apps—from the first scope to production launch. You work directly with the people making the product.
            </motion.p>

            <motion.div variants={reveal} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setEstimateOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500"
              >
                Tell us about your project <ArrowRight size={16} />
              </button>
              <a
                href="/work"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/[.04]"
              >
                See selected work
              </a>
            </motion.div>

            <motion.div variants={reveal} className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
              <span>We reply within one business day.</span>
              <button
                type="button"
                onClick={() => setCalendarOpen(true)}
                className="inline-flex items-center gap-2 font-semibold text-blue-300 transition hover:text-blue-200"
              >
                <CalendarDays size={15} /> Book a 30-minute call
              </button>
            </motion.div>

            <motion.div variants={reveal} className="mt-10 border-t border-white/10 pt-6">
              <span className="text-[10px] font-bold uppercase tracking-[.16em] text-slate-600">Good fit for</span>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {fit.map((item) => (
                  <span key={item} className="flex items-start gap-2 text-xs leading-5 text-slate-400">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-400" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.figure
            variants={reveal}
            className="relative mx-auto w-full max-w-[650px] pb-8 pt-2 sm:pb-10 lg:pb-0"
          >
            <div className="relative z-30 grid grid-cols-3 divide-x divide-white/10 bg-[#0a1421]/95 py-5 backdrop-blur sm:py-6">
              {[
                ["1 day", "Team kickoff"],
                ["24h", "Typical reply"],
                ["100%", "Visible delivery"],
              ].map(([value, label], index) => (
                <div key={label} className="px-2 text-center sm:px-5">
                  <strong className={`block text-2xl tracking-[-.045em] sm:text-3xl ${index === 1 ? "text-blue-400" : "text-white"}`}>
                    {value}
                  </strong>
                  <span className="mt-1.5 block text-[10px] text-slate-500 sm:text-xs">{label}</span>
                </div>
              ))}
            </div>

            <div className="relative min-h-[520px] sm:min-h-[650px] lg:min-h-[620px] xl:min-h-[670px]">
              <div className="pointer-events-none absolute left-[5%] top-[20%] h-[62%] w-[66%] rounded-t-full border-l border-t border-slate-700/60" />
              <div className="pointer-events-none absolute left-[17%] top-[30%] h-[49%] w-[52%] rounded-t-full border-l border-t border-slate-700/45" />
              <span className="absolute left-[3%] top-[22%] h-2.5 w-2.5 rounded-full border border-cyan-400/70" />

              <Image
                src="/images/hero-product-engineer.webp"
                width={1024}
                height={1536}
                sizes="(max-width: 1024px) 94vw, 44vw"
                priority
                alt="Product engineer reviewing an application on a tablet"
                className="absolute bottom-0 left-1/2 z-10 h-auto w-[78%] max-w-[500px] -translate-x-1/2 object-contain brightness-[.94] saturate-[.9] sm:w-[76%] lg:w-[82%]"
              />

              <div className="absolute bottom-[17%] left-0 z-20 bg-[#080d15]/90 px-4 py-4 backdrop-blur-sm sm:left-[1%] sm:px-5">
                <span className="block text-[10px] tracking-wide text-slate-500">Products launched</span>
                <strong className="mt-1 block text-2xl tracking-[-.04em] text-white sm:text-3xl">32+</strong>
              </div>

              <div className="absolute bottom-[13%] right-0 z-20 bg-blue-500 px-4 py-4 text-white sm:right-[1%] sm:px-5 sm:py-5">
                <span className="block text-[10px] text-blue-100 sm:text-xs">Product review</span>
                <strong className="mt-1 block text-base sm:text-xl">Every Friday</strong>
              </div>

              <figcaption className="absolute bottom-0 left-1/2 z-30 flex w-[82%] -translate-x-1/2 items-center justify-center gap-2 bg-[#090f19]/95 px-4 py-3 text-center text-xs font-semibold text-emerald-300 backdrop-blur sm:w-[78%] sm:text-sm">
                <CheckCircle2 size={17} className="shrink-0" />
                Senior team · full code ownership
              </figcaption>
            </div>
          </motion.figure>
        </motion.div>
      </section>

      <ServiceInquiryModal service={estimateOpen ? "your next product" : null} onClose={() => setEstimateOpen(false)} />
      <CalendlyModal open={calendarOpen} onClose={() => setCalendarOpen(false)} />
    </>
  );
}
