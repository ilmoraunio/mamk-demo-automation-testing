describe('CompaniesController', function() {
    var $controller;
    var CompaniesController;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.companies'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
        CompaniesController = $controller('CompaniesController', {});
    }));

    it('should be defined', function () {
        expect(CompaniesController).toBeDefined();
    });
});