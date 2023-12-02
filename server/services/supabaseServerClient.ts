import {SupabaseClient} from '@supabase/supabase-js';
import {Database} from '../../src/types/supabase';
import {cookies} from 'next/headers';
import {createServerClient, type CookieOptions} from '@supabase/ssr';

export const getSupabaseServerClient = (): SupabaseClient<
  Database,
  'public',
  Database['public']
> => {
  const cookieStore = cookies();

  const client = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({name, value, ...options});
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.delete({name, ...options});
        },
      },
    },
  );

  // https://stackoverflow.com/a/77152485
  Object.freeze(client);

  return client;
};
