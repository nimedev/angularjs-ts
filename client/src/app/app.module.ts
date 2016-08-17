/**
 * Module for app component.
 * @module app.module
 */

// Dependencies
import * as angular from 'angular'
import ngCookies from 'angular-cookies'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'
import translate from 'angular-translate'
import handlerLog from 'angular-translate-handler-log'
import loaderStaticFiles from 'angular-translate-loader-static-files'
import storageCookie from 'angular-translate-storage-cookie'
import storageLocal from 'angular-translate-storage-local'
import { appComponent, appComponentName } from './app.component'
import { appConfig } from './app.config'

// Feature modules
import { baseModule } from './base/index'
import { homeModule } from './home/index'

// Shared feature modules
import { directivesModule } from './shared/directives/index'
import { interceptorModule } from './shared/interceptor/index'
import { servicesModule } from './shared/services/index'

// Application constants
import appConstants from './app.constants'

/**
 * Module name
 */
export const appModule = 'app'

// Define the module
angular
  .module(appModule, [
    // Dependencies
    ngCookies,
    ngMessages,
    uiRouter,
    translate,
    handlerLog,
    loaderStaticFiles,
    storageCookie,
    storageLocal,

    // Feature Modules
    baseModule,
    homeModule,

    // Shared
    directivesModule,
    interceptorModule,
    servicesModule
  ])
  .component(appComponentName, appComponent)
  .config(appConfig)
  .constant('config', appConstants)