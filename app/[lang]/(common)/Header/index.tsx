'use client';

import {isDarkMode, toggleTheme} from '../../../../src/utils/theme';
import {useEffect, useState} from 'react';

import {H1} from '../../../../src/components/Typography';
import {Inter} from '@next/font/google';
import Link from 'next/link';
import LocaleSwitcher from './LocaleSelect';
import Logo from 'public/assets/logo.svg';
import type {ReactElement} from 'react';
import SwitchToggle from './SwitchToggle';
import clsx from 'clsx';
import {usePathname} from 'next/navigation';

const inter = Inter({subsets: ['latin']});

export type NavLink = {
  name: string;
  path: string;
};

type Props = {
  navLinks: NavLink[];
  lang: 'en' | 'ko';
  langs: {en: string; ko: string};
};

export default function Header({navLinks, lang, langs}: Props): ReactElement {
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => setIsDark(isDarkMode()), []);

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
        <LocaleSwitcher languages={langs} />
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
