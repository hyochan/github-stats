import {createServerClient} from '@supabase/auth-helpers-nextjs';
import type {SupabaseClient} from '@supabase/supabase-js';
import {cookies} from 'next/headers';

import type {Database} from '../src/types/supabase';
import {assert} from '../src/utils/assert';

const {NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY} = process.env;

export const getSupabaseServerComponentClient = async (): Promise<SupabaseClient<Database>> => {
  assert(NEXT_PUBLIC_SUPABASE_URL, 'SUPABASE_URL is not defined');
  assert(NEXT_PUBLIC_SUPABASE_ANON_KEY, 'SUPABASE_API_KEY is not defined');

  const cookieStore = await cookies();

  return createServerClient<Database>(
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
};
