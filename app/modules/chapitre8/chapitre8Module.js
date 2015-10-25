'use strict';

/**
 * @ngdoc overview
 * @name atlAngulargithubioApp
 * @description
 * # atlAngulargithubioApp
 *
 * Chapitre8 module of the application.
 */
angular.module('mainApp.chapitre8.controllers',[
    'ngRoute',
]).config(function ($routeProvider) {
  $routeProvider
    .when('/chapitre8', {
      templateUrl: '../app/modules/chapitre8/views/chapitre8.html',
      controller: 'chapitre8Ctrl',
      controllerAs: 'controllers'
    });
});
