describe("CompanyService", function () {
  var companyService;
  var spiedCompanyModel;

  beforeEach(function () {
    companyService = Object.create(CompanyService).init({companyModel: []});
  });

  it("add to collection", function () {
    var company = { ytunnus: "3748487-0" };
    companyService.add(company);
    expect(companyService.testApi.getCompanies()).toEqual([company]);
  });

  it("should return empty collection if nothing added", function () {
    expect(companyService.get()).toEqual([]);
  });

  it("get from collection", function () {
    var companies = [{ ytunnus: "1" }, 
                     { ytunnus: "2" }];
    companyService.testApi.setCompanies(companies);
    expect(companyService.get()).toEqual(companies);
  });
});