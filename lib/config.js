/* eslint-disable no-console */
const withNextPages = require('@primer/next-pages/plugin')
const {CI, NODE_ENV, NOW_URL} = process.env

module.exports = (nextConfig = {}) => {
  const {assetPrefix = NOW_URL || ''} = nextConfig

  let configured = false

  const modifiedConfig = Object.assign({}, nextConfig, {
    assetPrefix,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],

    publicRuntimeConfig: Object.assign({
      assetPrefix,
      production: NODE_ENV === 'production'
    }, nextConfig.publicRuntimeConfig),

    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      // *.svg -> React components
      config.module.rules.push({
        test: /\.svg$/,
        use: '@svgr/webpack'
      })

      // images should be served statically
      config.module.rules.push({
        test: /\.(gif|ico|jpe?g|png)$/,
        use: require.resolve('url-loader')
      })

      config.module.rules.push({
        test: /\.mdx?$/,
        use: [options.defaultLoaders.babel, require.resolve('./mdx-loader'), require.resolve('./search-loader')]
      })

      configured = true
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })

  return withNextPages(modifiedConfig)
}
