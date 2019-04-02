const withNextPages = require('@primer/next-pages/plugin')
const configure = require('./lib/config')

module.exports = configure(withNextPages())
