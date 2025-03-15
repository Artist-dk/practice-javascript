/// <reference types="Cypress" />

describe('MyTestSuite', ()=>{
    before(()=>{
        cy.log("--------- before")
    })
    beforeEach(()=>{
        cy.log("--------- beforeEach ")
    })
    after(()=>{
        cy.log("--------- after ")
    })
    afterEach(()=>{
        cy.log("--------- afterEach ")
    })
    it('search', ()=>{
        cy.log("--------- searching ")
    })
    it('advanced search',()=>{
        cy.log("--------- advanced search ")
    })
    it('listing products',()=>{
        cy.log("--------- listing products ")
    })
})