const webpack = require('webpack')
const path = require('path')

const config = require('./webpack.base.conf.js')
config.resolve.alias['configurations'] = path.resolve('./configurations/production')
config.devtool = 'source-map'
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  mangle: true,
  comments: false,
  sourceMap: true
}))
config.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
}))
config.plugins.push(new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false
}))

module.exports = config
