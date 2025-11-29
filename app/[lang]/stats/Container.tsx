import type {ReactElement, ReactNode} from 'react';
import clsx from 'clsx';
import {Inter} from 'next/font/google';

import {H1} from '../../../src/components/Typography';
import type {Translates} from '../../../src/localization';

const inter = Inter({subsets: ['latin']});

type Props = {
  t: Translates['stats'];
  children: ReactNode;
  headerSearch?: ReactNode;
  headerRight?: ReactNode;
};

export default function Container({t, children, headerSearch, headerRight}: Props): ReactElement {
  const hasHeaderContent = headerSearch || headerRight;

  return (
    <div
      className={clsx(
        'flex-1 w-full max-w-full min-w-0',
        'bg-paper-light dark:bg-paper-dark overflow-y-auto overflow-x-hidden',
        'px-6 max-[768px]:px-4 max-[480px]:px-4 max-[480px]:pt-6',
        'flex flex-col',
      )}
    >
      {hasHeaderContent ? (
        <div className="flex flex-row items-center justify-between gap-4 max-[480px]:flex-col max-[480px]:items-start">
          <div className="flex flex-row items-center gap-4 max-[480px]:flex-col max-[480px]:items-start max-[480px]:w-full">
            <H1
              className={clsx(
                'text-[44px] font-bold mt-12 mb-[28px]',
                'max-[480px]:text-[28px] max-[480px]:mb-4 max-[480px]:mt-8',
                'flex-shrink-0',
                inter.className,
              )}
            >
              {t.title}
            </H1>
            {headerSearch}
          </div>
          {headerRight}
        </div>
      ) : (
        <H1
          className={clsx(
            'text-[44px] font-bold mt-12 mb-[28px] text-center',
            'max-[480px]:text-[28px] max-[480px]:mb-4 max-[480px]:mt-8',
            inter.className,
          )}
        >
          {t.title}
        </H1>
      )}
      {children}
    </div>
  );
}
