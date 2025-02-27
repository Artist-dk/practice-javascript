import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I open the website', () => {
  cy.visit('https://saucedemo.com'); // Replace with your website URL
});

When('I enter my username {string} and password {string}', (username, password) => {
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
});

And('I click the login button', () => {
  cy.get('button[type="submit"]').click();
});

Then('I should be logged in', () => {
  cy.url().should('eq', 'https://saucedemo.com/dashboard');
  cy.contains('Welcome, User!').should('be.visible');
});