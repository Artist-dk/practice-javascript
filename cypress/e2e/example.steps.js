import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open Google", () => {
  cy.visit("https://www.google.com");
});

When("I search for {string}", (searchTerm) => {
  cy.get("input[name='q']").type(searchTerm).type("{enter}");
});

Then("I see {string} in the results", (expectedText) => {
  cy.contains(expectedText, { timeout: 10000 }).should("be.visible");
});
