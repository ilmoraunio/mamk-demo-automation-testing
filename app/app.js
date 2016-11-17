(function () {
  'use strict';

  angular.module('mamk-demo-angular', [
    'ui.router'
  ])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  });
  
})();