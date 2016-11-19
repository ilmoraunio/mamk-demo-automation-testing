var CompanyValidation = (function () {
    'use strict';

    var Module = {
      init: function () {
        return this;
      },
      isYritystunnusValid: function (input) {
        debugger;

        if (typeof input !== 'string') return false;
        if ( ! input.match(/.{7}-\d/)) return false;
        
        var yritystunnusAlkuosa = new String(input.match(/^.{7}/)); // => avoid being typeof "object"

        var coll = yritystunnusAlkuosa.split("") // => ["1", "2", "3"]
                                      .map(function (value) {
                                        return new Number(value);
                                      }); // => [1, 2, 3]
        
        // Calculate magic sum number
        var sum = coll[0] * 7  +
                  coll[1] * 9  +
                  coll[2] * 10 +
                  coll[3] * 5  +
                  coll[4] * 8  +
                  coll[5] * 4  +
                  coll[6] * 2 ;

        var modulo11 = sum % 11;

        // Tarkistenumero rules
        if (11 - modulo11 === 1) return false;
        else if (modulo11 === 0) return input === yritystunnusAlkuosa.concat("-0");
        else if (modulo11 >= 2 && modulo11 <= 10) return input === yritystunnusAlkuosa.concat("-".concat(11 - modulo11));
      }
    };

    return Module;
})();