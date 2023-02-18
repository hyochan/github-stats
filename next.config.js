const isProd = process.env.NODE_ENV === 'production';

let basePath = '';
if (isProd) {
  // const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  const repo = 'prisma-next-rsc';

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
};

module.exports = nextConfig;
