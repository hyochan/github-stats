'use client';

import type {ReactElement, UIEventHandler} from 'react';
import {useCallback, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import type {UserListItem} from '../../../src/fetches/recentList';
import {fetchRecentList} from '../../../src/fetches/recentList';
import type {Translates} from '../../../src/localization';
import {getTierSvg} from '../../../src/utils/functions';
import type {ColumnDef} from '../(common)/DataTable';
import {DataTable} from '../(common)/DataTable';
import styles from '../styles.module.css';

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
  t: Translates['recentList'];
  initialData: UserListItem[];
};

export default function GithubUserList({t, initialData}: Props): ReactElement {
  const tBodyRef = useRef<HTMLTableSectionElement>(null);
  const [data, setData] = useState(initialData);
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const [tierData, setTierData] = useState<UserListItem[]>([]);
  const [isLoadingTier, setIsLoadingTier] = useState(false);
  const [cursor, setCursor] = useState<Date | null>(
    (initialData?.length || 0) > 0
      ? new Date(initialData?.[initialData?.length - 1]?.createdAt)
      : null,
  );

  const handleTierSelect = useCallback(async (tier: Tier | null) => {
    setSelectedTier(tier);

    if (!tier) {
      setTierData([]);
      return;
    }

    setIsLoadingTier(true);
    try {
      const response = await fetch(`/api/users-by-tier?tier=${tier}`);
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
        headerClassName: 'w-6/12 py-[12px]',
        cellClassName: 'w-6/12 h-[50px] py-[8px] text-default',
        header: () => (
          <H5 fontWeight="semibold" className="text-start">
            {t.githubUsername}
          </H5>
        ),
        cell: ({login, avatarUrl}) => (
          <div className="text-start flex gap-[8px] items-center">
            <Image
              alt="avatar"
              src={avatarUrl}
              width={20}
              height={20}
              className="rounded-full"
            />
            <H4>{login}</H4>
          </div>
        ),
      },
      {
        id: 'tierName',
        headerClassName: 'w-3/12 py-[12px]',
        cellClassName: 'h-[37px] text-start w-3/12 h-[50px] py-[8px]',
        header: () => (
          <H5 fontWeight="semibold" className="text-start text-basic">
            {t.tier}
          </H5>
        ),
        cell: ({tierName}) => <TierRowItem tier={tierName as Tier} />,
      },
      {
        id: 'score',
        headerClassName: 'w-3/12 py-[12px]',
        cellClassName: 'h-[37px] text-start w-3/12 h-[50px] py-[8px]',
        header: () => (
          <H5 fontWeight="semibold" className="text-start text-basic">
            {t.score}
          </H5>
        ),
        cell: ({score}) => <div className="text-start text-basic">{score}</div>,
      },
    ],
    [t.githubUsername, t.score, t.tier],
  );

  const handleScroll: UIEventHandler<HTMLTableSectionElement> = async (
    e,
  ): Promise<void> => {
    const hasEndReached =
      Math.ceil(e.currentTarget.scrollTop + e.currentTarget.clientHeight) >=
      e.currentTarget.scrollHeight;

    if (hasEndReached) {
      if (!cursor) {
        return;
      }

      const {users} = await fetchRecentList({
        pluginId: 'dooboo-github',
        take: 20,
        cursor,
      });

      const filteredUsers = users.filter((el) => !data.includes(el));

      setData([...data, ...filteredUsers]);
      setCursor(new Date(filteredUsers?.[filteredUsers.length - 1]?.createdAt));
    }
  };

  return (
    <div className="flex-1 flex flex-col mx-6 mb-12 max-[480px]:mx-4 max-[480px]:mb-8 overflow-hidden">
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
          'flex-1 overflow-y-scroll',
          'rounded-[20px]',
          'bg-black/10 dark:bg-white/5',
          'backdrop-blur-xl',
          'border border-black/20 dark:border-white/10',
          'shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]',
          'max-[480px]:rounded-[16px]',
          styles.scrollable,
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
            window.open('http://github.com/' + login);
          }}
          className="p-6 max-[480px]:p-4"
          classNames={{
            tHead:
              'bg-paper backdrop-blur-xl border-b border-black/10 dark:border-white/10 px-2 pb-2 -mx-6 -mt-6 px-6 pt-6 rounded-t-[20px] max-[480px]:-mx-4 max-[480px]:-mt-4 max-[480px]:px-4 max-[480px]:pt-4 max-[480px]:rounded-t-[16px]',
            tBodyRow:
              'hover:bg-black/10 dark:hover:bg-white/5 transition-all duration-200 rounded-[8px] my-1',
          }}
        />
      </div>
    </div>
  );
}
