/** @type {import('next').NextConfig} */
//this is to make it in work on both local and github.io
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/accounting-site' : '',
  assetPrefix: isProd ? '/accounting-site/' : '',
  reactStrictMode: true,
};

export default nextConfig;
