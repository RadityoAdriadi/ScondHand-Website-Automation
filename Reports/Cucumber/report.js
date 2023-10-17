$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/01-user_visit_homepage.feature");
formatter.feature({
  "name": "Homepage",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "User visit Homepage",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User visit the Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "user_visit_homepage.User_visit_the_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "C001-User can visit the Homepage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User open the link",
  "keyword": "When "
});
formatter.match({
  "location": "user_visit_homepage.User_open_the_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will direct to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "user_visit_homepage.User_will_direct_to_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/02-user_register.feature");
formatter.feature({
  "name": "Register",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User want Register",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already on Register page",
  "keyword": "Given "
});
formatter.step({
  "name": "User fill nama and \u003ccondition\u003e after that click button Daftar",
  "keyword": "When "
});
formatter.step({
  "name": "User will \u003cresults\u003e Register",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Case_ID",
        "condition",
        "results"
      ]
    },
    {
      "cells": [
        "C003",
        "invalid credential",
        "not success"
      ]
    },
    {
      "cells": [
        "C004",
        "valid credential",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User want Register",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already on Register page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_register.User_already_on_Register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill nama and invalid credential after that click button Daftar",
  "keyword": "When "
});
formatter.match({
  "location": "user_register.User_fill_nama_and_after_that_click_button_Daftar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will not success Register",
  "keyword": "Then "
});
formatter.match({
  "location": "user_register.User_will_Register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want Register",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already on Register page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_register.User_already_on_Register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill nama and valid credential after that click button Daftar",
  "keyword": "When "
});
formatter.match({
  "location": "user_register.User_fill_nama_and_after_that_click_button_Daftar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will success Register",
  "keyword": "Then "
});
formatter.match({
  "location": "user_register.User_will_Register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/03-user_login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User want login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User \u003crole\u003e input \u003ccondition\u003e and click button Masuk",
  "keyword": "When "
});
formatter.step({
  "name": "User \u003crole\u003e will \u003cresult\u003e Login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Case_ID",
        "role",
        "condition",
        "result"
      ]
    },
    {
      "cells": [
        "C006",
        "buyer",
        "invalid credential",
        "not success"
      ]
    },
    {
      "cells": [
        "C000",
        "seller",
        "valid credential",
        "success"
      ]
    },
    {
      "cells": [
        "C005",
        "buyer",
        "valid credential",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User want login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User buyer input invalid credential and click button Masuk",
  "keyword": "When "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User buyer will not success Login",
  "keyword": "Then "
});
formatter.match({
  "location": "user_login.User_will_Login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "When "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller will success Login",
  "keyword": "Then "
});
formatter.match({
  "location": "user_login.User_will_Login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User buyer input valid credential and click button Masuk",
  "keyword": "When "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User buyer will success Login",
  "keyword": "Then "
});
formatter.match({
  "location": "user_login.User_will_Login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/04-user_edit_profile.feature");
formatter.feature({
  "name": "Edit profile web feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@editprofilewebfeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "C007-C008-C009-C010-C011-C012 user edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click button profile",
  "keyword": "When "
});
formatter.step({
  "name": "user click profile account",
  "keyword": "And "
});
formatter.step({
  "name": "user edit \u003cfield\u003e with \u003ccondition\u003e and user click button simpan",
  "keyword": "And "
});
formatter.step({
  "name": "user \u003cresult\u003e edit profile",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "field",
        "condition",
        "result"
      ]
    },
    {
      "cells": [
        "C007",
        "all field",
        "valid value",
        "successfully"
      ]
    },
    {
      "cells": [
        "C008",
        "nama",
        "empty value",
        "not successfully"
      ]
    },
    {
      "cells": [
        "C009",
        "kota",
        "not select",
        "not successfully"
      ]
    },
    {
      "cells": [
        "C010",
        "alamat",
        "empty value",
        "not successfully"
      ]
    },
    {
      "cells": [
        "C011",
        "no handphone",
        "empty value",
        "not successfully"
      ]
    },
    {
      "cells": [
        "C012",
        "foto",
        "file more than 1mb",
        "not successfully"
      ]
    }
  ]
});
formatter.background({
  "name": "user already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "And "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "C007-C008-C009-C010-C011-C012 user edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofilewebfeature"
    }
  ]
});
formatter.step({
  "name": "user click button profile",
  "keyword": "When "
});
formatter.match({
  "location": "Editprofilefeature.user_click_button_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click profile account",
  "keyword": "And "
});
formatter.match({
  "location": "Editprofilefeature.user_click_profile_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit all field with valid value and user click button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "Editprofilefeature.user_edit_with_and_user_click_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully edit profile",
  "keyword": "Then "
});
formatter.match({
  "location": "Editprofilefeature.user_edit_profile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "And "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "C007-C008-C009-C010-C011-C012 user edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofilewebfeature"
    }
  ]
});
formatter.step({
  "name": "user click button profile",
  "keyword": "When "
});
formatter.match({
  "location": "Editprofilefeature.user_click_button_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click profile account",
  "keyword": "And "
});
formatter.match({
  "location": "Editprofilefeature.user_click_profile_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit nama with empty value and user click button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "Editprofilefeature.user_edit_with_and_user_click_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user not successfully edit profile",
  "keyword": "Then "
});
formatter.match({
  "location": "Editprofilefeature.user_edit_profile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "And "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "C007-C008-C009-C010-C011-C012 user edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofilewebfeature"
    }
  ]
});
formatter.step({
  "name": "user click button profile",
  "keyword": "When "
});
formatter.match({
  "location": "Editprofilefeature.user_click_button_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click profile account",
  "keyword": "And "
});
formatter.match({
  "location": "Editprofilefeature.user_click_profile_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit kota with not select and user click button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "Editprofilefeature.user_edit_with_and_user_click_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user not successfully edit profile",
  "keyword": "Then "
});
formatter.match({
  "location": "Editprofilefeature.user_edit_profile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "And "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "C007-C008-C009-C010-C011-C012 user edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofilewebfeature"
    }
  ]
});
formatter.step({
  "name": "user click button profile",
  "keyword": "When "
});
formatter.match({
  "location": "Editprofilefeature.user_click_button_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click profile account",
  "keyword": "And "
});
formatter.match({
  "location": "Editprofilefeature.user_click_profile_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit alamat with empty value and user click button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "Editprofilefeature.user_edit_with_and_user_click_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user not successfully edit profile",
  "keyword": "Then "
});
formatter.match({
  "location": "Editprofilefeature.user_edit_profile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "And "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "C007-C008-C009-C010-C011-C012 user edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofilewebfeature"
    }
  ]
});
formatter.step({
  "name": "user click button profile",
  "keyword": "When "
});
formatter.match({
  "location": "Editprofilefeature.user_click_button_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click profile account",
  "keyword": "And "
});
formatter.match({
  "location": "Editprofilefeature.user_click_profile_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit no handphone with empty value and user click button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "Editprofilefeature.user_edit_with_and_user_click_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user not successfully edit profile",
  "keyword": "Then "
});
formatter.match({
  "location": "Editprofilefeature.user_edit_profile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "And "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "C007-C008-C009-C010-C011-C012 user edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofilewebfeature"
    }
  ]
});
formatter.step({
  "name": "user click button profile",
  "keyword": "When "
});
formatter.match({
  "location": "Editprofilefeature.user_click_button_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click profile account",
  "keyword": "And "
});
formatter.match({
  "location": "Editprofilefeature.user_click_profile_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit foto with file more than 1mb and user click button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "Editprofilefeature.user_edit_with_and_user_click_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user not successfully edit profile",
  "keyword": "Then "
});
formatter.match({
  "location": "Editprofilefeature.user_edit_profile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/05-user_add_product.feature");
formatter.feature({
  "name": "Add Product on Secondhand Website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User wants to add a product on Secondhand Website",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks +Jual button to add a product on the homepage",
  "keyword": "When "
});
formatter.step({
  "name": "the website displays required fields for adding a new product",
  "keyword": "And "
});
formatter.step({
  "name": "user inputs product details in the required fields:",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "Nama Produk",
        "\u003cName\u003e"
      ]
    },
    {
      "cells": [
        "Harga Produk",
        "\u003cPrice\u003e"
      ]
    },
    {
      "cells": [
        "Kategori",
        "\u003cCategory\u003e"
      ]
    },
    {
      "cells": [
        "Deskripsi",
        "\u003cDescription\u003e"
      ]
    },
    {
      "cells": [
        "Gambar Produk",
        "\u003cImage\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "user clicks the button of \u003cAction\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the product is \u003cOutcome\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "Name",
        "Price",
        "Category",
        "Description",
        "Image",
        "Action",
        "Outcome"
      ]
    },
    {
      "cells": [
        "C021",
        "Group4_Laptop ASUS",
        "6000000",
        "4",
        "High-quality electronics",
        "/Users/syaviraalatas/REZA/Bootcamp Binar Academy/QAE Quality Assurance Engineer/Challange Level Platinum/katalon/Images/laptop_asus.jpg",
        "Terbitkan",
        "published successfully"
      ]
    },
    {
      "cells": [
        "C022",
        "Smartphone",
        "3000000",
        "4",
        "High-quality smartphone",
        "/Users/syaviraalatas/REZA/Bootcamp Binar Academy/QAE Quality Assurance Engineer/Challange Level Platinum/katalon/Images/smartphone.jpg",
        "Preview",
        "previewed successfully"
      ]
    },
    {
      "cells": [
        "C023",
        "",
        "1500000",
        "4",
        "Ergonomic mouse",
        "/Users/syaviraalatas/REZA/Bootcamp Binar Academy/QAE Quality Assurance Engineer/Challange Level Platinum/katalon/Images/mouse.jpg",
        "Terbitkan to trigger error",
        "not added"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "And "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to add a product on Secondhand Website",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks +Jual button to add a product on the homepage",
  "keyword": "When "
});
formatter.match({
  "location": "user_add_product.user_clicks_jual_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the website displays required fields for adding a new product",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.the_website_displays_required_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user inputs product details in the required fields:",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "Nama Produk",
        "Group4_Laptop ASUS"
      ]
    },
    {
      "cells": [
        "Harga Produk",
        "6000000"
      ]
    },
    {
      "cells": [
        "Kategori",
        "4"
      ]
    },
    {
      "cells": [
        "Deskripsi",
        "High-quality electronics"
      ]
    },
    {
      "cells": [
        "Gambar Produk",
        "/Users/syaviraalatas/REZA/Bootcamp Binar Academy/QAE Quality Assurance Engineer/Challange Level Platinum/katalon/Images/laptop_asus.jpg"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.user_inputs_product_details(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the button of Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.user_clicks_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product is published successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "user_add_product.resultIsDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "And "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to add a product on Secondhand Website",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks +Jual button to add a product on the homepage",
  "keyword": "When "
});
formatter.match({
  "location": "user_add_product.user_clicks_jual_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the website displays required fields for adding a new product",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.the_website_displays_required_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user inputs product details in the required fields:",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "Nama Produk",
        "Smartphone"
      ]
    },
    {
      "cells": [
        "Harga Produk",
        "3000000"
      ]
    },
    {
      "cells": [
        "Kategori",
        "4"
      ]
    },
    {
      "cells": [
        "Deskripsi",
        "High-quality smartphone"
      ]
    },
    {
      "cells": [
        "Gambar Produk",
        "/Users/syaviraalatas/REZA/Bootcamp Binar Academy/QAE Quality Assurance Engineer/Challange Level Platinum/katalon/Images/smartphone.jpg"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.user_inputs_product_details(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the button of Preview",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.user_clicks_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product is previewed successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "user_add_product.resultIsDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "And "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to add a product on Secondhand Website",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks +Jual button to add a product on the homepage",
  "keyword": "When "
});
formatter.match({
  "location": "user_add_product.user_clicks_jual_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the website displays required fields for adding a new product",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.the_website_displays_required_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user inputs product details in the required fields:",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "Nama Produk",
        ""
      ]
    },
    {
      "cells": [
        "Harga Produk",
        "1500000"
      ]
    },
    {
      "cells": [
        "Kategori",
        "4"
      ]
    },
    {
      "cells": [
        "Deskripsi",
        "Ergonomic mouse"
      ]
    },
    {
      "cells": [
        "Gambar Produk",
        "/Users/syaviraalatas/REZA/Bootcamp Binar Academy/QAE Quality Assurance Engineer/Challange Level Platinum/katalon/Images/mouse.jpg"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.user_inputs_product_details(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the button of Terbitkan to trigger error",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.user_clicks_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product is not added",
  "keyword": "Then "
});
formatter.match({
  "location": "user_add_product.resultIsDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/06-user_edit_product.feature");
formatter.feature({
  "name": "Edit Product on Secondhand Website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User wants to edit an existing product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "on the homepage, user clicks the product list menu",
  "keyword": "When "
});
formatter.step({
  "name": "the product list menu page is displayed",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on the product they want to manage",
  "keyword": "And "
});
formatter.step({
  "name": "user\u0027s product detail page is displayed",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks Edit button to edit the product",
  "keyword": "And "
});
formatter.step({
  "name": "the website displays required fields for editing the product",
  "keyword": "And "
});
formatter.step({
  "name": "user modifies the product \u003cmodificationType\u003e to \u003cnewValue\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user saves the changes by clicking the Terbitkan button if \u003cmodificationType\u003e is Description",
  "keyword": "And "
});
formatter.step({
  "name": "the product should be \u003cOutcome\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "modificationType",
        "newValue",
        "Outcome"
      ]
    },
    {
      "cells": [
        "C024",
        "Description",
        "High-performance laptop",
        "edited successfully"
      ]
    },
    {
      "cells": [
        "C025",
        "Price",
        "6000000ab",
        "not edited"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "And "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to edit an existing product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "on the homepage, user clicks the product list menu",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_product.user_clicks_productList_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product list menu page is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.product_list_menu_page_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the product they want to manage",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.user_clicks_productToEdit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user\u0027s product detail page is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.productDetails_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Edit button to edit the product",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.user_clicks_edit_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the website displays required fields for editing the product",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.website_displays_required_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user modifies the product Description to High-performance laptop",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.user_modifies_productDetails(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user saves the changes by clicking the Terbitkan button if Description is Description",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.user_saves_changes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product should be edited successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "user_edit_product.then_the_outcome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "And "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to edit an existing product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "on the homepage, user clicks the product list menu",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_product.user_clicks_productList_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product list menu page is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.product_list_menu_page_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the product they want to manage",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.user_clicks_productToEdit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user\u0027s product detail page is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.productDetails_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Edit button to edit the product",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.user_clicks_edit_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the website displays required fields for editing the product",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.website_displays_required_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user modifies the product Price to 6000000ab",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.user_modifies_productDetails(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user saves the changes by clicking the Terbitkan button if Price is Description",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.user_saves_changes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product should be not edited",
  "keyword": "Then "
});
formatter.match({
  "location": "user_edit_product.then_the_outcome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/07-user_search_product.feature");
formatter.feature({
  "name": "Search Product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@search_product"
    }
  ]
});
formatter.background({
  "name": "user access the website",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user access the web url",
  "keyword": "Given "
});
formatter.match({
  "location": "user_search_and_offer.user_access_the_web_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "C015-user can see the search result with same Category",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@search_product"
    }
  ]
});
formatter.step({
  "name": "user click one Category button in Telusuri Kategori section on Homepage",
  "keyword": "When "
});
formatter.match({
  "location": "user_search_and_offer.user_click_one_Category_button_in_Telusuri_Kategori_section_on_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see product with the same category on search result",
  "keyword": "Then "
});
formatter.match({
  "location": "user_search_and_offer.user_can_see_product_with_the_same_category_on_search_result()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user search the product with search bar",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user input \u003ccondition\u003e keyword in Search box on Homepage and click Enter",
  "keyword": "When "
});
formatter.step({
  "name": "user can see product list \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "condition",
        "result"
      ]
    },
    {
      "cells": [
        "C013",
        "valid",
        "with valid keyword"
      ]
    },
    {
      "cells": [
        "C016",
        "wrong",
        "empty"
      ]
    },
    {
      "cells": [
        "C017",
        "empty",
        "in same Homepage as before"
      ]
    }
  ]
});
formatter.background({
  "name": "user access the website",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user access the web url",
  "keyword": "Given "
});
formatter.match({
  "location": "user_search_and_offer.user_access_the_web_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user search the product with search bar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@search_product"
    }
  ]
});
formatter.step({
  "name": "user input valid keyword in Search box on Homepage and click Enter",
  "keyword": "When "
});
formatter.match({
  "location": "user_search_and_offer.user_input_keyword_in_Search_box_on_Homepage_and_click_Enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see product list with valid keyword",
  "keyword": "Then "
});
formatter.match({
  "location": "user_search_and_offer.user_can_see_product_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user access the website",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user access the web url",
  "keyword": "Given "
});
formatter.match({
  "location": "user_search_and_offer.user_access_the_web_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user search the product with search bar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@search_product"
    }
  ]
});
formatter.step({
  "name": "user input wrong keyword in Search box on Homepage and click Enter",
  "keyword": "When "
});
formatter.match({
  "location": "user_search_and_offer.user_input_keyword_in_Search_box_on_Homepage_and_click_Enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see product list empty",
  "keyword": "Then "
});
formatter.match({
  "location": "user_search_and_offer.user_can_see_product_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user access the website",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user access the web url",
  "keyword": "Given "
});
formatter.match({
  "location": "user_search_and_offer.user_access_the_web_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user search the product with search bar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@search_product"
    }
  ]
});
formatter.step({
  "name": "user input empty keyword in Search box on Homepage and click Enter",
  "keyword": "When "
});
formatter.match({
  "location": "user_search_and_offer.user_input_keyword_in_Search_box_on_Homepage_and_click_Enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see product list in same Homepage as before",
  "keyword": "Then "
});
formatter.match({
  "location": "user_search_and_offer.user_can_see_product_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/08-user_offer_product.feature");
formatter.feature({
  "name": "Offer Product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@offer_product"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user offering the product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click product and click Saya tertarik dan ingin nego button",
  "keyword": "When "
});
formatter.step({
  "name": "user input \u003ctype\u003e price and click Kirim button",
  "keyword": "And "
});
formatter.step({
  "name": "user \u003cstatus\u003e offer the product and page detail \u003cchange\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "type",
        "status",
        "change"
      ]
    },
    {
      "cells": [
        "C020",
        "decimal",
        "unsuccessfully",
        "offer box show warning"
      ]
    },
    {
      "cells": [
        "C018",
        "non decimal",
        "successfully",
        "button change to Menunggu Respon Penjual"
      ]
    }
  ]
});
formatter.background({
  "name": "user already login and edit profile",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already login as buyer",
  "keyword": "Given "
});
formatter.match({
  "location": "user_search_and_offer.user_already_login_as_buyer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button profile and profile account",
  "keyword": "And "
});
formatter.match({
  "location": "user_search_and_offer.user_click_button_profile_and_profile_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit all field with valid value and user click button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "Editprofilefeature.user_edit_with_and_user_click_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid keyword in Search box on Homepage and click Enter",
  "keyword": "And "
});
formatter.match({
  "location": "user_search_and_offer.user_input_keyword_in_Search_box_on_Homepage_and_click_Enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user offering the product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@offer_product"
    }
  ]
});
formatter.step({
  "name": "user click product and click Saya tertarik dan ingin nego button",
  "keyword": "When "
});
formatter.match({
  "location": "user_search_and_offer.user_click_product_and_click_Saya_tertarik_dan_ingin_nego_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input decimal price and click Kirim button",
  "keyword": "And "
});
formatter.match({
  "location": "user_search_and_offer.user_input_price_and_click_Kirim_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user unsuccessfully offer the product and page detail offer box show warning",
  "keyword": "Then "
});
formatter.match({
  "location": "user_search_and_offer.user_status_offer_the_product_and_page_detail_change(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user already login and edit profile",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already login as buyer",
  "keyword": "Given "
});
formatter.match({
  "location": "user_search_and_offer.user_already_login_as_buyer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button profile and profile account",
  "keyword": "And "
});
formatter.match({
  "location": "user_search_and_offer.user_click_button_profile_and_profile_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit all field with valid value and user click button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "Editprofilefeature.user_edit_with_and_user_click_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid keyword in Search box on Homepage and click Enter",
  "keyword": "And "
});
formatter.match({
  "location": "user_search_and_offer.user_input_keyword_in_Search_box_on_Homepage_and_click_Enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user offering the product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@offer_product"
    }
  ]
});
formatter.step({
  "name": "user click product and click Saya tertarik dan ingin nego button",
  "keyword": "When "
});
formatter.match({
  "location": "user_search_and_offer.user_click_product_and_click_Saya_tertarik_dan_ingin_nego_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input non decimal price and click Kirim button",
  "keyword": "And "
});
formatter.match({
  "location": "user_search_and_offer.user_input_price_and_click_Kirim_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully offer the product and page detail button change to Menunggu Respon Penjual",
  "keyword": "Then "
});
formatter.match({
  "location": "user_search_and_offer.user_status_offer_the_product_and_page_detail_change(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/09-user_open_notification.feature");
formatter.feature({
  "name": "Notification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User want to open notification",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "When "
});
formatter.step({
  "name": "User click bell icon and notification will be pop up",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Case_ID",
        "role",
        "condition"
      ]
    },
    {
      "cells": [
        "C027",
        "seller",
        "valid credential"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User want to open notification",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "When "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click bell icon and notification will be pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "user_click_notification.User_click_bell_icon_and_notification_will_be_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/10-user_respponse_offer.feature");
formatter.feature({
  "name": "Accept Offer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "user want to response offer",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click product offer",
  "keyword": "When "
});
formatter.step({
  "name": "user click \u003ccondition\u003e product",
  "keyword": "And "
});
formatter.step({
  "name": "user have \u003cresult\u003e offering product",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Case_ID",
        "role",
        "condition",
        "result"
      ]
    },
    {
      "cells": [
        "C028",
        "seller",
        "tolak",
        "rejected"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "When "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click bell icon and notification will be pop up",
  "keyword": "And "
});
formatter.match({
  "location": "user_click_notification.User_click_bell_icon_and_notification_will_be_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user want to response offer",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click product offer",
  "keyword": "When "
});
formatter.match({
  "location": "user_want_to_response_offer.user_click_product_offer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click tolak product",
  "keyword": "And "
});
formatter.match({
  "location": "user_want_to_response_offer.user_click_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have rejected offering product",
  "keyword": "Then "
});
formatter.match({
  "location": "user_want_to_response_offer.user_have_offering_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/11-user_offer_product.feature");
formatter.feature({
  "name": "Offer Product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@offer_product"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user offering the product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click product and click Saya tertarik dan ingin nego button",
  "keyword": "When "
});
formatter.step({
  "name": "user input \u003ctype\u003e price and click Kirim button",
  "keyword": "And "
});
formatter.step({
  "name": "user \u003cstatus\u003e offer the product and page detail \u003cchange\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "type",
        "status",
        "change"
      ]
    },
    {
      "cells": [
        "C018",
        "non decimal",
        "successfully",
        "button change to Menunggu Respon Penjual"
      ]
    }
  ]
});
formatter.background({
  "name": "user already login and edit profile",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user already login as buyer",
  "keyword": "Given "
});
formatter.match({
  "location": "user_search_and_offer.user_already_login_as_buyer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button profile and profile account",
  "keyword": "And "
});
formatter.match({
  "location": "user_search_and_offer.user_click_button_profile_and_profile_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit all field with valid value and user click button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "Editprofilefeature.user_edit_with_and_user_click_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid keyword in Search box on Homepage and click Enter",
  "keyword": "And "
});
formatter.match({
  "location": "user_search_and_offer.user_input_keyword_in_Search_box_on_Homepage_and_click_Enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user offering the product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@offer_product"
    }
  ]
});
formatter.step({
  "name": "user click product and click Saya tertarik dan ingin nego button",
  "keyword": "When "
});
formatter.match({
  "location": "user_search_and_offer.user_click_product_and_click_Saya_tertarik_dan_ingin_nego_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input non decimal price and click Kirim button",
  "keyword": "And "
});
formatter.match({
  "location": "user_search_and_offer.user_input_price_and_click_Kirim_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully offer the product and page detail button change to Menunggu Respon Penjual",
  "keyword": "Then "
});
formatter.match({
  "location": "user_search_and_offer.user_status_offer_the_product_and_page_detail_change(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/13-user_respponse_offer.feature");
formatter.feature({
  "name": "Accept Offer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "user want to response offer",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click product offer",
  "keyword": "When "
});
formatter.step({
  "name": "user click \u003ccondition\u003e product",
  "keyword": "And "
});
formatter.step({
  "name": "user have \u003cresult\u003e offering product",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Case_ID",
        "role",
        "condition",
        "result"
      ]
    },
    {
      "cells": [
        "C029",
        "seller",
        "terima",
        "succesful"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "When "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click bell icon and notification will be pop up",
  "keyword": "And "
});
formatter.match({
  "location": "user_click_notification.User_click_bell_icon_and_notification_will_be_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user want to response offer",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click product offer",
  "keyword": "When "
});
formatter.match({
  "location": "user_want_to_response_offer.user_click_product_offer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click terima product",
  "keyword": "And "
});
formatter.match({
  "location": "user_want_to_response_offer.user_click_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have succesful offering product",
  "keyword": "Then "
});
formatter.match({
  "location": "user_want_to_response_offer.user_have_offering_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/14-user_delete_product.feature");
formatter.feature({
  "name": "Delete product web feature",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "user already login and user already on detail product page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User seller input valid credential and click button Masuk",
  "keyword": "And "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "on the homepage, user clicks the product list menu",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_product.user_clicks_productList_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product list menu page is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.product_list_menu_page_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the product they want to manage",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.user_clicks_productToEdit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user\u0027s product detail page is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.productDetails_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "C026-user delete existing product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user click delete button",
  "keyword": "And "
});
formatter.match({
  "location": "user_delete_product.user_click_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully delete exisiing product",
  "keyword": "Then "
});
formatter.match({
  "location": "user_delete_product.user_successfully_delete_exisiing_product()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/15-user_logout.feature");
formatter.feature({
  "name": "Logout",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User wants to Logout",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User \u003crole\u003e input \u003ccondition\u003e and click button Masuk",
  "keyword": "When "
});
formatter.step({
  "name": "User click on user account",
  "keyword": "And "
});
formatter.step({
  "name": "User click button Keluar",
  "keyword": "And "
});
formatter.step({
  "name": "User direct to Homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Case_ID",
        "role",
        "condition"
      ]
    },
    {
      "cells": [
        "C005",
        "buyer",
        "valid credential"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User wants to Logout",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "user_login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User buyer input valid credential and click button Masuk",
  "keyword": "When "
});
formatter.match({
  "location": "user_login.User_input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on user account",
  "keyword": "And "
});
formatter.match({
  "location": "user_logout.User_click_on_user_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button Keluar",
  "keyword": "And "
});
formatter.match({
  "location": "user_logout.User_click_button_Keluar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User direct to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "user_logout.User_will_successfully_Logout_and_direct_to_Homepage()"
});
formatter.result({
  "status": "passed"
});
});