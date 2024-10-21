import path from 'path'

import createNextIntlPlugin from 'next-intl/plugin'

const __dirname = new URL('.', import.meta.url).pathname

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'esplus-backend-vfc6l.ondigitalocean.app',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default withNextIntl(nextConfig)
