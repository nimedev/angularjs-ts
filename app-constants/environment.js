/**
 * App configurations for all environments
 * @module environment
 */
'use strict'

// Get jspm dependencies from package.json
const appSetting = require('../package')

/**
 * Class representing configurations for all environments
 */
module.exports = class Environment {
  /**
   * Create a config object for all environments
   */
  constructor() {
    // Application name for angular
    this.appName = 'angularjs-ts'

    // Application version
    this.version = appSetting.version

    // API base url
    this.restUrl = ''

    // Indicate if use log
    this.log = true
  }
}