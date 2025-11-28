'use client';

import type {ReactElement} from 'react';
import {useEffect, useState} from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import type {UserListItem} from '../../../src/fetches/recentList';
import {getTierSvg} from '../../../src/utils/functions';
import styles from '../styles.module.css';

import type {Tier} from './TierRowItem';

type Props = {
  title: string;
};

export default function TopTierUsers({title}: Props): ReactElement {
  const [topTierUsers, setTopTierUsers] = useState<UserListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        const response = await fetch('/api/top-tier-users');
        const data = await response.json();
        if (data.users) {
          setTopTierUsers(data.users);
        }
      } catch (error) {
        console.error('Failed to fetch top tier users:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopUsers();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col max-w-[500px]">
        <span className="text-[10px] text-placeholder mb-1">{title}</span>
        <div className="flex flex-row gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={clsx(
                'shrink-0 flex flex-col items-center p-2 rounded-xl w-[80px]',
                'bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20',
                'border border-amber-500/20 dark:border-amber-500/30',
                'animate-pulse',
              )}
            >
              <div className="w-10 h-10 rounded-full bg-black/10 dark:bg-white/10" />
              <div className="mt-2 w-10 h-3 rounded bg-black/10 dark:bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (topTierUsers.length === 0) {
    return <div />;
  }

  return (
    <div className="flex flex-col w-full max-w-full">
      <span className="text-[10px] text-placeholder mb-1">{title}</span>
      <div
        className={clsx(
          styles.horizontalScroll,
          'w-full max-w-full min-w-0',
          'flex flex-nowrap gap-2 pr-2',
        )}
      >
        {topTierUsers.map((user) => (
          <a
            key={user.login}
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'shrink-0 flex flex-col items-center p-2 rounded-xl w-[80px]',
              'bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20',
              'border border-amber-500/20 dark:border-amber-500/30',
              'hover:scale-105 transition-transform duration-200',
            )}
          >
            <Image
              alt={user.login}
              src={user.avatarUrl}
              width={40}
              height={40}
              className="rounded-full ring-2 ring-amber-500/50"
            />
            <Image
              alt={user.tierName}
              src={getTierSvg(user.tierName as Tier)}
              width={14}
              height={14}
              className="-mt-2 relative z-10"
            />
            <span className="mt-1 text-[10px] font-medium text-basic truncate max-w-[70px]">
              {user.login}
            </span>
            <span className="text-[9px] text-placeholder">{user.score}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
