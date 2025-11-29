import type {Metadata} from 'next';
import type {ReactElement} from 'react';
import clsx from 'clsx';
import {Inter} from 'next/font/google';

import {getSupabaseClient} from '../../../server/supabaseClient';
import type {UserListItem} from '../../../src/fetches/recentList';
import {getTranslates} from '../../../src/localization';
import {getUserPlugins} from '../../../src/utils/functions';
import styles from '../styles.module.css';

import GithubUserList from './GithubUserList';
import TopTierUsers from './TopTierUsers';

import {H1} from '~/components/Typography';
import type {Locale} from '~/i18n';
import GreatFrontEnd from '../(common)/GreatFrontEnd';

const inter = Inter({subsets: ['latin']});

type Props = {
  params: Promise<{lang: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {lang} = await params;
  const {leaderboards} = await getTranslates(lang as Locale);

  return {
    title: leaderboards.title,
    description:
      'Discover top GitHub developers ranked by their contributions, achievements, and coding activity.',
    alternates: {
      canonical: `/${lang}/leaderboards`,
      languages: {
        en: '/en/leaderboards',
        ko: '/ko/leaderboards',
      },
    },
  };
}

export default async function Page(props: Props): Promise<ReactElement> {
  const params = await props.params;
  const lang = params.lang as Locale;
  const {leaderboards} = await getTranslates(lang);
  const supabase = getSupabaseClient();

  const {data: plugin} = await supabase
    .from('plugins')
    .select('*')
    .eq('id', 'dooboo-github')
    .single();

  const userPlugins = plugin ? await getUserPlugins({plugin}) : [];

  return (
    <div className={clsx('flex-1 bg-paper-light dark:bg-paper-dark overflow-hidden', 'flex flex-col')}>
      <div
        className={clsx(
          'mt-4 mb-[32px] px-6 w-full',
          'flex flex-row items-center gap-4',
          'max-[768px]:flex-col max-[480px]:mb-6 max-[480px]:mt-8 max-[480px]:px-4',
        )}
      >
          <H1
            className={clsx(
              'text-[44px] font-bold shrink-0 whitespace-nowrap',
              'max-[480px]:text-[28px]',
              inter.className,
            )}
          >
            {leaderboards.title}
          </H1>
        <div
          className={clsx(
            styles.horizontalScroll,
            'flex-1 min-w-0 w-full',
          )}
        >
          <div
            className={clsx(
              'flex flex-row items-center gap-4 flex-nowrap justify-between',
              'min-w-full',
            )}
          >
            <div className="shrink-0 min-w-[280px]">
              <TopTierUsers title={leaderboards.topRanked} />
            </div>
            <div className="shrink-0 flex items-center">
              <GreatFrontEnd
                className="max-w-[400px] shrink-0 max-[480px]:mt-2 max-[480px]:max-w-full max-[768px]:hidden"
                href="https://www.greatfrontend.com/questions/formats/quiz?fpr=hyo73"
                title="Quiz interview questions"
              />
            </div>
          </div>
        </div>
      </div>
      <GithubUserList
        initialData={userPlugins as UserListItem[]}
        t={leaderboards}
      />
    </div>
  );
}
