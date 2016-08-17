/**
 * Group shared services for all app
 * @module services
 */

// Dependencies
import * as angular from 'angular'

// Feature modules

// Shared services
import { StylesService } from './styles.service'

/**
 * Module name
 */
export const servicesModule = 'services'

// Define module
angular
  .module(servicesModule, [])
  .service(StylesService.serviceName, StylesService)