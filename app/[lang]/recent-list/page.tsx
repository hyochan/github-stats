import type {ReactElement} from 'react';
import clsx from 'clsx';
import {Inter} from 'next/font/google';

import {getSupabaseClient} from '../../../server/supabaseClient';
import type {UserListItem} from '../../../src/fetches/recentList';
import {getTranslates} from '../../../src/localization';
import {getUserPlugins} from '../../../src/utils/functions';

import GithubUserList from './GithubUserList';

import {H1} from '~/components/Typography';
import type {Locale} from '~/i18n';
import AdFitResponsive from '../(common)/AdFitResponsive';

const inter = Inter({subsets: ['latin']});

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {recentList} = await getTranslates(lang);
  const supabase = getSupabaseClient();

  const {data: plugin} = await supabase
    .from('plugins')
    .select('*')
    .eq('id', 'dooboo-github')
    .single();

  const userPlugins = plugin ? await getUserPlugins({plugin}) : [];

  return (
    <div className={clsx('flex-1 bg-paper overflow-hidden', 'flex flex-col')}>
      <div className='
        mt-4 mb-[32px] ml-6 mr-2
        flex-row items-center justify-between
        max-[480px]:mb-0 max-[480px]:my-4
      '
      >
        <H1
          className={clsx(
            'text-[44px] font-bold',
            'max-[480px]:hidden',
            'max-[560px]:text-[28px]',
            inter.className,
          )}
        >
          {recentList.title}
        </H1>
        <AdFitResponsive className='mx-6 mb-2'/>
      </div>
      <GithubUserList
        initialData={userPlugins as UserListItem[]}
        t={recentList}
      />
    </div>
  );
}
