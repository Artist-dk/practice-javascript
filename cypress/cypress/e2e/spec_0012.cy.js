  // 1. Alerts
  // 2. Confirm
  // 3. Prompt
  // Authenticated alerts

describe("Alerts", () => {
  it("JS Alerts", () => {
    cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click()

    cy.on("window:alert",(t)=> {
      expect(t).to.contains("I am a JS Alert")
    })
  })

  it("JS confirm alert - Ok", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm",(t)=> {
      expect(t).to.contains("I am a JS Confirm")
    })
    cy.get("#result").should("have.text","You clicked: Ok")
  })

  it("JS confirm alert - Cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm",(t)=> {
      expect(t).to.contains("I am a JS Confirm")
    })
    cy.on("window:confirm", () => false); // cypress closes alert window using cancel button
    cy.get("#result").should("have.text","You clicked: Cancel")
  })

  // prompt alert
  it("JS prompt alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.window().then((win)=>{
      cy.stub(win,'prompt').returns('welcome');
    })
    cy.get("button[onclick='jsPrompt()']").click();
    // cypress will automatically close prompted alert - it will use OK button - by default
    // cy.on('window:prompt',() => false)
    cy.get("#result").should('have.text','You entered: welcome')
  })

  // authenticated alert

  it("JS authenticated alert", () => {
    // cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: {username: "admin",password: "admin"}})
    // cy.get("div[class='example'] p").should('have.contain', "Congratulations")

    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get("div[class='example'] p").should('have.contain', "Congratulations")

  })
})