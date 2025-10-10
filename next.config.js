/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  distDir: 'out',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/shramik-setu' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/shramik-setu' : '',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
