import type {NextApiRequest, NextApiResponse} from 'next';
import {getSupabaseClient} from '../../../server/utils';

type Tier = {
  tier: string;
  score: number;
};

type Reply =
  | {message: string}
  | {id: string; description?: string | null; tiers: Tier[]};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Reply>,
): Promise<void> {
  const {body, method} = req;
  const id = <string>body.id;

  switch (method) {
    case 'POST':
      const supabase = getSupabaseClient();
      const {data} = await supabase
        .from('plugins')
        .select('*')
        .eq('id', id)
        .single();

      if (!data) {
        res.status(404).json({message: 'No plugins found.'});

        return;
      }

      const tiers = <Tier[]>data.json;

      res.status(200).json({
        id: data.id,
        description: data.description,
        tiers,
      });
      break;
    default:
      res.status(404).end();
  }
}
