'use strict';

/**
 * @ngdoc overview
 * @name contactsApp
 * @description
 * # contactsApp
 *
 * Main module of the application.
 */
var contactsApp = angular
  .module('contactsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'md.data.table',
    'PubSub'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        // controller: 'mainContactsController',
        // controllerAs: 'mainContactsController'
      })
      .when('/favorites', {
        templateUrl: 'views/favorites.html',
        // controller: 'favoritesController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
