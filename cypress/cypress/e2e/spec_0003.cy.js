// Check Flight Status

// https://www.airindia.com/in/en/manage/flight-status.html

// flight-number-ip-id
// mat-select-value-1

// form-btn booking-flight-btn

describe("check flight", () => {
  it ("visit to website", () => {
    cy.visit("https://www.makemytrip.com")
    cy.get("#flight-number-ip-id").type()
    cy.contains("span.mat-option-text", "1 Jan 2025")
    .should("be.visible")
    .and("have.text","1 Jan 2025")
  })
})


// npm install -D cypress-xpath

{/* <span class="mat-option-text">31 Dec 2024</span>
<span class="mat-option-text">1 Jan 2025</span>
<span class="mat-option-text">2 Jan 2025</span>
<span class="mat-option-text">3 Jan 2025</span>
<span class="mat-option-text">4 Jan 2025</span> */}