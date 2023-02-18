'use client';

import type {Locale} from '~/i18n';
import {LocaleProvider} from '~/components/LocaleProvider';

export default function Providers({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}): React.ReactElement {
  return (
    <LocaleProvider initialLocale={initialLocale}>{children}</LocaleProvider>
  );
}
