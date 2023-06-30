import type {ReactElement, ReactNode} from 'react';
import clsx from 'clsx';
import {Inter} from 'next/font/google';

import {H1} from '../../../src/components/uis/Typography';
import type {Translates} from '../../../src/localization';

import SearchTextInput from './[login]/SearchTextInput';

const inter = Inter({subsets: ['latin']});

type Props = {
  t: Translates['stats'];
  children: ReactNode;
};

export default function Container({t, children}: Props): ReactElement {
  return (
    <div
      className={clsx(
        'flex-1 bg-paper overflow-hidden px-6',
        'max-[480px]:px-0',
        'flex flex-col',
      )}
    >
      <SearchTextInput
        t={t}
        className="flex-1 absolute right-6 top-20"
        initialValue={''}
      />
      <H1
        className={clsx(
          'text-[44px] font-bold mt-12 mb-[32px]',
          'max-[480px]:px-6 max-[480px]:text-[28px] max-[480px]:mb-0 max-[480px]:mt-4',
          inter.className,
        )}
      >
        {t.title}
      </H1>
      {children}
    </div>
  );
}
