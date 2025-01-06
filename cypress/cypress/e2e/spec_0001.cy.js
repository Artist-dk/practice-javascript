
describe ("test 01", () => {
  it ("test 01", () => {
    cy.visit("https://google.com");
    cy.title().should("eq", "Google");
  })
  it ("test 02", function() {
    cy.visit("https://google.com");
    cy.title().should("eq", "google11");
  })
})


// npx cypress open
// npx cypress run
// npx cypress run --headed
// npx cypress run --spec cypress\e2e\spec_0001.cy.js
// npx cypress run --browser chrome --spec cypress\e2e\spec_0001.cy.js 
// npx cypress run --browser chrome --spec cypress\e2e\spec_0001.cy.js --headed