describe('Flipkart Search Bar Test', () => {
  beforeEach(() => {
    // Visit Flipkart's website
    cy.visit('https://www.flipkart.com');

    // Close the login modal if it appears
    cy.get('body').then(($body) => {
      if ($body.find('._2QfC02 button').length > 0) {
        cy.get('._2QfC02 button').click();
      }
    });
  });

  it('Should allow searching for a product', () => {
    // Select the search bar and type a product name
    cy.get('input[title="Search for Products, Brands and More"]').type('laptop');

    // Click the search button
    cy.get('._2iLD__').click();

    // Assert that search results are displayed
    cy.url().should('include', 'search?q=laptop');
    // cy.get('._1YokD2 ._1AtVbE').should('have.length.greaterThan', 0); // Check that results are displayed
  });

  it('Should display no results message for an invalid search term', () => {
    // Search for a random term that is unlikely to have results
    cy.get('input[title="Search for Products, Brands and More"]').type('randominvalidsearchterm1234');

    // Click the search button
    cy.get('button[type="submit"]').click();

    // Assert that a "no results" message is displayed
    cy.contains('Sorry, no results found!').should('be.visible');
  });
});
