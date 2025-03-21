Feature: Google Search
  Scenario: Searching on Google
    Given I open Google
    When I search for "Cypress"
    Then I see "Cypress" in the results
