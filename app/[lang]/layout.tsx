import 'server-only';
import '~/styles/output.css';

import type {ReactElement, ReactNode} from 'react';
import clsx from 'clsx';

import RootProvider from '~/components/providers/RootProvider';
import Header from '~/components/uis/Header';
import type {Locale} from '~/i18n';
import {getTranslates} from '~/src/localization';

type Props = {
  children: ReactNode;
  params: {lang: Locale};
};

export default async function RootLayout(props: Props): Promise<ReactElement> {
  const {
    params: {lang},
    children,
  } = props;

  const {langs, nav} = await getTranslates(lang);

  return (
    <html lang={lang} className="dark">
      <title>github-stats</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="All stats for developers" />
      <link rel="icon" href="/favicon.ico" />
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
