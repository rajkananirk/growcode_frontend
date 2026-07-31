"use client";

import { ArrowUpRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import feedback from "@/data/client-feedback.json";
import { reveal, stagger, viewport } from "./motion";

export function ClientPerspectives() {
  const featured = feedback[1];
  const supporting = [feedback[0], feedback[2]];

  return (
    <section className="bg-[#f3f0e9] px-4 py-24 text-[#10151d] sm:px-6 lg:py-28">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto max-w-7xl"
      >
        <motion.div variants={reveal} className="grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-sm font-semibold text-blue-700">Anonymized delivery feedback</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
              What clients notice once the work starts.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600 lg:justify-self-end">
            These are recurring themes from product engagements. Named references can be shared when client permissions allow.
          </p>
        </motion.div>

        <motion.div variants={reveal} className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <article className="bg-blue-700 p-7 text-white sm:p-10">
            <Quote size={28} className="text-blue-200" />
            <p className="mt-10 max-w-2xl text-2xl font-medium leading-[1.45] tracking-[-.025em] sm:text-3xl">
              “{featured.text}”
            </p>
            <div className="mt-10 border-t border-white/20 pt-5">
              <b className="block text-sm">{featured.role}</b>
              <span className="mt-1 block text-xs text-blue-200">{featured.context} · anonymized</span>
            </div>
          </article>

          <div className="border-t border-slate-300">
            {supporting.map((item, index) => (
              <article key={item.theme} className="border-b border-slate-300 py-7">
                <div className="flex gap-5">
                  <span className="font-mono text-[9px] text-blue-700">0{index + 2}</span>
                  <div>
                    <span className="text-xs font-semibold text-emerald-700">{item.theme}</span>
                    <p className="mt-4 text-lg leading-8 text-slate-800">“{item.text}”</p>
                    <span className="mt-4 block text-xs text-slate-500">
                      {item.role} · {item.context} · anonymized
                    </span>
                  </div>
                </div>
              </article>
            ))}
            <a href="/work" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
              See selected product work <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
