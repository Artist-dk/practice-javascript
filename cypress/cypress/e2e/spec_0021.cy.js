
// data driven test

describe("MyTestSuite", ()=> {
  it("DataDrivenTest", () => {
    // let userdata;
    cy.fixture("orangehrm2").then((data) => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      // cy.log(userdata)
      data.forEach((userdata) => {
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
    
        cy.get("button[type='submit']").click()
        // 
        
        if(userdata.username=='Admin' && userdata.password=='admin123') {
          cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
          cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', userdata.expected)

          cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
          cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); 
        } else {
          cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text",userdata.expected)
        }
      })
    })
  })
})
