import {H1} from '~/components/Typography';
import {Inter} from '@next/font/google';
import type {Locale} from '~/i18n';
import type {ReactElement} from 'react';
import Scouter from './Scouter';
import SearchTextInput from './SearchTextInput';
import clsx from 'clsx';
import {getDoobooStats} from '../../../../server/services/githubService';
import {getTranslates} from '../../../../src/localization';

const inter = Inter({subsets: ['latin']});

type Props = {
  params: {lang: Locale; login: string};
};

export default async function Page({
  params: {lang, login},
}: Props): Promise<ReactElement> {
  const {stats: tStats} = await getTranslates(lang);
  const stats = await getDoobooStats({
    login,
    lang,
  });

  return (
    <div
      className={clsx(
        'w-screen h-[calc(100vh-64px)] bg-paper overflow-hidden px-6',
        'max-[480px]:px-0',
        'flex flex-col relative',
      )}
    >
      <SearchTextInput
        t={tStats}
        className="flex-1 absolute right-6 top-3"
        initialValue={login}
      />
      <H1
        className={clsx(
          'text-[44px] font-bold mt-12 mb-[32px]',
          'max-[480px]:px-6 max-[480px]:text-[28px] max-[480px]:mb-0 max-[480px]:mt-4',
          inter.className,
        )}
      >
        {tStats.title}
      </H1>
      {!!stats ? <Scouter stats={stats} t={tStats} /> : null}
    </div>
  );
}
