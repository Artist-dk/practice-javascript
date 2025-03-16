/// <reference types="Cypress" />

// data driven test

describe("My test suite",()=>{
    it('Data Driven Test',()=>{
        cy.fixture("orangehrm2").then((data)=>{
            cy.log(data)
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            data.forEach((userdata) => {
                cy.log(userdata)
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get('input[placeholder="Password"]').type(userdata.password);
                cy.get("button[type='submit']").click()
                
                if(userdata.username==='Admin' && userdata.password==='admin123') {
                    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)")
                    .should('have.text',userdata.expected)

                    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)")
                    .click()
                    cy.get(".oxd-userdropdown-tab")
                    .click()
                    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)")
                    .click()
                } else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text',userdata.expected);
                }
            });
        })
    })
})