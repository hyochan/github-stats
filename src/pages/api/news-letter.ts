import type {NextApiRequest, NextApiResponse} from 'next';
import {createSupabaseClient} from '../../../server/utils';

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

      const supabase = createSupabaseClient();
      await supabase.from('NewsLetter').upsert({email});

      res
        .status(200)
        .send({message: 'Thank you for subscribing to our newsletter'});
      break;
    default:
      res.status(404).end();
  }
}
