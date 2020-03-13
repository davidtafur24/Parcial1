Feature: Login into todoist
    As an user I want to authenticate myself within todoist website

Scenario Outline: Login failed with wrong inputs

  Given I go to todoist login screen
    When I fill in my <email> and <password>
    And I try to login
    Then I expect to see <error>

    Examples:
      | email                      | password   | error                    | 
      |                            |            | "Dirección de email no " |
      | myemail@example.com        |            | "Contraseña en bla"      |
      | myemail@example.com        |    1234    | "Email o contraseña inc" |


Scenario Outline: Login successful with right inputs
  Given I go to todoist login screen
    When I fill in my <email> and <password>
    And I try to login
    Then I see <result>

    Examples:
      | email                      | password   | result                    |
      | myemail@example.com        | asdeunaAF# | "Bandeja de entrada"      |


    