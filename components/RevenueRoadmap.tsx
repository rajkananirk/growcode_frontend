"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Blocks,
  CircleDotDashed,
  Compass,
  LineChart,
  Rocket,
  SearchCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { reveal, stagger, viewport } from "./motion";

type Step = {
  icon: LucideIcon;
  number: string;
  title: string;
  text: string;
  output: string;
};

const discover: Step[] = [
  {
    icon: Compass,
    number: "01",
    title: "Opportunity",
    text: "Connect the customer problem to a commercial outcome worth pursuing.",
    output: "Opportunity brief",
  },
  {
    icon: SearchCheck,
    number: "02",
    title: "Validation",
    text: "Test demand, workflows, risks, and assumptions before the expensive decisions.",
    output: "Evidence & scope",
  },
];

const deliver: Step[] = [
  {
    icon: Workflow,
    number: "03",
    title: "Product system",
    text: "Shape the journeys, architecture, data, and release boundary.",
    output: "Release blueprint",
  },
  {
    icon: Blocks,
    number: "04",
    title: "Build",
    text: "Ship production code in visible increments with quality built into the workflow.",
    output: "Working software",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Launch",
    text: "Prepare environments, analytics, onboarding, support, and release operations.",
    output: "Production release",
  },
];

const grow: Step[] = [
  {
    icon: BarChart3,
    number: "06",
    title: "Activation",
    text: "Find where users hesitate and improve the path to first value.",
    output: "Adoption signals",
  },
  {
    icon: LineChart,
    number: "07",
    title: "Revenue loop",
    text: "Turn real behavior into retention, expansion, and the next product bet.",
    output: "Growth backlog",
  },
];

function CompactStep({ step, dark = false }: { step: Step; dark?: boolean }) {
  const Icon = step.icon;

  return (
    <div className={`group border-t py-5 first:border-t-0 ${dark ? "border-white/10" : "border-slate-200"}`}>
      <div className="grid grid-cols-[auto_1fr] gap-4">
        <span
          className={`grid h-10 w-10 place-items-center rounded-full ${
            dark ? "bg-white/10 text-cyan-300" : "bg-blue-50 text-blue-700"
          }`}
        >
          <Icon size={17} />
        </span>
        <div>
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold">{step.title}</h3>
            <span className={`font-mono text-[9px] ${dark ? "text-white/35" : "text-slate-400"}`}>{step.number}</span>
          </div>
          <p className={`mt-2 text-sm leading-6 ${dark ? "text-slate-400" : "text-slate-600"}`}>{step.text}</p>
          <span
            className={`mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[.12em] ${
              dark ? "text-emerald-300" : "text-blue-700"
            }`}
          >
            <ArrowUpRight size={12} /> {step.output}
          </span>
        </div>
      </div>
    </div>
  );
}

export function RevenueRoadmap() {
  return (
    <section className="relative isolate overflow-hidden bg-[#eef4fb] px-4 py-24 text-slate-950 sm:px-6 lg:py-28">
      <div className="absolute -right-36 top-10 -z-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -left-36 bottom-10 -z-10 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto max-w-7xl"
      >
        <motion.div variants={reveal} className="grid gap-10 lg:grid-cols-[1fr_.78fr] lg:items-end">
          <div>
            <span className="text-sm font-semibold text-blue-700">
              From scope to launch
            </span>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
              A clear path from the first decision to a live product.
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 p-6 text-white">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-blue-400/20" />
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-cyan-300/20" />
            <CircleDotDashed size={23} className="text-cyan-300" />
            <span className="mt-8 block font-mono text-[9px] font-bold uppercase tracking-[.17em] text-slate-500">
              At every stage
            </span>
            <p className="mt-3 max-w-md text-lg font-medium leading-7">
              What changed for the user, what did we learn, and what deserves attention next?
            </p>
          </div>
        </motion.div>

        <motion.div variants={reveal} className="mt-12 grid gap-4 lg:grid-cols-12">
          <article className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_28px_70px_-54px_rgba(15,23,42,.55)] lg:col-span-3">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-blue-600">Step one</span>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-.035em]">Scope the right release</h3>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                Decide
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500">Clarify the problem before committing the build budget.</p>
            <div className="mt-6">{discover.map((step) => <CompactStep key={step.number} step={step} />)}</div>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] bg-[#0a1220] p-6 text-white lg:col-span-6 sm:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:36px_36px]" />
            <div className="relative">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                <div>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-cyan-300">Step two</span>
                  <h3 className="mt-2 text-3xl font-semibold tracking-[-.04em]">Design, build, and launch</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                    The same team carries the decisions from user flow and architecture through production.
                  </p>
                </div>
                <span className="self-start rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Deliver
                </span>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {deliver.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.number} className="rounded-2xl border border-white/10 bg-[#0d1828]/90 p-5 backdrop-blur">
                      <div className="flex items-center justify-between">
                        <Icon size={18} className="text-blue-300" />
                        <span className="font-mono text-[9px] text-white/30">{step.number}</span>
                      </div>
                      <h4 className="mt-8 font-semibold">{step.title}</h4>
                      <p className="mt-2 text-xs leading-5 text-slate-400">{step.text}</p>
                      <span className="mt-5 block border-t border-white/10 pt-3 text-[9px] font-bold uppercase tracking-[.12em] text-cyan-300">
                        {step.output}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-blue-400/20 bg-blue-400/[0.08] px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,.09)]" />
                <span className="text-xs text-slate-300">Working software reviewed every week</span>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-blue-600 to-blue-800 p-6 text-white lg:col-span-3">
            <div className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full border border-white/10" />
            <div className="absolute -bottom-8 -right-8 h-36 w-36 rounded-full border border-white/10" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-blue-100">Step three</span>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-.035em]">Measure and improve</h3>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-blue-100">
                  Compound
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-blue-100/75">Use real behavior to decide what should change after launch.</p>
              <div className="mt-6">{grow.map((step) => <CompactStep key={step.number} step={step} dark />)}</div>
            </div>
          </article>
        </motion.div>

        <motion.div
          variants={reveal}
          className="mt-5 grid gap-5 rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-5 backdrop-blur sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div>
            <b className="text-sm">What your team keeps</b>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Product roadmap", "UX system", "Architecture", "Data model", "CI/CD", "Observability", "Launch runbook"].map(
                (item) => (
                  <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-semibold text-slate-600">
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Plan the first release <ArrowRight size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
