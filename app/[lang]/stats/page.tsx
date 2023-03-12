import {H1} from '~/components/Typography';
import {Inter} from '@next/font/google';
import type {Locale} from '~/i18n';
import type {ReactElement} from 'react';
import clsx from 'clsx';
import {getSupabaseClient} from '../../../server/supabaseClient';
import {getTranslates} from '../../../src/localization';

const inter = Inter({subsets: ['latin']});

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {stats} = await getTranslates(lang);
  const supabase = getSupabaseClient();

  return (
    <div
      className={clsx(
        'w-screen h-[calc(100vh-64px)] bg-paper overflow-hidden',
        'flex flex-col',
      )}
    >
      <H1
        className={clsx(
          'text-[44px] font-bold mt-20 mb-10 mx-6',
          inter.className,
        )}
      >
        {stats.title}
      </H1>
    </div>
  );
}
