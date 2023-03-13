'use client';

import type {ReactElement} from 'react';
import StatDooboo from 'public/assets/stats_dooboo.svg';
import StatEarth from 'public/assets/stats_earth.svg';
import StatFire from 'public/assets/stats_fire.svg';
import StatGold from 'public/assets/stats_gold.svg';
import StatPeople from 'public/assets/stats_people.svg';
import StatTree from 'public/assets/stats_tree.svg';
import StatWater from 'public/assets/stats_water.svg';
import type {StatsInfo} from '../../../../../src/fetches/github';
import {cloneElement} from 'react';
import clsx from 'clsx';

type StatName = keyof StatsInfo | 'dooboo';

type StatObj = {
  name: StatName;
  svg: ReactElement;
};

export default function StatsHeader({
  selectedStat,
  onChangeStat,
}: {
  selectedStat: keyof StatsInfo | 'dooboo';
  onChangeStat: (stat: StatName) => void;
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
        'px-0 max-md:px-4 self-stretch py-4 border-b-[1px] border-b-border-light dark:border-b-border-dark',
        'flex flex-row justify-between',
      )}
    >
      {stats.map((stat) => {
        return (
          <div
            key={stat.name}
            className={clsx(
              'flex-1 text-center p-4 cursor-pointer',
              'justify-center items-center',
            )}
            onClick={() => onChangeStat(stat.name)}
          >
            {cloneElement(stat.svg, {
              className: `${stat.svg.props.className} ${
                selectedStat === stat.name ? 'text-basic' : 'text-placeholder'
              }`,
            })}
          </div>
        );
      })}
    </div>
  );
}
