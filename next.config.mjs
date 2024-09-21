/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa'
import nextIntlPlugin from 'next-intl/plugin'

const withNextIntl = nextIntlPlugin()

const nextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

export default withNextIntl(nextConfig)
