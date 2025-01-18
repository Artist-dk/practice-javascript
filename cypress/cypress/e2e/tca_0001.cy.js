// https://practicetestautomation.com/practice-test-login/


describe("My Test suit", () => {
  it("Positive assertion", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/")

    cy.get("input[name=\"username\"]").type("student")
    cy.get("input[name=\"password\"]").type("Password123")
    cy.get("button#submit").click()

    cy.get("h1[class=\"post-title\"]").contains(
      "Logged In Successfully"
    )
  })
  
  it("Negative assertion", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/")

    cy.get("input[name=\"username\"]").type("teacher")
    cy.get("input[name=\"password\"]").type("Temp123")
    cy.get("button#submit").click()

    cy.get("div[id=\"error\"]").contains(
      "Your username is invalid!"
    )
  })
})