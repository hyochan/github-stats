'use client';

import type {ReactElement} from 'react';
import {useState} from 'react';
import clsx from 'clsx';

import type {
  DoobooStatsResponse,
  MonthlyContribution,
} from '../../../../../server/services/githubService';
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

export type StatsWithMonthly = DoobooStatsResponse & {
  monthlyContributions?: MonthlyContribution[];
};

export type ScouterProps = {
  t: Translates['stats'];
  stats: StatsWithMonthly;
  endDate?: string;
};

export type StatName = keyof StatsInfo | 'dooboo';

export default function Scouter({endDate, ...props}: ScouterProps): ReactElement {
  const [selectedStat, setSelectedStat] = useState<StatName>('dooboo');

  return (
    <div
      className={clsx(
        styles.scrollable,
        'w-full max-w-full min-w-0',
        'flex flex-col flex-start items-center',
      )}
    >
      <StatsHeader
        selectedStat={selectedStat}
        onChangeStatAction={(name) => {
          setSelectedStat(name);
        }}
      />
      <StatsDetails {...props} selectedStat={selectedStat} endDate={endDate} />
    </div>
  );
}
