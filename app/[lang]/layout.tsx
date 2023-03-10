import 'server-only';
import '../../styles/output.css';

import type {ReactElement, ReactNode} from 'react';

import Header from './(common)/Header';
import type {Locale} from '~/i18n';
import RootProvider from '../../src/components/RootProvider';
import clsx from 'clsx';
import {getTranslates} from '../../src/localization';

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
      <title>doobooio</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="All stats for developers" />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <RootProvider initialLocale={lang}>
          <main
            className={clsx('text-center flex-1 self-stretch', 'flex flex-col')}
          >
            <Header
              t={nav}
              lang={lang}
              langs={{
                en: langs.en,
                ko: langs.ko,
              }}
            />
            <div className={clsx('flex-1 self-stretch', 'flex')}>
              {children}
            </div>
          </main>
        </RootProvider>
      </body>
    </html>
  );
}
