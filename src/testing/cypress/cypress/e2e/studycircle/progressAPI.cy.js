/// <reference types="cypress" />

describe('Course Progress Tracking API Tests', () => {
    let token;
    let userId;
    let lessonId = 1;  // Use valid IDs from your DB
    let courseId = 1;   // Use a valid course ID from your DB

    before(() => {
        // Log in and get a token
        cy.request('POST', 'http://localhost:8081/user/login', {
            username: 'Ghost',
            password: 'Hack@ghost',
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            expect(response.status).to.eq(200);
            token = response.body.token;
            userId = response.body.user.id;
        });
    });

    it('✅ Track lesson progress (POST /api/progress/:lessonId)', () => {
        cy.request({
            method: 'POST',
            url: `http://localhost:8081/api/progress/${lessonId}`,
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq('Progress updated');
        });
    });

    it('✅ Get course progress (GET /api/progress/:courseId)', () => {
        cy.request({
            method: 'GET',
            url: `http://localhost:8081/api/progress/${courseId}`,
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('progress');
            expect(response.body.progress).to.be.an('array');
        });
    });

    it('❌ Track progress with invalid lessonId', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:8081/api/progress/999999',
            headers: { Authorization: `Bearer ${token}` },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(500);
            expect(response.body.message).to.eq('Error updating progress');
        });
    });

    it('❌ Access progress without token (unauthorized)', () => {
        cy.request({
            method: 'GET',
            url: `http://localhost:8081/api/progress/${courseId}`,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.message).to.eq('No token provided');
        });
    });
});
