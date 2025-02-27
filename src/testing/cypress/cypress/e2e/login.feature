Feature: User Login
  As a registered user
  I want to log into my account
  So that I can access my dashboard

  Scenario: Successful login with valid credentials
    Given I visit the login page
    When I enter valid credentials
    And I click the login button
    Then I should be redirected to the dashboard

  Scenario: Login with invalid credentials
    Given I visit the login page
    When I enter invalid credentials
    And I click the login button
    Then I should see an error message
