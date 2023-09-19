import type {ReactElement} from 'react';
import clsx from 'clsx';
import {Inter} from 'next/font/google';

import type {Translates} from '../../../src/localization';

import imgBgSection1 from '@/public/assets/bg_section1.png';
import SvgScouter from '@/public/assets/scouter.svg';
import {useMediaQuery} from 'usehooks-ts';
import AdFit from '../(common)/AdFit';
import AdFitResponsive from '../(common)/AdFitResponsive';

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
            'text-white max-w-[800px] leading-8 text-[24px] text-center mt-32 mb-20 mx-10',
            inter.className,
          )}
        >
          {t.enjoyStats}
        </p>
        <SvgScouter className="w-screen px-12 max-w-6xl" />
        <div
          className={clsx(
            'h-[22px] mb-12 mt-12',
            'flex flex-row items-center',
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
            <a href="https://dooboolab.com">dooboolab</a>
          </p>
        </div>
      </div>
      {/* Begin: AdFit */}
      <AdFitResponsive
        adfitClassName="adfit-bottom"
        className="mb-20"
        units={{
          mobile: 'DAN-GfeJUqhlQ5KqCOzw',
          pc: 'DAN-9eecqcxVgP9XX0bN',
        }}
      />
      {/* End: AdFit */}
    </div>
  );
}
