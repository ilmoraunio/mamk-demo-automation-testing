var App = (function () {
  'use strict';

  var Module = {
    companyService: Object.create(CompanyService).init({companyModel: []}),
    companyValidation: Object.create(CompanyValidation).init()
  };

  return Module;
})();