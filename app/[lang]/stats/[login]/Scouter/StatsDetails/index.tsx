import type {ScouterProps, StatName} from '..';

import type {ReactElement} from 'react';
import SectionDooboo from './SectionDooboo';
import SectionFire from './SectionFire';
import SectionTree from './SectionTree';
import clsx from 'clsx';

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
    earth: <SectionDooboo stats={stats} t={t} />,
    gold: <SectionDooboo stats={stats} t={t} />,
    water: <SectionDooboo stats={stats} t={t} />,
    person: <SectionDooboo stats={stats} t={t} />,
  };

  return (
    <div
      className={clsx('mb-8 self-stretch p-8', 'flex flex-column items-center')}
    >
      {map[selectedStat]}
    </div>
  );
}
