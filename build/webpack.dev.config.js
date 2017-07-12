const config = require('./webpack.base.conf.js')
config.devServer = {
  host: '127.0.0.1',
  port: 9000,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  },
  proxy: require('../local')
}
config.devtool = 'cheap-module-eval-source-map'

module.exports = config
