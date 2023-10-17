Feature: Edit Product on Secondhand Website

Background:
    Given User already in login page
    And User seller input valid credential and click button Masuk
    
Scenario Outline: User wants to edit an existing product
		When on the homepage, user clicks the product list menu
		And the product list menu page is displayed
    And user clicks on the product they want to manage
    And user's product detail page is displayed
    And user clicks Edit button to edit the product
  	And the website displays required fields for editing the product
  	And user modifies the product <modificationType> to <newValue>
    And user saves the changes by clicking the Terbitkan button if <modificationType> is Description
    Then the product should be <Outcome>

    Examples:
    | case_id | modificationType | newValue                | Outcome             |
    | C024    | Description      | High-performance laptop | edited successfully |
    | C025    | Price            | 6000000ab               | not edited          |