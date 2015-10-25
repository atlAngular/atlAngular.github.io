'use strict';

/**
 * @ngdoc function
 * @name atlAngulargithubioApp.controller:MainCtrl
 * @description
 * # chapitre8Ctrl
 * Controller of the chapitre7Module
 */
angular.module('mainApp.chapitre8.controllers')
.controller('chapitre8Ctrl', function ($scope) {
//Demo1
    $scope.firstNameD1 = "Tlili_D1";
    $scope.lastNameD1 = "Achref_D1";
//Demo2
    $scope.firstNameD2 = "Tlili_D2";
    $scope.lastNameD2 = "Achref_D2";

    $scope.fullNameD2 = function() {
        return $scope.firstNameD2 + " " + $scope.lastNameD2;
    }
//Demo3
    $scope.namesD3 = [
        {nameD3:'Achref',countryD3:'Tunisia'},
        {nameD3:'Ahmed',countryD3:'Saudia'},
        {nameD3:'Bassem',countryD3:'USA'}
    ];
});
