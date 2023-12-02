import type {SupabaseClient} from '@supabase/supabase-js';
import type {Database} from '../types/supabase';
import {createBrowserClient} from '@supabase/ssr';

export const getSupabaseBrowserClient = (): SupabaseClient<
  Database,
  'public',
  Database['public']
> => {
  const client = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  // https://stackoverflow.com/a/77152485
  Object.freeze(client);

  return client;
};
