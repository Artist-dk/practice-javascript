

describe("My test suite", () => {
    it("add to cart", () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        cy.contains('.inventory_item_name ', 'Sauce Labs Bike Light')
        .parents('.inventory_item')
        .find('button')
        .should('be.enabled')   // assertion
        .click()

        cy.get(".shopping_cart_badge").click();

        cy.contains('.inventory_item_name','Sauce Labs Bike Light').should('be.visible')
    })
})