import '../styles/output.css';
import type {Metadata} from 'next';
import type {ReactNode} from 'react';

export const metadata: Metadata = {
  title: 'github-stats',
  description: 'All stats for developers',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" className="dark h-full">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8181493727238996"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="h-full">{children}</body>
    </html>
  );
}
