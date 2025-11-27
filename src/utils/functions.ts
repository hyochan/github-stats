import {getSupabaseClient} from '../../server/supabaseClient';
import type {Model, PluginRow, UserPluginRow} from '../types/types';
import type {Database} from '../types/supabase';

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
  plugin: PluginRow;
  take?: number;
  dateStr?: string;
}): Promise<PluginUser[]> => {
  const supabase = getSupabaseClient();

  const {data: userPlugins}: {data: UserPluginRow[] | null} = await supabase
    .from('user_plugins')
    .select('*')
    .match({plugin_id: 'dooboo-github'})
    .order('created_at', {ascending: false})
    .lt('created_at', dateStr?.toLocaleString())
    .limit(take || 20);

  const pluginTiers = (plugin.json || []) as {tier: string; score: number}[];

  const users = (userPlugins || [])
    .filter((user) => user.github_id !== null)
    .map((user) => {
      const tierName = getTierName(user.score || 0, pluginTiers);

      return {
        login: user.login,
        githubId: user.github_id,
        score: user.score,
        avatarUrl: user.avatar_url,
        tierName,
        createdAt: user.created_at || '',
      };
    });

  return users;
};

export const getTierSvg = (tier: ScoreType['tierName']): string => {
  return tier === 'Challenger'
    ? '/assets/tier_challenger.svg'
    : tier === 'Master'
    ? '/assets/tier_master.svg'
    : tier === 'Diamond'
    ? '/assets/tier_diamond.svg'
    : tier === 'Platinum'
    ? '/assets/tier_platinum.svg'
    : tier === 'Gold'
    ? '/assets/tier_gold.svg'
    : tier === 'Silver'
    ? '/assets/tier_silver.svg'
    : tier === 'Bronze'
    ? '/assets/tier_bronze.svg'
    : '/assets/tier_iron.svg';
};
