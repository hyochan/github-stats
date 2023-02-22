'use client';

import type {CSSProperties, ReactElement} from 'react';
import TextTransition, {presets} from 'react-text-transition';

import Image from 'next/image';
import type {StatsInfo} from '../../../../src/fetches/github';
import clsx from 'clsx';
import {useState} from 'react';

const statTypes = [
  {
    name: 'tree',
    icon: '/assets/stats_earth.svg',
  },
  {
    name: 'fire',
    icon: '/assets/stats_fire.svg',
  },
  {
    name: 'earth',
    icon: '/assets/stats_earth.svg',
  },
  {
    name: 'gold',
    icon: '/assets/stats_gold.svg',
  },
  {
    name: 'water',
    icon: '/assets/stats_water.svg',
  },
  {
    name: 'person',
    icon: '/assets/stats_person.svg',
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
          : selectedStatName === 'person'
          ? statsInfo.person.name
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
          : selectedStatName === 'person'
          ? statsInfo.person.description
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
  };

  return (
    <div className={`flex flex-col  ${className}`} style={style}>
      <div
        className={clsx(
          'bg-gray4 rounded-[4px]',
          'dark:bg-paper-dark max-w-[200px]',
          'flex flex-row',
        )}
      >
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
            <Image
              className={`text-contrast ${
                selectedStatName === el.name ? 'opacity-100' : 'opacity-50'
              }`}
              width={20}
              height={20}
              src={el.icon}
              alt={el.name}
            />
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
