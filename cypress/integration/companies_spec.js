describe('Companies page', function () {
  beforeEach(function () {});

  it('page should load up', function () {
    cy.visit('http://localhost:8080');

    cy.title().should('include', 'Yritystunnuksia');
  });
});