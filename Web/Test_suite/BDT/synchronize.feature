Feature: Synchronize todoist
    As an user I want to synchronize my todoist in all my devices

Scenario Outline: Login successful with right inputs
  Given I go to todoist login screen
    When I fill in my <email> and <password>
    And I try to login
    And I open settings
    And I synchronize todoist
    Then I see <result>

    Examples:
      | email                      | password   | result                    |
      | myemail@example.com        | asdeunaAF# | "Bandeja de entrada"      |


    