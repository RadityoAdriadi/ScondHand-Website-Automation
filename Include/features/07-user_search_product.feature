@search_product
Feature: Search Product

    #To ensure that User can or can not search the product

    Background: user access the website
        Given user access the web url
    
    #Telusuri_Kategori
    Scenario: C015-user can see the search result with same Category
        When user click one Category button in Telusuri Kategori section on Homepage
        Then user can see product with the same category on search result
    
    #Search_bar
    Scenario Outline: user search the product with search bar
        When user input <condition> keyword in Search box on Homepage and click Enter
        Then user can see product list <result>
    
            Examples:
            | case_id | condition  | result 							      |
            | C013    | valid      | with valid keyword         |
            | C016    | wrong      | empty      				        |
            | C017    | empty      | in same Homepage as before |
