'use strict'
const path = require('path')
const utils = require('./utils')
const tsLoaders = require('./ts.loaders')
const config = require('../config')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.ts'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.tsx', '.ts',  '.js', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.js',
      '@': utils.resolve('src'),
      'vendor': path.resolve(__dirname, '../src/vendor')
    }
  },
  module: {
    rules: tsLoaders
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};