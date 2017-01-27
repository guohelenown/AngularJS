'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'mgcrea.ngStrap',
	'googlechart'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
        //controllerAs: 'dashboard'
      })
      .when('/watchlist/:listId', {
        templateUrl: 'views/watchlist.html',
        controller: 'WatchlistCtrl'
        //controllerAs: 'watchlist'
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  });
