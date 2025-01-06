// auto suggest dropdown

describe(
  "Auto suggest dropdown",
  () => {
    it("Dynamic dropdown", () => {
      cy.visit("https://google.com/")
      cy.get("textarea[name='q']").type("cypress automation")
      cy.wait(3000)
      cy.get("div.wM6W7d>span").should('have.length',13)
      cy.get("div.wM6W7d>span").each(($el, index, $list) => {
        if($el.text() == 'cypress automation jobs') {
          cy.wrap($el).click()
        }
      })
      cy.get("input[name='q']").should('have.value', 'cypress automation tool')
    })

    // it("Auto suggest dropdown: it 1", () => {
    //   cy.visit("https://www.wikipedia.org/")
    //   cy.get("#searchInput").type("Delhi")
    //   cy.get(".suggestion-link").contains("Delhi University").click();
    // })

    // it("Dynamic dropdown", () => {
    //   cy.visit("https://google.com/")
    //   cy.get(".gLFyf").type("cypress automation")
    // })
  }
);