Feature: Add task in todoist
    As an user I want to add a task for today in todoist

Scenario Outline: Add task succesfully
  Given I go to todoist login screen
    When I fill in my <email> and <password>
    And I try to login
    And I click on new task
    And I name the <task>
    And I add the task
    Then <result> appears

    Examples:
      | email                      | password   | task  | result                    |
      | myemail@example.com        | asdeunaAF# | task1 |"task1"      |


    