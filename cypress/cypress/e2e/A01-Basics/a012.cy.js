describe('test suite', () => {
  beforeEach(() => {
    const env = Cypress.env('ENV') || 'dev';
    cy.fixture(`users.${env}`).then((data) => {
      cy.wrap(data).as('userData');
    });
  });

  it('admin based on environment', function () {
    cy.log(this.userData.admin.username);
    cy.log(this.userData.admin.password);
  });
});
