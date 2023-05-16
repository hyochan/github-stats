import {init} from '@amplitude/analytics-node';
import type {NextApiRequest} from 'next';
import {acceptLanguage} from 'next/dist/server/accept-header';

import type {Locale} from '../src/i18n';
import {i18n} from '../src/i18n';

const {AMPLITUDE_KEY} = process.env;

export const initNodeAmplitude = (): void => {
  init(<string>AMPLITUDE_KEY);
};

export function currentLocale(req: NextApiRequest): Locale {
  if (!i18n) {
    return 'en';
  }

  const chosenLocale = i18n.locales.find(
    (locale: string) => locale == req.cookies.NEXT_LOCALE,
  );

  const detectedLocale =
    chosenLocale ??
    acceptLanguage(
      req.headers['accept-language'],
      i18n.locales as unknown as string[],
    );

  return <Locale>(detectedLocale || i18n.defaultLocale);
}
