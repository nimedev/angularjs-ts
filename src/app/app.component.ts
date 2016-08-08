/** @module app.component */

// Dependencies
import * as angular from 'angular'
import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngCookies from 'angular-cookies'
import ngMessages from 'angular-messages'
import ngTouch from 'angular-touch'
import uiRouter from 'angular-ui-router'
import translate from 'angular-translate'
import handlerLog from 'angular-translate-handler-log'
import loaderStaticFiles from 'angular-translate-loader-static-files'
import storageCookie from 'angular-translate-storage-cookie'
import storageLocal from 'angular-translate-storage-local'
import { appConfig } from './app.config'

// Subcomponents
import { homeComponent } from './home/index'

// Shared Directives
import { directives } from './shared/directives/index'

// Shared Interceptor
import { interceptor } from './shared/interceptor/index'

// Shared services
import { services } from './shared/services/index'

// Application constants
import appConstants from './app.constants'

/** Component name */
export const appComponent = 'appRoot'

/**
 * Class representing a controller for app component
 */
class Controller {

  // Use the $inject property to ensure proper functionality after minification
  public static $inject = ['$log', 'config']

  /**
   * Create a controller
   * @param {Object} $log - to log in debug mode.
   * @param {Object} config - to log config object in some environments.
   */
  constructor(private $log, private config) {

  }

  /** Initialization */
  $onInit() {
    // Log configuration object
    this.$log.debug('Config object', this.config)
  }
}

// Define component in a angular module
angular
  .module(appComponent, [
    // Dependencies
    ngAnimate,
    ngAria,
    ngCookies,
    ngMessages,
    ngTouch,
    uiRouter,
    translate,
    handlerLog,
    loaderStaticFiles,
    storageCookie,
    storageLocal,

    // Subcomponents
    homeComponent,

    // Shared
    directives,
    interceptor,
    services,
  ])
  .component(appComponent, {
    controller: Controller,
    template: '<main ui-view autoscroll></main>'
  })
  .config(appConfig)
  .constant('config', appConstants)