describe('CompaniesController', function() {
    var $controller;
    var CompaniesController;
    var CompaniesFactory;

    var companiesList = [
      { ytunnus: "2038406-4"},
      { ytunnus: "4110278-3"},
      { ytunnus: "5853528-6"}
    ];

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.companies'));
    beforeEach(angular.mock.module('api.companies'));

    beforeEach(inject(function (_$controller_, _Companies_) {
        $controller = _$controller_;
        CompaniesFactory = _Companies_;

        spyOn(CompaniesFactory, 'all').and.callFake(function () {
            return companiesList;
        });

        CompaniesController = $controller('CompaniesController', { Companies: CompaniesFactory});
    }));

    it('should be defined', function () {
        expect(CompaniesController).toBeDefined();
    });

    it('should initialize with a call to Companies.all()', function () {
      expect(CompaniesFactory.all).toHaveBeenCalled();
      expect(CompaniesController.companies).toEqual(companiesList);
    });
});