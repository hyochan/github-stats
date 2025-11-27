import type {ReactElement} from 'react';
import clsx from 'clsx';
import {Inter} from 'next/font/google';

import type {StatsDetail} from '../../../../../../server/plugins';
import type {DoobooStatsResponse} from '../../../../../../server/services/githubService';
import type {Translates} from '../../../../../../src/localization';

const inter = Inter({subsets: ['latin']});

function SectionHeader({t, stats}: SectionProps): ReactElement {
  const pluginStats = stats.pluginStats;

  return (
    <div className={clsx('flex flex-col')}>
      <p className={clsx('font-bold text-basic text-h2', inter.className)}>
        {pluginStats.gold.name}
      </p>
      <p className={clsx('text-body3 text-placeholder break-words')}>
        {pluginStats.gold.description}
      </p>
      {/* Badges */}
      <div className={clsx('mt-6', 'flex flex-row')}>
        {/* Score badge */}
        <div
          className={clsx(
            'p-2 bg-basic border rounded-md',
            'flex items-center',
          )}
        >
          <span className="body3 font-bold mr-2">{`${stats.pluginStats.gold.name} ${t.score}`}</span>{' '}
          <div className="body3 p-1 bg-contrast-light dark:bg-contrast-dark rounded-md">
            <p className="text-[12px] text-white dark:text-black">
              {(pluginStats.gold.score * 100).toFixed(0)}
            </p>
          </div>
        </div>
      </div>
      {/* Scores */}
      <div className={clsx('mt-8', 'flex flex-row items-center flex-wrap')}>
        {pluginStats.gold.statElements.map((el) => {
          return (
            <div key={el.name} className={clsx('mr-4 mt-1', 'items-center')}>
              <span className="mr-2 text-basic font-bold text-[14px]">
                {el.name}
              </span>
              <div
                className={clsx(
                  'p-1 rounded-md font-bold text-[14px]',
                  'bg-[#e8e8e8] text-black dark:bg-[#232323] dark:text-white',
                )}
              >
                {el.totalCount.toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SectionBody({stats}: SectionProps): ReactElement {
  const statElements = stats.pluginStats.gold.statElements;

  return (
    <div className={clsx('flex flex-col flex-wrap')}>
      {statElements.map((el) => {
        const details: StatsDetail[] = el.details
          ? JSON.parse(el.details as string)
          : [];

        return (
          <div key={el.name} className={clsx('mb-6', 'flex flex-col')}>
            <div
              className={clsx(
                'text-basic font-bold mb-6',
                'flex flex-row items-center',
              )}
            >
              {el.name}
              <div
                className={clsx(
                  'ml-1 p-1 rounded-md font-bold text-[14px]',
                  'bg-[#e8e8e8] text-black dark:bg-[#232323] dark:text-white',
                )}
              >
                {el.totalCount.toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </div>
            </div>
            {details.map((detail: StatsDetail) => {
              switch (detail.type) {
                case 'commit':
                case 'repository':
                  return (
                    <div key={`${el.name}-${detail.name}`}>
                      <a href={detail.url} className="mb-4">
                        <p
                          className={clsx(
                            'hover:opacity-70 p-2 border border-1 text-body3 text-basic font-bold',
                            'border-border-light dark:border-border-dark',
                          )}
                        >
                          {detail.name}
                        </p>
                      </a>
                    </div>
                  );
                case 'language':
                  return (
                    <div key={`${el.name}-${detail.name}`}>
                      <p
                        className={clsx(
                          'hover:opacity-70 p-2  text-body3 text-basic font-bold',
                          'border-border-light dark:border-border-dark',
                        )}
                      >
                        {detail.name}
                      </p>
                    </div>
                  );
                default:
                  return <div />;
              }
            })}
          </div>
        );
      })}
    </div>
  );
}

type SectionProps = {
  t: Translates['stats'];
  stats: DoobooStatsResponse;
};

export default function SectionGold(props: SectionProps): ReactElement {
  return (
    <div className={clsx('flex-1', 'flex flex-col')}>
      <SectionHeader {...props} />
      <hr className="my-10 h-[1px] flex-1 text-border-light dark:text-border-dark" />
      <SectionBody {...props} />
    </div>
  );
}
