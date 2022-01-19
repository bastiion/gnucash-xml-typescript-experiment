/* eslint-disable */
const webpack = require('webpack')


module.exports = function override(config, env) {
  console.log('override')
  let loaders = config.resolve
  loaders.fallback = {
    'http': require.resolve('stream-http'),
    'buffer': require.resolve('buffer'),
    'https': require.resolve('https-browserify'),
    'url': require.resolve('url'),
    'process': require.resolve('process/browser'),

  }
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  )

  return config
}
