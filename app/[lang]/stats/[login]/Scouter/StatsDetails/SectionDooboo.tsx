'use client';

import type {ReactElement} from 'react';
import {useCallback, useState, useEffect, useRef} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import clsx from 'clsx';
import {Inter} from 'next/font/google';
import Image from 'next/image';

import type {ScoreType} from '../../../../../../server/plugins/svgs/functions';
import type {StatsWithMonthly} from '..';
import type {Translates} from '../../../../../../src/localization';
import {getTierSvg} from '../../../../../../src/utils/functions';
import {statNames} from '..';

import type {TierType} from '.';

import Logo from '@/public/assets/logo.svg';
import StatsChart from './StatsChart';
import MonthPicker from '../../MonthPicker';

const inter = Inter({subsets: ['latin']});

function SectionHeader({t, stats, endDate}: SectionProps): ReactElement {
  const pathname = usePathname();
  const router = useRouter();
  const pluginStats = stats.pluginStats;
  const [isLoading, setIsLoading] = useState(false);
  const pendingEndDateRef = useRef<string | undefined>(endDate);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (
        pendingEndDateRef.current === endDate ||
        pendingEndDateRef.current === undefined
      ) {
        pendingEndDateRef.current = undefined;
        setIsLoading(false);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [endDate, stats]);

  const handleEndDateChange = useCallback(
    (newDate: string | undefined) => {
      if (!pathname) return;
      pendingEndDateRef.current = newDate;
      setIsLoading(true);
      if (newDate) {
        router.push(`${pathname}?endDate=${newDate}`);
      } else {
        router.push(pathname);
      }
      router.refresh();
    },
    [pathname, router],
  );

  const sum =
    +pluginStats.earth.score +
    +pluginStats.fire.score +
    +pluginStats.gold.score +
    +pluginStats.people.score +
    +pluginStats.tree.score +
    +pluginStats.water.score;

  const score = Math.round((sum * 100) / 6);

  const tierJSONArray: TierType[] = JSON.parse(
    JSON.stringify(stats.plugin.json),
  );

  const tiers = tierJSONArray.filter((el) => el.score <= score);

  const tierName =
    tiers.length === 0
      ? 'Iron'
      : (tiers[tiers.length - 1].tier as ScoreType['tierName']);

  return (
    <div className={clsx('flex flex-col flex-wrap w-full max-w-full')}>
      <p className={clsx('font-bold text-basic text-h2', inter.className)}>
        {t.achievement}
      </p>
      <p className={clsx('text-body3 text-placeholder')}>
        {t.achievementDetails}
      </p>
      {/* Badges */}
      <div className={clsx('mt-6', 'flex flex-row flex-wrap gap-2')}>
        {/* Tier badge */}
        <div
          className={clsx(
            'p-2 bg-basic border rounded-md',
            'flex items-center',
          )}
        >
          <span className="body3 mr-2">{tierName}</span>{' '}
          <Image
            alt={tierName}
            src={getTierSvg(tierName)}
            width={24}
            height={24}
          />
        </div>
        {/* AVG score badge */}
        <div className={clsx('p-2 bg-basic border rounded-md', 'flex items-center')}>
          <span className="body3 mr-2">{t.avgScore}</span>{' '}
          <div className="body3 p-1 bg-contrast-light dark:bg-contrast-dark rounded-md">
            <p className="text-[12px] text-white dark:text-black">{score}</p>
          </div>
        </div>
      </div>
      {/* Scores */}
      <div
        className={clsx(
          'mt-5 w-full max-w-full',
          'flex flex-wrap items-center',
          'gap-x-4 gap-y-2',
        )}
      >
        {statNames.map((name) => {
          return (
            <div key={name} className={clsx('flex items-center gap-2')}>
              <span className="text-basic font-bold text-[14px] whitespace-nowrap">
                {pluginStats[name].name}
              </span>
              <div
                className={clsx(
                  'p-1 rounded-md font-bold text-[14px]',
                  'bg-[#e8e8e8] text-black dark:bg-[#232323] dark:text-white',
                )}
              >
                {(pluginStats[name].score * 100).toFixed(0)}
              </div>
            </div>
          );
        })}
      </div>
      {/* MonthPicker - positioned between scores and chart */}
      <div className="mt-4 flex justify-start max-w-full w-full">
        <MonthPicker
          t={t}
          value={endDate}
          onChangeAction={handleEndDateChange}
          isLoading={isLoading}
        />
      </div>
      {/* Stats Chart - Monthly contributions */}
      <StatsChart monthlyContributions={stats.monthlyContributions} isLoading={isLoading} />
    </div>
  );
}

function SectionBody({t, stats}: SectionProps): ReactElement {
  return (
    <a
      className={clsx('flex flex-col flex-wrap')}
      href={`https://github.com/${stats.json.login}`}
    >
      <p className={clsx('text-basic text-h3 font-bold', inter.className)}>
        {t.github}
      </p>
      <div className={clsx('mt-4', 'flex flex-row')}>
        {stats.json.avatarUrl ? (
          <Image
            alt="user-image"
            src={stats.json.avatarUrl}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full"
          />
        ) : (
          // placeholder image
          <div
            className={clsx(
              'rounded-full w-16 h-16 border border-w-1 border-border-light dark:border-border-dark',
              'flex justify-center items-center',
            )}
          >
            <Logo className="w-10 h-10 text-placeholder" />
          </div>
        )}
        {/* User info */}
        <div className={clsx('ml-4', 'flex flex-col justify-start')}>
          <p className="h2">{stats.userName}</p>
          <p className="body4">{stats.json.login}</p>
          <p className="mt-1 body2">{stats.json.bio}</p>
        </div>
      </div>
    </a>
  );
}

type SectionProps = {
  t: Translates['stats'];
  stats: StatsWithMonthly;
  endDate?: string;
};

export default function SectionDooboo({
  endDate,
  ...props
}: SectionProps): ReactElement {
  return (
    <div
      className={clsx(
        'flex-1 w-full max-w-full min-w-0',
        'flex flex-col',
      )}
    >
      <SectionHeader {...props} endDate={endDate} />
      <hr className="my-10 h-[1px] flex-1 text-border-light dark:text-border-dark" />
      <SectionBody {...props} />
    </div>
  );
}
