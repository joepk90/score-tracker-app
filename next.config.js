// https://github.com/vercel/next.js/tree/canary/examples/progressive-web-app

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const withPWA = require('next-pwa')({
  dest: 'public',
  swSrc: 'src/lib/client/service-worker/sw.ts',
  register: false
})

module.exports = withPWA({
  // config
})
module.exports = withBundleAnalyzer({})
1
