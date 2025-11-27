'use client';

import type {ReactElement} from 'react';
import {cloneElement} from 'react';
import clsx from 'clsx';
import StatDooboo from 'public/assets/stats_dooboo.svg';
import StatEarth from 'public/assets/stats_earth.svg';
import StatFire from 'public/assets/stats_fire.svg';
import StatGold from 'public/assets/stats_gold.svg';
import StatPeople from 'public/assets/stats_people.svg';
import StatTree from 'public/assets/stats_tree.svg';
import StatWater from 'public/assets/stats_water.svg';

import type {StatsInfo} from '../../../../../src/fetches/github';

type StatName = keyof StatsInfo | 'dooboo';

type StatObj = {name: StatName; svg: ReactElement<{className?: string}>};

export default function StatsHeader({
  selectedStat,
  onChangeStatAction,
}: {
  selectedStat: keyof StatsInfo | 'dooboo';
  onChangeStatAction: (stat: StatName) => void;
}): ReactElement {
  const stats: StatObj[] = [
    {
      name: 'dooboo',
      svg: (
        <StatDooboo
          className="self-center hover:opacity-70"
          alt="dooboo"
          width={24}
          height={24}
        />
      ),
    },
    {
      name: 'tree',
      svg: (
        <StatTree
          className="self-center hover:opacity-70"
          alt="tree"
          width={24}
          height={24}
        />
      ),
    },
    {
      name: 'fire',
      svg: (
        <StatFire
          className="self-center hover:opacity-70"
          alt="fire"
          width={24}
          height={24}
        />
      ),
    },
    {
      name: 'earth',
      svg: (
        <StatEarth
          className="self-center hover:opacity-70"
          alt="earth"
          width={24}
          height={24}
        />
      ),
    },
    {
      name: 'gold',
      svg: (
        <StatGold
          className="self-center hover:opacity-70"
          alt="gold"
          width={24}
          height={24}
        />
      ),
    },
    {
      name: 'water',
      svg: (
        <StatWater
          className="self-center hover:opacity-70"
          alt="water"
          width={24}
          height={24}
        />
      ),
    },
    {
      name: 'people',
      svg: (
        <StatPeople
          className="self-center hover:opacity-70"
          alt="people"
          width={24}
          height={24}
        />
      ),
    },
  ];

  return (
    <div
      className={clsx(
        'h-14 max-[768px]:h-12 max-[480px]:h-10',
        'min-h-[56px] max-[768px]:min-h-[48px] max-[480px]:min-h-[40px]',
        'flex-shrink-0',
        'self-stretch items-center mb-6 rounded-[16px]',
        'px-4 max-[768px]:px-2 max-[480px]:px-1',
        'bg-basic',
        'border border-black/10 dark:border-white/10',
        'flex flex-row justify-between overflow-y-hidden overflow-x-auto',
      )}
    >
      {stats.map((stat) => {
        return (
          <div
            key={stat.name}
            className={clsx(
              'flex-1 min-w-[32px] text-center cursor-pointer',
              'p-4 max-[768px]:p-2 max-[480px]:p-1',
              'flex justify-center items-center',
            )}
            onClick={() => onChangeStatAction(stat.name)}
          >
            <div className="w-6 h-6 max-[768px]:w-5 max-[768px]:h-5 max-[480px]:w-4 max-[480px]:h-4">
              {cloneElement(stat.svg, {
                className: `${stat.svg.props.className ?? ''} ${
                  selectedStat === stat.name ? 'text-basic' : 'text-placeholder'
                } w-full h-full`,
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
