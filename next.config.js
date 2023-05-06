const withTwin = require('./withTwin.js')

module.exports = withTwin({
  reactStrictMode: true,
  images: {
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com'],
  },
})
