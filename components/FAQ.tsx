"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { reveal, stagger, viewport } from "./motion";

const questions = [
  {
    question: "How soon can a project begin?",
    answer:
      "Most engagements begin within one to three weeks of scope alignment. We use that window to confirm the team, access, success measures, and a practical first release.",
  },
  {
    question: "What happens before you provide an estimate?",
    answer:
      "We review the business goal, users, critical workflows, integrations, constraints, and evidence already available. The estimate then reflects a real delivery path instead of a feature-list guess.",
  },
  {
    question: "Who owns the code and infrastructure?",
    answer:
      "You do. Repositories, cloud accounts, design files, documentation, and product IP are structured for client ownership from day one. We can also work inside your existing environment.",
  },
  {
    question: "How will we see progress?",
    answer:
      "You receive a working product review every week, supported by a visible backlog, decisions, risks, and the next release target. Progress is demonstrated in software—not hidden in status slides.",
  },
  {
    question: "Can you collaborate with our internal team?",
    answer:
      "Yes. We can own a complete product stream or work alongside your product, design, engineering, security, and operations teams with clear responsibilities and shared delivery rituals.",
  },
  {
    question: "How do commercial terms work?",
    answer:
      "Discovery is usually fixed-outcome, defined releases are milestone-based, and ongoing product teams work on a monthly cadence. Every proposal states assumptions, deliverables, payment milestones, and change rules.",
  },
  {
    question: "Can we sign an NDA before sharing details?",
    answer:
      "Yes. We can sign a mutual NDA before discovery. Access is granted only where needed, and production credentials or sensitive records should always be shared through an approved secure channel.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f7f5ef] px-4 py-24 text-slate-950 sm:px-6 lg:py-28">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]"
      >
        <motion.div variants={reveal} className="lg:sticky lg:top-32 lg:self-start">
          <span className="text-sm font-semibold text-blue-700">
            Before we start
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
            What clients usually ask.
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-slate-600">
            Clear expectations make better products. Here is how scope, ownership, communication, and delivery work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:hello@growcodesolution.com"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
            >
              <Mail size={15} /> Email us
            </a>
            <a
              href="https://wa.me/919574198852"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div variants={reveal} className="border-t border-slate-300">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-slate-300">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start gap-4">
                    <span className={`font-mono text-[10px] ${isOpen ? "text-blue-600" : "text-slate-400"}`}>
                      0{index + 1}
                    </span>
                    <span className="text-base font-semibold sm:text-lg">{item.question}</span>
                  </span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition ${
                      isOpen ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown size={17} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pl-8 pr-8 text-sm leading-7 text-slate-600 sm:pl-10 sm:pr-20">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
