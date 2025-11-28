export const revalidate = 3600;

import type {NextApiRequest, NextApiResponse} from 'next';
import {getSupabaseClient} from '@/server/supabaseClient';
import type {PluginUser} from '~/utils/functions';
import {getTierName} from '~/utils/functions';
import type {UserPluginRow} from '~/types/types';

type Reply = {message: string} | {users: PluginUser[]};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Reply>,
): Promise<void> {
  const {method} = req;

  if (method !== 'GET') {
    res.status(405).send({message: 'Method not allowed'});
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

  // Fetch top 5 users by score (highest score = highest tier)
  const {data: userPlugins}: {data: UserPluginRow[] | null} = await supabase
    .from('user_plugins')
    .select('*')
    .match({plugin_id: 'dooboo-github'})
    .order('score', {ascending: false})
    .limit(5);

  const pluginTiers = (plugin.json || []) as {tier: string; score: number}[];

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
