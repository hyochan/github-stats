'use client';

import type {DoobooStatsResponse} from '../../../../../server/services/githubService';
import type {ReactElement} from 'react';
import StatsDetails from './StatsDetails';
import StatsHeader from './StatsHeader';
import type {StatsInfo} from '../../../../../src/fetches/github';
import type {Translates} from '../../../../../src/localization';
import clsx from 'clsx';
import styles from '../../../styles.module.css';
import {useState} from 'react';

export const statNames = [
  'tree',
  'fire',
  'earth',
  'gold',
  'water',
  'person',
] as const;

export type ScouterProps = {
  t: Translates['stats'];
  stats: DoobooStatsResponse;
};

export type StatName = keyof StatsInfo | 'dooboo';

export default function Scouter(props: ScouterProps): ReactElement {
  const [selectedStat, setSelectedStat] = useState<StatName>('dooboo');

  return (
    <div
      className={clsx(
        styles.scrollable,
        'flex flex-col max-w-[800px] flex-start items-center',
      )}
    >
      <StatsHeader
        selectedStat={selectedStat}
        onChangeStat={(name) => {
          setSelectedStat(name);
        }}
      />
      <StatsDetails {...props} selectedStat={selectedStat} />
    </div>
  );
}
