"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { CalendarDays, X } from "lucide-react";

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "";

export function CalendlyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);

  return <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[110] grid place-items-center bg-black/80 p-3 backdrop-blur-md" onMouseDown={event => event.target === event.currentTarget && onClose()}><motion.section role="dialog" aria-modal="true" aria-labelledby="calendar-title" initial={{ opacity: 0, y: 20, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .98 }} className="max-h-[94vh] w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d121d] shadow-2xl"><header className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7"><div><span className="section-label">Free consultation</span><h2 id="calendar-title" className="mt-1 text-xl font-semibold text-white">Choose your preferred time</h2></div><button autoFocus onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white" aria-label="Close calendar"><X size={19} /></button></header>{calendlyUrl ? <iframe src={`${calendlyUrl}?hide_gdpr_banner=1&background_color=0d121d&text_color=e2e8f0&primary_color=3b82f6`} title="Book a consultation" className="h-[680px] w-full bg-white" /> : <div className="grid min-h-[420px] place-items-center p-8 text-center"><div><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/10 text-brand-300"><CalendarDays size={25} /></span><h3 className="mt-5 text-xl font-semibold text-white">Calendly setup required</h3><p className="mx-auto mt-3 max-w-lg leading-7 text-slate-400">Add <code className="text-brand-300">NEXT_PUBLIC_CALENDLY_URL</code> to <code className="text-brand-300">.env.local</code> and restart the development server.</p></div></div>}</motion.section></motion.div>}</AnimatePresence>;
}
