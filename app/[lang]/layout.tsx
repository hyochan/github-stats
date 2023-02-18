import '../../styles/output.css';

import type {ReactElement, ReactNode} from 'react';

import type {Locale} from '~/i18n';
import Providers from './Providers';

type Props = {
  children: ReactNode;
  params: {lang: Locale};
};

export default function RootLayout({
  children,
  params: {lang},
}: Props): ReactElement {
  return (
    <html lang={lang}>
      <head />
      <body>
        <Providers initialLocale={lang}>
          <div className="w-screen h-screen bg-paper">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
