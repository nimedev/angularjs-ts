/**
 * Angular module to attach interceptors.
 * @module interceptor
 */

// Dependencies
import * as angular from 'angular'
// import { errorInterceptorFactory } from './error-interceptor.factory'

/** Module name */
export const interceptor = 'interceptor'

// Define module
angular
  .module(interceptor, [])
  .config(['$httpProvider', $httpProvider => {
    // Attach error interceptor service to the http response

    // $httpProvider.interceptors.push(errorInterceptorFactory)
  }])