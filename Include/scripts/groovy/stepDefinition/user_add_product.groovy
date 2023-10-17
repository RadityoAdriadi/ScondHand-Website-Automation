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
import java.util.Map
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class user_add_product {

	@When("user clicks +Jual button to add a product on the homepage")
	public void user_clicks_jual_btn() {
		WebUI.click(findTestObject('Object Repository/user_visit_homepage/user_click_btn_jual'))
	}

	@When("the website displays required fields for adding a new product")
	public void the_website_displays_required_fields () {
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_add_product/user_input_productname'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_add_product/user_input_productprice'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_add_product/user_select_category'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_add_product/user_input_productdescription'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_add_product/user_input_image'), 0)
	}

	@When("user inputs product details in the required fields:")
	public void user_inputs_product_details(Map<String, String> productDetails) {
		String productName = productDetails.get("Nama Produk");
		String productPrice = productDetails.get("Harga Produk");
		String productCategory = productDetails.get("Kategori");
		String productDescription = productDetails.get("Deskripsi");
		String productImage = productDetails.get("Gambar Produk");
		WebUI.setText(findTestObject('Object Repository/user_add_product/user_input_productname'), productName)
		WebUI.setText(findTestObject('Object Repository/user_add_product/user_input_productprice'), productPrice)
		WebUI.selectOptionByValue(findTestObject('Object Repository/user_add_product/user_select_category'), productCategory, false)
		WebUI.setText(findTestObject('Object Repository/user_add_product/user_input_productdescription'), productDescription)
		WebUI.uploadFile(findTestObject('Object Repository/user_add_product/user_input_image'), productImage)
	}

	@When("user clicks the button of (.+)")
	public void user_clicks_button(String Action) {
		if (Action == "Terbitkan") {
			WebUI.click(findTestObject('Object Repository/user_add_product/user_click_terbitkan'))
		} else if (Action == "Preview") {
			WebUI.click(findTestObject('Object Repository/user_add_product/user_click_preview'))
		} else if (Action == "Terbitkan to trigger error") {
			WebUI.click(findTestObject('Object Repository/user_add_product/user_click_terbitkan'))
		}
	}

	@Then("the product is (.+)")
	public void resultIsDisplayed(String Outcome) {
		if (Outcome == "published successfully") {
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_add_product/sellerProductDetail/deskripsi_element'), 0)
			WebUI.delay(5)
		} else if (Outcome == "previewed successfully") {
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_add_product/previewPage/terbitkanButton_element'), 0)
			WebUI.delay(5)
		} else if (Outcome == "not added") {
			WebUI.getText(findTestObject('Object Repository/user_add_product/user_trigger_errorMessage'));
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_add_product/user_trigger_errorMessage'), 0)
			WebUI.delay(5)
		}

		WebUI.closeBrowser()
	}
}
