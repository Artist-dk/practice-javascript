// CY003-folderStructure.cy.js
// Cypress Practice - Folderstructure
//
// Description: This file is for practicing Folderstructure in Cypress.

describe('Cypress Folder Structure Verification', () => {
    it('Checks if Cypress folders exist and tests basic functionality', () => {
        // Your Cypress test code here
        cy.log("Practicing Folderstructure");
        // Visit Cypress example page
        cy.visit('https://example.cypress.io');

        // Verify that the essential folders exist in the project
        cy.task('checkFolder', 'cypress/fixtures').should('be.true');
        cy.task('checkFolder', 'cypress/e2e').should('be.true');
        cy.task('checkFolder', 'cypress/support').should('be.true');
        cy.task('checkFolder', 'cypress/plugins').should('be.true');

        // Confirm Cypress commands are working
        cy.contains('Kitchen Sink').should('be.visible');
    });
});
