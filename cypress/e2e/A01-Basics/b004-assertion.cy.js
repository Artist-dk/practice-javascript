/// <reference types="Cypress" />

describe('My first test', ()=>{
    it('clicking "type" navigates to a new url',()=>{
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()

        cy.url().should('include','/commands/actions')
    })
})