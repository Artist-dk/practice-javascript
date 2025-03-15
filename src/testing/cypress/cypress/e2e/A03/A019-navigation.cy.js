/// <reference types="Cypress" />

describe("My test suite",()=>{
    it('Test 1',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        
        cy.fixture('orangehrm').then((data)=>{
            cy.get('input[placeholder="Username"]').type(data.username);
            cy.get('input[placeholder="Password"]').type(data.password);
            cy.get("button[type='submit']").click();
    
            cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)")
            .should('have.text',data.expected)
        })

        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)")
        .click()

        cy.wait(3000)
        
        cy.go('back')
        // cy.ge(-1)
        cy.wait(3000)
        
        cy.go('forward')
        // cy.go(1)
        cy.wait(3000)
    })
})