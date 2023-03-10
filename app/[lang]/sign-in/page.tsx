import Apple from 'public/assets/apple.svg';
import Button from '../(common)/Button';
import Github from 'public/assets/github.svg';
import Google from 'public/assets/google.svg';
import {Inter} from '@next/font/google';
import type {Locale} from '~/i18n';
import Logo from 'public/assets/logo.svg';
import type {ReactElement} from 'react';
import clsx from 'clsx';
import {getTranslates} from '../../../src/localization';

const inter = Inter({subsets: ['latin']});

// inter.className,

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {signIn} = await getTranslates(lang);

  return (
    <div
      className={clsx(
        'bg-modal-background',
        'w-screen h-[calc(100vh-64px)] bg-paper overflow-hidden',
        'flex flex-col justify-center items-center',
      )}
    >
      <div
        className={clsx(
          'bg-modal w-[480px] min-h-[480px] rounded-2xl px-12 py-16',
          'flex flex-col items-center justify-center',
        )}
      >
        <Logo className="h-20 mb-2" />
        <p className={clsx('text-brand pb-16', inter.className)}>dooboo.io</p>
        <Button
          className="self-stretch mb-4"
          text={signIn.signInWithGithub}
          startElement={<Github className="h-6 body2" />}
        />
        <Button
          className="self-stretch mb-4"
          text={signIn.signInWithGoogle}
          startElement={<Google className="h-6" />}
        />
        <Button
          className="self-stretch"
          text={signIn.signInWithApple}
          startElement={<Apple className="h-6 body2" />}
        />
      </div>
    </div>
  );
}
