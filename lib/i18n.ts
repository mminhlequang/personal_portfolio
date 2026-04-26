import type { Locale } from "@/lib/data";
import { enMessages } from "@/lib/locales/en";
import type { UiMessages } from "@/lib/locales/types";
import { viMessages } from "@/lib/locales/vi";

export const uiMessages: Record<Locale, UiMessages> = {
  vi: viMessages,
  en: enMessages,
};

export function getUiMessages(locale: Locale): UiMessages {
  return uiMessages[locale];
}
