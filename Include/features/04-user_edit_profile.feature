@editprofilewebfeature
Feature: Edit profile web feature

	Background: user already login
		Given User already in login page
    When seller input valid credential and click button Masuk
		
	Scenario Outline: <case_id> user edit profile on edit profile page
		When user in edit profile page
		And user edit <field> field with <condition> and user click button simpan
		Then user <result> edit profile
		Examples:
						| case_id  | field    		| condition   		   	| result						|
            | C007	   | all field 		| valid value 		   	| successfully			|
            | C008     | nama					| empty value		   		| not successfully	|
            | C009     | kota					| not select	 	   		| not successfully	|
            | C010     | alamat		 		| empty value 		  	| not successfully  |
            | C011     | no handphone | empty value 	 	   	| not successfully	|
            | C012     | foto					| file more than 1mb  | not successfully	|