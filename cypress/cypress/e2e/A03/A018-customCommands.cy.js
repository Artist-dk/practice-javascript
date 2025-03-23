/// <reference types="Cypress" />

describe("Custom commands", ()=>{
    it("Handling links",()=>{
        cy.visit('https://demo.nopcommerce.com', {
            headers: {
                'Referer': 'https://google.com',
                'Accept-Language': 'en-US,en;q=0.9',
            }
        });
        cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)")
        .click()
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro')
    })
    it("Handling links",()=>{
        cy.visit('https://demo.nopcommerce.com', {
            headers: {
                'Referer': 'https://google.com',
                'Accept-Language': 'en-US,en;q=0.9',
            }
        });
        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');
    })
    it.only("Overwriting existing command",()=>{
        cy.visit('https://demo.nopcommerce.com', {
            headers: {
                'Referer': 'https://google.com',
                'Accept-Language': 'en-US,en;q=0.9',
            }
        });

        // using custom command
        cy.clickLink("APPLE MACBOOK PRO 13-inch");
        cy.get("div[class='product-name] h1'").should('have.text', 'Apple MacBook Pro 13-inch');
    })
    // it("Login command",()=>{})
})