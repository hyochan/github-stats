'use client';

import type {ReactElement, ReactNode} from 'react';

import type {Locale} from '~/i18n';
import {LocaleProvider} from '~/components/LocaleProvider';

export type ThemeType = 'light' | 'dark';

export default function RootProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Locale;
}): ReactElement {
  return (
    <LocaleProvider initialLocale={initialLocale}>{children}</LocaleProvider>
  );
}