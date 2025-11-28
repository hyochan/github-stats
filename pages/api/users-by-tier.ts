export const revalidate = 3600;

import type {NextApiRequest, NextApiResponse} from 'next';
import {getSupabaseClient} from '@/server/supabaseClient';
import type {PluginUser} from '~/utils/functions';
import {getTierName} from '~/utils/functions';
import type {UserPluginRow} from '~/types/types';

type Reply = {message: string} | {users: PluginUser[]};

type TierDef = {tier: string; score: number};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Reply>,
): Promise<void> {
  const {method, query} = req;

  if (method !== 'GET') {
    res.status(405).send({message: 'Method not allowed'});
    return;
  }

  const tier = query.tier as string;

  if (!tier) {
    res.status(400).send({message: 'Tier is required'});
    return;
  }

  const supabase = getSupabaseClient();

  // Get plugin info for tier calculation
  const {data: plugin} = await supabase
    .from('plugins')
    .select('*')
    .eq('id', 'dooboo-github')
    .single();

  if (!plugin) {
    res.status(404).send({message: 'Plugin not found'});
    return;
  }

  const pluginTiers = (plugin.json || []) as TierDef[];

  // Sort tiers by score ascending
  const sortedTiers = [...pluginTiers].sort((a, b) => a.score - b.score);

  // Find the tier index and calculate score range
  const tierIndex = sortedTiers.findIndex((t) => t.tier === tier);

  if (tierIndex === -1) {
    res.status(400).send({message: 'Invalid tier'});
    return;
  }

  const minScore = sortedTiers[tierIndex].score;
  const maxScore = tierIndex < sortedTiers.length - 1
    ? sortedTiers[tierIndex + 1].score - 1
    : 100;

  // Fetch users by score range
  const {data: userPlugins}: {data: UserPluginRow[] | null} = await supabase
    .from('user_plugins')
    .select('*')
    .match({plugin_id: 'dooboo-github'})
    .gte('score', minScore)
    .lte('score', maxScore)
    .order('score', {ascending: false})
    .limit(50);

  const users: PluginUser[] = (userPlugins || [])
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

  res.status(200).send({users});
}
