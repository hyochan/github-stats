'use client';

import type {ReactElement} from 'react';
import {useEffect} from 'react';
import clsx from 'clsx';
import {useRouter} from 'next/navigation';

import type {StatsInfo} from '../../../src/fetches/github';
import type {Translates} from '../../../src/localization';
import {initAmplitude} from '../../../src/utils/webUtils';

import Hero from './Hero';
import SectionFooter from './SectionFooter';
import SectionHowItWorks from './SectionHowItWorks';

type Props = {
  t: Translates['home'];
  statsInfo: StatsInfo;
};

export type PluginType = {
  domain: string;
  icon: ReactElement;
};

function Home({t, statsInfo}: Props): ReactElement {
  const router = useRouter();

  useEffect(() => {
    if (router) {
      initAmplitude();
    }
  }, [router]);

  return (
    <div className={clsx('flex-1 w-screen bg-paper', 'flex flex-col')}>
      <Hero t={t} statsInfo={statsInfo} />
      <SectionHowItWorks t={t} />
      <SectionFooter t={t} />
    </div>
  );
}

export default Home;
