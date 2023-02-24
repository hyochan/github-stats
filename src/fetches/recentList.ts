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

export const fetchRecentList = async ({
  name,
  take,
  cursor,
}: {
  name: 'dooboo-github';
  take?: number;
  cursor?: Date;
}): Promise<RecentListResponse> => {
  const fetchOption: RequestInit = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'accept-language': i18n.defaultLocale,
    },
    body: JSON.stringify({
      name,
      take,
      cursor,
    }),
  };

  const response = await (await fetch(`/api/recent-list`, fetchOption)).json();

  return response;
};
