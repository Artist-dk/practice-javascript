// CY001-gettingStarted.cy.js
// Cypress Practice - Gettingstarted
//
// Description: This file is for practicing Gettingstarted in Cypress.

describe('Getting Started with Cypress', () => {
    it('Visits the Cypress example site and interacts with elements', () => {
        // Your Cypress test code here
        cy.log("Practicing Gettingstarted");
        
        // Visit the website
        cy.visit('https://example.cypress.io');
        
        // Verify the page contains "Kitchen Sink"
        cy.contains('Kitchen Sink').should('be.visible');
        
        // Click on the 'get' link
        cy.contains('get').click();
        
        // Verify the new page contains the expected header
        cy.get('.container h1').should('have.text', 'Querying');
    });
});
    
    