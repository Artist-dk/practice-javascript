describe('API Tests - Account', () => {
    const baseUrl = 'http://localhost:8081/user';
  
    it('Register a new user', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/register`,
        body: {
          firstName: 'Artist',
          lastName: 'Hack',
          userName: 'Ghost',
          email: 'Artist@ghost.com',
          password: 'Hack@ghost',
          confirmPassword: 'Hack@ghost',
          userType: 'user',
          phoneNo: '1122334455',
          profilePictureURL: 'https://image.url',
          description: 'fullstack developer'
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('message', 'User registered successfully');
      });
    });
  
    it('Login with registered user', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/login`,
        body: {
          username: 'Ghost',
          password: 'Hack@ghost'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
        Cypress.env('authToken', response.body.token);
      });
    });
  
    it('Logout the user', () => {
      const token = Cypress.env('authToken');
      cy.request({
        method: 'POST',
        url: `${baseUrl}/logout`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', 'Logout successful');
      });
    });
  });
  