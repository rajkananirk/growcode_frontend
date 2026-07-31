"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, BadgeCheck, CalendarDays, ClipboardPenLine, MessageCircle, Rocket, X, type LucideIcon } from "lucide-react";

type Props = { service: string | null; onClose: () => void };
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "/contact#calendar";
const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/";

export function ServiceInquiryModal({ service, onClose }: Props) {
  useEffect(() => {
    if (!service) return;
    const handleKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [service, onClose]);

  return <AnimatePresence>{service && <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-black/75 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()} role="presentation"><motion.section initial={{ opacity: 0, y: 24, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: .98 }} transition={{ duration: .3, ease: [0.22, 1, 0.36, 1] }} role="dialog" aria-modal="true" aria-labelledby="inquiry-title" className="w-full max-w-lg overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d121d] shadow-2xl shadow-black/60"><header className="relative border-b border-white/[0.08] bg-gradient-to-br from-brand-600/25 to-cyan-500/5 p-7 text-center"><button autoFocus onClick={onClose} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:bg-white/10 hover:text-white" aria-label="Close enquiry options"><X size={18} /></button><div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 shadow-glow"><Rocket size={22} /></div><h2 id="inquiry-title" className="mt-4 text-2xl font-semibold text-white">Start with {service}</h2><p className="mt-2 text-sm text-slate-400">Choose the most convenient next step. No obligation.</p></header><div className="space-y-3 p-5"><Option href={whatsappUrl} icon={MessageCircle} title="Chat on WhatsApp" detail="Best for a quick scope or availability question" accent online /><Option href={calendlyUrl} icon={CalendarDays} title="Book a 30-minute call" detail="Talk through goals, constraints, and next steps" external /><Option href={`/contact?service=${encodeURIComponent(service)}#contact`} icon={ClipboardPenLine} title="Send a project brief" detail="Share requirements when it suits your schedule" /></div><footer className="flex flex-wrap items-center justify-center gap-4 border-t border-white/[0.08] px-5 py-4 text-[11px] text-slate-600">{["Confidential", "No sales pressure", "Human response"].map(label => <span key={label} className="flex items-center gap-1"><BadgeCheck size={13} />{label}</span>)}</footer></motion.section></motion.div>}</AnimatePresence>;
}

function Option({ href, icon: Icon, title, detail, accent, external, online }: { href: string; icon: LucideIcon; title: string; detail: string; accent?: boolean; external?: boolean; online?: boolean }) {
  return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={`group flex items-center gap-4 rounded-2xl border p-4 transition hover:-translate-y-0.5 ${accent ? "border-emerald-400/25 bg-emerald-400/[0.06] hover:border-emerald-400/40" : "border-white/[0.09] bg-white/[0.03] hover:border-brand-400/25"}`}><span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${accent ? "bg-emerald-500 text-white" : "bg-brand-500/10 text-brand-300"}`}><Icon size={20} strokeWidth={1.9} /></span><span className="min-w-0"><span className="flex flex-wrap items-center gap-2"><strong className="block text-sm text-white">{title}</strong>{online && <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-300"><i className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.8)]" />Online</span>}</span><span className="mt-1 block text-xs leading-5 text-slate-500">{detail}</span></span><ArrowRight size={18} className="ml-auto shrink-0 text-slate-600 transition group-hover:translate-x-1 group-hover:text-brand-300" /></a>;
}
