import type {Database} from '../src/types/supabase';
import type {SupabaseClient} from '@supabase/supabase-js';
import {assert} from '../src/utils/assert';
import {createClient} from '@supabase/supabase-js';

const {NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY} = process.env;

export const getSupabaseClient = (): SupabaseClient<
  Database,
  'public',
  Database['public']
> => {
  assert(NEXT_PUBLIC_SUPABASE_URL, 'SUPABASE_URL is not defined');
  assert(NEXT_PUBLIC_SUPABASE_ANON_KEY, 'SUPABASE_API_KEY is not defined');

  return createClient<Database>(
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
};
