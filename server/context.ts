import type {NextApiRequest, NextApiResponse} from 'next';

import type {SupabaseClient} from '@supabase/supabase-js';

type CreateContextParams = {
  req: NextApiRequest;
  res: NextApiResponse;
};

export interface Context {
  request: CreateContextParams;
  appSecret: string | undefined;
  supabase: SupabaseClient<any, 'public', any>;
  // getUID: Promise<string | null>;
  // pubsub: PubSub;
}
