'use client';

import type {ReactElement, UIEventHandler} from 'react';
import {useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import type {Tier} from './TierRowItem';
import TierRowItem from './TierRowItem';

import type {ColumnDef} from '~/components/uis/DataTable';
import {DataTable} from '~/components/uis/DataTable';
import {H4, H5} from '~/components/uis/Typography';
import type {UserListItem} from '~/src/apis/recentList';
import {fetchRecentList} from '~/src/apis/recentList';
import type {Translates} from '~/src/localization';
import styles from '~/styles.module.css';

type Props = {
  t: Translates['recentList'];
  initialData: UserListItem[];
};

export default function GithubUserList({t, initialData}: Props): ReactElement {
  const tBodyRef = useRef<HTMLTableSectionElement>(null);
  const [data, setData] = useState(initialData);
  const [cursor, setCursor] = useState<Date | null>(
    (initialData?.length || 0) > 0
      ? new Date(initialData?.[initialData?.length - 1]?.createdAt)
      : null,
  );

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
    <div
      className={clsx(
        'flex-1 bg-paper mb-12 mx-6 overflow-y-scroll',
        'max-[480px]:mx-0 max-[480px]:mb-0',
        styles.scrollable,
      )}
      onScroll={handleScroll}
    >
      <DataTable
        tBodyRef={tBodyRef}
        columns={columnsDef}
        data={data}
        onClickRow={(user) => {
          const login = user.login;
          window.location.assign('http://github.com/' + login);
        }}
        classNames={{
          tHead: 'bg-basic border-b-[0.1px] px-2',
          tBodyRow: 'hover:opacity-[0.6]',
        }}
      />
    </div>
  );
}
