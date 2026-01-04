/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const isProd = process.env.NODE_ENV === 'production';

module.exports = { basePath: isProd ? '/luaily.github.io' : '', assetPrefix: isProd ? '/luaily.github.io/ : '', images: { unoptimized: true, }, };

export default nextConfig;
