/* global __baseDir */
/** @module development */
'use strict'

// Core modules
const path = require('path')

// App modules
const Environment = require('./environment')

/**
 * Class representing development specific configuration
 * @extends Environment
 */
module.exports = class extends Environment {
  /**
   * Create a development configuration object
   */
  constructor() {
    super()

    // Server port (used for lite server script)
    this.port = process.env.ANGULARJS_TS_PORT + 1 || 3001

    // Application path
    this.appPath = path.normalize(`${__baseDir}/../src`)

    // Static paths
    this.staticPaths = ['../dist', '../src', '..']
  }
}