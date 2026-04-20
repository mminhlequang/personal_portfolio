"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe } from "lucide-react";
import type { Locale, Project } from "@/lib/data";

type ProjectHeroProps = {
  project: Project;
  locale: Locale;
};

export function ProjectHero({ project, locale }: ProjectHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/30 p-6 shadow-[0_22px_60px_-25px_rgba(59,130,246,0.65)] backdrop-blur-xl md:p-10"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-cyan-500/15 to-slate-900/70"
        aria-hidden
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-200/90">
            {locale === "vi" ? "Du an trong tam" : "Featured Project"}
          </p>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl">
            {project.title[locale]}
          </h2>
          <p className="text-sm leading-relaxed text-blue-100/90 md:text-base">
            {project.description[locale]}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={`${project.id}-${tech}`}
                className="rounded-full border border-white/15 bg-blue-950/50 px-3 py-1 text-xs text-blue-50"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-blue-50"
              >
                <Globe className="h-4 w-4" />
                {locale === "vi" ? "Xem website" : "Visit site"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-medium text-white transition hover:border-white/35 hover:bg-black/45"
              >
                <Code2 className="h-4 w-4" />
                GitHub
              </a>
            ) : null}
          </div>
        </div>

        <motion.div
          className="relative h-64 overflow-hidden rounded-2xl border border-white/20 lg:col-span-6 lg:h-80"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={project.images[0] ?? project.thumbnail}
            alt={`${project.title[locale]} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
        </motion.div>
      </div>
    </motion.section>
  );
}
