/* eslint-disable no-console */
const {CI, NODE_ENV, NOW_URL} = process.env

module.exports = (nextConfig = {}) => {
  const {assetPrefix = NOW_URL || ''} = nextConfig

  let configured = false

  return Object.assign({}, nextConfig, {
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

      config.module.rules.push({
        test: /\.svg$/,
        use: '@svgr/webpack'
      })

      config.module.rules.push({
        test: /\.mdx?$/,
        use: [options.defaultLoaders.babel, require.resolve('./mdx-loader'), require.resolve('./search-loader')]
      })

      const metaPath = require.resolve('../meta')

      config.module.rules.push({
        test: new RegExp(`^${metaPath}$`),
        use: require.resolve('val-loader')
      })

      configured = true
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
