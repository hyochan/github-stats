'use client';

import {isDarkMode, toggleTheme} from '../../../../src/utils/theme';
import {useEffect, useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';

import Button from '../Button';
import {H1} from '../../../../src/components/Typography';
import {Inter} from '@next/font/google';
import Link from 'next/link';
import Logo from 'public/assets/logo.svg';
import type {ReactElement} from 'react';
import SwitchToggle from './SwitchToggle';
import type {Translates} from '../../../../src/localization';
import clsx from 'clsx';
import {getSupabaseBrowserClient} from '../../../../src/utils/supabase';
import {useAuthContext} from '../../../../src/components/AuthProvider';

const inter = Inter({subsets: ['latin']});

export type NavLink = {
  name: string;
  path: string;
};

type Props = {
  t: Translates['nav'];
  lang: 'en' | 'ko';
  langs: {en: string; ko: string};
};

export default function Header({t, lang}: Props): ReactElement {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = getSupabaseBrowserClient();

  const [isDark, setIsDark] = useState(false);
  const {signedIn, changeSignedIn} = useAuthContext();

  useEffect(() => {
    const {
      data: {subscription},
    } = supabase.auth.onAuthStateChange((evt, session) => {
      const isLoggedIn = !!session?.access_token && evt === 'SIGNED_IN';
      changeSignedIn(isLoggedIn);
    });

    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => setIsDark(isDarkMode()), []);

  const navLinks: NavLink[] = [
    {
      name: t.recentList,
      path: '/recent-list',
    },
    // TODO: Remove this comment when the feature is ready.
    // {
    //   name: nav.certifiedUsers,
    //   path: '/certifiedUsers',
    // },
  ];

  return (
    <header
      className={clsx(
        'h-16 decoration-0 bg-basic',
        'flex flex-row items-center justify-between',
        'px-[28px]',
      )}
    >
      <div className="flex-1 flex flex-row items-center">
        <div
          className={clsx(
            'decoration-0 transition duration-300',
            'hover:opacity-70 hover:translate-y-2px',
            'active:opacity-100',
            'flex flex-row items-center',
          )}
        >
          <Logo className="h-5" />
          <Link href={`${lang}/`}>
            <H1
              className={clsx(
                'body3 font-bold ml-[6px] mr-[12px]',
                inter.className,
              )}
            >
              dooboo.io
            </H1>
          </Link>
        </div>
        <nav className="mr-[6px]">
          {navLinks.map((link, index) => {
            return (
              <ul
                key={link.name}
                className={clsx('hover:opacity-70 hover:translate-y-[2px]')}
              >
                <Link
                  href={`${lang}/${link.path}`}
                  className={clsx(
                    'text-body4 truncate',
                    pathname?.includes(link.path)
                      ? 'opacity-100'
                      : 'opacity-30',
                  )}
                >
                  <li
                    key={index}
                    className={clsx('text-ellipsis', 'body3 font-bold')}
                  >
                    {link.name}
                  </li>
                </Link>
              </ul>
            );
          })}
        </nav>
      </div>
      <div className="flex flex-row items-center">
        {/* <LocaleSwitcher languages={langs} /> */}
        <Button
          text={signedIn ? t.signOut : t.signIn}
          className="mr-2 py-2 px-3"
          classNames={{
            text: 'body3',
          }}
          onClick={() => {
            if (signedIn) {
              supabase.auth.signOut();

              return;
            }

            router.push(`/sign-in`);
          }}
        />
        <div className="w-[8px]" />
        <SwitchToggle
          isDark={isDark}
          onToggle={() => {
            toggleTheme();
            setIsDark(!isDark);
          }}
        />
      </div>
    </header>
  );
}
