package stepDefinition

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import java.security.PublicKey

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
import com.kms.katalon.core.webui.keyword.builtin.CloseBrowserKeyword
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class user_login {
	@Given("User already in login page")
	public void User_already_in_login_page() {
		WebUI.openBrowser('https://secondhand.binaracademy.org/users/sign_in')
		WebUI.maximizeWindow()
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_login/user_input_email'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_login/user_input_password'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_login/user_click_btn_masuk'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_login/user_click_link_Daftar_di_sini'), 0)
	}

	@When ("(.*) input (.*) and click button Masuk")
	public void input_and_click_button_Masuk(String role, condition) {
		if(role=="buyer" && condition=="invalid credential") {
			WebUI.setText(findTestObject('Object Repository/user_login/user_input_email'), 'budisudarsono@gmail.com')
			WebUI.setText(findTestObject('Object Repository/user_login/user_input_password'), '1234567')
			WebUI.click(findTestObject('Object Repository/user_login/user_click_btn_masuk'))
		}
		else if(role=="seller" && condition=="valid credential") {
			WebUI.setText(findTestObject('Object Repository/user_login/user_input_email'),'septiani@gmail.com')
			WebUI.setText(findTestObject('Object Repository/user_login/user_input_password'),'qwerty12345')
			WebUI.click(findTestObject('Object Repository/user_login/user_click_btn_masuk'))
		}
		else if(role=="buyer" && condition=="valid credential"){
			WebUI.setText(findTestObject('Object Repository/user_login/user_input_email'),'fabregas_oliver@gmail.com')
			WebUI.setText(findTestObject('Object Repository/user_login/user_input_password'),'qwerty12345')
			WebUI.click(findTestObject('Object Repository/user_login/user_click_btn_masuk'))
		}
	}

	@When ("Buyer login using valid credential")
	public void Buyer_login_using_valid_credential(){
		WebUI.setText(findTestObject('Object Repository/user_login/user_input_email'),'fabregas_oliver@gmail.com')
		WebUI.setText(findTestObject('Object Repository/user_login/user_input_password'),'qwerty12345')
		WebUI.click(findTestObject('Object Repository/user_login/user_click_btn_masuk'))
	}

	@Then ("(.*) will (.*) Login")
	public void will_Login(String role, String result) {
		if(role=="buyer" && result=="not success") {
			WebUI.getAttribute(findTestObject('Object Repository/user_login/user_toaster_failed_login'), 'validationMessage')
		}
		else if(role=="seller" && result=="success"){
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_search_field'), 0)
		}
		else if(role=="buyer" && result=="success"){
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_search_field'), 0)
		}
	}

	@Then ("Buyer success login")
	public void Buyer_success_login(){
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_search_field'), 0)
	}

	@Given ("Buyer already login")
	public void Buyer_already_login() {
		User_already_in_login_page()
		Buyer_login_using_valid_credential()
		Buyer_success_login()
	}

}