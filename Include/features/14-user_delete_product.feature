Feature: Delete product web feature

  Scenario: C026-user delete existing product
    Given User already in login page
    And seller input valid credential and click button Masuk
    When on the homepage, user clicks the product list menu
    And the product list menu page is displayed
    And user clicks on the product they want to manage
    And user's product detail page is displayed
    And user click delete button
    Then user successfully delete existing product