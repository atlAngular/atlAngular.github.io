'use strict';

/**
 * @ngdoc overview
 * @name atlAngulargithubioApp
 * @description
 * # atlAngulargithubioApp
 *
 * Chapitre7 module of the application.
 */
angular.module('mainApp.chapitre7.controllers',[
    'ngRoute',
]).config(function ($routeProvider) {
  $routeProvider
    .when('/chapitre7/', {
      templateUrl: 'modules/chapitre7/views/chapitre7.html',
      controller: 'chapitre7Ctrl',
      controllerAs: 'controllers'
    });
});
