Feature: Logout
    
    Scenario: User wants to Logout
    Given Buyer already login
    When Buyer click on user account
    And Buyer click button Keluar
    Then Buyer will successfully Logout and direct to Homepage
