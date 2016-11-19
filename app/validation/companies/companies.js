var CompanyValidation = (function () {
    'use strict';

    var Module = {
      init: function () {
        return this;
      },
      isYritystunnusValid: function (input) {
        if (typeof input !== 'string') return false;
      }
    };

    return Module;
})();