import {getSupabaseClient} from '../../server/supabaseClient';
import type {Model} from '../types/utils';

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
  plugin: Model['plugins']['Row'];
  take?: number;
  dateStr?: string;
}): Promise<PluginUser[]> => {
  const supabase = getSupabaseClient();

  const {data: userPlugins} = await supabase
    .from('user_plugins')
    .select('*')
    .match({plugin_id: 'dooboo-github'})
    .order('created_at', {ascending: false})
    .lt('created_at', dateStr?.toLocaleString())
    .limit(take || 20);

  const users = (userPlugins || [])
    .filter((user) => user.github_id !== null)
    .map((user) => {
      const tierName = getTierName(user.score || 0, plugin.json);

      return {
        login: user.login,
        githubId: user.github_id,
        score: user.score,
        avatarUrl: user.avatar_url,
        tierName,
        createdAt: <string>user.created_at,
      };
    });

  return users;
};
