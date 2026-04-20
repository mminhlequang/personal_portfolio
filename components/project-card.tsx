"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, FileText, Globe } from "lucide-react";
import type { Locale, Project, ProjectLayout } from "@/lib/data";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  index: number;
};

const layoutClasses: Record<ProjectLayout, string> = {
  default: "col-span-12 md:col-span-6 xl:col-span-4",
  wide: "col-span-12 xl:col-span-8",
  spotlight: "col-span-12",
};

function normalizeLayout(layout: ProjectLayout | undefined, index: number): ProjectLayout {
  if (layout) {
    return layout;
  }

  const map: ProjectLayout[] = ["default", "wide", "default", "spotlight"];
  return map[index % map.length];
}

export function ProjectCard({ project, locale, index }: ProjectCardProps) {
  const layout = normalizeLayout(project.ui?.layout, index);

  const links = [
    project.links.live
      ? {
        href: project.links.live,
        label: locale === "vi" ? "Website" : "Live site",
        icon: Globe,
      }
      : null,
    project.links.github
      ? {
        href: project.links.github,
        label: "GitHub",
        icon: Code2,
      }
      : null,
    project.links.caseStudy
      ? {
        href: project.links.caseStudy,
        label: locale === "vi" ? "Case Study" : "Case Study",
        icon: FileText,
      }
      : null,
  ].filter(Boolean) as {
    href: string;
    label: string;
    icon: typeof Globe;
  }[];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.01 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/75 backdrop-blur-xl",
        "shadow-[0_14px_40px_-20px_rgba(59,130,246,0.45)]",
        layoutClasses[layout],
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          "bg-gradient-to-br",
          project.ui?.gradient ?? "from-blue-500/20 via-cyan-500/10 to-black/50",
        )}
      />

      <div className="relative h-52 w-full overflow-hidden border-b border-white/10 sm:h-60">
        <Image
          src={project.thumbnail}
          alt={`${project.title[locale]} screenshot`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        {project.logo ? (
          <div className="absolute left-4 top-4 rounded-lg border border-white/15 bg-slate-900/80 p-2 backdrop-blur">
            <Image src={project.logo} alt={`${project.title[locale]} logo`} width={28} height={28} />
          </div>
        ) : null}
        {project.year ? (
          <span className="absolute right-4 top-4 rounded-full border border-blue-300/30 bg-blue-500/20 px-2.5 py-1 text-xs font-medium text-blue-100">
            {project.year}
          </span>
        ) : null}
      </div>

      <div className="relative flex h-full flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold leading-tight text-slate-100 sm:text-2xl">
            {project.title[locale]}
          </h3>
          {project.highlight ? (
            <span className="rounded-full border border-cyan-300/30 bg-cyan-400/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
              {locale === "vi" ? "Noi bat" : "Highlight"}
            </span>
          ) : null}
        </div>

        <p className="text-sm text-slate-300">{project.shortDescription[locale]}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={`${project.id}-${tech}`}
              className="rounded-full border border-white/10 bg-slate-900/80 px-2.5 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-slate-400">
          {project.description[locale]}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs font-medium text-slate-100 transition-colors hover:border-blue-400/40 hover:bg-blue-500/15"
              >
                <Icon className="h-3.5 w-3.5" />
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
