import {createBrowserClient} from '@supabase/ssr';
import type {SupabaseClient} from '@supabase/supabase-js';

import type {Database} from '../types/supabase';
import {assert} from './assert';

export const getSupabaseBrowserClient = (): SupabaseClient<Database> => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  assert(supabaseUrl, 'NEXT_PUBLIC_SUPABASE_URL is not defined');
  assert(supabaseAnonKey, 'NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined');

  return createBrowserClient<Database>(
    supabaseUrl,
    supabaseAnonKey,
  );
};
