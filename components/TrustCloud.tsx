"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { reveal, viewport } from "./motion";

const metrics = [
  { value: "32+", label: "products shipped" },
  { value: "11", label: "markets reached" },
  { value: "4.9/5", label: "partner rating" },
  { value: "< 1 day", label: "typical response" },
];

const expectations = [
  "Direct access to the people doing the work",
  "A working product review every week",
  "Your code, accounts, and documentation stay yours",
];

export function TrustCloud() {
  return (
    <section className="bg-[#f4f1ea] px-4 py-20 text-[#10151d] sm:px-6 lg:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={reveal}
        className="mx-auto max-w-7xl"
      >
        <div className="grid gap-8 border-t border-slate-300/80 pt-8 lg:grid-cols-[1.05fr_.75fr] lg:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.14em] text-blue-700">Working with Growcode</span>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-.05em] sm:text-5xl">
              A product team that keeps the work visible.
            </h2>
          </div>
          <div className="lg:pb-1">
            <p className="max-w-xl text-base leading-7 text-slate-600">
              No relay between sales, project managers, and developers. You see what is being built, speak with the team, and keep control of the product.
            </p>
            <a href="/work" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-blue-700">
              See how we deliver <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-12 grid overflow-hidden border border-slate-300/90 lg:grid-cols-[.9fr_1.1fr]">
          <div className="bg-[#0b1320] px-6 py-8 text-white sm:px-9 sm:py-10">
            <span className="font-mono text-[10px] uppercase tracking-[.15em] text-blue-300">What you can expect</span>
            <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
              {expectations.map((item, index) => (
                <div key={item} className="flex items-start gap-4 py-5">
                  <span className="mt-0.5 font-mono text-[10px] text-blue-400">0{index + 1}</span>
                  <span className="text-sm leading-6 text-slate-200">{item}</span>
                  <Check size={16} className="ml-auto mt-0.5 shrink-0 text-emerald-300" />
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs leading-5 text-slate-500">
              NDA available before discovery. No obligation to continue after the first scope.
            </p>
          </div>

          <div className="grid grid-cols-2 bg-white/45 sm:grid-cols-4 lg:grid-cols-2">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`min-h-36 px-5 py-7 sm:min-h-40 sm:px-6 lg:min-h-0 lg:px-8 lg:py-9 ${
                  index === 0
                    ? "border-b border-r border-slate-300/90 sm:border-b-0 lg:border-b"
                    : index === 1
                      ? "border-b border-slate-300/90 sm:border-b-0 sm:border-r lg:border-b lg:border-r-0"
                      : index === 2
                        ? "border-r border-slate-300/90"
                        : ""
                }`}
              >
                <strong className="block text-3xl tracking-[-.045em] sm:text-4xl">{metric.value}</strong>
                <span className="mt-2 block text-xs leading-5 text-slate-500">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
