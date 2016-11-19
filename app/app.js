var App = (function () {
  'use strict';

  var Module = {
    companyService: Object.create(CompanyService).init({companyModel: []})
  };

  return Module;
})();