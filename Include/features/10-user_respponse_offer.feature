Feature: Accept Offer
Background: 
		Given User already in login page
    When seller input valid credential and click button Masuk
    And User click bell icon and notification will be pop up
    
  Scenario Outline: user want to response offer 
    When user click product offer
    And user click <condition> product
    Then user have <result> offering product

    Examples: 
      | Case_ID | role   | condition   | result  	  |
      | C028    | seller | tolak  		 | rejected		|