import type {ReactElement} from 'react';
import clsx from 'clsx';

import type {ScouterProps, StatName} from '..';

import SectionDooboo from './SectionDooboo';
import SectionEarth from './SectionEarth';
import SectionFire from './SectionFire';
import SectionGold from './SectionGold';
import SectionPeople from './SectionPeople';
import SectionTree from './SectionTree';
import SectionWater from './SectionWater';

export type TierType = {
  tier: string;
  score: number;
};

export default function StatsDetails({
  t,
  stats,
  selectedStat,
}: ScouterProps & {selectedStat: StatName}): ReactElement {
  const map: Record<StatName, ReactElement> = {
    dooboo: <SectionDooboo stats={stats} t={t} />,
    tree: <SectionTree stats={stats} t={t} />,
    fire: <SectionFire stats={stats} t={t} />,
    earth: <SectionEarth stats={stats} t={t} />,
    gold: <SectionGold stats={stats} t={t} />,
    water: <SectionWater stats={stats} t={t} />,
    people: <SectionPeople stats={stats} t={t} />,
  };

  return (
    <div className={clsx('mb-8 self-stretch')}>
      {map[selectedStat]}
    </div>
  );
}
