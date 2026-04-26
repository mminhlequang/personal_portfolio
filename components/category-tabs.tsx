"use client";

import { motion } from "framer-motion";
import type { Locale, ProjectCategory } from "@/lib/data";
import { getUiMessages } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type CategoryTabsProps = {
  categories: ProjectCategory[];
  locale: Locale;
  selected: string;
  onSelect: (key: string) => void;
};

export function CategoryTabs({
  categories,
  locale,
  selected,
  onSelect,
}: CategoryTabsProps) {
  const t = getUiMessages(locale);

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-black/20 p-2 backdrop-blur-md">
      <button
        type="button"
        onClick={() => onSelect("all")}
        className={cn(
          "relative overflow-hidden rounded-xl px-4 py-2 text-sm font-medium transition-colors",
          selected === "all"
            ? "text-white"
            : "text-slate-300 hover:text-white",
        )}
      >
        {selected === "all" && (
          <motion.span
            layoutId="tab-highlight"
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/40 via-cyan-500/35 to-blue-700/40"
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
          />
        )}
        <span className="relative z-10">{t.allCategories}</span>
      </button>

      {categories.map((category) => {
        const isActive = selected === category.key;

        return (
          <button
            key={category.key}
            type="button"
            onClick={() => onSelect(category.key)}
            className={cn(
              "relative overflow-hidden rounded-xl px-4 py-2 text-sm font-medium transition-colors",
              isActive ? "text-white" : "text-slate-300 hover:text-white",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="tab-highlight"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/40 via-cyan-500/35 to-blue-700/40"
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
              />
            )}
            <span className="relative z-10">{category.category[locale]}</span>
          </button>
        );
      })}
    </div>
  );
}
