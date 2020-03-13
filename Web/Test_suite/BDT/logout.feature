Feature: Logout of todoist
    As an user I want to logout form todoist

Scenario Outline: Login successful with right inputs
  Given I go to todoist login screen
    When I fill in my <email> and <password>
    And I try to login
    And I open settings
    And I logout
    Then I am back at homepage

    Examples:
      | email                      | password   |
      | myemail@example.com        | asdeunaAF# |


    