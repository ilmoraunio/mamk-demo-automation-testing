describe('Companies page', function () {
  beforeEach(function () {
    cy.visit('http://localhost:8080');
  });

  it('page should load up', function () {
    cy.visit('http://localhost:8080');

    cy.title().should('include', 'Yritystunnuksia');
  });

  it('error when inserting wrong y-tunnus', function () {
    cy.get('[name=ytunnus]')
      .type('foobar');

    cy.get('form')
      .submit();

    cy.get('.alert')
      .should('contain', 'Yritystunnus \'foobar\' ei ole oikeanmuotoinen');
  });

  it('adds correct y-tunnus to table', function () {
    cy.get('[name=ytunnus]')
      .type('3748487-0');

    cy.get('form')
      .submit();

    cy.get('.table')
      .should('contain', '3748487-0');
  });
});