Feature: Register

 Scenario Outline: User want Register
 Given User already on Register page
 When User fill nama and <condition> after that click button Daftar
 Then User will <results> Register
 Examples:
     | Case_ID | condition          | results    | 
     | C003    | invalid credential | not success|
     | C004    | valid credential   | success    |
