'use client';

import type {ReactElement, ReactNode} from 'react';
import SnackbarProvider from 'react-simple-snackbar';

import {AuthProvider} from './AuthProvider';

import {LocaleProvider} from '~/components/providers/LocaleProvider';
import type {Locale} from '~/src/i18n';

export type ThemeType = 'light' | 'dark';

export default function RootProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Locale;
}): ReactElement {
  return (
    <LocaleProvider initialLocale={initialLocale}>
      <SnackbarProvider>
        <AuthProvider>{children}</AuthProvider>
      </SnackbarProvider>
    </LocaleProvider>
  );
}
