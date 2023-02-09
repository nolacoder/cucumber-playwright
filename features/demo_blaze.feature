Feature: Playwright demo tests
    Feature description : To run demo tests with Playwright library

  @demo
  Scenario: Verify product home page
    Given I am on 'PRODUCT STORE' page
    When I click categories list
    Then I see 'Phones', 'Laptops', and 'Monitors' under categories

  @demo
  Scenario Outline: Verify relevant products are displayed
    Given I am on 'PRODUCT STORE' page
    When I choose '<category>'
    Then I see '<product>' in display

    Examples: 
      | category | product           |
      | Phones   | Samsung galax s6 |
      | Laptops  | Sony vaio i5      |
      | Monitors | Apple monitor 24  |
