Feature: Notification

  Scenario Outline: User want to open notification
    
    Given User already in login page
    When User seller input valid credential and click button Masuk
    Then User click bell icon and notification will be pop up
    
   Examples:
   | Case_ID | role    | condition          |
   | C027    | seller  | valid credential   |