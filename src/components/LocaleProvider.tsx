'use client';

import 'client-only';

import type {Locale} from '~/i18n';
import createCtx from '~/utils/createCtx';
import {useState} from 'react';

interface Context {
  locale: Locale;
  changeLocale: (locale: Locale) => void;
}

const [useCtx, Provider] = createCtx<Context>();

interface Props {
  children: React.ReactNode;
  initialLocale: Locale;
}

function LocaleProvider({children, initialLocale}: Props): React.ReactElement {
  const [locale, setLocale] = useState(initialLocale);

  const changeLocale = (newLocale: Locale): void => {
    setLocale(newLocale);
  };

  return (
    <Provider
      value={{
        locale,
        changeLocale,
      }}
    >
      {children}
    </Provider>
  );
}

export {useCtx as useLocaleContext, LocaleProvider};
