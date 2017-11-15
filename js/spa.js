'use strict';

var spaApp = angular.module('spaApp', ['ngRoute']);
//   'ngRoute',
// 	//'spaControllers',
// 	'xmp.directives',
//   	'xmp.controllers',
//   	'xmp.services'
// ]);

spaApp.config(['xmpResourceProvider', function(inProvider) {
  //  xmpcfg.access is defined externally at the xmpcfg.js
    inProvider.configure({
      access:xmpcfg.access
    });
}]);

spaApp.config(['$routeProvider',function($routeProvider) {
  $routeProvider
    .when('/:recipientID/edit', {
      controller:'XMPPersonalizedView',
      templateUrl:'templates/editSPA.html'
    })
    .when('/register/', {
      controller:'XMPAnonymousView',
      templateUrl:'templates/registerSPA.html'
    })
    .when('/:recipientID', {
      controller:'XMPPersonalizedView',
      templateUrl:'templates/viewSPA.html'
    })
    .otherwise({
      redirectTo:'/register/'
    });
}]);



spaApp.controller('main',["$scope", function ($scope){
   // nothing!
}]);

// var spaControllers = angular.module('spaControllers', [])
//  .controller('main', ['$scope',function ($scope) {

//   // nothing!
// }]);
