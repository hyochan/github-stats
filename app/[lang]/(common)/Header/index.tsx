'use client';

import type {Dispatch, ReactElement, SetStateAction} from 'react';
import {isDarkMode, toggleTheme} from '../../../../src/utils/theme';
import {useEffect, useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';

import Button from '../Button';
import Github from 'public/assets/github.svg';
import {H1} from '../../../../src/components/Typography';
import HamburgerMenu from 'react-hamburger-menu';
import {Inter} from '@next/font/google';
import Link from 'next/link';
import Logo from 'public/assets/logo.svg';
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

function DesktopNavMenus(
  props: Props & {
    login: string;
    isDark: boolean;
    setIsDark: Dispatch<SetStateAction<boolean>>;
    navLinks: NavLink[];
  },
): ReactElement {
  const {t, lang, login, isDark, setIsDark, navLinks} = props;
  const pathname = usePathname();
  const router = useRouter();
  const supabase = getSupabaseBrowserClient();

  return (
    <div
      className={clsx('flex-1 justify-between items-center', 'max-md:hidden')}
    >
      <nav className="mr-[6px] flex flex-row max-[480px]:ml-2">
        {navLinks.map((link, index) => {
          return (
            <ul
              key={link.name}
              className={clsx(
                'hover:opacity-70 hover:translate-y-[2px]',
                index !== 0 && 'ml-3',
              )}
            >
              <Link
                href={`${lang}/${link.path}`}
                className={clsx(
                  'text-body4 truncate',
                  pathname?.includes(link.path) ? 'opacity-100' : 'opacity-30',
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
      <div className={clsx('flex flex-row items-center')}>
        {/* <LocaleSwitcher languages={langs} /> */}
        <Button
          text={!!login ? t.signOut : t.signIn}
          className="mr-2 py-2 px-3"
          classNames={{
            text: 'body3 truncate',
          }}
          onClick={() => {
            if (!!login) {
              supabase.auth.signOut();

              return;
            }

            router.push(`/sign-in`);
          }}
        />
        <div className="ml-[6px] mr-2">
          <a
            href="https://github.com/hyochan/github-stats"
            aria-label="github-stats"
          >
            <Github className="h-6 body2" />
          </a>
        </div>
        <SwitchToggle
          isDark={isDark}
          onToggle={() => {
            toggleTheme();
            setIsDark(!isDark);
          }}
        />
      </div>
    </div>
  );
}

function MobileNavMenus(
  props: Props & {
    login: string;
    isDark: boolean;
    setIsDark: Dispatch<SetStateAction<boolean>>;
    navLinks: NavLink[];
  },
): ReactElement {
  const {t, lang, login, isDark, setIsDark, navLinks} = props;
  const pathname = usePathname();
  const router = useRouter();
  const supabase = getSupabaseBrowserClient();

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <div className={clsx('md:hidden flex-1', 'flex flex-row-reverse')}>
      <div className="cursor-pointer">
        <HamburgerMenu
          isOpen={!isNavCollapsed}
          menuClicked={() => setIsNavCollapsed(!isNavCollapsed)}
          width={18}
          height={12}
          strokeWidth={2}
          rotate={0}
          borderRadius={0}
          animationDuration={0.5}
          color={isDark ? 'white' : 'black'}
        />
      </div>
      <nav
        className={clsx(
          'absolute top-14 right-0 w-full bg-basic pb-2',
          'flex flex-col',
          isNavCollapsed ? 'hidden' : 'flex',
        )}
      >
        {navLinks.map((link, index) => {
          return (
            <ul
              key={link.name}
              className={clsx(
                'pointer hover:opacity-70 hover:translate-y-[2px]',
                'flex items-center',
              )}
            >
              <Link
                href={`${lang}/${link.path}`}
                className={clsx(
                  'text-body4 truncate flex-1 h-10 px-8',
                  'flex items-center',
                  'hover:opacity-100',
                  pathname?.includes(link.path) ? 'opacity-100' : 'opacity-30',
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
        <div
          className={clsx(
            'h-10 pl-6 pr-8',
            'flex flex-column items-center justify-between',
          )}
        >
          <div className={clsx('ml-[6px] mr-4', 'flex flex-row')}>
            <a
              href="https://github.com/hyochan/github-stats"
              className="flex flex-row items-center"
            >
              <Github className="h-6 body2 mr-2" />
              <span
                className={clsx(
                  'body3 font-bold opacity-30',
                  'hover:opacity-70',
                )}
              >
                {t.github}
              </span>
            </a>
          </div>
          <SwitchToggle
            isDark={isDark}
            onToggle={() => {
              toggleTheme();
              setIsDark(!isDark);
            }}
          />
        </div>
        <Button
          text={!!login ? t.signOut : t.signIn}
          className="py-2 px-3 mx-8 my-2"
          classNames={{
            text: 'body3 truncate',
          }}
          onClick={() => {
            if (!!login) {
              supabase.auth.signOut();

              return;
            }

            router.push(`/sign-in`);
          }}
        />
      </nav>
    </div>
  );
}

export default function Header(props: Props): ReactElement {
  const {t, lang} = props;
  const supabase = getSupabaseBrowserClient();

  const [isDark, setIsDark] = useState(false);
  const {login, changeLogin} = useAuthContext();

  const navLinks: NavLink[] = !!login
    ? [
        {
          name: t.stats,
          path: `/stats/${login}`,
        },
        {
          name: t.recentList,
          path: '/recent-list',
        },
      ]
    : [
        {
          name: t.stats,
          path: `/stats/`,
        },
      ];

  useEffect(() => {
    const {
      data: {subscription},
    } = supabase.auth.onAuthStateChange((evt, session) => {
      const isLoggedIn = !!session?.access_token && evt === 'SIGNED_IN';
      changeLogin(isLoggedIn && session.user.user_metadata.user_name);
    });

    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => setIsDark(isDarkMode()), []);

  return (
    <header
      className={clsx(
        'h-[56px] decoration-0 bg-basic sticky',
        'flex flex-row items-center justify-between',
        'px-[28px]',
      )}
    >
      <div
        className={clsx(
          'flex-1 h-14',
          'flex flex-row items-center',
          'justify-between',
        )}
      >
        <div
          className={clsx(
            'decoration-0 transition duration-300',
            'hover:opacity-70 hover:translate-y-2px',
            'active:opacity-100',
            'flex flex-row items-center',
          )}
        >
          <Link href={`${lang}/`} className="flex flex-row items-center">
            <Logo className="h-5 text-brand cursor-pointer" />
            <H1
              className={clsx(
                'body3 font-bold ml-[6px] mr-[12px]',
                'max-[480px]:hidden',
                inter.className,
              )}
            >
              github-stats
            </H1>
          </Link>
        </div>
        <DesktopNavMenus
          {...props}
          navLinks={navLinks}
          login={login}
          isDark={isDark}
          setIsDark={setIsDark}
        />
        <MobileNavMenus
          {...props}
          navLinks={navLinks}
          login={login}
          isDark={isDark}
          setIsDark={setIsDark}
        />
      </div>
    </header>
  );
}
