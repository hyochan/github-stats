import {createServerClient} from '@supabase/ssr';
import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';

import type {Database} from '~/types/supabase';
import {i18n} from '~/i18n';

export const dynamic = 'force-dynamic';

export async function GET(request: Request): Promise<NextResponse> {
  const {searchParams, origin} = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next');
  const langParam = searchParams.get('lang');

  if (code) {
    const cookieStore = await cookies();
    const supabase = createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({name, value, options}) => {
              cookieStore.set(name, value, options);
            });
          },
        },
      },
    );

    const {error} = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error('OAuth code exchange failed:', error);
      return NextResponse.redirect(`${origin}/${i18n.defaultLocale}/sign-in?error=auth_failed`);
    }
  }

  const redirectPath =
    next && next.startsWith('/')
      ? next
      : `/${langParam || i18n.defaultLocale}`;

  return NextResponse.redirect(`${origin}${redirectPath}`);
}
