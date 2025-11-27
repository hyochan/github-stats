import type {SupabaseClient} from '@supabase/supabase-js';
import type {NextApiRequest, NextApiResponse} from 'next';

import type {Database} from '../src/types/supabase';

type CreateContextParams = {
  req: NextApiRequest;
  res: NextApiResponse;
};

export interface Context {
  request: CreateContextParams;
  appSecret: string | undefined;
  supabase: SupabaseClient<Database>;
  // getUID: Promise<string | null>;
  // pubsub: PubSub;
}
