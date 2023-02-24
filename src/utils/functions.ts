import type {Model} from '../types/supabase';
import {getSupabaseClient} from '../../server/utils';

export const getStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const setStorage = (key: string, value: string): void => {
  return localStorage.setItem(key, value);
};

export const destroyStorage = (key: string): void => {
  return localStorage.removeItem(key);
};

export const getSessionStorage = (key: string): string | null => {
  return sessionStorage.getItem(key);
};

export const setSessionStorage = (key: string, value: string): void => {
  return sessionStorage.setItem(key, value);
};

export const destroySessionStorage = (key: string): void => {
  return sessionStorage.removeItem(key);
};

export const checkImageExists = (
  url: string,
  callback: (err: Error | null, val: boolean) => void,
): void => {
  const img = new Image();

  img.onload = (): void => {
    callback(null, true);
  };

  img.onerror = (): void => {
    callback(new Error('error'), false);
  };

  img.src = url;
};

export function wrapPromise<T>(promise: Promise<T>): {
  read: () => T;
} {
  let status = 'pending';
  let response: T;

  const suspender = promise.then(
    (res: any) => {
      status = 'success';
      response = res;
    },
    (err: T) => {
      status = 'error';
      response = err;
    },
  );

  const read = (): T => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };

  return {read};
}

export const isEmptyObject = (param: any): boolean =>
  Object.keys(param).length === 0 && param.constructor === Object;

type ScoreType = {
  tierName:
    | 'Iron'
    | 'Bronze'
    | 'Silver'
    | 'Gold'
    | 'Platinum'
    | 'Master'
    | 'Diamond'
    | 'Challenger';
  score: number;
};

export const getTierName = (
  score: number,
  pluginJSON: any,
): ScoreType['tierName'] => {
  if (pluginJSON) {
    type TierType = {
      tier: string;
      score: number;
    };

    const tierJSONArray: TierType[] = JSON.parse(JSON.stringify(pluginJSON));

    const tiers = tierJSONArray.filter((el) => el.score <= score);

    return !tiers.length
      ? 'Iron'
      : (tiers[tiers.length - 1].tier as ScoreType['tierName']);
  }

  return 'Iron';
};

export type PluginUser = {
  login: string;
  githubId: string;
  score: number;
  avatarUrl: string | null;
  tierName:
    | 'Iron'
    | 'Bronze'
    | 'Silver'
    | 'Gold'
    | 'Platinum'
    | 'Master'
    | 'Diamond'
    | 'Challenger';
  createdAt: string;
};

export const getUserPlugins = async ({
  plugin,
  take = 20,
  dateStr = new Date().toISOString(),
}: {
  plugin: Model['Plugin']['Row'];
  take?: number;
  dateStr?: string;
}): Promise<PluginUser[]> => {
  const supabase = getSupabaseClient();

  const {data: userPlugins} = await supabase
    .from('UserPlugin')
    .select('*')
    .match({pluginId: 'dooboo-github'})
    .order('createdAt', {ascending: false})
    .lt('createdAt', dateStr)
    .limit(take || 20);

  const users = (userPlugins || [])
    .filter((user) => user.githubId !== null)
    .map((user) => {
      const tierName = getTierName(user.score || 0, plugin.json);

      return {
        login: user.login,
        githubId: user.githubId,
        score: user.score,
        avatarUrl: user.avatarUrl,
        tierName,
        createdAt: <string>user.createdAt,
      };
    });

  return users;
};
