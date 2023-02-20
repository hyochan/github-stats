import {H1} from '../../../src/components/Typography';
import {Inter} from '@next/font/google';
import Link from 'next/link';
import LocaleSwitcher from '../../../src/components/LocaleSwitcher';
import Logo from '../../../src/components/Logo';
import type {ReactElement} from 'react';
import clsx from 'clsx';

const inter = Inter({subsets: ['latin']});

export type NavLink = {
  name: string;
  path: string;
};

type Props = {
  navLinks: NavLink[];
};

export default function Header({navLinks}: Props): ReactElement {
  return (
    <header
      className="
      h-16 decoration-0 bg-basic
      flex flex-row items-center justify-between
      px-[40px]"
    >
      <div className="flex flex-row items-center">
        <div
          className="
          decoration-0
          flex flex-row items-center
          transition duration-300
          hover:opacity-70 hover:translate-y-2px
          active:opacity-100
        "
        >
          <Logo />
          <H1 className={clsx('body3 font-bold ml-[8px]', inter.className)}>
            dooboo.io
          </H1>
        </div>
        <nav className="ml-[24px]">
          {navLinks.map((link, index) => {
            return (
              <ul
                key={link.name}
                className="hover:opacity-70 hover:translate-y-[2px] body3 font-bold"
              >
                <Link href={link.path} className="text-white opacity-30">
                  <li key={index}>{link.name}</li>
                </Link>
              </ul>
            );
          })}
        </nav>
      </div>
      <LocaleSwitcher />
    </header>
  );
}
