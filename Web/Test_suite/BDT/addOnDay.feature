Feature: Add a task on a specific day in todoist
    As an user I want to add a task on a specific day in the next seven days

Scenario Outline: Add a task on a specific day
  Given I go to todoist login screen
    When I fill in my <email> and <password>
    And I try to login
    And I click on next 7 days
    And I select the day for the new task
    And I name the <task>
    And I add the task
    Then new task shuld exist

    Examples:
      | email                      | password   | task  |
      | myemail@example.com        | asdeunaAF# | task1 | 


    