/** @type {import('next').NextConfig} */
//this is to make it in work on both local and github.io
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: "export",                     // 👈 important
  basePath: isProd ? '/accounting-site' : '',        // 👈 repo name
  assetPrefix: isProd ? '/accounting-site/' : '',
  images: {
    unoptimized: true,                  // 👈 avoids Next.js image optimizer (needs a server)
  },
};

export default nextConfig;

