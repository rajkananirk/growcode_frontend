"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import { reveal, stagger, viewport } from "./motion";

export function Portfolio() {
  return (
    <section id="work" className="bg-[#080b12] px-4 py-24 text-white sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><motion.div variants={reveal}><span className="section-label">Case studies / 02</span><h2 className="section-title">Real products.<br />Measurable outcomes.</h2></motion.div><motion.p variants={reveal} className="max-w-md leading-7 text-slate-400">Every project is managed from one typed data file, so your portfolio stays consistent as it grows.</motion.p></motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.article variants={reveal} key={project.slug} className={`group overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.04] ${project.featured ? "lg:col-span-2" : ""}`}>
              <div className={`grid ${project.featured ? "lg:grid-cols-[1.15fr_.85fr]" : ""}`}>
                <div className="relative overflow-hidden bg-slate-950"><Image src={project.image} alt={project.imageAlt} width={1536} height={1024} className="aspect-[16/10] h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" /><div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" /></div>
                <div className="flex min-h-[330px] flex-col p-6 sm:p-8"><div className="flex items-start justify-between"><span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">{project.sector}</span>{project.liveUrl && <a href={project.liveUrl} aria-label={`View ${project.title}`} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-brand-500">↗</a>}</div><div className="mt-auto"><h3 className="font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{project.title}</h3><p className="mt-4 leading-7 text-slate-400">{project.description}</p><div className="mt-6 flex items-end justify-between gap-5"><div className="flex flex-wrap gap-2">{project.stack.map(item => <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">{item}</span>)}</div><div className="shrink-0 text-right"><b className="block text-3xl text-brand-300">{project.metric}</b><span className="text-[10px] uppercase text-slate-500">{project.result}</span></div></div></div></div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
