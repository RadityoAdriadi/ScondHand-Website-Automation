package stepDefinition
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

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

//import internal.GlobalVariable
import java.util.Map
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class user_want_to_response_offer {
	@When("user click product offer")
	public void user_click_product_offer() {
		WebUI.click(findTestObject('Object Repository/user_notification/click_product_offer'))
	}

	@When("user click (.*) product")
	public void user_click_product(String condition) {
		if(condition == "terima") {
			WebUI.click(findTestObject('Object Repository/user_response_offer/user_click_terima_btn'))
		}
		else if (condition == "tolak") {
			WebUI.click(findTestObject('Object Repository/user_response_offer/user_click_tolak_btn'))
		}
	}

	@Then("user have (.*) offering product")
	public void user_have_offering_product(String result) {
		if(result == "succesful") {
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_response_offer/user_accept_offer_text'), 0)
		}
		else if (result == "rejected") {
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_response_offer/user_reject_offer_text'), 0)
		}
	}
}