import type {ReactElement} from 'react';
import clsx from 'clsx';
import {Inter} from 'next/font/google';

import type {Locale} from '~/i18n';
import AdFitResponsive from '../[lang]/(common)/AdFitResponsive';

const inter = Inter({subsets: ['latin']});

type Props = {
  params: {lang: Locale};
};

export default async function Page({}: Props): Promise<ReactElement> {
  return (
    <AdFitResponsive
      className={clsx('mx-6 mb-2', 'mx-0')}
      adfitClassName="adfit-top"
      units={{
        mobile: 'DAN-dAqcoLWvKpYEtbtq',
        pc: 'DAN-SEcRVdSHkh05H0jO',
      }}
    />
  );
}
