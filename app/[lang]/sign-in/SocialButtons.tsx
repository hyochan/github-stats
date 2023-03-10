'use client';

import Apple from 'public/assets/apple.svg';
import Button from '../(common)/Button';
import Github from 'public/assets/github.svg';
import Google from 'public/assets/google.svg';
import type {ReactElement} from 'react';
import type {Translates} from '../../../src/localization';

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

  const socialButtons: SocialButton[] = [
    {
      text: t.signInWithGithub,
      startElement: <Github className="h-6 body2" />,
      onClick: () => {},
    },
    {
      text: t.signInWithGoogle,
      startElement: <Google className="h-6" />,
      onClick: () => {},
    },
    {
      text: t.signInWithApple,
      startElement: <Apple className="h-6 body2" />,
      onClick: () => {},
    },
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
