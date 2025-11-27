'use client';

import type {ReactElement} from 'react';
import clsx from 'clsx';
import {Inter} from 'next/font/google';

import type {Translates} from '../../../src/localization';

import imgBgSection1 from '@/public/assets/bg_section1.png';
import SvgScouter from '@/public/assets/scouter.svg';
import {useMediaQuery} from 'usehooks-ts';

const inter = Inter({subsets: ['latin']});

type Props = {
  t: Translates['home'];
};

export default function SectionFooter({t}: Props): ReactElement {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div
      className={clsx(
        'self-stretch bg-paper bg-cover',
        'flex flex-col justify-center items-center',
        'md:p-0',
      )}
      style={{
        backgroundImage: `url(${imgBgSection1})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className={clsx(
          'bg-paper-dark self-stretch min-h-[400px] pt-4',
          'flex flex-col justify-center items-center',
          'md:p-0"',
        )}
      >
        <p
          className={clsx(
            'text-white leading-8 text-[24px] text-center mt-12 mb-20',
            inter.className,
          )}
        >
          {t.enjoyStats}
        </p>
        <div className="cursor-pointer">
          <SvgScouter className="w-screen px-12 max-w-3xl" />
        </div>
        <div
          className={clsx(
            'h-[22px] mb-12 mt-12 px-6 py-4',
            'flex flex-row items-center',
            'rounded-[12px]',
            'bg-white/5 dark:bg-white/5',
            'backdrop-blur-md',
            'border border-white/10',
            inter.className,
          )}
        >
          <p
            className={clsx(
              'text-white text-[12px] align-center opacity-50',
              inter.className,
            )}
          >
            github-stats
          </p>
          <div
            className={clsx(
              'flex-1 self-stretch bg-white opacity-50 m-2 w-[1px]',
              inter.className,
            )}
          />
          <p className={clsx('text-white text-[12px] align-center opacity-50')}>
            designed by &nbsp;
            <a href="https://hyo.dev">hyochan</a>
          </p>
        </div>
      </div>
    </div>
  );
}
