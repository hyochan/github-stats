export const revalidate = 3600

import 'server-only';
import '../../styles/output.css';

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

export default async function RootLayout(props: Props): Promise<ReactElement> {
  const params = await props.params;
  const lang = params.lang as Locale;
  const {children} = props;

  const {langs, nav} = await getTranslates(lang);

  return (
    <html lang={lang} className="dark">
      <title>github-stats</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="All stats for developers" />
      <link rel="icon" href="/favicon.ico" />
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8181493727238996"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <RootProvider initialLocale={lang}>
          <main
            className={clsx(
              'text-center flex-1 self-stretch relative',
              'flex flex-col-reverse',
            )}
          >
            <div className={clsx('h-[calc(100vh-56px)]', 'flex')}>
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
      </body>
    </html>
  );
}
