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

    it("should return false for types other than string", function () {
      expect(companyValidation.isYritystunnusValid(true)).toEqual(false);
      expect(companyValidation.isYritystunnusValid(null)).toEqual(false);
      expect(companyValidation.isYritystunnusValid(undefined)).toEqual(false);
      expect(companyValidation.isYritystunnusValid(123)).toEqual(false);
      expect(companyValidation.isYritystunnusValid(/foo/)).toEqual(false);
    });
  });

});