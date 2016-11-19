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

    it("returns OK for format NNNNNNN-T", function () {
      expect(companyValidation.isYritystunnusValid("0737546-2")).toEqual(true);
    });

    it("returns error for other formats than NNNNNNN-T", function () {
      expect(companyValidation.isYritystunnusValid("12345678")).toEqual(false);
      expect(companyValidation.isYritystunnusValid("foo")).toEqual(false);
    });

    it("0737546-2 is valid", function () {
      expect(companyValidation.isYritystunnusValid("0737546-2")).toEqual(true);
    });

    it("1572860-0 is valid", function () {
      expect(companyValidation.isYritystunnusValid("1572860-0")).toEqual(true);
    });
    
    it("1572860-9 is not valid", function () {
      expect(companyValidation.isYritystunnusValid("1572860-9")).toEqual(false);
    });

  });

});