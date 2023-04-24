'use client';

import type {CSSProperties, ReactElement} from 'react';
import {cloneElement, useState} from 'react';
import TextTransition, {presets} from 'react-text-transition';
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
}: {
  statsInfo: StatsInfo;
  selectedStatName: StatName;
}): React.ReactElement => {
  return (
    <div
      className={clsx(
        'ml-[8px] py-[24px] px-[8x] max-w-[600px] w-full',
        'flex-1 flex flex-col relative',
      )}
    >
      <TextTransition
        springConfig={presets.gentle}
        direction="down"
        className="body1 font-bold mb-3 text-left"
      >
        {selectedStatName === 'fire'
          ? statsInfo.fire.name
          : selectedStatName === 'earth'
          ? statsInfo.earth.name
          : selectedStatName === 'gold'
          ? statsInfo.gold.name
          : selectedStatName === 'water'
          ? statsInfo.water.name
          : selectedStatName === 'people'
          ? statsInfo.people.name
          : statsInfo.tree.name}
      </TextTransition>
      <TextTransition
        className="body3 leading-[160%] text-left"
        springConfig={presets.wobbly}
        direction="down"
      >
        {selectedStatName === 'fire'
          ? statsInfo.fire.description
          : selectedStatName === 'earth'
          ? statsInfo.earth.description
          : selectedStatName === 'gold'
          ? statsInfo.gold.description
          : selectedStatName === 'water'
          ? statsInfo.water.description
          : selectedStatName === 'people'
          ? statsInfo.people.description
          : statsInfo.tree.description}
      </TextTransition>
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

  const pressStat = (type: StatName): void => {
    setSelectedStatName(type);
    track('Press Stat Info', {type});
  };

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
      />
    </div>
  );
};

export default StatsSymbols;
