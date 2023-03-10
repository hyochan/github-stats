import {Inter} from '@next/font/google';
import type {Locale} from '~/i18n';
import Logo from 'public/assets/logo.svg';
import type {ReactElement} from 'react';
import SocialButtons from './SocialButtons';
import clsx from 'clsx';
import {getSupabaseServerComponentClient} from '../../../server/supabaseServerClient';
import {getTranslates} from '../../../src/localization';

const inter = Inter({subsets: ['latin']});

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const supabase = getSupabaseServerComponentClient();
  const {signIn} = await getTranslates(lang);

  const {
    data: {session},
  } = await supabase.auth.getSession();

  if (session) {
    // TODO: Redirect to home page.
    // eslint-disable-next-line no-console
    console.log('user is signed in', session.user.id);
  }

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
        <SocialButtons t={signIn} />
      </div>
    </div>
  );
}
