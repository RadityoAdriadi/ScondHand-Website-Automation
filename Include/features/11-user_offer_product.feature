@offer_product
Feature: Offer Product

    #To ensure that user as buyer can or can not make an offer
  
  	Background: user already login and edit profile
  		Given user already login as buyer
			And user click button profile and profile account
			And user edit all field with valid value and user click button simpan
			And user input valid keyword in Search box on Homepage and click Enter
  		
    Scenario Outline: user offering the product
			When user click product and click Saya tertarik dan ingin nego button
			And user input <type> price and click Kirim button
			Then user <status> offer the product and page detail <change>
			
            Examples:
            | case_id | type  			| status 			   | change																		|
            | C018    | non decimal | successfully	 | button change to Menunggu Respon Penjual |

