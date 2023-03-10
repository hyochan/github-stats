'use client';

import type {ReactElement, ReactNode} from 'react';

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {useSupabase} from './SupabaseProvider';

export default function SupabaseListener({
  serverAccessToken,
  children,
}: {
  serverAccessToken?: string;
  children: ReactNode;
}): ReactElement {
  const {supabase} = useSupabase();
  const router = useRouter();

  useEffect(() => {
    const {
      data: {subscription},
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverAccessToken) {
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [serverAccessToken, router, supabase]);

  return <>{children}</>;
}
