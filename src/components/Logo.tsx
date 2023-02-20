'use client';

import {useEffect, useState} from 'react';

import Image from 'next/image';
import type {ReactElement} from 'react';
import {isDarkMode} from '../utils/theme';

export default function Logo(): ReactElement {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Need to check after element is mounted
    // because `isDarkMode` function need `document` object.
    setIsDark(isDarkMode());
  }, []);

  return (
    <Image
      src={isDark ? '/assets/logo-dark.svg' : '/assets/logo.svg'}
      width={17.5}
      height={20}
      alt="logo"
    />
  );
}
