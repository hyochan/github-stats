'use client';

// import Apple from 'public/assets/apple.svg';
// import Google from 'public/assets/google.svg';
import Button from '../(common)/Button';
import Github from 'public/assets/github.svg';
import type {ReactElement} from 'react';
import type {Translates} from '../../../src/localization';
import {getSupabaseBrowserClient} from '../../../src/utils/supabase';
import {useRouter} from 'next/navigation';

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
  const router = useRouter();

  const socialButtons: SocialButton[] = [
    {
      text: t.signInWithGithub,
      startElement: <Github className="h-6 body2" />,
      onClick: async () => {
        await supabase.auth.signInWithOAuth({
          provider: 'github',
        });

        router.refresh();
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
