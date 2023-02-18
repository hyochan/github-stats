import 'server-only';

import type {Locale} from './i18n';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const translates = {
  en: () => import('../locales/en.json').then((module) => module.default),
  ko: () => import('../locales/ko.json').then((module) => module.default),
  /* add more locales here */
};

type Translates = Awaited<ReturnType<(typeof translates)['en']>>;

export type Translation = {
  [K in keyof Translates]: Translates[K];
};

export const getTranslates = async (locale: Locale): Promise<Translates> => {
  if (typeof translates[locale] !== 'function') {
    return translates['en']();
  }

  return translates[locale]();
};
