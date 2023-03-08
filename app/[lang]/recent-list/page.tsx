import GithubUserList from './GithubUserList';
import {H1} from '~/components/Typography';
import {Inter} from '@next/font/google';
import type {Locale} from '~/i18n';
import type {ReactElement} from 'react';
import type {UserListItem} from '../../../src/fetches/recentList';
import clsx from 'clsx';
import {getSupabaseClient} from '../../../server/utils';
import {getTranslates} from '../../../src/localization';
import {getUserPlugins} from '../../../src/utils/functions';

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
    <div
      className={clsx(
        'w-screen h-[calc(100vh-64px)] bg-paper overflow-hidden bg-black',
        'flex flex-col',
      )}
    >
      <H1
        className={clsx(
          'text-[44px] font-bold mt-20 mb-10 mx-6',
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
