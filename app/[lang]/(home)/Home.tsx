'use client';

import type {ReactElement} from 'react';
import clsx from 'clsx';

import type {StatsInfo} from '../../../src/fetches/github';
import type {Translates} from '../../../src/localization';
import {initAmplitude} from '../../../src/utils/webUtils';

import Hero from './Hero';
import SectionFooter from './SectionFooter';
import SectionHowItWorks from './SectionHowItWorks';
import AdFit from '../(common)/AdFit';

type Props = {
  t: Translates['home'];
  statsInfo: StatsInfo;
};

export type PluginType = {
  domain: string;
  icon: ReactElement;
};

function Home({t, statsInfo}: Props): ReactElement {
  initAmplitude();

  return (
    <div className={clsx('flex-1 w-screen bg-paper', 'flex flex-col')}>
      <Hero t={t} statsInfo={statsInfo} />
      <SectionHowItWorks t={t} />
      <SectionFooter t={t} />
    </div>
  );
}

export default Home;
