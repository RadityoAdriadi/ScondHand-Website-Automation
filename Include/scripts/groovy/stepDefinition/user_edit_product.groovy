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

public class user_edit_product {

	@When("on the homepage, user clicks the product list menu")
	public void user_clicks_productList_menu() {
		WebUI.click(findTestObject('Object Repository/user_visit_homepage/click_button_daftar_product'))
	}

	@When("the product list menu page is displayed")
	public void product_list_menu_page_displayed () {
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_product/productListMenu_page/daftarJualSaya_element'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_product/productListMenu_page/tambahProduk_element'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_product/productListMenu_page/user_click_productToEdit'), 0)
	}

	@When("user clicks on the product they want to manage")
	public void user_clicks_productToEdit() {
		WebUI.click(findTestObject('Object Repository/user_edit_product/productListMenu_page/user_click_productToEdit'))
	}

	@When("user's product detail page is displayed")
	public void productDetails_displayed () {
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_add_product/sellerProductDetail/edit_element'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_add_product/sellerProductDetail/delete_element'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_add_product/sellerProductDetail/deskripsi_element'), 0)
	}

	@When("user clicks Edit button to edit the product")
	public void user_clicks_edit_btn() {
		WebUI.click(findTestObject('Object Repository/user_add_product/sellerProductDetail/edit_element'))
	}

	@When("the website displays required fields for editing the product")
	public void website_displays_required_fields () {
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_product/user_edit_productname'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_product/user_edit_productprice'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_product/user_edit_category'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_product/user_edit_description'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_product/user_edit_productimage'), 0)
	}

	@When("user modifies the product (.+) to (.+)")
	public void user_modifies_productDetails(String modificationType, newValue) {
		if (modificationType == "Description") {
			WebUI.setText(findTestObject('Object Repository/user_edit_product/user_edit_description'), newValue)
		}
		else if (modificationType == "Price") {
			WebUI.setText(findTestObject('Object Repository/user_edit_product/user_edit_productprice'), newValue)
		}
	}

	@When("user saves the changes by clicking the Terbitkan button if (.+) is Description")
	public void user_saves_changes(String modificationType) {
		if (modificationType == "Description") {
			WebUI.click(findTestObject('Object Repository/user_edit_product/user_click_terbitkan'))
		}
	}

	@Then("the product should be (.+)")
	public void then_the_outcome(String Outcome) {
		if (Outcome == "edited successfully") {
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_add_product/sellerProductDetail/deskripsi_element'), 0)
			WebUI.delay(5)
		}
		else if (Outcome == "not edited") {
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_product/user_click_preview'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_product/user_click_terbitkan'), 0)
			WebUI.delay(5)
		}

		WebUI.closeBrowser()
	}
}