import type {ReactElement} from 'react';
import Link from 'next/link';
import {Inter} from 'next/font/google';
import clsx from 'clsx';
import Logo from 'public/assets/logo.svg';

import {getTranslates} from '../../src/localization';

import type {Locale} from '~/i18n';

const inter = Inter({subsets: ['latin']});

type Props = {
  params: Promise<{lang: string}>;
};

export default async function NotFound(props: Props): Promise<ReactElement> {
  const params = await props.params;
  const lang = (params?.lang || 'en') as Locale;
  const {error} = await getTranslates(lang);

  return (
    <div
      className={clsx(
        'flex-1 w-full overflow-hidden',
        'flex flex-col justify-center items-center',
        'px-4',
      )}
    >
      <div
        className={clsx(
          'bg-modal max-w-[480px] w-full rounded-2xl px-12 py-16',
          'flex flex-col items-center justify-center',
        )}
      >
        <Logo className="w-20 h-20 mb-2 text-brand" />
        <p className={clsx('text-brand pb-8', inter.className)}>github-stats</p>

        <h1
          className={clsx(
            'text-9xl font-bold text-contrast mb-4',
            inter.className,
          )}
        >
          404
        </h1>
        <h2
          className={clsx(
            'text-3xl font-semibold text-contrast mb-4',
            inter.className,
          )}
        >
          {error.notFound}
        </h2>
        <p
          className={clsx(
            'text-placeholder text-center mb-8 max-w-md',
            inter.className,
          )}
        >
          {error.notFoundDesc}
        </p>

        <Link
          href={`/${lang}`}
          className={clsx(
            'inline-block px-8 py-3 rounded-lg',
            'bg-btn-primary hover:opacity-80',
            'text-btn-primary-text font-medium',
            'transition-all duration-200',
            inter.className,
          )}
        >
          {error.goHome}
        </Link>
      </div>
    </div>
  );
}
