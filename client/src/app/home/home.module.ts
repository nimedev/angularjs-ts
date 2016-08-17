/**
 * Module for home component.
 * @module home.module
 */

// Dependencies
import * as angular from 'angular'
import { homeComponent, homeComponentName } from './home.component'
import { homeConfig } from './home.config'

/**
 * Module name
 */
export const homeModule = 'home'

// Define the module
angular
  .module(homeModule, [])
  .component(homeComponentName, homeComponent)
  .config(homeConfig)  