Feature: Add a project in todoist
    As an user I want to create a project with different tasks

Scenario Outline: Login successful with right inputs
  Given I go to todoist login screen
    When I fill in my <email> and <password>
    And I try to login
    And I click on add a project
    And I give the name <project> to the project
    And I add the project
    And I add a task to the project
    And I name the <task>
    Then I see <result>

    Examples:
      | email                      | password   | task  | project  | result                    |
      | myemail@example.com        | asdeunaAF# | task1 | project1 | "Bandeja de entrada"      |


    