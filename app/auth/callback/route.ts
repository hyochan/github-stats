import {NextResponse} from 'next/server';
import {getSupabaseServerClient} from '../../../server/services/supabaseServerClient';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const {searchParams, origin} = new URL(request.url);
  const code = searchParams.get('code');
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const supabase = getSupabaseServerClient();
    const {error} = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_ROOT_URL}${next}`,
      );
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
