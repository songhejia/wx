var path = require('path')
var webpack = require('webpack')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

const ExtractTextPlugin = require("extract-text-webpack-plugin");

var HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    vendors: [
      'mint-ui/lib/style.css',
      // 'font-awesome-webpack'
      'font-awesome-loader',
      // 'vue'
      // 'font-awesome/scss/font-awesome.scss'
    ],
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js?[hash]',
    chunkFilename: "[id].chunk.js",
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      // // the url-loader uses DataUrls.
      // // the file-loader emits files.
      // {
      //   test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
      //   // loader: "url?limit=10000"
      //   use: "url-loader"
      // },
      // {
      //   test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      //   use: 'file-loader'
      // }

      // {
      //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000,
      //       name: 'assets/fonts/[name].[ext]'
      //     }
      //   }
      // }, {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000,
      //       name: 'assets/images/[name].[ext]'
      //     }
      //   }
      // },
    ]
  },
  plugins: [
    extractSass,
    new webpack.ProvidePlugin({
      'axios': 'axios',
      // 'Vue': 'vue'
    }),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/page.html',
      hash: true,
      inject: true,
      // chunks: ['vendors', 'app']
    }),
  ]
}
