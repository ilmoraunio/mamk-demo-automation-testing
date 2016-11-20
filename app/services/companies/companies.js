var CompanyService = (function() {
  'use strict';
  var companies;
  var companyValidation;

  var Module = {
    init: function (dependencies) {
      companies = dependencies.companyModel;
      companyValidation = dependencies.companyValidation;
      return this;
    },
    add: function (company) {
      if ( ! companyValidation.isYritystunnusValid(company.ytunnus)) {
        throw new Error("Yritystunnus '" + company.ytunnus + "' ei ole oikeanmuotoinen");
      }
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