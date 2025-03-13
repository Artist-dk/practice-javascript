describe('Text Editor', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/practice-javascript/src/testing/cypress/cypress/e2e/A04/a001-iframe.html');
    });
  
    it('should allow typing and editing text', () => {
      cy.get('#editor').then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).type('Hello, Cypress!');
        cy.wrap($body).should('contain', 'Hello, Cypress!');
  
        // Add bold formatting and verify
        cy.get('#editor').then(($iframe2) => {
          const doc = $iframe2.contents().get(0);
          const selection = doc.getSelection();
          const range = doc.createRange();
          range.selectNodeContents($body.get(0));
          selection.removeAllRanges();
          selection.addRange(range);
          doc.execCommand('bold', false, null);
          cy.wrap($body).should('have.css', 'font-weight', '700'); // or 'bold' in some browsers
        });
  
        // Add italic formatting and verify
        cy.get('#editor').then(($iframe3) => {
          const doc = $iframe3.contents().get(0);
          const selection = doc.getSelection();
          const range = doc.createRange();
          range.selectNodeContents($body.get(0));
          selection.removeAllRanges();
          selection.addRange(range);
          doc.execCommand('italic', false, null);
          cy.wrap($body).should('have.css', 'font-style', 'italic');
        });
  
        // Clear the text and verify
        cy.wrap($body).clear();
        cy.wrap($body).should('be.empty');
      });
    });
  });