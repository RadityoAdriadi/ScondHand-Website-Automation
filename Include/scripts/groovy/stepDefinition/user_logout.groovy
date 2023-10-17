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
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class user_logout {
	@When ("Buyer click on user account")
	public void Buyer_click_on_user_account() {
		WebUI.click(findTestObject('Object Repository/user_logout/user_account_logout'))
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_logout/user_click_btn_Keluar'), 0)
	}

	@When ("Buyer click button Keluar")
	public void Buyer_click_button_Keluar() {
		WebUI.click(findTestObject('Object Repository/user_logout/user_click_btn_Keluar'))
	}

	@Then ("Buyer will successfully Logout and direct to Homepage")
	public void Buyer_will_successfully_Logout_and_direct_to_Homepage() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_add_product/user_click_btn_jual'), 0)
	}
}

