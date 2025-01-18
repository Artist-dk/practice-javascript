// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress">
/// <reference types="cypress-xpath">





// custom commands for clikcking on link using label

Cypress.Commands.add('clickLink',(label) => {
  cy.get('button[id="submit"]').click()

  cy.get('h1[class="post-title"]').contains("Logged In Successfully")
})

// cy.get('button[id="submit"]').click()


// custome command for login

Cypress.Commands.add("loginapp", (email,password) => {
  cy.get("#Email").type(email);
  cy.get("#Password").type(password)
  cy.get("button[class='button-1 login-button']").click()
})

Cypress.Commands.add("orangehrm",()=> {
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  cy.title().should('eq',"OrangeHRM")
  cy.get("input[placeholder='username']").type("Admin")
  cy.get("input[placeholder='password']").type("admin123")
  cy.get("button[type='submit']").click()
})