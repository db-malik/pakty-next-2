/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  // experimental: {
  //   forceSwcTransforms: true,
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  reactStrictMode: true,
  images: {
   
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'pm.basketofart.net',
        port: '3000',
        pathname: '/static/**',
      },
    ],
  },
}

module.exports = nextConfig
