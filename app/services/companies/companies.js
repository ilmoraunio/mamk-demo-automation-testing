(function() {
  'use strict';

  // Creating the module and factory we referenced in the beforeEach blocks in our test file
  angular.module('api.companies', [])
  .factory('Companies', function() {
    var Companies = {};

    var companiesList = [
      { ytunnus: "2038406-4" },
      { ytunnus: "4110278-3" },
      { ytunnus: "5853528-6" }
    ];

    // Defining all to make our test pass. It doesn't need to do anything yet.
    Companies.all = function() {
      return companiesList;
    };

    Companies.findById = function (id) {
      return companiesList.find(function (company) {
        return company.ytunnus === id;
      });
    }

    return Companies;
  });
})();