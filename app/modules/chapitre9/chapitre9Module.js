'use strict';

/**
 * @ngdoc overview
 * @name atlAngulargithubioApp
 * @description
 * # atlAngulargithubioApp
 *
 * Chapitre9 module of the application.
 */
angular.module('mainApp.chapitre9.controllers',[
    'ngRoute',
]).config(function ($routeProvider) {
  $routeProvider
    .when('/chapitre9', {
      templateUrl: '../app/modules/chapitre9/views/chapitre9.html',
      controller: 'chapitre9Ctrl',
      controllerAs: 'controllers'
    });
});
