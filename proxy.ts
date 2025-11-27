import {match as matchLocale} from '@formatjs/intl-localematcher';
import {createServerClient} from '@supabase/ssr';
import Negotiator from 'negotiator';
import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {upsertUser} from './src/services/userService';
import type {Database} from './src/types/supabase';
import {assert} from './src/utils/assert';
import {i18n} from '~/i18n';

const {NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY} = process.env;

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({headers: negotiatorHeaders}).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  return matchLocale(languages, locales, i18n.defaultLocale, {
    algorithm: 'best fit',
  });
}

export async function proxy(
  req: NextRequest,
): Promise<NextResponse | undefined> {
  assert(NEXT_PUBLIC_SUPABASE_URL, 'NEXT_PUBLIC_SUPABASE_URL is not defined');
  assert(NEXT_PUBLIC_SUPABASE_ANON_KEY, 'NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined');

  let pathname = req.nextUrl.pathname;

  const res = NextResponse.next();

  const supabase = createServerClient<Database>(
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({name, value, options}) => {
            req.cookies.set(name, value);
            res.cookies.set(name, value, options);
          });
        },
      },
    },
  );
  const {
    data: {user},
  } = await supabase.auth.getUser();

  if (user) {
    upsertUser({supabase, user});
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every((locale) => {
    return !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`;
  });

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(req);
    const origin = new URL(req.url).origin;

    return NextResponse.redirect(`${origin}/${locale}/${pathname}`);
  }

  return res;
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, `/auth/` and `/assets/`
  matcher: ['/((?!api|auth|assets|_next/static|_next/image|favicon.ico|public).*)'],
};
