/**
 * Production configurations
 * @module production
 */
'use strict'

// Environment class
const Environment = require('./environment')

/**
 * Class representing a production configurations
 * @extends Environment
 */
module.exports = class Production extends Environment {

  /**
   * Create a object of production configurations
   */
  constructor() {
    super()

    // API base url
    this.restUrl = 'https://www.angularjs-ts.com:8080/api'

    // Production mode
    this.dev = false
  }
}