import 'cypress-iframe';
require('@4tw/cypress-drag-drop')

// npm install --save-dev @4tw/cypress-drag-drop
describe("Mouse operation", () => {
  it("MouseHover", () => {
    cy.visit("https://demo.opencart.com/");
    // cy.wait(5000)
    cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
    .should('not.be.visible')
    let a = cy.get('.nav > :nth-child(1) > .dropdown-toggle')
      .trigger("mouseover")
      .click()
    cy.log(a)
    cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
      .should('be.visible')
  })

  it.skip("Right click", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    // Apprach 1
    // cy.get('.context-menu-one.btn-neutral').trigger('contextmenu')
    // cy.get('.context-menu-icon-cut > span').should('be.visible')

    // Approach2
    cy.get('.context-menu-one.btn-neutral').rightclick()
    cy.get('.context-menu-icon-cut > span').should('be.visible')
  })

  it("Double click", () => {
    cy.visit("https://www.w3schools.com/jsrEF/tryit.asp?filename=tryjsref_ondblclick");
    cy.wait(2000)
    cy.frameLoaded("#iframeResult")
    cy.visit("https://www.w3schools.com/jsrEF/tryit.asp?filename=tryjsref_ondblclick");


    // // Double-click the element inside the iframe
    // cy.iframe("#iframeResult").find("p[ondblclick='myFunction()']").dblclick();
    // // Check that the value has changed inside the iframe
    // cy.iframe("#iframeResult").find("#demo").should("have.value", "Hello World");

    
    cy.iframe("#iframeResult").find("p[ondblclick='myFunction()']").dblclick();
    cy.wait(2000)
    cy.iframe("#iframeResult").find("#demo").should("have.value", "Hello World ")
    
  })
  
  it("Drag and drop using plugin", () => {
    // 
    cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
    cy.wait(2000)
    cy.get("#box6").drag("#box106",{force: true})
    // cy.get("#box6").click()
  })
  
  it.only("Scrolling page", () => {

    cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html", {failOnStatusCode: false})
    cy.wait(20000)
    cy.get(":nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img").scrollIntoView({duration: 2000});

  })
})