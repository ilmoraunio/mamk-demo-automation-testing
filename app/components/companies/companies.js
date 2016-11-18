(function() {
  'use strict';

  // Define the component and controller we loaded in our test
  angular.module('components.companies', [])
  .controller('CompaniesController', function() {
    var vm = this;
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('companies', {
        url: '/companies',
        templateUrl: 'components/companies/companies.html',
        controller: 'CompaniesController as cc'
      });
  });
})();