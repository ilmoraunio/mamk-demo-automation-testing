describe("CompanyValidation", function () {
  var companyValidation;

  beforeEach(function () {
    companyValidation = Object.create(CompanyValidation).init();
  });

  it("should be defined", function () {
    expect(companyValidation).toBeDefined();
  });

  describe("isYritystunnusValid", function () {
    it("should be defined", function () {
      expect(companyValidation.isYritystunnusValid).toBeDefined();
    });
  });

});