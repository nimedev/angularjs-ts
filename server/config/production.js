/* global __baseDir */
/** @module production */
'use strict'

// Core modules
const path = require('path')

// App modules
const Environment = require('./environment')

/**
 * Class representing production specific configuration
 * @extends Environment
 */
module.exports = class extends Environment {
  /**
   * Create a production configuration object
   */
  constructor() {
    super()

    // Application path
    this.appPath = path.normalize(`${__baseDir}/../client/dist`)

    // Static paths
    this.staticPaths = ['../client/dist']
  }
}