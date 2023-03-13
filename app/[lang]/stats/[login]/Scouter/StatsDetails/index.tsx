import type {ScouterProps, StatName} from '..';

import type {ReactElement} from 'react';
import SectionDooboo from './SectionDooboo';
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
  return (
    <div
      className={clsx('mb-8 self-stretch p-8', 'flex flex-column items-center')}
    >
      {selectedStat === 'dooboo' ? <SectionDooboo stats={stats} t={t} /> : null}
    </div>
  );
}
