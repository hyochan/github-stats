import {match as matchLocale} from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {upsertUser} from './services/userService';

import {i18n} from '~/i18n';
import {getSupabaseBrowserClient} from './utils/supabaseBrowserClient';
import {getSupabaseServerClient} from '../server/services/supabaseServerClient';

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

export async function middleware(
  req: NextRequest,
): Promise<NextResponse | undefined> {
  let pathname = req.nextUrl.pathname;
  const res = NextResponse.next();
  const supabase = getSupabaseServerClient();
  const {data, error} = await supabase.auth.getSession();

  if (!error) {
    if (data.session?.user) {
      upsertUser({supabase, user: data.session?.user});
    }
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every((locale) => {
    return !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`;
  });

  // Redirect if there is no locale
  if (
    !(pathname.startsWith('/adfit') || pathname.startsWith('/auth')) &&
    pathnameIsMissingLocale
  ) {
    const locale = getLocale(req);
    const origin = new URL(req.url).origin;

    return NextResponse.redirect(`${origin}/${locale}/${pathname}`);
  }

  return res;
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/` and `/assets/`
  matcher: ['/((?!api|assets|_next/static|_next/image|favicon.ico|public).*)'],
};
