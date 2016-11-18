describe('Companies factory', function () {
    var Companies;

    beforeEach(angular.mock.module('api.companies'));

    beforeEach(inject(function (_Companies_) {
        Companies = _Companies_;
    }));

    it('should exist', function () {
        expect(Companies).toBeDefined();
    });

    describe('.all()', function() {
      it('.all()', function () {
          expect(Companies.all).toBeDefined();
      });

      var companiesList = [
        { ytunnus: "2038406-4"},
        { ytunnus: "4110278-3"},
        { ytunnus: "5853528-6"}
      ];

      it('should return a hardcoded list of items', function () {
          expect(Companies.all()).toEqual(companiesList);
      });
    });

    describe('.findById()', function() {
      it('should exist', function () {
        expect(Companies.findById).toBeDefined();
      });

      it('should return a company if it exists', function () {
        expect(Companies.findById("2038406-4")).toEqual({ ytunnus: "2038406-4" });
      });

      it('should return undefined if a company does not exist', function () {
        expect(Companies.findById('some_id_not_in_collection')).not.toBeDefined();
      });
    });

});

