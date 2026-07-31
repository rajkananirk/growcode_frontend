"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  Layers3,
  ShieldCheck,
  X,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { reveal, stagger, viewport } from "./motion";

type Credential = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  modalEyebrow: string;
  modalTitle: string;
  summary: string;
  outcomes: string[];
  steps: Array<{ number: string; title: string; detail: string }>;
};

const credentials: Credential[] = [
  {
    icon: Layers3,
    eyebrow: "Product engineering practice",
    title: "Strategy through production",
    description: "One senior team across product, design, engineering, and launch.",
    modalEyebrow: "End-to-end product partnership",
    modalTitle: "One accountable path from product decision to production.",
    summary: "Instead of coordinating separate strategy, design, and development vendors, you work with one senior product pod that owns the decisions, trade-offs, and delivery outcome.",
    outcomes: [
      "A focused roadmap tied to the business outcome",
      "Validated UX direction before expensive engineering",
      "Production-ready delivery with launch ownership",
    ],
    steps: [
      { number: "01", title: "Align", detail: "Clarify users, constraints, risks, and the result worth building." },
      { number: "02", title: "Shape", detail: "Turn priorities into flows, technical direction, and a delivery plan." },
      { number: "03", title: "Ship", detail: "Build in visible increments, validate quality, and support launch." },
    ],
  },
  {
    icon: Globe2,
    eyebrow: "Global delivery partner",
    title: "Built for distributed teams",
    description: "Clear handoffs, visible weekly progress, and complete code ownership.",
    modalEyebrow: "Distributed by design",
    modalTitle: "A remote delivery rhythm your team never has to chase.",
    summary: "Our working model is designed for teams across locations and time zones. Decisions stay documented, progress stays visible, and your internal stakeholders always know what is moving next.",
    outcomes: [
      "Reliable overlap hours and named senior contacts",
      "Weekly working demos—not status-only meetings",
      "Complete repository, documentation, and cloud ownership",
    ],
    steps: [
      { number: "01", title: "Connect", detail: "Agree on overlap hours, owners, tools, and decision channels." },
      { number: "02", title: "Make visible", detail: "Share weekly demos, written decisions, and delivery risks early." },
      { number: "03", title: "Stay transferable", detail: "Keep code, environments, and knowledge inside your ownership." },
    ],
  },
];

export function About() {
  const [selected, setSelected] = useState<Credential | null>(null);

  return (
    <>
      <section
        id="about"
        className="relative overflow-hidden border-y border-white/[0.08] bg-[#080c13] px-4 py-24 text-white sm:px-6 lg:py-28"
      >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_25%,rgba(37,99,235,.13),transparent_29%),radial-gradient(circle_at_86%_76%,rgba(6,182,212,.07),transparent_26%)]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative mx-auto max-w-7xl"
      >
        <motion.div variants={reveal} className="grid gap-7 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
          <div>
            <span className="text-sm font-semibold text-blue-300">How delivery works</span>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
              The people who plan the work{" "}
              <span className="text-brand-400">also build it.</span>
            </h2>
          </div>
          <div className="lg:pb-1 lg:justify-self-end">
            <p className="max-w-xl text-base leading-7 text-slate-400">
              You work directly with the designer and engineers. Every week, you see the product, the open decisions, and what ships next.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[9px] font-bold uppercase tracking-[.15em] text-slate-600">
              <span>Scope it</span>
              <span className="text-brand-400">/</span>
              <span>Build it</span>
              <span className="text-brand-400">/</span>
              <span>Launch & improve</span>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[.78fr_1.22fr]">
          <motion.article
            variants={reveal}
            className="relative isolate overflow-hidden rounded-[1.5rem] bg-[#1754d1] p-7 sm:p-9 lg:min-h-[520px]"
          >
            <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full border border-white/10" />
            <div className="absolute -right-7 -top-7 -z-10 h-52 w-52 rounded-full border border-white/10" />
            <div className="absolute bottom-0 left-0 -z-10 h-52 w-full bg-gradient-to-t from-black/30 to-transparent" />

            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-blue-100/70">
                Evidence cycle / weekly
              </span>
              <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10">
                <Layers3 size={19} aria-hidden="true" />
              </span>
            </div>

            <h3 className="mt-16 max-w-md text-4xl font-semibold leading-[1.04] tracking-[-.05em] sm:text-5xl">
              Every week ends with working software.
            </h3>
            <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100/70">
              Each cycle closes with something your team can inspect, question, and use to make the next decision.
            </p>

            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {[
                ["01", "Decision log", "Trade-offs stay visible"],
                ["02", "Working build", "Progress stays inspectable"],
                ["03", "Release signal", "Readiness stays measurable"],
              ].map(([number, title, detail]) => (
                <div key={number} className="grid grid-cols-[auto_1fr] gap-4 bg-[#10316f]/80 px-4 py-3.5 backdrop-blur">
                  <span className="font-mono text-[9px] text-cyan-200">{number}</span>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <b className="text-xs">{title}</b>
                    <span className="text-[10px] text-blue-100/45">{detail}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-end justify-between lg:absolute lg:bottom-8 lg:left-9 lg:right-9">
              <div>
                <strong className="block text-xl tracking-[-.035em]">One accountable team</strong>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[.13em] text-blue-100/60">
                  Product · design · engineering
                </span>
              </div>
              <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.12em] text-emerald-200">
                Client-owned code
              </span>
            </div>
          </motion.article>

          <motion.div variants={reveal} className="rounded-[1.5rem] border border-white/[0.09] bg-white/[0.025] p-6 sm:p-8">
            <div className="flex items-end justify-between gap-5 border-b border-white/[0.09] pb-7">
              <div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-slate-600">
                  The delivery contract
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-.035em] sm:text-3xl">
                  Two rules that keep delivery honest.
                </h3>
              </div>
              <span className="hidden text-right text-[10px] leading-5 text-slate-600 sm:block">
                Select a principle
                <br />
                to see the model
              </span>
            </div>

            <div>
              {credentials.map((credential, index) => {
                const Icon = credential.icon;
                return (
                  <button
                    type="button"
                    key={credential.title}
                    onClick={() => setSelected(credential)}
                    className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 border-b border-white/[0.09] py-7 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-400 sm:grid-cols-[auto_auto_1fr_auto] sm:items-center sm:gap-6"
                  >
                    <span className="font-mono text-[10px] text-brand-400">0{index + 1}</span>
                    <span className="hidden h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition group-hover:border-brand-400/25 group-hover:bg-brand-500/10 group-hover:text-brand-300 sm:grid">
                      <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600">
                        {credential.eyebrow}
                      </span>
                      <span className="mt-2 block text-xl font-semibold text-white transition group-hover:text-brand-300">
                        {credential.title}
                      </span>
                      <span className="mt-2 block max-w-xl text-sm leading-6 text-slate-500">
                        {credential.description}
                      </span>
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-brand-400/30 group-hover:text-brand-300">
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="grid gap-5 border-b border-white/[0.09] py-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/[0.09]">
              {[
                ["Direct access", "Talk to the people doing the work."],
                ["Weekly review", "See software, decisions, and risks."],
                ["Clean handover", "Keep the code, accounts, and knowledge."],
              ].map(([title, detail]) => (
                <div key={title} className="sm:px-5 sm:first:pl-0 sm:last:pr-0">
                  <strong className="block text-sm font-semibold text-white">{title}</strong>
                  <span className="mt-2 block text-xs leading-5 text-slate-500">{detail}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <ShieldCheck size={18} className="shrink-0 text-emerald-300" aria-hidden="true" />
              <p className="text-xs leading-5 text-slate-500">
                NDA-ready discovery, direct senior access, and complete repository ownership from day one.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      </section>
      <CredentialModal credential={selected} onClose={() => setSelected(null)} />
    </>
  );
}

function CredentialModal({ credential, onClose }: { credential: Credential | null; onClose: () => void }) {
  useEffect(() => {
    if (!credential) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [credential, onClose]);

  return (
    <AnimatePresence>
      {credential && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] grid place-items-center overflow-y-auto bg-black/75 p-4 backdrop-blur-md"
          onMouseDown={(event) => event.target === event.currentTarget && onClose()}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="credential-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative my-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/[0.1] bg-[#0c111b] shadow-2xl shadow-black/60"
          >
            <button
              autoFocus
              onClick={onClose}
              aria-label="Close details"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/20 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="grid lg:grid-cols-[1.02fr_.98fr]">
              <div className="relative border-b border-white/[0.08] bg-[radial-gradient(circle_at_0%_0%,rgba(59,130,246,.22),transparent_46%)] p-7 sm:p-9 lg:border-b-0 lg:border-r">
                <span className="section-label">{credential.modalEyebrow}</span>
                <h2 id="credential-modal-title" className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-4xl">
                  {credential.modalTitle}
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">{credential.summary}</p>

                <div className="mt-7 space-y-3">
                  {credential.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-400/10 text-emerald-300">
                        <Check size={12} strokeWidth={2.4} />
                      </span>
                      {outcome}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-400">
                    Discuss your project <ArrowRight size={16} />
                  </a>
                  <a href="/services" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.07] hover:text-white">
                    Explore capabilities
                  </a>
                </div>
              </div>

              <div className="p-7 sm:p-9">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">How the engagement works</span>
                <div className="mt-6 space-y-3">
                  {credential.steps.map((step) => (
                    <div key={step.number} className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition hover:border-brand-400/20 hover:bg-white/[0.04]">
                      <div className="flex gap-4">
                        <span className="font-mono text-[10px] text-brand-400">{step.number}</span>
                        <div>
                          <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                          <p className="mt-1.5 text-xs leading-5 text-slate-500">{step.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-4">
                  <ShieldCheck size={20} className="shrink-0 text-emerald-300" />
                  <p className="text-xs leading-5 text-slate-400">NDA available before discovery. Your product context and source code remain yours.</p>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
