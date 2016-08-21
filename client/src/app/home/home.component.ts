/**
 * @module home.component
 */
/// <reference path="home.d.ts" />

// Dependencies
import template from 'src/app/home/home.component.html!text'
import 'dist/app/home/home.component.css!'

/**
 * Component name
 */
export const homeComponentName = 'atsHome'

/**
 * Class representing a controller for home component
 */
export class HomeController {

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

/**
 * Component object
 */
export const homeComponent = {
  controller: HomeController,
  template
}