const config = require('./webpack.base.conf.js')
config.devServer = {
  host: '0.0.0.0',
  port: 8989,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  },
  proxy: require('../local')
}
config.devtool = 'cheap-module-eval-source-map'

module.exports = config
