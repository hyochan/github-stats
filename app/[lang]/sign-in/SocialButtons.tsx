'use client';

// import Apple from 'public/assets/apple.svg';
// import Google from 'public/assets/google.svg';
import type {ReactElement} from 'react';
import {useMemo} from 'react';
import Github from 'public/assets/github.svg';
import {usePathname} from 'next/navigation';

import type {Translates} from '../../../src/localization';
import {getSupabaseBrowserClient} from '../../../src/utils/supabase';
import Button from '../(common)/Button';

export default function SocialButtons({
  t,
}: {
  t: Translates['signIn'];
}): ReactElement {
  type SocialButton = {
    text: string;
    startElement: ReactElement;
    onClick?: () => void;
  };

  const supabase = getSupabaseBrowserClient();
  const pathname = usePathname();
  const oauthRedirectUrl = useMemo(() => {
    if (!process.env.NEXT_PUBLIC_ROOT_URL) {
      return undefined;
    }

    const normalizedRoot = process.env.NEXT_PUBLIC_ROOT_URL.replace(/\/$/, '');

    // If we're on the sign-in page, redirect to home after successful login
    const nextPath = pathname?.includes('/sign-in')
      ? pathname.replace(/\/sign-in.*$/, '') || '/'
      : pathname || '/';

    return `${normalizedRoot}/auth/callback?next=${encodeURIComponent(nextPath)}`;
  }, [pathname]);

  const socialButtons: SocialButton[] = [
    {
      text: t.signInWithGithub,
      startElement: <Github className="h-6 body2" />,
      onClick: async () => {
        await supabase.auth.signInWithOAuth({
          provider: 'github',
          options: {
            redirectTo: oauthRedirectUrl,
          },
        });
      },
    },
    // {
    //   text: t.signInWithGoogle,
    //   startElement: <Google className="h-6" />,
    //   onClick: () => {},
    // },
    // {
    //   text: t.signInWithApple,
    //   startElement: <Apple className="h-6 body2" />,
    //   onClick: () => {},
    // },
  ];

  return (
    <>
      {socialButtons.map(({text, startElement, onClick}) => {
        return (
          <Button
            key={text}
            className="self-stretch mb-4"
            text={text}
            startElement={startElement}
            onClick={onClick}
          />
        );
      })}
    </>
  );
}
