/**
 * Gulp tasks
 * Build sass and js files in real time.
 * Prepare app for distribution int dist folder.
 */
'use strict'


// Load configurations
const config = require('./gulpconfig')

// Use this module to inspect execution times
if (config.timeRequire) {
  require('time-require')
}

// npm modules
const del = require('del')
const gulp = require('gulp')
const notifier = require('node-notifier')
const runSequence = require('run-sequence')

// Task modules
const copyTask = require('gulp-copy-nimedev')
const htmlTask = require('gulp-html-nimedev')
const postcssTask = require('gulp-postcss-nimedev')

// Get jspm dependencies from package.json
const appSetting = require('./package')
const appName = appSetting.name


// SINGLE TASKS

gulp.task('assets', () => copyTask(config.assets))

// Clean task
gulp.task('clean', () => del.sync(config.clean.src))

// CSS task. css:dev generate sourcemaps
gulp.task('css', () => postcssTask(config.css.options))
gulp.task('css:dev', () => postcssTask(config.css.options, true))

// Process css files of each app component
// Create an array of task with the array options in config file
const cssComponentTasks = []
for (let option of config.cssComponent.options) {
  let taskName = `css-component:${option.name}`
  gulp.task(taskName, () => postcssTask(option))
  cssComponentTasks.push(taskName)
}

gulp.task('css-component', cssComponentTasks)
gulp.task('css-component:clean', () => del.sync(config.cssComponent.clean))

// index task
gulp.task('index', () => htmlTask(config.index))

// Misc task. misc:dev copy more files
gulp.task('misc', () => copyTask(config.misc))


// NOTIFY TASKS
gulp.task('css:notify', ['css:dev'], () => notifier.notify({
  title: appName,
  message: 'Finish postcss task for style files'
}))

// Create a notification task for each css-component task
for (let option of config.cssComponent.options) {
  let taskName = `css-component:${option.name}`
  gulp.task(`${taskName}-notify`, [taskName], () => notifier.notify({
    title: appName,
    message: `Finish ${taskName} task for component styles`
  }))
}


// WATCH tasks

// Development task
gulp.task('development', ['clean', 'css-component:clean'],
  cb => runSequence('css:dev', 'css-component', cb))

// Watch task
gulp.task('watch', ['development'], () => {
  // Watch for changes in styles files
  gulp.watch(config.css.watch, ['css:notify'])

  // Watch for changes in component styles files
  for (let option of config.cssComponent.options) {
    gulp.watch(option.watch.concat(config.cssComponent.ignoreWatch),
      [`css-component:${option.name}-notify`])
  }
})


// Production task
gulp.task('build', ['clean', 'css-component:clean'],
  cb => runSequence(['assets', 'index', 'misc'], 'css',
    'css-component', cb))

// Production task
gulp.task('build', ['clean', 'css-component:clean'],
  cb => runSequence(['assets', 'index', 'misc', 'css', 'css-component'], cb))


// DEFAULT TASK
// Generate clean dist for production
gulp.task('default', ['build'])