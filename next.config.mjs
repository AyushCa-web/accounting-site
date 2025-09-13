/** @type {import('next').NextConfig} */

// Always set repo name (for GitHub Pages)
const repo = '/accounting-site';

const nextConfig = {
  output: 'export',     // required for static export
    basePath: '/accounting-site',         // must be empty for /docs deployment
    assetPrefix: '/accounting-site/',      // must be empty for /docs deployment
    reactStrictMode: true,
  images: {
    unoptimized: true,     // 👈 avoids Next.js image optimizer (needs a server)
  },
};

export default nextConfig;
