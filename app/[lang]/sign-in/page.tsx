import {Inter} from '@next/font/google';
import type {Locale} from '~/i18n';
import Logo from 'public/assets/logo.svg';
import type {ReactElement} from 'react';
import SocialButtons from './SocialButtons';
import clsx from 'clsx';
import {getTranslates} from '../../../src/localization';

const inter = Inter({subsets: ['latin']});

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {signIn} = await getTranslates(lang);

  // Next.js intl interpolation is not currently supported as of 2023-03-12.
  const renderAgreements = (texts: string): (ReactElement | string)[] => {
    return texts.split(/[{}]/).map((str, i) =>
      i % 2 === 0 ? (
        str
      ) : (
        <a
          href={
            str === 'termsOfService'
              ? 'https://legacy.dooboolab.com/termsofservice'
              : str === 'privacyPolicy'
              ? 'https://legacy.dooboolab.com/privacyandpolicy'
              : ''
          }
          key={str}
          className="underline underline-offset-[1px]"
        >
          {signIn[str as keyof typeof signIn]}
        </a>
      ),
    );
  };

  return (
    <div
      className={clsx(
        'bg-modal-background',
        'flex-1 bg-paper overflow-hidden',
        'max-md:px-4',
        'flex flex-col justify-center items-center',
      )}
    >
      <div
        className={clsx(
          'bg-modal max-w-[480px] rounded-2xl px-12 py-16',
          'flex flex-col items-center justify-center',
        )}
      >
        <Logo className="h-20 mb-2 text-brand" />
        <p className={clsx('text-brand pb-28', inter.className)}>github-stats</p>
        <SocialButtons t={signIn} />
        <p
          className={clsx(
            'text-placeholder text-body4 leading-4 text-center mt-2 break-normal',
            inter.className,
          )}
        >
          {renderAgreements(signIn.byProceedingToTheNextStep)}
        </p>
      </div>
    </div>
  );
}
