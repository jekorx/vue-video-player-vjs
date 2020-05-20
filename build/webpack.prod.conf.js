'use strict'
const path = require('path')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  entry: {
    app: [resolve('src/index.js')]
  },
  externals: {
    'video.js': {
      root: 'videojs',
      commonjs: 'video.js',
      commonjs2: 'video.js',
      amd: 'videojs'
    },
    'object-assign': 'object-assign'
  },
  output: {
    path: resolve('lib'),
    publicPath: '/',
    filename: 'vue-video-player-vjs.js',
    library: 'VueVideoPlayer',
    libraryTarget: 'umd'
  },
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: false
    })
  ]
})
