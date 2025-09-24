Feature: Checkout with a coupon

  Scenario Outline: User applies coupon during checkout
    Given the user login using valid "<username>" and "<password>" credentials
    When the user adds "<product>" to the cart
    And the user applies coupon "<coupon>" during the checkout process
    Then I should see "<expectedOutcome>" on the total

Examples:
  | username | password | product     | coupon     | expectedOutcome       |
  | user1    | pass123  | iPhone 15   | SAVE10     | discount applied      |
  | user2    | pass456  | MacBook Pro | INVALID123 | coupon rejected       |