import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the login page', () => {
  cy.visit('/login');
});

When('I enter valid credentials', () => {
  cy.get('input[name="email"]').type('user@example.com');
  cy.get('input[name="password"]').type('Password123!');
});

When('I enter invalid credentials', () => {
  cy.get('input[name="email"]').type('wrong@example.com');
  cy.get('input[name="password"]').type('WrongPass!');
});

When('I click the login button', () => {
  cy.get('button[type="submit"]').click();
});

Then('I should be redirected to the dashboard', () => {
  cy.url().should('include', '/dashboard');
});

Then('I should see an error message', () => {
  cy.get('.error-message').should('be.visible');
});
