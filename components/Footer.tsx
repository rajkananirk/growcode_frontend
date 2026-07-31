"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import { reveal, viewport } from "./motion";

const columns = [
  { title: "Services", links: [["Mobile products", "/services#mobile"], ["Web platforms", "/services#web"], ["AI & automation", "/services#ai"], ["Quality engineering", "/services#quality"], ["Cloud operations", "/services#cloud"]] },
  { title: "Company", links: [["About us", "/about"], ["Selected work", "/work"], ["Careers", "/career"], ["Our approach", "/about#approach"]] },
  { title: "Connect", links: [["Contact", "/contact"], ["Book a meeting", "/contact"], ["Project inquiry", "/contact#contact"], ["hello@growcodesolution.com", "mailto:hello@growcodesolution.com"]] },
];

type BrandIcon = ComponentType<SVGProps<SVGSVGElement>>;

const socials: Array<{ label: string; href: string; icon: BrandIcon }> = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "GitHub", href: "https://github.com", icon: GitHubIcon },
];

export function Footer() {
  return (
    <motion.footer initial="hidden" whileInView="visible" viewport={viewport} variants={reveal} className="border-t border-white/[0.08] bg-[#070a0f] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1.9fr]">
          <div>
            <a href="/" className="inline-flex items-center" aria-label="Growcode Solution home">
              <Image src="/brand/growcode-solutions.png" alt="Growcode Solution" width={1563} height={342} className="h-auto w-[220px]" />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">Web platforms, mobile apps, and practical automation for work that has outgrown spreadsheets and workarounds.</p>
            <p className="mt-6 text-xs leading-6 text-slate-600">NDA available · weekly working reviews · client-owned code</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">{columns.map(column => <div key={column.title}><h2 className="text-xs font-semibold text-white">{column.title}</h2><ul className="mt-5 space-y-3.5">{column.links.map(([label, href]) => <li key={label}><a href={href} className="text-sm text-slate-500 transition hover:text-white">{label}</a></li>)}</ul></div>)}</div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-6 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center">
          <div className="text-xs text-slate-600">© {new Date().getFullYear()} Growcode Solution · India, working globally</div>
          <div className="flex gap-2">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center border border-white/10 text-slate-500 transition hover:border-blue-400/40 hover:text-white"><Icon className="h-4 w-4 fill-current" aria-hidden="true" /></a>)}</div>
        </div>
      </div>
    </motion.footer>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...props}><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21.5H3V9.75Zm6.5 0h3.83v1.6h.05c.53-1.01 1.84-2.08 3.78-2.08 4.04 0 4.79 2.66 4.79 6.12v6.11h-4v-5.42c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.86v5.51H9.5V9.75Z" /></svg>;
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm-.18 2A3.02 3.02 0 0 0 4 7.02v9.96A3.02 3.02 0 0 0 7.02 20h9.96A3.02 3.02 0 0 0 20 16.98V7.02A3.02 3.02 0 0 0 16.98 4H7.02ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.2a1.17 1.17 0 1 1 0 2.34 1.17 1.17 0 0 1 0-2.34Z" clipRule="evenodd" /></svg>;
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 6.83a9.5 9.5 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" clipRule="evenodd" /></svg>;
}
