import 'server-only';
import '../../styles/output.css';

import type {ReactElement, ReactNode} from 'react';

import Header from './(common)/Header';
import type {Locale} from '~/i18n';
import RootProvider from '../../src/components/RootProvider';
import SupabaseListener from '../../src/components/SupabaseListener';
import SupabaseProvider from '../../src/components/SupabaseProvider';
import clsx from 'clsx';
import {getSupabaseServerComponentClient} from '../../server/supabaseServerClient';
import {getTranslates} from '../../src/localization';

type Props = {
  children: ReactNode;
  params: {lang: Locale};
};

export default async function RootLayout(props: Props): Promise<ReactElement> {
  const supabase = getSupabaseServerComponentClient();

  const {
    params: {lang},
    children,
  } = props;

  const {
    data: {session},
  } = await supabase.auth.getSession();

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
            <SupabaseProvider>
              <SupabaseListener serverAccessToken={session?.access_token}>
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
              </SupabaseListener>
            </SupabaseProvider>
          </main>
        </RootProvider>
      </body>
    </html>
  );
}
