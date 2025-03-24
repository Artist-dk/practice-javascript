/// <reference types="Cypress" />

describe('My first test', ()=>{
    it('finds the content "type"', ()=>{
        cy.visit('https://example.cypress.io')
        cy.contains('type')
    })
})