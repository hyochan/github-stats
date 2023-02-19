import type {NextApiRequest, NextApiResponse} from 'next';

import type {Database} from '../src/types/supabase';
import type {SupabaseClient} from '@supabase/supabase-js';

type CreateContextParams = {
  req: NextApiRequest;
  res: NextApiResponse;
};

export interface Context {
  request: CreateContextParams;
  appSecret: string | undefined;
  supabase: SupabaseClient<Database, 'public', Database['public']>;
  // getUID: Promise<string | null>;
  // pubsub: PubSub;
}
