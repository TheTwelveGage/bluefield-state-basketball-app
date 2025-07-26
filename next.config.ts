import type { NextConfig } from 'next'

// @ts-ignore
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/gobstate\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'bluefield-state-data',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60 // 24 hours
        }
      }
    }
  ]
})

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: 'gobstate.com',
        pathname: '/**',
      },
    ],
  },
}

export default withPWA(nextConfig)
