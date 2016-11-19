describe("CompanyValidation", function () {
  var companyValidation;

  beforeEach(function () {
    console.log(CompanyValidation);
    companyValidation = Object.create(CompanyValidation).init();
  });

  it("should be defined", function () {
    expect(companyValidation).toBeDefined();
  });
});