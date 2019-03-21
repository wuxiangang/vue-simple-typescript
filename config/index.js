'use strict'
const path = require('path')

module.exports = {
  // public scss
  static: {
    scss: './../static/css/global.scss'
  },
  // webpack external 
  externals: {
    'vue': {
      module: 'Vue',
      js: `https://cdn.bootcss.com/vue/2.5.13/vue${process.env.NODE_ENV === 'production' ? '.min' : ''}.js`
    },
    'vue-router': {
      module: 'VueRouter',
      js: 'https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js'
    },
    'vuex': {
      module: 'Vuex',
      js: 'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js'
    },
    'flyio': {
      module: 'fly',
      js: 'https://unpkg.com/flyio/dist/fly.min.js'
    },
    'element-ui': {
      module: 'ELEMENT',
      js: 'https://unpkg.com/element-ui/lib/index.js',
      css: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
    }
  },
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      "/api/v1": {
        target: 'https://www.bitboole.com/',
        changeOrigin: true
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,
    devtool: 'cheap-module-eval-source-map',
    cssSourceMap: true,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
