'use strict';


// Declare app level module which depends on filters, and services
angular.module('abjon', ['google-maps','abjon.filters', 'abjon.services', 'abjon.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {controller:ListCtrl, templateUrl:'partials/article_list.html'}).    
    when('/edit/:articleId', {controller:EditCtrl, templateUrl:'partials/article_detail.html'}).
    when('/map', {controller:MapCtrl, templateUrl:'partials/map.html'}).
    otherwise({redirectTo: '/'});
  }]);
