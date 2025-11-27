import type {ReactElement} from 'react';
import clsx from 'clsx';
import {Inter} from 'next/font/google';

import type {DoobooStatsResponse} from '../../../../../../server/services/githubService';
import type {Translates} from '../../../../../../src/localization';

const inter = Inter({subsets: ['latin']});

function SectionHeader({t, stats}: SectionProps): ReactElement {
  const pluginStats = stats.pluginStats;

  return (
    <div className={clsx('flex flex-col')}>
      <p className={clsx('font-bold text-basic text-h2', inter.className)}>
        {pluginStats.tree.name}
      </p>
      <p className={clsx('text-body3 text-placeholder break-words')}>
        {pluginStats.tree.description}
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
          <span className="body3 font-bold mr-2">{`${stats.pluginStats.tree.name} ${t.score}`}</span>{' '}
          <div className="body3 p-1 bg-contrast-light dark:bg-contrast-dark rounded-md">
            <p className="text-[12px] text-white dark:text-black">
              {(pluginStats.tree.score * 100).toFixed(0)}
            </p>
          </div>
        </div>
      </div>
      {/* Scores */}
      <div className={clsx('mt-8', 'flex flex-row items-center flex-wrap')}>
        {pluginStats.tree.statElements.map((el) => {
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

function SectionBody({}: SectionProps): ReactElement {
  return <div className={clsx('flex flex-col flex-wrap')}></div>;
}

type SectionProps = {
  t: Translates['stats'];
  stats: DoobooStatsResponse;
};

export default function SectionTree(props: SectionProps): ReactElement {
  return (
    <div className={clsx('flex-1', 'flex flex-col')}>
      <SectionHeader {...props} />
      <hr className="my-10 h-[1px] flex-1 text-border-light dark:text-border-dark" />
      <SectionBody {...props} />
    </div>
  );
}
