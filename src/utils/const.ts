let isDev = false;

if (process && process.env.NODE_ENV === 'development') {
  isDev = true;
}

const siteUrl = process.env.NEXT_PUBLIC_ROOT_URL || 'https://stats.hyo.dev';

export {isDev, siteUrl};
