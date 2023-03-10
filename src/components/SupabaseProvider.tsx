'use client';

import type {ReactElement, ReactNode} from 'react';
import {createContext, useContext, useState} from 'react';

import type {Database} from '../types/supabase';
import type {SupabaseClient} from '@supabase/auth-helpers-nextjs';
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

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
};

const Context = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [supabase] = useState(() => getSupabaseBrowserClient());

  return <Context.Provider value={{supabase}}>{children}</Context.Provider>;
}

export const useSupabase = (): SupabaseContext => {
  let context = useContext(Context);

  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider');
  } else {
    return context;
  }
};
