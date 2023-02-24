'use client';

import {H4, H5} from '~/components/Typography';
import type {ReactElement, UIEventHandler} from 'react';
import {useMemo, useRef, useState} from 'react';

import type {ColumnDef} from '../(common)/DataTable';
import {DataTable} from '../(common)/DataTable';
import Image from 'next/image';
import type {Tier} from './TierRowItem';
import TierRowItem from './TierRowItem';
import type {Translates} from '../../../src/localization';
import type {UserListItem} from '../../../src/fetches/recentList';
import {fetchRecentList} from '../../../src/fetches/recentList';

type Props = {
  t: Translates['recentList'];
  initialData: UserListItem[];
};

export default function TableView({t, initialData}: Props): ReactElement {
  const divRef = useRef<HTMLDivElement>(null);
  const tBodyRef = useRef<HTMLTableSectionElement>(null);
  const [data, setData] = useState(initialData);
  const [cursor, setCursor] = useState<Date | null>(null);

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
    const hasReachedEnd =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      e.currentTarget.clientHeight;

    if (hasReachedEnd) {
      const {users} = await fetchRecentList({
        name: 'dooboo-github',
        take: 20,
        cursor: cursor ?? new Date(),
      });

      setData((prev) => [...prev, ...users]);
      setCursor(new Date(users?.[users.length - 1].createdAt));
    }
  };

  return (
    <div ref={divRef} className="flex-1 bg-paper">
      <DataTable
        tBodyRef={tBodyRef}
        columns={columnsDef}
        data={data}
        onClickRow={(user) => {
          const login = user.login;
          window.location.assign('http://github.com/' + login);
        }}
        onScroll={handleScroll}
        classNames={{
          tHead: 'bg-basic border-b-[0.1px] px-2',
          tBody: 'overflow-y-scroll',
          tBodyRow: 'hover:opacity-[0.6]',
        }}
      />
    </div>
  );
}
