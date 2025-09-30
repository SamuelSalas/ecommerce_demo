Feature: Checkout with a coupon

  Scenario Outline: User applies coupon during checkout
    Given the user login using valid credentials
    When the user adds "<product>" to the cart
    And the user applies coupon "<coupon>" during the checkout process
    Then I should see "<expectedOutcome>" on the total

    Examples:
      | product          | coupon     | expectedOutcome  |
      | Audible Orderflow | SAVE10     | discount applied |
      | Close Flip Algo  | INVALID123 | coupon rejected  |
