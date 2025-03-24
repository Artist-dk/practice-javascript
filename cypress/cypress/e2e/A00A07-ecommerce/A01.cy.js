
let obj = new Object();

describe("login to page", () => {
    it("login", () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.get("#add-to-cart-sauce-labs-fleece-jacket").click()
        cy.get(".shopping_cart_link").click();
        cy.get("#remove-sauce-labs-fleece-jacket").should("contain", "Remove");
        cy.get("#continue-shopping").click();
        // cy.get('#Sauce Labs Backpack')

        // Search for "Sauce Labs Backpack" in the product list
        cy.contains(".inventory_item_name", "Sauce Labs Backpack")
            .parents(".inventory_item") // Get the parent container of the item
            .find("button") // Find the button inside that container
            .click();

        // Open cart
        cy.get(".shopping_cart_link").click();

        // Verify the item has been added
        cy.contains(".inventory_item_name", "Sauce Labs Backpack").should("be.visible");

    })
})