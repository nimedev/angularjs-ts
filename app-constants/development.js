/**
 * Development configurations
 * @module development
 */
'use strict'

// npm modules
const ip = require('ip')

// Environment class
const Environment = require('./environment')

/**
 * Class representing a development configurations
 * @extends Environment
 */
module.exports = class Development extends Environment {

  /**
   * Create a object of Development configurations
   */
  constructor() {
    super()

    // Get local ip
    const ipAddress = ip.address()

    // API base url
    this.restUrl = `http://${ipAddress}:8081/api`
  }
}