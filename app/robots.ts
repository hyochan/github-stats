import type {MetadataRoute} from 'next';

import {siteUrl} from '../src/utils/const';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/sign-in'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
