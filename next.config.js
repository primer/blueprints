const configure = require('./configure')

module.exports = configure({
  target: 'serverless',
  env: {
    GOOGLE_ANALYTICS_UA: 'UA-126681523-1'
  }
})
