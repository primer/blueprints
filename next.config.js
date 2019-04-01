const {join, resolve} = require('path')
const withSass = require('@zeit/next-sass')
const configure = require('./lib/config')

module.exports = configure()
