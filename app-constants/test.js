/**
 * Test configurations
 * @module test
 */
'use strict'

// Environment class
const Environment = require('./environment')

/**
 * Class representing configurations for test environment
 * @extends Environment
 */
module.exports = class Test extends Environment {

  /**
   * Create a object of Test configurations
   */
  constructor() {
    super()

    // API base url
    this.restUrl = `http://www.test.com:8081/api`
  }
}