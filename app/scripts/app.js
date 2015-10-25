'use strict';

/**
 * @ngdoc overview
 * @name atlAngulargithubioApp
 * @description
 * # atlAngulargithubioApp
 *
 * Main module of the application.
 */
angular
  .module('atlAngulargithubioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mainApp.chapitre7.controllers',
    'mainApp.chapitre8.controllers',
    'mainApp.chapitre9.controllers',

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


  angular.module('atlAngulargithubioApp').config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
  });
