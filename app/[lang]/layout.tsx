import '../../styles/output.css';

import type {ReactElement, ReactNode} from 'react';

import type {Locale} from '~/i18n';
import NextHead from 'next/head';
import RootProvider from '../../src/components/RootProvider';

type Props = {
  children: ReactNode;
  params: {lang: Locale};
};

export default function RootLayout(props: Props): ReactElement {
  const {
    params: {lang},
    children,
  } = props;

  return (
    <html lang={lang} className="dark">
      <NextHead>
        <title>doobooio</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="All stats for developers" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      <body>
        <RootProvider initialLocale={lang}>
          <div className=" w-screen h-screen bg-paper">{children}</div>
        </RootProvider>
      </body>
    </html>
  );
}
