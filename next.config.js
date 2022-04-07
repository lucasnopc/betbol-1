const withPWA = require('next-pwa')

// module.exports = withPWA({
//   pwa: {
//     dest: 'public'
//   }
// })


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
  // pwa: withPWA({
  //   pwa: {
  //     dest: 'public'
  //   }
  // })
})