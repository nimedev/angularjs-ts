/**
 * Select app settings according to environment.
 * Create a constants file used by application.
 * @module app-config
 */
'use strict'

// Set default node environment to development
process.env.ANGULARJS_TS_ENV = process.env.ANGULARJS_TS_ENV || 'development'

// core modules
const fs = require('fs')
const path = require('path')

// App Modules
const Environment = require(`./${process.env.ANGULARJS_TS_ENV}`)
const appConfig = new Environment()

// Constants & Variables
const fileName = 'app.constants.ts'
const destPath = path.resolve(`${__dirname}/../src/app/${fileName}`)

// Convert object to string and add export function for the file to create
const objectString = JSON.stringify(appConfig)
const codeString = `export default ${objectString}`

// Save the new file
fs.writeFile(destPath, codeString, err => {
  if (err) return console.error(err)
  console.log('App constants: ', appConfig)
})