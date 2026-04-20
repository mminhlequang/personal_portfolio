"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Languages, Sparkles } from "lucide-react";
import {
  allProjects,
  featuredProject,
  profileContent,
  projectCategories,
  type Locale,
  type Project,
} from "@/lib/data";
import { AnimatedBackground } from "@/components/animated-background";
import { CategoryTabs } from "@/components/category-tabs";
import { LanguageToggle } from "@/components/language-toggle";
import { ProjectCard } from "@/components/project-card";
import { ProjectHero } from "@/components/project-hero";

function buildVisibleProjects(selected: string): Project[] {
  if (selected === "all") {
    return allProjects;
  }

  const category = projectCategories.find((item) => item.key === selected);
  if (!category) {
    return allProjects;
  }

  return category.projects;
}

export function PortfolioPage() {
  const [locale, setLocale] = useState<Locale>("vi");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const visibleProjects = useMemo(
    () => buildVisibleProjects(selectedCategory),
    [selectedCategory],
  );

  return (
    <div className="relative min-h-screen overflow-hidden px-4 pb-16 pt-8 text-slate-100 sm:px-8 lg:px-12">
      <AnimatedBackground />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-xl md:p-8"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-800/25 via-slate-900/5 to-cyan-500/10" />
          <div className="relative flex flex-col gap-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" />
                {locale === "vi" ? "Premium Portfolio" : "Premium Portfolio"}
              </div>
              <LanguageToggle locale={locale} onChange={setLocale} />
            </div>

            <div>
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {profileContent.name}
              </h1>
              <p className="mt-2 max-w-3xl text-base text-blue-200/85 sm:text-lg">
                {profileContent.role[locale]}
              </p>
            </div>

            <p className="max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {profileContent.summary[locale]}
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-slate-200">
                <BriefcaseBusiness className="h-3.5 w-3.5 text-blue-300" />
                Sales · Food Delivery · Booking · Landing Page · Portfolio
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-slate-200">
                <Languages className="h-3.5 w-3.5 text-blue-300" />
                {locale === "vi" ? "Ho tro tieng Viet & English" : "Vietnamese & English support"}
              </span>
            </div>

            <p className="text-sm font-medium text-cyan-100">{profileContent.cta[locale]}</p>
          </div>
        </motion.header>

        {featuredProject ? <ProjectHero project={featuredProject} locale={locale} /> : null}

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="space-y-6"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                {locale === "vi" ? "Du an da trien khai" : "Delivered Projects"}
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                {locale === "vi"
                  ? "Danh sach du an theo category. Them du an moi trong data.ts, UI se tu dong render layout dong."
                  : "Projects grouped by category. Add new entries to data.ts and the UI auto-renders dynamic layouts."}
              </p>
            </div>
            <CategoryTabs
              categories={projectCategories}
              locale={locale}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-5 xl:gap-6">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                locale={locale}
                index={index}
              />
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
