'use client';

import Hero from './Hero';
import type {ReactElement} from 'react';
import type {StatsInfo} from '../../../src/pages/fetch/github';
import type {Translates} from '../../../src/localization';

type Props = {
  t: Translates['home'];
  statsInfo: StatsInfo;
};

export type PluginType = {
  domain: string;
  icon: ReactElement;
};

function Home({t, statsInfo}: Props): ReactElement {
  return (
    <div
      className="
        self-stretch bg-paper
        flex flex-col justify-start items-center
        max-[425px]: p-0
      "
    >
      <Hero t={t} statsInfo={statsInfo} />
    </div>
  );
}

export default Home;
