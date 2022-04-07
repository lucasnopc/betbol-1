const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public'
  }
})


module.exports = {
  images: {
    domains: ['media.api-sports.io'],
  },
    env: {
      customKey: 'my-value',
    },
  }