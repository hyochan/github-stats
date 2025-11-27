'use client';

import type {ReactElement, ReactNode} from 'react';
import {Toaster} from 'react-hot-toast';

import {AuthProvider} from './AuthProvider';

import {LocaleProvider} from '~/components/LocaleProvider';
import type {Locale} from '~/i18n';

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
      <AuthProvider>
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 2000,
            success: {
              style: {
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '12px 20px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)',
                maxWidth: 'fit-content',
                minWidth: 'auto',
              },
              iconTheme: {
                primary: '#fff',
                secondary: '#667eea',
              },
            },
          }}
        />
      </AuthProvider>
    </LocaleProvider>
  );
}
