"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { reveal, stagger, viewport } from "./motion";

const services = [
  {
    number: "01",
    title: "Plan a new product",
    need: "You have the opportunity, but the first release and technical direction are still unclear.",
    receive: "User flows, tested prototype, release scope, architecture direction, and delivery estimate.",
  },
  {
    number: "02",
    title: "Build an app or platform",
    need: "You need one team to design, engineer, test, and launch a web or mobile product.",
    receive: "Production software, integrations, quality automation, documentation, and launch support.",
  },
  {
    number: "03",
    title: "Improve an existing system",
    need: "Your product is slow, fragile, difficult to change, or no longer fits the way the business works.",
    receive: "Technical assessment, prioritized improvements, modernization plan, and incremental delivery.",
  },
  {
    number: "04",
    title: "Automate a costly workflow",
    need: "Manual handoffs, repeated data entry, or review queues are consuming time and creating errors.",
    receive: "Practical automation with integrations, human review, safeguards, and a measurable result.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#f7f5ef] px-4 py-24 text-[#10151d] sm:px-6 lg:py-28">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto max-w-7xl"
      >
        <motion.div variants={reveal} className="grid gap-6 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <span className="text-sm font-semibold text-blue-700">What we help you move forward</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
              Start with the business problem, not a list of technologies.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600 lg:justify-self-end">
            We join at the point where a product decision needs design and engineering evidence—not another presentation.
          </p>
        </motion.div>

        <motion.div variants={reveal} className="mt-12 border-t border-slate-300">
          <div className="hidden grid-cols-[80px_1fr_1.15fr_1.15fr_40px] gap-6 border-b border-slate-300 py-3 text-[10px] font-bold uppercase tracking-[.14em] text-slate-400 lg:grid">
            <span>No.</span>
            <span>Need</span>
            <span>When it helps</span>
            <span>What you leave with</span>
            <span />
          </div>
          {services.map((service) => (
            <a
              key={service.number}
              href="/services"
              className="group grid gap-4 border-b border-slate-300 py-7 transition hover:bg-white/55 lg:grid-cols-[80px_1fr_1.15fr_1.15fr_40px] lg:items-start lg:gap-6 lg:px-0"
            >
              <span className="font-mono text-[10px] text-blue-700">{service.number}</span>
              <h3 className="text-xl font-semibold tracking-[-.025em]">{service.title}</h3>
              <div>
                <span className="mb-2 block text-[9px] font-bold uppercase tracking-[.13em] text-slate-400 lg:hidden">When it helps</span>
                <p className="text-sm leading-6 text-slate-600">{service.need}</p>
              </div>
              <div>
                <span className="mb-2 block text-[9px] font-bold uppercase tracking-[.13em] text-slate-400 lg:hidden">What you receive</span>
                <p className="text-sm leading-6 text-slate-600">{service.receive}</p>
              </div>
              <ArrowUpRight size={18} className="text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-700" />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
