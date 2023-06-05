import {createServerActionClient} from '@supabase/auth-helpers-nextjs';
import type {SupabaseClient} from '@supabase/supabase-js';
import {cookies} from 'next/headers';

import type {Database} from '../src/types/supabase';
import {assert} from '../src/utils/assert';

const {NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY} = process.env;

export const getSupabaseServerComponentClient = (): SupabaseClient<
  Database,
  'public',
  Database['public']
> => {
  assert(NEXT_PUBLIC_SUPABASE_URL, 'SUPABASE_URL is not defined');
  assert(NEXT_PUBLIC_SUPABASE_ANON_KEY, 'SUPABASE_API_KEY is not defined');

  return createServerActionClient<Database>(
    {cookies},
    {
      supabaseKey: NEXT_PUBLIC_SUPABASE_ANON_KEY,
      supabaseUrl: NEXT_PUBLIC_SUPABASE_URL,
    },
  );
};
