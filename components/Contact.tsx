"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { reveal, stagger, viewport } from "./motion";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("loading"); setMessage("");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(form)) });
      const data = (await response.json()) as { draft?: string; error?: string };
      if (!response.ok || !data.draft) throw new Error(data.error || "Unable to process your brief.");
      setMessage(data.draft); setStatus("success");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Unable to process your brief."); setStatus("error"); }
  }

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:py-32">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.045] shadow-2xl shadow-black/30 backdrop-blur-2xl lg:grid-cols-[.8fr_1.2fr]">
        <motion.div variants={reveal} className="relative border-b border-white/[0.08] p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-600/20 to-transparent" />
          <span className="section-label">Start a conversation / 03</span>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl">Bring us the hard problem.</h2>
          <p className="mt-5 leading-7 text-slate-400">Share the context—not a polished specification. Our AI-assisted intake will organize your brief, and a senior partner will take it from there.</p>
          <div id="approach" className="mt-10 space-y-5">{[["01", "We review the brief"], ["02", "We clarify the leverage point"], ["03", "You receive a focused next step"]].map(([number, text]) => <div key={number} className="flex items-center gap-4 border-t border-white/[0.08] pt-5"><span className="font-mono text-xs text-brand-400">{number}</span><span className="text-sm text-slate-300">{text}</span></div>)}</div>
          <p className="mt-10 text-xs leading-5 text-slate-600">Submissions are sent to our configured AI provider to draft a response. Do not include passwords or regulated data.</p>
        </motion.div>
        <motion.div variants={reveal} className="p-6 sm:p-10 lg:p-12">
          <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" autoComplete="name" required />
            <Field label="Work email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
            <Field label="Company" name="company" placeholder="Company or team" autoComplete="organization" />
            <label className="field"><span>Budget range</span><select name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>$10k – $25k</option><option>$25k – $75k</option><option>$75k – $150k</option><option>$150k+</option><option>Not defined yet</option></select></label>
            <label className="field sm:col-span-2"><span>Project brief</span><textarea name="brief" required minLength={20} maxLength={6000} rows={6} placeholder="What are you building, what is getting in the way, and what would success change?" /></label>
            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between"><span className="text-xs text-slate-600">Typical human response: within one business day</span><motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} disabled={status === "loading"} className="rounded-full bg-brand-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-400 disabled:cursor-wait disabled:opacity-50">{status === "loading" ? "Analyzing brief…" : "Send project brief →"}</motion.button></div>
          </form>
          {status === "loading" && <div className="mt-6 rounded-2xl border border-brand-400/20 bg-brand-500/[0.04] p-5" aria-label="AI is analyzing the brief"><span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-brand-300">Preparing a considered response</span><div className="space-y-3">{["w-full", "w-11/12", "w-4/5"].map((width) => <motion.div key={width} animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 1.35, repeat: Infinity }} className={`h-3 rounded-full bg-gradient-to-r from-brand-500/15 via-brand-300/35 to-brand-500/15 ${width}`} />)}</div></div>}
          {(status === "success" || status === "error") && <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} aria-live="polite" className={`mt-6 rounded-2xl border p-5 ${status === "success" ? "border-brand-400/20 bg-brand-500/[0.04]" : "border-red-400/20 bg-red-500/[0.04]"}`}><span className={`mb-3 block text-xs font-semibold uppercase tracking-widest ${status === "success" ? "text-brand-300" : "text-red-300"}`}>{status === "success" ? "Initial response" : "Automation notice"}</span><p className="whitespace-pre-wrap leading-7 text-slate-300">{message}</p></motion.div>}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Field({ label, ...props }: { label: string; name: string; placeholder: string; type?: string; autoComplete?: string; required?: boolean }) {
  return <label className="field"><span>{label}</span><input {...props} aria-label={label} /></label>;
}
