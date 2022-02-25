Feature: Base component

  Scenario: Synthetize

    Given I have a component named "demo-base"
    When I synthetize the component
    Then I should have a directory named "demo-base"
    And Containing the following files:
      | README.md |
