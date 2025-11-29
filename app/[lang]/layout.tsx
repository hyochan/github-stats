export const revalidate = 3600

import 'server-only';

import type {ReactElement, ReactNode} from 'react';
import clsx from 'clsx';

import RootProvider from '../../src/components/RootProvider';
import {getTranslates} from '../../src/localization';

import Header from './(common)/Header';

import type {Locale} from '~/i18n';

type Props = {
  children: ReactNode;
  params: Promise<{lang: string}>;
};

export default async function LangLayout(props: Props): Promise<ReactElement> {
  const params = await props.params;
  const lang = params.lang as Locale;
  const {children} = props;

  const {langs, nav} = await getTranslates(lang);

  return (
    <RootProvider initialLocale={lang}>
      <div
        className={clsx(
          'h-screen max-[768px]:min-h-screen max-[768px]:h-auto w-full',
          'flex flex-col',
        )}
      >
        <Header
          t={nav}
          lang={lang}
          langs={{
            en: langs.en,
            ko: langs.ko,
          }}
        />
        <main
          className={clsx(
            'flex-1 w-full min-w-0',
            'flex flex-col',
            'overflow-hidden max-[768px]:overflow-visible',
          )}
        >
          {children}
        </main>
      </div>
    </RootProvider>
  );
}
