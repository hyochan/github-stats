'use client';

import {useEffect} from 'react';
import {Inter} from 'next/font/google';
import clsx from 'clsx';
import Link from 'next/link';
import Logo from 'public/assets/logo.svg';

const inter = Inter({subsets: ['latin']});

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className={clsx('h-full w-full', 'flex flex-col justify-center items-center', 'px-4')}>
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
          500
        </h1>
        <h2
          className={clsx(
            'text-3xl font-semibold text-contrast mb-4',
            inter.className,
          )}
        >
          Something Went Wrong
        </h2>
        <p
          className={clsx(
            'text-placeholder text-center mb-8 max-w-md',
            inter.className,
          )}
        >
          An unexpected error occurred. Please try again later.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className={clsx(
              'px-8 py-3 rounded-lg',
              'bg-border hover:opacity-80',
              'text-contrast font-medium',
              'transition-all duration-200',
              inter.className,
            )}
          >
            Try Again
          </button>
          <Link
            href="/en"
            className={clsx(
              'inline-block px-8 py-3 rounded-lg',
              'bg-btn-primary hover:opacity-80',
              'text-btn-primary-text font-medium',
              'transition-all duration-200',
              inter.className,
            )}
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
