import {cookies, headers} from 'next/headers';

import type {Database} from '../src/types/supabase';
import type {SupabaseClient} from '@supabase/supabase-js';
import {assert} from '../src/utils/assert';
import {createServerComponentSupabaseClient} from '@supabase/auth-helpers-nextjs';

const {NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY} = process.env;

export const getSupabaseServerComponentClient = (): SupabaseClient<
  Database,
  'public',
  Database['public']
> => {
  assert(NEXT_PUBLIC_SUPABASE_URL, 'SUPABASE_URL is not defined');
  assert(NEXT_PUBLIC_SUPABASE_ANON_KEY, 'SUPABASE_API_KEY is not defined');

  return createServerComponentSupabaseClient<Database>({
    cookies,
    headers,
    supabaseKey: NEXT_PUBLIC_SUPABASE_ANON_KEY,
    supabaseUrl: NEXT_PUBLIC_SUPABASE_URL,
  });
};
