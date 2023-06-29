import {createPagesBrowserClient} from '@supabase/auth-helpers-nextjs';
import type {SupabaseClient} from '@supabase/supabase-js';

import type {Database} from '../types/supabase';

export const getSupabaseBrowserClient = (): SupabaseClient<
  Database,
  'public',
  Database['public']
> =>
  createPagesBrowserClient({
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  });
