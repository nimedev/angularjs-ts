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

    // Server port
    this.port = 8081

    // Application path
    this.appPath = path.normalize(`${__baseDir}/../src`)

    // Static paths
    this.staticPaths = ['../dist', '../src', '..']
  }
}