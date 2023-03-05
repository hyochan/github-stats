'use client';

import {i18n} from '../i18n';

export type UserListItem = {
  login: string;
  githubId: string;
  score: number;
  avatarUrl: string;
  tierName: string;
  createdAt: string;
};

export type RecentListResponse = {
  users: UserListItem[];
};

const requestedRecentUsersDate: Date[] = [];

export const fetchRecentList = async ({
  pluginId,
  take,
  cursor,
}: {
  pluginId: 'dooboo-github';
  take?: number;
  cursor?: Date;
}): Promise<RecentListResponse> => {
  if (cursor) {
    if (isNaN(cursor.valueOf()) || requestedRecentUsersDate.includes(cursor)) {
      return {users: []};
    }

    requestedRecentUsersDate.push(cursor);
  }

  const fetchOption: RequestInit = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'accept-language': i18n.defaultLocale,
    },
    body: JSON.stringify({
      pluginId,
      take,
      cursor,
    }),
  };

  const response = await (await fetch(`/api/recent-list`, fetchOption)).json();

  return response;
};
