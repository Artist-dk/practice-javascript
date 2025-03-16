// CY004-firstTest.cy.js
// Cypress Practice - Firsttest
//
// Description: This file is for practicing Firsttest in Cypress.

describe('My First Cypress Test', () => {
    it('Visits a page and interacts with elements', () => {
        
        // Visit Cypress Example Page
        cy.visit('https://example.cypress.io');
        
        // Verify the page title
        cy.title().should('include', 'Cypress');
        
        // Check if the "Kitchen Sink" text is visible
        cy.contains('Kitchen Sink').should('be.visible');
        
        // Click on the "type" link to navigate
        cy.contains('type').click();
        
        // Verify navigation by checking the new page header
        cy.get('.container h1').should('have.text', 'Typing');
        
        // Type into an input field
        cy.get('.action-email')
        .type('test@example.com')
        .should('have.value', 'test@example.com');
    });
});

