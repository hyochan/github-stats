'use client';

import {useState} from 'react';

import type {Locale} from '~/src/i18n';
import createCtx from '~/src/utils/createCtx';

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
