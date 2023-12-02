import type {NextApiRequest, NextApiResponse} from 'next';
import { getSupabaseServerClient } from '../../../server/services/supabaseServerClient';

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

  switch (method) {
    case 'POST':
      const email = <string>body.email;

      if (!email) {
        res.status(500).send({message: 'Email is required'});

        return;
      }

      const supabase = getSupabaseServerClient();
      await supabase.from('news_letters').upsert({email});

      res
        .status(200)
        .send({message: 'Thank you for subscribing to our newsletter'});
      break;
    default:
      res.status(404).end();
  }
}
