import '../styles/output.css';
import type {Metadata} from 'next';
import type {ReactNode} from 'react';

import {siteUrl} from '../src/utils/const';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'GitHub Stats - Developer Power Meter',
    template: '%s | GitHub Stats',
  },
  description:
    'Analyze your GitHub contributions and showcase your developer stats. Get detailed insights into your coding activity, contributions, and achievements.',
  keywords: [
    'GitHub',
    'GitHub Stats',
    'Developer Stats',
    'GitHub Analytics',
    'Contribution Graph',
    'Developer Portfolio',
    'GitHub Profile',
    'Coding Stats',
  ],
  authors: [{name: 'hyochan', url: 'https://github.com/hyochan'}],
  creator: 'hyochan',
  publisher: 'github-stats',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'GitHub Stats',
    title: 'GitHub Stats - Developer Power Meter',
    description:
      'Analyze your GitHub contributions and showcase your developer stats. Get detailed insights into your coding activity.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GitHub Stats - Developer Power Meter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GitHub Stats - Developer Power Meter',
    description:
      'Analyze your GitHub contributions and showcase your developer stats.',
    images: ['/og-image.png'],
    creator: '@peterCho001',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" className="dark h-full">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4190EB" />
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
