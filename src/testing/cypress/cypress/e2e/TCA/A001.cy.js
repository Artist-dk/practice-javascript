
/// <reference types="Cypress" />
describe("Test suite",()=>{
    beforeEach(()=>{
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
    })
    it("Test first",()=>{
        cy.get("input[name='first_name']").type('digambar')
        cy.get('input[name="last_name"]').type('Kumbhar')
        cy.get('input[name="email"]').type('digambarckumbhar299@gmail.com')
        cy.get('textarea[name="message"]').type("this is message")
        cy.get('input[type="submit"][value="SUBMIT"]').click()

        cy.get('#contact_reply > h1').contains('Thank You for your Message!').should('be.visible')
    })
    it("Test second",()=>{
        cy.get("input[name='first_name']").type('digambar')
        cy.get('input[name="last_name"]').type('Kumbhar')
        cy.get('input[name="email"]').type('digambarckumbhar299@gmail.com')
        // cy.get('textarea[name="message"]').type("this is message")
        cy.get('input[type="submit"][value="SUBMIT"]').click()

        cy.get('body').contains(`Error: all fields are required`).should('be.visible')
    })
})

// https://www.zoho.com/commerce/free-demo.html