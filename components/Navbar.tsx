"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Clock3, Menu, Star, X } from "lucide-react";

const links = [["Services", "/services"], ["Work", "/work"], ["About", "/about"], ["Careers", "/career"], ["Contact", "/contact"]];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [showTrustBar, setShowTrustBar] = useState(true);

  useEffect(() => {
    const updateTrustBar = () => setShowTrustBar(window.scrollY < 32);
    updateTrustBar();
    window.addEventListener("scroll", updateTrustBar, { passive: true });
    return () => window.removeEventListener("scroll", updateTrustBar);
  }, []);

  return (
    <motion.header initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={false}
        animate={{ height: showTrustBar ? 32 : 0, opacity: showTrustBar ? 1 : 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden bg-[#071f3d] px-4 text-[11px] text-slate-300 sm:text-xs"
        aria-hidden={!showTrustBar}
      >
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-center gap-3 sm:gap-7"><span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />Available now</span><span className="hidden h-4 w-px bg-white/20 sm:block" /><span className="hidden items-center gap-1.5 sm:flex"><Star size={13} className="fill-amber-300 text-amber-300" aria-hidden="true" /><strong className="text-white">4.9/5</strong> client satisfaction</span><span className="hidden h-4 w-px bg-white/20 md:block" /><span className="hidden items-center gap-1.5 md:flex"><Clock3 size={13} className="text-brand-300" aria-hidden="true" />Response within <strong className="text-white">one business day</strong></span></div>
      </motion.div>
      <nav className="border-b border-white/[0.08] bg-[#080b12]/95 px-4 backdrop-blur-2xl sm:px-6" aria-label="Primary navigation">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between">
          <a href="/" className="flex items-center" aria-label="Growcode Solution home">
            <Image src="/brand/growcode-solutions.png" alt="Growcode Solution" width={1563} height={342} priority className="h-auto w-[176px] sm:w-[205px]" />
          </a>
          <div className="hidden items-center gap-8 lg:flex">{links.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-slate-400 transition hover:text-white">{label}</a>)}</div>
          <div className="hidden items-center lg:flex"><a href="/contact" className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500">Start a project <ArrowRight size={16} aria-hidden="true" /></a></div>
          <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white lg:hidden" aria-label="Toggle navigation">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </nav>
      {open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mx-4 mt-2 rounded-2xl border border-white/10 bg-[#0d121d] p-3 shadow-xl lg:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">{label}</a>)}</motion.div>}
    </motion.header>
  );
}
