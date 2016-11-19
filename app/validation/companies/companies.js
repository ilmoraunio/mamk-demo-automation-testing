var CompanyValidation = (function () {
    'use strict';

    var Module = {
      init: function () {
        return this;
      },
      isYritystunnusValid: function (input) {
        if (typeof input !== 'string') return false;
        if ( ! input.match(/.{7}-\d/)) return false;
        return true;
      }
    };

    return Module;
})();