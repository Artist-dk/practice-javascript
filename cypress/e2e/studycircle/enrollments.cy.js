describe("Enrollments API Integration Tests", () => {
    const apiUrl = "http://localhost:8081/enroll";
    let token;
    let userId;
    let courseId = 3;

    before(() => {
        // Mock user login to get token
        cy.request("POST", "http://localhost:8081/user/login", {
            username: "Ghost",
            password: "Hack@ghost",
        }).then((response) => {
            token = response.body.token;
            userId = response.body.user.id;
        });
    });

    it("Should enroll user in a course successfully", () => {
        cy.request({
            method: "POST",
            url: apiUrl,
            headers: { Authorization: `Bearer ${token}` },
            body: { courseId },
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq("User successfully enrolled in the course");
        });
    });

    it("Should prevent duplicate enrollments", () => {
        cy.request({
            method: "POST",
            url: apiUrl,
            headers: { Authorization: `Bearer ${token}` },
            body: { courseId },
            failOnStatusCode: false, // prevent test from failing on non-200
        }).then((response) => {
            expect(response.status).to.eq(409);
            expect(response.body.message).to.eq("User already enrolled in this course");
        });
    });

    it("Should handle missing courseId in request", () => {
        cy.request({
            method: "POST",
            url: apiUrl,
            headers: { Authorization: `Bearer ${token}` },
            body: {},
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.message).to.eq("Course ID is required");
        });
    });

    it("Should reject unauthorized access", () => {
        cy.request({
            method: "POST",
            url: apiUrl,
            body: { courseId },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.message).to.eq("Unauthorized: No token provided");
        });
    });
});
