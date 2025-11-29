'use client';

import type {Dispatch, ReactElement, SetStateAction} from 'react';
import {useEffect, useMemo, useState} from 'react';
import type {Session} from '@supabase/supabase-js';
import HamburgerMenu from 'react-hamburger-menu';
import clsx from 'clsx';
import {Inter} from 'next/font/google';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import Github from 'public/assets/github.svg';
import Logo from 'public/assets/logo.svg';

import {useAuthContext} from '../../../../src/components/AuthProvider';
import {H1} from '../../../../src/components/Typography';
import type {Translates} from '../../../../src/localization';
import {getSupabaseBrowserClient} from '../../../../src/utils/supabase';
import {isDarkMode, toggleTheme} from '../../../../src/utils/theme';
import Button from '../Button';

import SwitchToggle from './SwitchToggle';

const inter = Inter({subsets: ['latin']});
const normalizePath = (path: string): string => path.replace(/\/+$/, '');
const isActivePath = (
  pathname: string | null,
  lang: string,
  path: string,
): boolean => {
  const target = normalizePath(`/${lang}${path}`);
  const current = normalizePath(pathname ?? '');
  return current === target || current.startsWith(`${target}/`);
};

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
                href={`${link.path}`}
                className={clsx(
                  'text-body4 truncate',
                  isActivePath(pathname, lang, link.path)
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
      <div className={clsx('flex flex-row items-center')}>
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
          'max-h-[calc(100vh-56px)] overflow-y-auto',
          'flex flex-col',
          'z-50',
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
                href={`${link.path}`}
                onClick={() => setIsNavCollapsed(true)}
                className={clsx(
                  'text-body4 truncate flex-1 h-10 px-8',
                  'flex items-center',
                  'hover:opacity-100',
                  isActivePath(pathname, lang, link.path)
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
        <div
          className={clsx(
            'h-10 pl-6 pr-8',
            'flex flex-column items-center justify-between',
          )}
        >
          <div className={clsx('ml-[6px] mr-4', 'flex flex-row')}>
            <a
              href="https://github.com/hyochan/github-stats"
              onClick={() => setIsNavCollapsed(true)}
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
            setIsNavCollapsed(true);
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
  const supabase = useMemo(() => getSupabaseBrowserClient(), []);

  const [isDark, setIsDark] = useState(true);
  const {login, changeLogin} = useAuthContext();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const dark = isDarkMode();
      if (!dark) {
        setIsDark(false);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const navLinks: NavLink[] = !!login
    ? [
        {
          name: t.stats,
          path: `/stats/${login}`,
        },
        {
          name: t.leaderboards,
          path: '/leaderboards',
        },
      ]
    : [
        {
          name: t.stats,
          path: `/stats`,
        },
        {
          name: t.leaderboards,
          path: '/leaderboards',
        },
      ];

  useEffect(() => {
    const applySession = (session: Session | null): void => {
      const username = session?.user.user_metadata?.user_name || '';

      changeLogin(username);
    };

    const syncSession = async (): Promise<void> => {
      const {
        data: {session},
      } = await supabase.auth.getSession();

      applySession(session);
    };

    void syncSession();

    const {
      data: {subscription},
    } = supabase.auth.onAuthStateChange((evt, session) => {
      if (evt === 'SIGNED_OUT') {
        changeLogin('');

        return;
      }

      if (
        evt === 'INITIAL_SESSION' ||
        evt === 'SIGNED_IN' ||
        evt === 'TOKEN_REFRESHED'
      ) {
        applySession(session);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [changeLogin, supabase]);

  return (
    <header
      className={clsx(
        'h-[56px] decoration-0 bg-basic',
        'sticky top-0 z-50',
        'flex flex-row items-center justify-between',
        'px-[28px]',
        'w-full min-w-0',
      )}
    >
      <div
        className={clsx(
          'flex-1 h-14',
          'flex flex-row items-center',
          'justify-between',
          'min-w-0',
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
          <Link href={`/`} className="flex flex-row items-center">
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
