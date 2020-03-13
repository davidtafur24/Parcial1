Feature: Complete a task in todoist
    As an user I want to complete a task I create in todoist

Scenario Outline: Complete task in todoist
  Given I go to todoist login screen
    When I fill in my <email> and <password>
    And I try to login
    And I click on new task
    And I name the <task>
    And I add the task
    And I complete the task
    Then a message with <result> appears


    Examples:
      | email                      | password   | task  | result                    |
      | myemail@example.com        | asdeunaAF# | task1 | "1 tarea completada"      |


    