import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the SauceDemo login page", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("I enter username {string}", (username) => {
  cy.get('input[id="user-name"]').type(username);
});

When("I enter password {string}", (password) => {
  cy.get("input#password").type(password);
});

When("I click the login button", () => {
  cy.get("input#login-button").click();
  cy.wait(1000);
});

Then("I should see the application logo", () => {
  cy.get('div.app_logo').should('be.visible');
});
