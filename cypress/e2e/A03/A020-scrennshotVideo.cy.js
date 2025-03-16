/// <reference types="Cypress" />

describe("My test suite",()=>{
    it('Capture screenshots manualy',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        
        cy.fixture('orangehrm').then((data)=>{
            cy.get('input[placeholder="Username"]').type(data.username);
            cy.get('input[placeholder="Password"]').type(data.password);
            cy.get("button[type='submit']").click();
    
            cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)")
            .should('have.text',data.expected)

            cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)")
            .click()
        })

        cy.wait(3000)

        cy.screenshot("homepage")
        cy.get("img[alt='client brand banner']").screenshot();
    })
    it.only('Capture screenshots and videos',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        
        cy.fixture('orangehrm').then((data)=>{
            cy.get('input[placeholder="Username"]').type(data.username);
            cy.get('input[placeholder="Password"]').type(data.password);
            cy.get("button[type='submit']").click();
    
            cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)")
            .should('have.text',data.expected)

            cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)")
            .click()
        })

        cy.wait(3000)

        cy.screenshot("homepage")
        cy.get("img[alt='client brand banner']").should('have.text', 'orangehrm')
    })

    // npx cypress run --spec practice-javascript\src\testing\cypress\cypress\e2e\A03\A020-scrennshotVideo.cy.js
})