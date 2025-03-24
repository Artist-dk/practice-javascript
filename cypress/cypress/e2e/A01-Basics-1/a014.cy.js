describe('Shadow DOM Test - Extract Text', () => {
  it('should get text from a shadow DOM element', () => {
    
    cy.visit('https://books-pwakit.appspot.com/', { failOnStatusCode: false });
    
    cy.get('book-app').should('exist');
    cy.get('book-app').shadow().find('app-header').should('exist');
    cy.get('book-app').invoke('text').should('include', 'BOOKS');
    // cy.get('book-app')
    // .shadow()
    // .find('app-header')   // First shadow root
    // .shadow()
    // .find('.toolbar-top') // Second shadow root
    // .should('have.text', 'BOOKS');
  


    cy.get('book-app') 
      .shadow()
      .find('app-header')
      .shadow()
      .find('div[main-title] a')
      .should('contain.text', 'BOOKS'); // Use `contain.text` instead of `have.text`
      // cy.get('div[main-title] a').should('contain.text', 'BOOKS');

    cy.get('book-app')
      .shadow()
      .find('app-header')
      .shadow()
      .find('div[main-title] a')
      .should('contain.text', 'BOOKS'); // ✅ Ensure 'BOOKS' text exists inside the link

  });
});