/**
 * Run a browsersync server with lite options.
 * @module lite-server
 */
'use strict'

// npm modules
const browserSync = require('browser-sync').create()
const historyApiFallback = require('connect-history-api-fallback')

// Configuration object for browsersync
const config = {
  // Server folder
  server: ['.', 'src', 'dist'],

  // Middleware
  middleware: [historyApiFallback()],

  // No open browser
  open: false,

  // Don't try to inject, just do a page refresh
  injectChanges: false,

  // Ghost mode
  ghostMode: false
}

// Run lite server
browserSync.init(config)