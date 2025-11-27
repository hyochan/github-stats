import {createServerClient} from '@supabase/ssr';
import type {SupabaseClient} from '@supabase/supabase-js';
import {cookies} from 'next/headers';

import type {Database} from '../src/types/supabase';
import {assert} from '../src/utils/assert';

const {NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY} = process.env;

export const getSupabaseServerComponentClient = async (): Promise<SupabaseClient<Database>> => {
  assert(NEXT_PUBLIC_SUPABASE_URL, 'NEXT_PUBLIC_SUPABASE_URL is not defined');
  assert(NEXT_PUBLIC_SUPABASE_ANON_KEY, 'NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined');

  const cookieStore = await cookies();

  return createServerClient<Database>(
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({name, value, options}) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    }
  );
};
