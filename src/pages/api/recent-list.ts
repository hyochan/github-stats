import type {NextApiRequest, NextApiResponse} from 'next';
import {getSupabaseClient} from '../../../server/utils';
import type {PluginUser} from '../../utils/functions';
import {getUserPlugins} from '../../utils/functions';

type Reply = {message: string} | {users: PluginUser[]};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Reply>,
): Promise<void> {
  const {method, body} = req;

  switch (method) {
    case 'POST':
      const pluginId = <string>body.pluginId;
      const take = <number>body.take;
      const dateStr = <string>body.cursor;

      if (!pluginId) {
        res.status(404).send({message: 'pluginId is required'});

        return;
      }

      const supabase = getSupabaseClient();

      const {data: plugin} = await supabase
        .from('Plugin')
        .select('*')
        .eq('id', pluginId)
        .single();

      if (!plugin) {
        res.status(404).send({message: 'Plugin not found'});

        return;
      }

      const userPlugins = await getUserPlugins({
        plugin,
        take,
        dateStr,
      });

      res.status(200).send({users: userPlugins});

      break;
    default:
      res.status(404).end();
  }
}
