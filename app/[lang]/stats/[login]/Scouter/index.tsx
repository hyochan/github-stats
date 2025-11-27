'use client';

import type {ReactElement} from 'react';
import {useState} from 'react';
import clsx from 'clsx';

import type {DoobooStatsResponse} from '../../../../../server/services/githubService';
import type {StatsInfo} from '../../../../../src/fetches/github';
import type {Translates} from '../../../../../src/localization';
import styles from '../../../styles.module.css';

import StatsDetails from './StatsDetails';
import StatsHeader from './StatsHeader';

export const statNames = [
  'tree',
  'fire',
  'earth',
  'gold',
  'water',
  'people',
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
        'w-full max-w-full',
        'flex flex-col flex-start items-center',
      )}
    >
      <StatsHeader
        selectedStat={selectedStat}
        onChangeStatAction={(name) => {
          setSelectedStat(name);
        }}
      />
      <StatsDetails {...props} selectedStat={selectedStat} />
    </div>
  );
}
