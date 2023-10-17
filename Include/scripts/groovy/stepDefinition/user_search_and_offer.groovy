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

import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import groovy.json.StringEscapeUtils

import com.kms.katalon.core.webui.common.WebUiCommonHelper
import org.openqa.selenium.WebElement

import org.openqa.selenium.Keys as Keys

public class user_search_and_offer {

	@Given("user access the web url")
	public void user_access_the_web_url() {
		WebUI.openBrowser('https://secondhand.binaracademy.org/')
		WebUI.maximizeWindow()
	}
	@When("user click one Category button in Telusuri Kategori section on Homepage")
	public void user_click_one_Category_button_in_Telusuri_Kategori_section_on_Homepage(){
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_input_keyword'),0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_see_Telusuri_Kategori'), 0)
		WebElement element = WebUiCommonHelper.findWebElement(findTestObject('Object Repository/user_visit_homepage/user_click_kategori'),20)
		WebUI.executeJavaScript("arguments[0].click()", Arrays.asList(element))
	}
	@Then("user can see product with the same category on search result")
	public void user_can_see_product_with_the_same_category_on_search_result(){
		WebUI.waitForElementPresent(findTestObject('Object Repository/user_visit_homepage/user_product_list'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_product_list'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_see_result_category'), 0)
		WebUI.verifyElementText(findTestObject('Object Repository/user_visit_homepage/user_see_result_category'), 'Hobi')
	}

	@When("user input (.*) keyword in Search box on Homepage and click Enter")
	public void user_input_keyword_in_Search_box_on_Homepage_and_click_Enter(String condition) {

		if (condition=="valid") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/user_visit_homepage/user_input_keyword'),10)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_input_keyword'),0)
			WebUI.setText(findTestObject('Object Repository/user_visit_homepage/user_input_keyword'),'Group4_Laptop ASUS')
			WebUI.sendKeys(findTestObject('Object Repository/user_visit_homepage/user_input_keyword'),Keys.chord(Keys.ENTER))
		}else if (condition=="wrong") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/user_visit_homepage/user_input_keyword'),10)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_input_keyword'),0)
			WebUI.setText(findTestObject('Object Repository/user_visit_homepage/user_input_keyword'),'laptos asus')
			WebUI.sendKeys(findTestObject('Object Repository/user_visit_homepage/user_input_keyword'),Keys.chord(Keys.ENTER))
		}else if (condition=="empty") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/user_visit_homepage/user_input_keyword'),10)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_input_keyword'),0)
			WebUI.click(findTestObject('Object Repository/user_visit_homepage/user_input_keyword'))
			WebUI.sendKeys(findTestObject('Object Repository/user_visit_homepage/user_input_keyword'),Keys.chord(Keys.ENTER))
		}
	}

	@Then("user can see product list (.*)")
	public void user_can_see_product_list(String result){
		if (result=="with valid keyword") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/user_visit_homepage/user_product_list'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_see_Telusuri_Kategori'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_product_list'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_see_result_search'), 0)
			WebUI.verifyElementText(findTestObject('Object Repository/user_visit_homepage/user_see_result_search'), 'Group4_Laptop ASUS')
		}else if (result=="empty") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/user_visit_homepage/user_see_Telusuri_Kategori'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_see_Telusuri_Kategori'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_product_list'), 0)
			WebUI.verifyElementNotPresent(findTestObject('Object Repository/user_visit_homepage/user_see_result_search'), 0)
		}else if (result=="in same Homepage as before") {
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_click_btn_masuk'),0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_input_keyword'),0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_see_Telusuri_Kategori'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_product_list'), 0)
		}
	}

	@Given("user already login as buyer")
	public void user_already_login_as_buyer(){
		WebUI.openBrowser('https://secondhand.binaracademy.org/users/sign_in')
		WebUI.maximizeWindow()
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_login/user_input_email'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_login/user_input_password'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_login/user_click_btn_masuk'), 0)
		WebUI.setText(findTestObject('Object Repository/user_login/user_input_email'),'fabregas_oliver@gmail.com')
		WebUI.setText(findTestObject('Object Repository/user_login/user_input_password'),'qwerty12345')
		WebUI.click(findTestObject('Object Repository/user_login/user_click_btn_masuk'))
	}

	@Given("user click button profile and profile account")
	public void user_click_button_profile_and_profile_account() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/click_button_profile'), 0)
		WebUI.click(findTestObject('Object Repository/user_visit_homepage/click_button_profile'))
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/click_profile_account'), 0)
		WebUI.click(findTestObject('Object Repository/user_visit_homepage/click_profile_account'))
	}

	@When("user click product and click Saya tertarik dan ingin nego button")
	public void user_click_product_and_click_Saya_tertarik_dan_ingin_nego_button(){
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/user_first_product_Homepage'), 0)
		WebUI.click(findTestObject('Object Repository/user_product_offer/user_first_product_Homepage'))
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/product_detail_page/product_detail_name'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/product_detail_page/product_detail_image'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/product_detail_page/product_detail_price'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/user_product_offer/user_click_button'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/user_click_button'), 0)
		WebUI.click(findTestObject('Object Repository/user_product_offer/user_click_button'))
	}

	@When("user input (.*) price and click Kirim button")
	public void user_input_price_and_click_Kirim_button(String type){

		if(type=="non decimal"){
			WebUI.waitForElementPresent(findTestObject('Object Repository/user_product_offer/product_detail_page/offer_box_title'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/product_detail_page/offer_box_title'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/user_input_price'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/user_click_Kirim'), 0)
			WebUI.setText(findTestObject('Object Repository/user_product_offer/user_input_price'), '10000')
			WebUI.click(findTestObject('Object Repository/user_product_offer/user_click_Kirim'))
		} else if(type=="decimal") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/user_product_offer/product_detail_page/offer_box_title'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/product_detail_page/offer_box_title'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/user_input_price'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/user_click_Kirim'), 0)
			WebUI.setText(findTestObject('Object Repository/user_product_offer/user_input_price'), '10.500')
			WebUI.click(findTestObject('Object Repository/user_product_offer/user_click_Kirim'))
		}
	}

	@Then("user (.*) offer the product and page detail (.*)")
	public void user_status_offer_the_product_and_page_detail_change(String status, String change) {

		if(status=="successfully" && change=="button change to Menunggu Respon Penjual") {

			WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/product_detail_page/product_detail_name'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/product_detail_page/product_detail_image'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/product_detail_page/product_detail_price'), 0)
			WebUI.waitForElementPresent(findTestObject('Object Repository/user_product_offer/user_click_button'), 0)
			WebUI.verifyElementText(findTestObject('Object Repository/user_product_offer/user_click_button'), 'Menunggu respon penjual')
		} else if(status=="unsuccessfully" && change=="offer box show warning") {

			WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/product_detail_page/offer_box_title'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/user_input_price'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_product_offer/user_click_Kirim'), 0)
			WebUI.getAttribute(findTestObject('Object Repository/user_product_offer/user_input_price'),'Please enter a valid value. The two nearest valid values are 10 and 11.')
		}
	}
}
