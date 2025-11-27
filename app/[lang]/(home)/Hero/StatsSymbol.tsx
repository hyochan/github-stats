'use client';

import type {CSSProperties, ReactElement} from 'react';
import {cloneElement, useEffect, useRef, useState} from 'react';
import {track} from '@amplitude/analytics-browser';
import clsx from 'clsx';

import type {StatsInfo} from '../../../../src/fetches/github';

import SvgEarth from '@/public/assets/stats_earth.svg';
import SvgFire from '@/public/assets/stats_fire.svg';
import SvgGold from '@/public/assets/stats_gold.svg';
import SvgPeople from '@/public/assets/stats_people.svg';
import SvgTree from '@/public/assets/stats_tree.svg';
import SvgWater from '@/public/assets/stats_water.svg';

const statTypes = [
  {
    name: 'tree',
    svg: <SvgTree />,
  },
  {
    name: 'fire',
    svg: <SvgFire />,
  },
  {
    name: 'earth',
    svg: <SvgEarth />,
  },
  {
    name: 'gold',
    svg: <SvgGold />,
  },
  {
    name: 'water',
    svg: <SvgWater />,
  },
  {
    name: 'people',
    svg: <SvgPeople />,
  },
] as const;

type StatName = (typeof statTypes)[number]['name'];

const PluginStatsInfo = ({
  statsInfo,
  selectedStatName,
  isTransitioning,
}: {
  statsInfo: StatsInfo;
  selectedStatName: StatName;
  isTransitioning: boolean;
}): React.ReactElement => {
  const name = selectedStatName === 'fire'
    ? statsInfo.fire.name
    : selectedStatName === 'earth'
    ? statsInfo.earth.name
    : selectedStatName === 'gold'
    ? statsInfo.gold.name
    : selectedStatName === 'water'
    ? statsInfo.water.name
    : selectedStatName === 'people'
    ? statsInfo.people.name
    : statsInfo.tree.name;

  const description = selectedStatName === 'fire'
    ? statsInfo.fire.description
    : selectedStatName === 'earth'
    ? statsInfo.earth.description
    : selectedStatName === 'gold'
    ? statsInfo.gold.description
    : selectedStatName === 'water'
    ? statsInfo.water.description
    : selectedStatName === 'people'
    ? statsInfo.people.description
    : statsInfo.tree.description;

  return (
    <div
      className={clsx(
        'ml-[8px] py-[24px] max-w-[600px] w-full',
        'flex-1 flex flex-col relative',
      )}
    >
      <div
        className={clsx(
          'body1 font-bold mb-3 text-left transition-opacity duration-300',
          isTransitioning ? 'opacity-0' : 'opacity-100'
        )}
      >
        {name}
      </div>
      <div
        className={clsx(
          'body3 leading-[160%] text-left transition-opacity duration-500',
          isTransitioning ? 'opacity-0' : 'opacity-100'
        )}
      >
        {description}
      </div>
    </div>
  );
};

const StatsSymbols = ({
  style,
  className,
  statsInfo,
}: {
  style?: CSSProperties;
  className?: string;
  statsInfo: StatsInfo;
}): ReactElement => {
  const [selectedStatName, setSelectedStatName] = useState<StatName>('tree');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pressStat = (type: StatName): void => {
    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current);
    }

    setIsTransitioning(true);
    transitionTimer.current = setTimeout(() => setIsTransitioning(false), 50);
    setSelectedStatName(type);
    track('Press Stat Info', {type});
  };

  useEffect(() => {
    return () => {
      if (transitionTimer.current) {
        clearTimeout(transitionTimer.current);
      }
    };
  }, []);

  return (
    <div className={`flex flex-col  ${className}`} style={style}>
      <div className={clsx('max-w-[220px]', 'flex flex-row')}>
        {statTypes.map((el) => (
          <a
            key={el.name}
            className="p-2"
            href=""
            onClick={(e) => {
              e.preventDefault();
              pressStat(el.name);
            }}
          >
            {cloneElement(el.svg, {
              width: 20,
              height: 20,
              className: `hover:opacity-70 ${el.svg.props.className} ${
                selectedStatName === el.name ? 'text-basic' : 'text-placeholder'
              }`,
            })}
          </a>
        ))}
      </div>
      <PluginStatsInfo
        selectedStatName={selectedStatName}
        statsInfo={statsInfo}
        isTransitioning={isTransitioning}
      />
    </div>
  );
};

export default StatsSymbols;
