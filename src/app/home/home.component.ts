/** @module home.component */

// Dependencies
import * as angular from 'angular'
import template from './home.component.html!text'
import 'dist/app/home/home.component.build.css!'

/** Component name */
export const homeComponent = 'atsHome'

/**
 * Class representing a controller for home component
 */
class Controller {

  // Use the $inject property to ensure proper functionality after minification
  public static $inject = ['$translate']

  /**
   * Create a controller
   * @param {Object} $translate - to change language.
   */
  constructor(private $translate) {

  }

  /**
   * Change app langage
   * @param {String} lang - code of language to change
   */
  changeLanguage(lang) {
    this.$translate.use(lang)
  }
}

// Define component in a angular module
angular
  .module(homeComponent, [])
  .component(homeComponent, {
    controller: Controller,
    template
  })
  .config(['$stateProvider', $stateProvider => {
    $stateProvider
      .state('homeState', {
        url: '/',
        template: '<ats-home></ats-home>'
      })
  }])