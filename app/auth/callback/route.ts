import {createRouteHandlerClient} from '@supabase/auth-helpers-nextjs';
import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';

import type {Database} from '~/types/supabase';
import {i18n} from '~/i18n';

export const dynamic = 'force-dynamic';

export async function GET(request: Request): Promise<NextResponse> {
  const {searchParams, origin} = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next');

  if (code) {
    const supabase = createRouteHandlerClient<Database>({cookies});

    await supabase.auth.exchangeCodeForSession(code);
  }

  const redirectPath =
    next && next.startsWith('/') ? next : `/${i18n.defaultLocale}`;

  return NextResponse.redirect(`${origin}${redirectPath}`);
}
