// Extract Text from Shadow DOM Element

describe('', () => {

  // Extract Text
  it('should get text from a shadow DOM element', () => {
    cy.visit('https://books-pwakit.appspot.com/');

    cy.screenshot();
    cy.get('book-app')
      .shadow()
      .find('app-header')
      // .shadow()
      .find('.toolbar-top') 
      .should('have.text', '\n \n \n BOOKS\n \n \n \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
  });
// });
// describe('Shadow DOM Test - Type in Input', () => {
  it('should type in a shadow DOM input field', () => {
    cy.visit('https://books-pwakit.appspot.com/');

    cy.get('book-app')
      .shadow()
      .find('app-header')
      .shadow()
      .find('input')
      .type('Cypress Shadow Test')
      .should('have.value', 'Cypress Shadow Test');
  });
// });
// describe('Shadow DOM Test - Click Button', () => {
  it('should click a button inside Shadow DOM', () => {
    cy.visit('https://books-pwakit.appspot.com/');

    cy.get('book-app')
      .shadow()
      .find('book-input-decorator')
      .shadow()
      .find('input')
      .type('Search Test');

    cy.get('book-app')
      .shadow()
      .find('book-input-decorator')
      .shadow()
      .find('button')
      .click();
  });
// });
// describe('Shadow DOM Test - Find Elements Globally', () => {
  it('should find an element inside any shadow DOM', () => {
    cy.visit('https://books-pwakit.appspot.com/');

    cy.get('input', { includeShadowDom: true }).type('Global Search');
  });
});

