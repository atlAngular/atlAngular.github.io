"use strict";angular.module("mainApp.chapitre7.controllers",["ngRoute"]).config(["$routeProvider",function(a){a.when("/chapitre7",{templateUrl:"modules/chapitre7/views/chapitre7.html",controller:"chapitre7Ctrl",controllerAs:"controllers"})}]),angular.module("mainApp.chapitre8.controllers",["ngRoute"]).config(["$routeProvider",function(a){a.when("/chapitre8",{templateUrl:"modules/chapitre8/views/chapitre8.html",controller:"chapitre8Ctrl",controllerAs:"controllers"})}]),angular.module("mainApp.chapitre9.controllers",["ngRoute"]).config(["$routeProvider",function(a){a.when("/chapitre9",{templateUrl:"modules/chapitre9/views/chapitre9.html",controller:"chapitre9Ctrl",controllerAs:"controllers"})}]),angular.module("atlAngulargithubioApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","mainApp.chapitre7.controllers","mainApp.chapitre8.controllers","mainApp.chapitre9.controllers"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("atlAngulargithubioApp").config(["$locationProvider",function(a){a.html5Mode(!0)}]),angular.module("atlAngulargithubioApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("atlAngulargithubioApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("mainApp.chapitre7.controllers").controller("chapitre7Ctrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("mainApp.chapitre8.controllers").controller("chapitre8Ctrl",["$scope",function(a){a.firstNameD1="Tlili_D1",a.lastNameD1="Achref_D1",a.firstNameD2="Tlili_D2",a.lastNameD2="Achref_D2",a.fullNameD2=function(){return a.firstNameD2+" "+a.lastNameD2},a.namesD3=[{nameD3:"Achref",countryD3:"Tunisia"},{nameD3:"Ahmed",countryD3:"Saudia"},{nameD3:"Bassem",countryD3:"USA"}]}]),angular.module("mainApp.chapitre9.controllers").controller("chapitre9Ctrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("atlAngulargithubioApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>')}]);