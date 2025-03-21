// import {Given, When, Then } from 'cypress-cucumber-preprocessor';

// Given("I open login page", () => {
//     cy.visit('http://zero.webappsecurity.com/login.html')
// })

// When('I submit login', () => {
//     // fill username
//     cy.get('#user_login').type('username');
//     // fill password
//     cy.get('#user_password').type('password')
//     // submit form
//     cy.get('input[name="submit"]').click()
// })

// Then("I should see homepage", () => {
//     // get some element after login
//     cy.get('#account_summary_tab').should('be.visible');
// })



import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the login page", () => {
  cy.visit("http://zero.webappsecurity.com/login.html");
});

When("I enter valid credentials", () => {
  cy.get("input[name='email']").type("user@example.com");
  cy.get("input[name='password']").type("Password123!");
});

When("I enter invalid credentials", () => {
  cy.get("input[name='email']").type("wrong@example.com");
  cy.get("input[name='password']").type("WrongPass!");
});

When("I click the login button", () => {
  cy.get("button[type='submit']").click();
});

Then("I should be redirected to the dashboard", () => {
  cy.url().should("include", "/dashboard");
});

Then("I should see an error message", () => {
  cy.get(".error-message").should("be.visible");
});
