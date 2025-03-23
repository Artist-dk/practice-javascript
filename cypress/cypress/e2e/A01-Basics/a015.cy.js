describe('Shadow DOM Test - Extract Text', () => {
  it('should get text from a shadow DOM element', () => {
    cy.visit('https://books-pwakit.appspot.com/');

    // Step 1: Ensure <book-app> exists and is visible
    cy.get('book-app', { timeout: 10000 }) // Wait up to 10s for it to exist
      .should('exist')
      .and('be.visible');

    // Step 2: Ensure <app-header> exists inside the shadow DOM
    cy.get('book-app')
      .shadow()
      .find('app-header', { timeout: 5000 })
      .should('exist')
      .and('be.visible');

    // Step 3: Ensure <div[main-title] a> exists inside the second shadow DOM
    cy.get('book-app')
      .shadow()
      .find('app-header')
      .shadow()
      .find('div[main-title] a', { timeout: 5000 })
      .should('exist')
      .and('be.visible')
      .invoke('text')
      .then((text) => {
        cy.log('Extracted Text:', text.trim()); // ✅ Debugging step
      })
      .should('contain', 'BOOKS');
  });
});
