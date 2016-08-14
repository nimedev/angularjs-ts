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
  port: 8080,

  // Server folder
  server: ['.', 'src', 'dist'],

  // Watch folder
  files: ['src', 'dist'],

  // Options passed to Chokidar
  watchOptions: {
    ignoreInitial: true,
    ignored: 'src/**/*.css'
  },

  // Middleware
  middleware: [historyApiFallback()],

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