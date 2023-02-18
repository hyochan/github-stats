import type {NextApiRequest, NextApiResponse} from 'next';
import {createSupabaseClient} from '../../../server/utils';

type Tier = {
  tier: string;
  score: number;
};

type Reply =
  | {message: string}
  | {name: string; description?: string | null; tiers: Tier[]};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Reply>,
): Promise<void> {
  const {body, method} = req;
  const name = <string>body.name;

  switch (method) {
    case 'POST':
      const supabase = createSupabaseClient();
      const {data} = await supabase
        .from('Plugin')
        .select('*')
        .eq('name', name)
        .single();

      if (!data || data.length === 0) {
        res.status(404).json({message: 'No plugins found.'});
      }

      const tiers = <Tier[]>data.json;

      res.status(200).json({
        name: data.name,
        description: data.description,
        tiers,
      });
      break;
    default:
      res.status(404).end();
  }
}
