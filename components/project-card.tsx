"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  FileText,
  Globe,
  Images,
  X,
} from "lucide-react";
import type { Locale, Project, ProjectLayout } from "@/lib/data";
import { getUiMessages } from "@/lib/i18n";
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
  const t = getUiMessages(locale);
  const galleryImages = useMemo(
    () => (project.images.length > 0 ? project.images : [project.thumbnail]),
    [project.images, project.thumbnail],
  );
  const hasManyImages = galleryImages.length > 1;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const showNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const showPreviousImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    if (!isGalleryOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsGalleryOpen(false);
      }
      if (event.key === "ArrowRight" && hasManyImages) {
        setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
      }
      if (event.key === "ArrowLeft" && hasManyImages) {
        setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [hasManyImages, isGalleryOpen, galleryImages.length]);

  const links = [
    project.links.live
      ? {
        href: project.links.live,
        label: t.liveSite,
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
        label: t.caseStudy,
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
        <button
          type="button"
          onClick={() => setIsGalleryOpen(true)}
          className="absolute inset-0 z-10"
          aria-label={t.gallery.open}
        >
          <Image
            src={galleryImages[activeImageIndex]}
            alt={`${project.title[locale]} screenshot ${activeImageIndex + 1}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-900/70 px-2.5 py-1 text-[11px] text-slate-100 backdrop-blur">
          <Images className="h-3.5 w-3.5" />
          {activeImageIndex + 1}/{galleryImages.length}
        </div>
        {hasManyImages ? (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/45 p-1.5 text-white transition hover:bg-black/70"
              aria-label={t.gallery.previous}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/45 p-1.5 text-white transition hover:bg-black/70"
              aria-label={t.gallery.next}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        ) : null}
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
              {t.highlight}
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

      {isGalleryOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={() => setIsGalleryOpen(false)}
            className="absolute right-4 top-4 rounded-full border border-white/25 bg-black/40 p-2 text-white transition hover:bg-black/70"
            aria-label={t.gallery.close}
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative w-full max-w-6xl space-y-4">
            <div className="relative h-[60vh] overflow-hidden rounded-2xl border border-white/20 bg-slate-950/70">
              <Image
                src={galleryImages[activeImageIndex]}
                alt={`${project.title[locale]} gallery image ${activeImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <div className="flex items-center justify-between gap-3 text-sm text-slate-100">
              <span>
                {t.gallery.imageCount} {activeImageIndex + 1}/{galleryImages.length}
              </span>

              {hasManyImages ? (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs transition hover:bg-black/70"
                    aria-label={t.gallery.previous}
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                    {t.gallery.previous}
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs transition hover:bg-black/70"
                    aria-label={t.gallery.next}
                  >
                    {t.gallery.next}
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : null}
            </div>

            {hasManyImages ? (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {galleryImages.map((image, imageIndex) => (
                  <button
                    type="button"
                    key={`${project.id}-gallery-${image}`}
                    onClick={() => setActiveImageIndex(imageIndex)}
                    className={cn(
                      "relative h-16 w-24 flex-none overflow-hidden rounded-lg border transition",
                      imageIndex === activeImageIndex
                        ? "border-cyan-300"
                        : "border-white/20 hover:border-white/40",
                    )}
                  >
                    <Image
                      src={image}
                      alt={`${project.title[locale]} thumbnail ${imageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </motion.article>
  );
}
