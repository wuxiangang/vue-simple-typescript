'use strict'
// This is the webpack config used for unit tests.
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const utils = require('./utils')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'none',
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    rules: utils.styleLoaders()
  },
  devtool: '#inline-source-map',
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader'
    }
  }
})

delete webpackConfig.entry

module.exports = webpackConfig
