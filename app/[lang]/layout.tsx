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
      <main
        className={clsx(
          'text-center flex-1 self-stretch relative',
          'flex flex-col-reverse',
          'min-w-0 overflow-x-hidden',
        )}
      >
        <div
          className={clsx(
            'h-[calc(100vh-56px)]',
            'flex w-full min-w-0',
            'overflow-y-auto overflow-x-hidden',
          )}
        >
          {children}
        </div>
        <Header
          t={nav}
          lang={lang}
          langs={{
            en: langs.en,
            ko: langs.ko,
          }}
        />
      </main>
    </RootProvider>
  );
}
