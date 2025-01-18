describe('MyTestSuite',()=> {


  let userdata;
  before (() => {
    cy.fixture("orangehrm").then((data) => {
      userdata = data;
    })
  })
  // direct access
  it("FixtureDemoTest",()=> {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
  

    cy.get("input[placeholder='Username']").type(userdata.username);
    cy.get("input[placeholder='Password']").type(userdata.password);

    cy.get("button[type='submit']").click()
    
    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()

    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',userdata.expected)

  })

  // access through hook - for multiple it blocks
  it("FixturesDemoTest",() => {
    
  })
})