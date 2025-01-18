

// cypress hooks

describe("MyTestSuite", () => {
  before(()=> {
    cy.log("Launch App")
  })
  after(()=> {
    cy.log("----------- close app ----------")
  })
  beforeEach(()=> {
    cy.log("---------- Login --------------")
  })
  afterEach(() => {
    cy.log("-------- Logout -----------------")
  })
  it('search', () => {
    cy.log("____________ searching ________________")
  })
  it('advanced search', () => {
    cy.log('------------ advanced search --------------')
  })
})
