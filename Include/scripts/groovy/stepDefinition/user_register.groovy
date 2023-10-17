package stepDefinition

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import java.security.PublicKey
import java.util.UUID;

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class user_register {
	@Given ("User already on Register page")
	public void User_already_on_Register_page() {
		WebUI.openBrowser('https://secondhand.binaracademy.org/users/sign_up')
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_register/user_input_name'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_register/user_input_email'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_register/user_input_password'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_register/user_click_btn_daftar'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_register/user_click_link_Masuk_di_sini'), 0)
	}

	@When ("User fill nama and (.*) after that click button Daftar")
	public void User_fill_nama_and_after_that_click_button_Daftar(String condition) {
		if(condition=="invalid credential") {
			WebUI.setText(findTestObject('Object Repository/user_register/user_input_name'), 'fabregas')
			WebUI.setText(findTestObject('Object Repository/user_register/user_input_email'), 'septiani@gmail.com')
			WebUI.setText(findTestObject('Object Repository/user_register/user_input_password'), 'qwerty12345')
			WebUI.click(findTestObject('Object Repository/user_register/user_click_btn_daftar'))
		}
		else if(condition=="valid credential"){
			WebUI.setText(findTestObject('Object Repository/user_register/user_input_name'), 'oliver')
			final String randomEmail = randomEmail();
			WebUI.setText(findTestObject('Object Repository/user_register/user_input_email'), randomEmail)
			WebUI.setText(findTestObject('Object Repository/user_register/user_input_password'), 'qwerty12345')
			WebUI.click(findTestObject('Object Repository/user_register/user_click_btn_daftar'))
		}
	}

	@Then ("User will (.*) Register")
	public void User_will_Register(String results) {
		if(results=="not success"){
			WebUI.getAttribute(findTestObject('Object Repository/user_register/user_email_has_been_taken'), 'validationMessage')
		}
		else if(results=="success"){
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_search_field'), 0)
		}
	}
	
	private static String randomEmail() {
		return "ngacak-" + UUID.randomUUID().toString() + "@gmail.com";
	}

}


