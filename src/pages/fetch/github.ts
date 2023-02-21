'use client';

export const fetchGithubStats = async (login: string): Promise<string> => {
  const fetchOption: RequestInit = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'image/svg+xml',
    },
  };

  try {
    const res: Response = await fetch(
      `/api/github-stats-advanced?login=${login}`,
      fetchOption,
    );

    if (res.status === 200) {
      return res.text();
    }

    throw new Error(
      JSON.stringify({
        status: res.status,
        statusText: res.statusText,
      }),
    );
  } catch (err: any) {
    throw new Error(err);
  }
};

/**
 *
 * Below fetch APIs happens in render time which interacts with suspense.
 * APIs that interacts with react suspense are returned with `wrapPromise` function.
 */

type ResultAttr = {
  id: string;
  name: string;
  description: string;
};

export type StatsInfo = {
  earth: ResultAttr;
  fire: ResultAttr;
  gold: ResultAttr;
  person: ResultAttr;
  tree: ResultAttr;
  water: ResultAttr;
};
