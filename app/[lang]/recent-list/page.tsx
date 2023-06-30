import type {ReactElement} from 'react';
import clsx from 'clsx';
import {Inter} from 'next/font/google';

import GithubUserList from './GithubUserList';

import {H1} from '~/components/uis/Typography';
import type {Locale} from '~/src/i18n';
import {getSupabaseServerComponentClient} from '~/server/supabaseClient';
import type {UserListItem} from '~/src/apis/recentList';
import {getTranslates} from '~/src/localization';
import {getUserPlugins} from '~/src/utils/functions';

const inter = Inter({subsets: ['latin']});

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {recentList} = await getTranslates(lang);
  const supabase = getSupabaseServerComponentClient();

  const {data: plugin} = await supabase
    .from('plugins')
    .select('*')
    .eq('id', 'dooboo-github')
    .single();

  const userPlugins = plugin
    ? await getUserPlugins({
        plugin,
        supabase,
      })
    : [];

  return (
    <div className={clsx('flex-1 bg-paper overflow-hidden', 'flex flex-col')}>
      <H1
        className={clsx(
          'text-[44px] font-bold mt-12 mb-[32px] mx-6',
          'max-[480px]:text-[28px] max-[480px]:mb-0 max-[480px]:my-4',
          inter.className,
        )}
      >
        {recentList.title}
      </H1>

      <GithubUserList
        initialData={userPlugins as UserListItem[]}
        t={recentList}
      />
    </div>
  );
}
