// Custome commands

describe('Login Tests with Custom Command', () => {
    it('logs in as an admin using custom command', () => {
        cy.userData('admin');
    });
    
    it('logs in as a customer using custom command', () => {
        cy.userData('customer');
    });
});
    
    