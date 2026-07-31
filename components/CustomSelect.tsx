"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { BadgeCheck, CalendarClock, Check, ChevronDown, Circle, CircleHelp, CirclePlus, CloudCog, PenTool, PanelsTopLeft, Smartphone, Sparkles, TrendingUp, Users, WalletCards, Wrench, Zap, type LucideIcon } from "lucide-react";

type Props = {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
};

const iconRules: Array<[RegExp, LucideIcon]> = [
  [/mobile|flutter|ios|android/i, Smartphone], [/web|platform|saas/i, PanelsTopLeft],
  [/ai|automation/i, Sparkles], [/design|ux|ui/i, PenTool], [/quality|test/i, BadgeCheck],
  [/cloud|devops/i, CloudCog], [/team|dedicated/i, Users], [/new product/i, CirclePlus],
  [/improve|modernize|legacy/i, TrendingUp], [/support|maintenance/i, Wrench],
  [/as soon|2–4 weeks/i, Zap], [/month|year/i, CalendarClock], [/explor/i, CircleHelp],
  [/\$|budget|defining/i, WalletCards],
];

function iconFor(value: string) {
  return iconRules.find(([pattern]) => pattern.test(value))?.[1] ?? Circle;
}

export function CustomSelect({ name, label, options, required }: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const SelectedIcon = value ? iconFor(value) : ChevronDown;

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  useEffect(() => {
    const form = rootRef.current?.closest("form");
    const reset = () => { setValue(""); setOpen(false); };
    form?.addEventListener("reset", reset);
    return () => form?.removeEventListener("reset", reset);
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <label className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.13em] text-slate-400" id={`${listId}-label`}>
        {label}{required && <b className="ml-1 text-brand-400">*</b>}
      </label>
      <input type="hidden" name={name} value={value} required={required} />
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${listId}-label`}
        onClick={() => setOpen(current => !current)}
        className={`flex w-full items-center gap-3 rounded-xl border bg-slate-950/60 px-4 py-3.5 text-left text-sm outline-none transition ${open ? "border-brand-500 ring-4 ring-brand-500/10" : "border-white/[0.09] hover:border-white/20"}`}
      >
        <span className={`grid h-7 w-7 place-items-center rounded-lg ${value ? "bg-brand-500/15 text-brand-300" : "bg-white/[0.05] text-slate-600"}`}><SelectedIcon size={15} strokeWidth={1.9} /></span>
        <span className={value ? "text-slate-200" : "text-slate-600"}>{value || "Select an option"}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="ml-auto text-slate-600"><ChevronDown size={17} /></motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            id={listId}
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: .98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: .98 }}
            transition={{ duration: .18 }}
            className="absolute z-40 mt-2 max-h-72 w-full overflow-auto rounded-2xl border border-white/10 bg-[#111827] p-2 shadow-2xl shadow-black/60"
          >
            {options.map(option => {
              const OptionIcon = iconFor(option);
              return (
              <li key={option} role="option" aria-selected={value === option}>
                <button
                  type="button"
                  onClick={() => { setValue(option); setOpen(false); }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${value === option ? "bg-brand-500/15 text-brand-200" : "text-slate-300 hover:bg-white/[0.06] hover:text-white"}`}
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/[0.07] bg-black/20 text-brand-300"><OptionIcon size={16} strokeWidth={1.9} /></span>
                  <span>{option}</span>
                  {value === option && <Check size={16} className="ml-auto text-brand-300" />}
                </button>
              </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
