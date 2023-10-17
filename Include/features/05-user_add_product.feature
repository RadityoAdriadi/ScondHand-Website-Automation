Feature: Add Product on Secondhand Website

Background:
    Given User already in login page
    And User seller input valid credential and click button Masuk

Scenario Outline: User wants to add a product on Secondhand Website
  When user clicks +Jual button to add a product on the homepage
  And the website displays required fields for adding a new product
  And user inputs product details in the required fields:
  	| Field         | Value          |
    | Nama Produk   | <Name>         |
    | Harga Produk  | <Price>        |
    | Kategori      | <Category>     |
    | Deskripsi     | <Description>  |
    | Gambar Produk | <Image>        |
  And user clicks the button of <Action>
  Then the product is <Outcome>
  Examples:
  | case_id | Name               | Price   | Category | Description              | Image                                                                                                                                   | Action                     | Outcome                |
  | C021    | Group4_Laptop ASUS | 6000000 | 4        | High-quality electronics | /Users/syaviraalatas/REZA/Bootcamp Binar Academy/QAE Quality Assurance Engineer/Challange Level Platinum/katalon/Images/laptop_asus.jpg | Terbitkan                  | published successfully |
  | C022    | Smartphone         | 3000000 | 4        | High-quality smartphone  | /Users/syaviraalatas/REZA/Bootcamp Binar Academy/QAE Quality Assurance Engineer/Challange Level Platinum/katalon/Images/smartphone.jpg  | Preview                    | previewed successfully |
  | C023    |                    | 1500000 | 4        | Ergonomic mouse          | /Users/syaviraalatas/REZA/Bootcamp Binar Academy/QAE Quality Assurance Engineer/Challange Level Platinum/katalon/Images/mouse.jpg       | Terbitkan to trigger error | not added              |