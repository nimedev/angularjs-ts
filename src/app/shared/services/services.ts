/**
 * Group shared services for all app
 * @module services
 */

// Dependencies
import * as angular from 'angular'

// Shared services from base components folder
// import { QuestionService } from '../../base/question/index'

// Shared services
import { StylesService } from './styles.service'

/** Module name */
export const services = 'services'

// Define module
angular
  .module(services, [])
  .service('stylesService', StylesService)