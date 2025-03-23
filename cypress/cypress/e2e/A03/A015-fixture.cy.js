/// <reference types="Cypress" />

describe("my test suite", ()=>{
    it("Fixtures Demo Test",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        
        cy.fixture('orangehrm').then((data)=>{
            cy.get('input[placeholder="Username"]').type(data.username);
            cy.get('input[placeholder="Password"]').type(data.password);
            cy.get("button[type='submit']").click();
    
            cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)")
            .should('have.text',data.expected)
        })
    })
    // it("",()=>{})
})