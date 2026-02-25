import "server-only";

const dictionaries = {
  tr: () => import("@/dictionaries/tr.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
