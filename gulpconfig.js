/**
 * Settings for all task in gulpfile.js
 * @module config
 */
'use strict'

// Constants & Variables
const srcDir = 'src'
const prodDir = 'dist'
const tmpDir = 'tmp'

/** Settings for gulp tasks */
module.exports = {
  // Activate time-require module
  timeRequire: false,

  // Assets tasks. Copy assets files that don't need processing
  assets: {
    src: [
      `${srcDir}/assets/**/*`,
      `!${srcDir}/assets/**/*.js`,
      `!${srcDir}/assets/**/*.css`
    ],
    dest: `${prodDir}/assets`
  },

  // Settings for clean tasks
  clean: {
    src: [
      `${tmpDir}/*`,
      `${prodDir}/*`,
      `${prodDir}/**/.*`,
      `!${prodDir}/.git*`
    ]
  },

  // Settings for CSS tasks
  css: {
    // Options used in postcss task
    options: {
      src: `${srcDir}/styles/style.css`,
      dest: `${prodDir}/assets/css`,
      outName: {
        basename: 'style',
        extname: '.css'
      },
      minify: true
    },

    // Paths to be watched
    watch: `${srcDir}/styles/**/*`
  },

  // css-component task. Process css files for component
  cssComponent: {
    // Array of options used to create multiple postcss task by main components
    // Each object contain the options for a specific folder of components.
    // Divide when application grow to much.
    options: [
      {
        // app component except base folders
        name: 'app',
        src: [
          `${srcDir}/app/**/*.css`,
          `!${srcDir}/app/base/**/*.css`
        ],
        dest: `${prodDir}/app`,
        outName: {
          extname: '.css'
        },
        minify: false,
        watch: [
          `${srcDir}/app/**/*`,
          `!${srcDir}/app/base/**/*.css`,
        ]
      }, {
        // base folder of app component (root)
        name: 'base',
        src: `${srcDir}/app/base/**/*.css`,
        dest: `${prodDir}/app/base`,
        outName: {
          extname: '.css'
        },
        minify: false,
        watch: [`${srcDir}/app/base/**/*`]
      }],

    // Clean path to delete processed files
    clean: `${prodDir}/app`,

    ignoreWatch: [
      `!${srcDir}/app/**/*.html`,
      `!${srcDir}/app/**/*.js`,
      `!${srcDir}/app/**/*.ts`,
      `!${srcDir}/app/**/*.json`
    ]
  },

  // Settings for tasks that process index.html file
  index: {
    src: `${srcDir}/index.html`,
    dest: prodDir,
    tmp: tmpDir,

    // Used to replace script declaration in index.html file
    replace: {
      'js': [
        'assets/js/app.js'
      ]
    }
  },

  // Settings used in tasks for .htaccess, robots and others files
  misc: {
    src: [
      `${srcDir}/.htaccess`,
      `${srcDir}/favicon.ico`,
      `${srcDir}/robots.txt`
    ],
    dest: prodDir
  }
}