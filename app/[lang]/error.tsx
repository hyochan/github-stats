'use client';

import {useEffect} from 'react';
import {useParams} from 'next/navigation';
import {Inter} from 'next/font/google';
import clsx from 'clsx';
import Logo from 'public/assets/logo.svg';

const inter = Inter({subsets: ['latin']});

// Client-side translations fallback
const translations = {
  en: {
    serverError: 'Something Went Wrong',
    serverErrorDesc: 'An unexpected error occurred. Please try again later.',
    goHome: 'Go Home',
    tryAgain: 'Try Again',
  },
  ko: {
    serverError: '오류가 발생했습니다',
    serverErrorDesc: '예기치 않은 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
    goHome: '홈으로',
    tryAgain: '다시 시도',
  },
};

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  const params = useParams();
  const lang = (params?.lang as 'en' | 'ko') || 'en';
  const t = translations[lang];

  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

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
          500
        </h1>
        <h2
          className={clsx(
            'text-3xl font-semibold text-contrast mb-4',
            inter.className,
          )}
        >
          {t.serverError}
        </h2>
        <p
          className={clsx(
            'text-placeholder text-center mb-8 max-w-md',
            inter.className,
          )}
        >
          {t.serverErrorDesc}
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
            {t.tryAgain}
          </button>
          <a
            href={`/${lang}`}
            className={clsx(
              'inline-block px-8 py-3 rounded-lg',
              'bg-btn-primary hover:opacity-80',
              'text-btn-primary-text font-medium',
              'transition-all duration-200',
              inter.className,
            )}
          >
            {t.goHome}
          </a>
        </div>
      </div>
    </div>
  );
}
