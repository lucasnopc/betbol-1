const withPWA = require('next-pwa')

module.exports = withPWA({
  images: {
    domains: ['media.api-sports.io'],
  },
  env: {
    customKey: 'my-value',
  },
  pwa: {
        dest: 'public'
      }
})