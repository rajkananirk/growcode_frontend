"use client";

import { Building2, GraduationCap, HeartPulse, Landmark, Plane, ShoppingBag, Truck, Workflow, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { reveal, stagger, viewport } from "./motion";

const industries: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: HeartPulse, title: "Healthcare operations", text: "Coordination, patient workflows, and secure internal tools." },
  { icon: Landmark, title: "Financial services", text: "Decision systems, reporting, and governed data workflows." },
  { icon: Truck, title: "Logistics & supply chain", text: "Fleet, fulfillment, inventory, and operational visibility." },
  { icon: ShoppingBag, title: "Commerce", text: "Catalog, checkout, back-office operations, and retention." },
  { icon: GraduationCap, title: "Learning products", text: "Content, assessment, cohorts, and learner operations." },
  { icon: Building2, title: "B2B SaaS", text: "Multi-tenant platforms, admin systems, and workflow tools." },
  { icon: Plane, title: "Travel & field services", text: "Booking, scheduling, workforce, and live coordination." },
  { icon: Workflow, title: "Complex internal operations", text: "Approvals, handoffs, reporting, and practical automation." },
];

export function Industries() {
  return (
    <section className="bg-[#0d1420] px-4 py-24 text-white sm:px-6 lg:py-28">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.72fr_1.28fr]"
      >
        <motion.div variants={reveal} className="lg:sticky lg:top-32 lg:self-start">
          <span className="text-sm font-semibold text-blue-300">Where these patterns show up</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
            Different industries. The same hard part: complex work.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">
            We learn the domain, map the real workflow, and design around the decisions people make every day.
          </p>
          <div className="mt-9 border-l-2 border-blue-500 pl-5">
            <span className="text-[9px] font-bold uppercase tracking-[.14em] text-slate-600">The first question</span>
            <p className="mt-2 max-w-sm text-lg font-medium leading-7">Where does work slow down, break, or depend on one person knowing the workaround?</p>
          </div>
        </motion.div>

        <motion.div variants={reveal} className="grid border-t border-white/15 sm:grid-cols-2">
          {industries.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className={`grid grid-cols-[auto_1fr] gap-4 border-b border-white/15 py-6 sm:px-6 ${
                index % 2 === 0 ? "sm:border-r sm:pl-0" : "sm:pr-0"
              }`}
            >
              <Icon size={18} className="mt-1 text-blue-400" />
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
