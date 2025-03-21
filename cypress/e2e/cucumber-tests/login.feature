Feature: Login functionality

  Scenario: Successful login
    Given I visit the login page
    When I enter valid credentials
    And I click the login button
    Then I should be redirected to the dashboard

  Scenario: Unsuccessful login
    Given I visit the login page
    When I enter invalid credentials
    And I click the login button
    Then I should see an error message