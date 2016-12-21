'use strict';

/**
 * @ngdoc overview
 * @name guitarTunerAppApp
 * @description
 * # guitarTunerAppApp
 *
 * Main module of the application.
 */
angular
  .module('guitarTunerAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
//   .run(function($rootScope, $window){
//             angular.element($window).bind('resize',function(){
//                 $rootScope.$emit('windowResize');
//   });
// });
