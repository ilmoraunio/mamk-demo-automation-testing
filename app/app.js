var App = (function () {
  'use strict';

  var Module = {
    companyValidation: Object.create(CompanyValidation).init(),
    companyService: Object.create(CompanyService)
                          .init({companyModel: [], 
                                 companyValidation: Object.create(CompanyValidation).init()}),
    errors: []
  };

  return Module;
})();