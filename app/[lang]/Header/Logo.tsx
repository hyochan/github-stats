'use client';

import Image from 'next/image';
import type {ReactElement} from 'react';

type Props = {
  isDark: boolean;
};

export default function Logo({isDark}: Props): ReactElement {
  return (
    <Image
      src={isDark ? '/assets/logo-dark.svg' : '/assets/logo.svg'}
      width={17.5}
      height={20}
      alt="logo"
      style={{width: 'auto'}}
    />
  );
}
