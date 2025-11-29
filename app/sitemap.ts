import type {MetadataRoute} from 'next';

import {siteUrl} from '../src/utils/const';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'ko'];

  const staticPages = ['', '/stats', '/leaderboards', '/sign-in'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      sitemapEntries.push({
        url: `${siteUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
