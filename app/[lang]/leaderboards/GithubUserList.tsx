'use client';

import type {ReactElement, UIEventHandler} from 'react';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import type {UserListItem} from '../../../src/fetches/recentList';
import {fetchRecentList} from '../../../src/fetches/recentList';
import type {Translates} from '../../../src/localization';
import {getTierSvg} from '../../../src/utils/functions';
import type {ColumnDef} from '../(common)/DataTable';
import {DataTable} from '../(common)/DataTable';
import styles from '../styles.module.css';
import {API_USERS_BY_TIER} from './apiRoutes';

import type {Tier} from './TierRowItem';
import TierRowItem from './TierRowItem';

import {H4, H5} from '~/components/Typography';

// Tier order from highest to lowest
const TIER_ORDER: Tier[] = [
  'Challenger',
  'Master',
  'Diamond',
  'Platinum',
  'Gold',
  'Silver',
  'Bronze',
  'Iron',
];

type Props = {
  t: Translates['leaderboards'];
  initialData: UserListItem[];
};

export default function GithubUserList({t, initialData}: Props): ReactElement {
  const tBodyRef = useRef<HTMLTableSectionElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState(initialData);
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const [tierData, setTierData] = useState<UserListItem[]>([]);
  const [isLoadingTier, setIsLoadingTier] = useState(false);
  const [cursor, setCursor] = useState<Date | null>(
    (initialData?.length || 0) > 0
      ? new Date(initialData?.[initialData?.length - 1]?.createdAt)
      : null,
  );
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadMoreRef = useRef<(() => Promise<void>) | null>(null);

  const handleTierSelect = useCallback(async (tier: Tier | null) => {
    setSelectedTier(tier);

    if (!tier) {
      setTierData([]);
      return;
    }

    setIsLoadingTier(true);
    try {
      const response = await fetch(`${API_USERS_BY_TIER}?tier=${tier}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const result = await response.json();
      if (result.users) {
        setTierData(result.users);
      }
    } catch (error) {
      console.error('Failed to fetch tier users:', error);
      setTierData([]);
    } finally {
      setIsLoadingTier(false);
    }
  }, []);

  // Use tier data when a tier is selected, otherwise use recent data
  const displayData = selectedTier ? tierData : data;

  const columnsDef: ColumnDef<UserListItem> = useMemo(
    () => [
      {
        id: 'login',
        headerClassName: 'flex-1 py-[12px] min-w-[150px]',
        cellClassName: 'flex-1 h-[50px] py-[8px] text-default min-w-[150px]',
        header: () => (
          <H5 fontWeight="semibold" className="text-start">
            {t.githubUsername}
          </H5>
        ),
        cell: ({login, avatarUrl}) => (
          <div className="text-start flex gap-[8px] items-center min-w-0">
            <Image
              alt="avatar"
              src={avatarUrl}
              width={20}
              height={20}
              className="rounded-full shrink-0"
            />
            <H4 className="truncate">{login}</H4>
          </div>
        ),
      },
      {
        id: 'tierName',
        headerClassName: 'w-[120px] max-[480px]:w-[40px] py-[12px] shrink-0',
        cellClassName: 'w-[120px] max-[480px]:w-[40px] h-[50px] py-[8px] shrink-0',
        header: () => (
          <H5 fontWeight="semibold" className="text-start text-basic max-[480px]:hidden">
            {t.tier}
          </H5>
        ),
        cell: ({tierName}) => <TierRowItem tier={tierName as Tier} />,
      },
      {
        id: 'score',
        headerClassName: 'w-[80px] max-[480px]:w-[50px] py-[12px] shrink-0 justify-center',
        cellClassName: 'w-[80px] max-[480px]:w-[50px] h-[50px] py-[8px] shrink-0 justify-center',
        header: () => (
          <H5 fontWeight="semibold" className="text-center text-basic">
            {t.score}
          </H5>
        ),
        cell: ({score}) => <div className="text-center text-basic">{score}</div>,
      },
    ],
    [t.githubUsername, t.score, t.tier],
  );

  const loadMore = useCallback(async () => {
    if (!cursor || isLoadingMore || selectedTier || !hasMore) return;

    setIsLoadingMore(true);
    try {
      const {users} = await fetchRecentList({
        pluginId: 'dooboo-github',
        take: 20,
        cursor,
      });

      // No more data from API
      if (!users || users.length === 0) {
        setHasMore(false);
        return;
      }

      // Less than requested means end of data
      if (users.length < 20) {
        setHasMore(false);
      }

      setData((prevData) => {
        const existingLogins = new Set(prevData.map((u) => u.login));
        const filteredUsers = users.filter((el) => !existingLogins.has(el.login));

        if (filteredUsers.length === 0) {
          return prevData;
        }

        return [...prevData, ...filteredUsers];
      });

      // Update cursor based on the last user from API response
      const lastUser = users[users.length - 1];
      if (lastUser) {
        setCursor(new Date(lastUser.createdAt));
      }
    } catch (error) {
      console.error('Failed to fetch more users:', error);
    } finally {
      setIsLoadingMore(false);
    }
  }, [cursor, isLoadingMore, selectedTier, hasMore]);

  // Keep loadMore ref updated
  loadMoreRef.current = loadMore;

  // Intersection Observer for infinite scroll (works on both mobile and desktop)
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreRef.current?.();
        }
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0,
      },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    const hasEndReached =
      Math.ceil(e.currentTarget.scrollTop + e.currentTarget.clientHeight) >=
      e.currentTarget.scrollHeight;

    if (hasEndReached) {
      loadMore();
    }
  };

  return (
    <div className="flex-1 flex flex-col mx-6 mb-12 max-[480px]:mx-4 max-[480px]:mb-8 overflow-hidden max-[768px]:overflow-visible">
      {/* Tier filter labels */}
      <div
        className={clsx(
          styles.horizontalScroll,
          'w-full max-w-full min-w-0',
          'flex flex-nowrap gap-2 mb-4',
          'pr-2',
        )}
      >
        <button
          onClick={() => handleTierSelect(null)}
          disabled={isLoadingTier}
          className={clsx(
            'px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200',
            'border',
            'shrink-0',
            !selectedTier
              ? 'bg-brand text-white border-brand'
              : 'bg-black/5 dark:bg-white/5 text-basic border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10',
            isLoadingTier && 'opacity-50 cursor-not-allowed',
          )}
        >
          {t.all}
        </button>
        {TIER_ORDER.map((tier) => (
          <button
            key={tier}
            onClick={() => handleTierSelect(tier)}
          disabled={isLoadingTier}
          className={clsx(
            'px-3 py-1.5 max-[480px]:px-2 max-[480px]:py-1',
            'rounded-full text-xs font-medium transition-all duration-200',
            'border flex items-center justify-center gap-1.5 max-[480px]:gap-0',
            'min-w-[70px] whitespace-nowrap',
            'max-[480px]:min-w-[44px] max-[480px]:max-w-[60px]',
            'shrink-0',
            selectedTier === tier
              ? 'bg-brand text-white border-brand'
              : 'bg-black/5 dark:bg-white/5 text-basic border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10',
            isLoadingTier && 'opacity-50 cursor-not-allowed',
          )}
            aria-label={tier}
          >
            <Image
              alt={tier}
              src={getTierSvg(tier)}
              width={14}
              height={14}
            />
            <span className="max-[480px]:hidden whitespace-nowrap">
              {tier}
            </span>
          </button>
        ))}
      </div>

      {/* Data table */}
      <div
        className={clsx(
          'flex-1 max-[768px]:flex-none',
          'block w-full',
          'overflow-x-auto',
          'overflow-y-auto max-[768px]:overflow-y-visible',
          'rounded-[20px]',
          'bg-black/10 dark:bg-white/5',
          'backdrop-blur-xl',
          'border border-black/20 dark:border-white/10',
          'shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]',
          'max-[480px]:rounded-[16px]',
          'transition-opacity duration-300',
          isLoadingTier && 'opacity-50',
        )}
        onScroll={!selectedTier ? handleScroll : undefined}
      >
      <DataTable
        tBodyRef={tBodyRef}
        columns={columnsDef}
        data={displayData}
        onClickRow={(user) => {
          const login = user.login;
          window.open(`/stats/${login}`, '_blank', 'noopener');
        }}
        className="p-6 max-[480px]:p-4 w-full min-w-[500px]"
        classNames={{
          tHead:
            'bg-paper-light dark:bg-paper-dark backdrop-blur-xl border-b border-black/10 dark:border-white/10 px-2 pb-2 -mx-6 -mt-6 px-6 pt-6 rounded-t-[20px] max-[480px]:-mx-4 max-[480px]:-mt-4 max-[480px]:px-4 max-[480px]:pt-4 max-[480px]:rounded-t-[16px]',
            tBodyRow:
              'hover:bg-black/10 dark:hover:bg-white/5 transition-all duration-200 rounded-[8px] my-1',
          }}
        />
        {/* Sentinel for infinite scroll */}
        {!selectedTier && (
          <div
            ref={sentinelRef}
            className="h-[1px] w-full"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}
