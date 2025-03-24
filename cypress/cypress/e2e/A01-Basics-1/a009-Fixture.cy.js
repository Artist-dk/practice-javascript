/* Fixture */


// cy.fixture('data.csv').then((csvData) => {
//     cy.log(csvData); // Logs CSV content
// });
  
// describe('my test suite',()=>{
//     it('csv data')
// })



describe('User Login Tests', () => {
    it('admin data', () => {
        cy.fixture('users').then((data) => {
            cy.log(data.admin.username);
            cy.log(data.admin.password);
        });
    });
  
    it('customer data', () => {
        cy.fixture('users').then((data) => {
            cy.log(data.customer.username);
            cy.log(data.customer.password);
        });
    });
});
