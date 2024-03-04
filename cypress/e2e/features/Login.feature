@FEATURE_001
Feature: As a customer I would like to have an account

  @login @logout
  Scenario: Login/logout - Nominal Case

    Given go to the e-commerce web site
    And access to the menu 'Signup / Login'

    When connect with the account 'VTAH'
    Then the logged account is 'VTAH'
    And the menu 'Logout' is display
    And the menu 'Delete Account' is display
    And the menu 'Signup / Login' is not display

    When access to the menu 'Logout'
    Then the menu 'Signup / Login' is display
    And the menu 'Logout' is not display
    And the menu 'Delete Account' is not display