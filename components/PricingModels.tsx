"use client";

import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { reveal, stagger, viewport } from "./motion";

const models = [
  {
    number: "01",
    title: "Discovery sprint",
    cadence: "Typically 2 weeks",
    when: "The problem is important, but the first release, risks, or technical direction are not clear enough to estimate responsibly.",
    leaves: ["Critical user flows", "First-release scope", "Technical direction", "Delivery estimate"],
  },
  {
    number: "02",
    title: "Build a release",
    cadence: "Typically 8–14 weeks",
    when: "You have a defined product outcome and need one accountable team to take it through design, engineering, QA, and launch.",
    leaves: ["Product and UX design", "Production engineering", "Testing and release setup", "Launch documentation"],
  },
  {
    number: "03",
    title: "Ongoing product team",
    cadence: "Monthly",
    when: "An existing roadmap needs consistent senior product, design, and engineering capacity without growing a large permanent team.",
    leaves: ["Named senior team", "Shared roadmap", "Continuous releases", "Knowledge transfer"],
  },
];

export function PricingModels() {
  return (
    <section className="bg-[#090d14] px-4 py-24 text-white sm:px-6 lg:py-28">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto max-w-7xl"
      >
        <motion.div variants={reveal} className="grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-sm font-semibold text-blue-300">Ways to work together</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Three clear ways to start.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-400 lg:justify-self-end">
            We choose the smallest engagement that can answer the next important question or ship the next useful release. Scope and price are written down before work begins.
          </p>
        </motion.div>

        <motion.div variants={reveal} className="mt-12 border-t border-white/15">
          {models.map((model) => (
            <article
              key={model.number}
              className="group grid gap-6 border-b border-white/15 py-8 lg:grid-cols-[70px_.85fr_1.3fr_1.05fr_auto] lg:items-start"
            >
              <span className="font-mono text-[10px] text-blue-400">{model.number}</span>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-.035em]">{model.title}</h3>
                <span className="mt-2 block text-sm text-blue-300">{model.cadence}</span>
              </div>
              <div>
                <span className="mb-2 block text-[9px] font-bold uppercase tracking-[.14em] text-slate-600">Use this when</span>
                <p className="text-sm leading-6 text-slate-400">{model.when}</p>
              </div>
              <div>
                <span className="mb-3 block text-[9px] font-bold uppercase tracking-[.14em] text-slate-600">Included outcome</span>
                <ul className="grid gap-2">
                  {model.leaves.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check size={13} className="text-emerald-400" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/contact"
                aria-label={`Discuss ${model.title}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-slate-400 transition group-hover:border-blue-400 group-hover:bg-blue-600 group-hover:text-white"
              >
                <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </motion.div>

        <motion.div variants={reveal} className="mt-8 flex flex-col justify-between gap-5 border-b border-white/15 pb-8 sm:flex-row sm:items-center">
          <p className="text-xs leading-6 text-slate-500">
            NDA available · no hidden platform fees · milestone visibility · complete code ownership
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
            Talk through the options <ArrowRight size={15} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
