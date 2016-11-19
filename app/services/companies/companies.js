var CompanyService = (function() {
  'use strict';
  var companies;

  var Module = {
    init: function (dependencies) {
      companies = dependencies.companyModel;
      return this;
    },
    add: function (company) {
      return companies.push(company);
    },
    get: function () {
      return companies;
    },

    testApi: {
      getCompanies: function () {
        return companies;
      },
      setCompanies: function (_companies_) {
        companies = _companies_;
      }
    }
  };

  return Module;
}());