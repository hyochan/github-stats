const isProd = process.env.NODE_ENV === 'production';

let basePath = '';
if (isProd) {
  // const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  const repo = 'dooboo.io';

  basePath = `/${repo}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
    ],
  },
};

module.exports = nextConfig;
