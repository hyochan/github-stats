import type {SupabaseClient} from '@supabase/supabase-js';
import {createClient} from '@supabase/supabase-js';

import type {Database} from '../src/types/supabase';
import {assert} from '../src/utils/assert';

const {NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY} = process.env;

export const getSupabaseClient = (): SupabaseClient<Database> => {
  assert(NEXT_PUBLIC_SUPABASE_URL, 'NEXT_PUBLIC_SUPABASE_URL is not defined');
  assert(NEXT_PUBLIC_SUPABASE_ANON_KEY, 'NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined');

  return createClient<Database>(
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
};
