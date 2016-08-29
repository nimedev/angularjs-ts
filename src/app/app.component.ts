/**
 * Root component
 * @module app.component
 */

/**
 * Component name
 */
export const appComponentName = 'appRoot'

/**
 * Class representing a controller for app component
 */
export class AppController {

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

/**
 * Component object
 */
export const appComponent: ng.IComponentOptions = {
  controller: AppController,
  template: '<main ui-view></main>'
}