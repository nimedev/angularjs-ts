/**
 * Run a browsersync server for dev environment.
 * @module dev-server
 */
'use strict'

// npm modules
const browserSync = require('browser-sync').create()
const historyApiFallback = require('connect-history-api-fallback')

// Configuration object for browsersync
const config = {
  // Port
  port: process.env.ANGULARJS_TS_PORT || 3000,

  // Server folder
  server: ['client', 'client/src', 'client/dist'],

  // Watch folder
  files: ['client/src', 'client/dist'],

  // Options passed to Chokidar
  watchOptions: {
    ignoreInitial: true,
    ignored: 'client/src/**/*.css'
  },

  // Middleware
  middleware: [historyApiFallback()],

  // Disable UI completly
  ui: false,

  // No open browser
  open: false,

  // Don't try to inject, just do a page refresh
  injectChanges: false,

  // Ghost mode
  ghostMode: {
    clicks: true,
    forms: false,
    scroll: true
  },

  // Wait 2 seconds after a reload event before allowing more.
  reloadDebounce: 2000
}

// Run test server
browserSync.init(config)