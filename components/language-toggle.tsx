"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/lib/data";
import { cn } from "@/lib/utils";

type LanguageToggleProps = {
  locale: Locale;
  onChange: (locale: Locale) => void;
};

const options: { value: Locale; label: string }[] = [
  { value: "vi", label: "VI" },
  { value: "en", label: "EN" },
];

export function LanguageToggle({ locale, onChange }: LanguageToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-white/15 bg-black/35 p-1 backdrop-blur">
      {options.map((option) => {
        const active = option.value === locale;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "relative rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.22em] transition-colors",
              active ? "text-white" : "text-slate-400 hover:text-slate-100",
            )}
          >
            {active && (
              <motion.span
                layoutId="locale-pill"
                className="absolute inset-0 rounded-full bg-blue-500/30"
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
