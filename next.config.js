const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

// https://github.com/vercel/next.js/tree/canary/examples/progressive-web-app
const withPWA = require('next-pwa')({
  dest: 'public',
  swSrc: './src/lib/client/service-worker/sw.js',
  register: false
})

module.exports = withBundleAnalyzer({})
module.exports = withPWA({
  // config
})
