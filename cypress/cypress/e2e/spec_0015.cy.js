// describe("Handling iframes",  () => {
//   it("Approach 1 ", () => {
//     // https://the-internet.herokuapp.com/iframe
//     cy.visit("https://the-internet.herokuapp.com/iframe")
//     cy.get('button.tox-notification__dismiss').click()
//     cy.wait(4000)
//     const iframe = cy.get("#mce_0_ifr")
//       .its('0.contentDocument.body')
//       .should('be.visible')
//       .then(cy.wrap)
//     iframe.clear().type("welcome {cmd+a}")
//   })
// })


describe("Handling iframes", () => {
  it("Change contenteditable attribute", () => {
    // Visit the page with the iframe
    cy.visit("https://the-internet.herokuapp.com/iframe");

    // Dismiss the notification (if it exists)
    cy.get('button.tox-notification__dismiss').click();

    // Access the iframe's body and change contenteditable attribute to true
    cy.get("#mce_0_ifr")  // Find the iframe by its ID
      .its('0.contentDocument.body')  // Access the body of the iframe
      .then((body) => {
        // Set contenteditable to true using plain JavaScript
        body.contentEditable = 'true';
      });

    // Optionally, assert that the contenteditable attribute was correctly set
    cy.get("#mce_0_ifr")
      .its('0.contentDocument.body')
      .should('have.attr', 'contenteditable', 'false');
    
    // Now you can interact with the body as an editable area
    cy.get("#mce_0_ifr").its('0.contentDocument.body')
      .clear().type("Now the body is editable!");
  });

  it("Approach 1", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");

    cy.get('button.tox-notification__dismiss').click();

    cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible')
      .then(cy.wrap)
      .find('body')  // Ensure you're interacting with the correct element inside the iframe
      .clear()  // Clear any existing text
      .type("welcome {ctrl+a}");  // Type and select all text
  });
});
