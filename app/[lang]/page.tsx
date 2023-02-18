import {H1} from '~/components/Typography';
import {Inter} from '@next/font/google';
import type {Locale} from '~/i18n';
import LocaleSwitcher from '~/components/LocaleSwitcher';
import type {ReactElement} from 'react';
import clsx from 'clsx';
import {getTranslates} from '~/localization';

const inter = Inter({subsets: ['latin']});

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const [{index}] = await Promise.all([getTranslates(lang)]);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <H1 className={clsx('text-h1', 'mb-8', inter.className)}>
        {index.title}
      </H1>

      <div>
        <LocaleSwitcher />
      </div>
    </div>
  );
}
