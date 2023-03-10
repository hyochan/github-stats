import type {Database} from '../types/supabase';
import type {SupabaseClient} from '@supabase/supabase-js';
import {createBrowserSupabaseClient} from '@supabase/auth-helpers-nextjs';

export const getSupabaseBrowserClient = (): SupabaseClient<
  Database,
  'public',
  Database['public']
> =>
  createBrowserSupabaseClient({
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  });
