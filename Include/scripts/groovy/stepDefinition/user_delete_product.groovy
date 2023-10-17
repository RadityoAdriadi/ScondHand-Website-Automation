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
import com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class user_delete_product {

	@When ("user click delete button")
	public void user_click_delete_button() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_delete_product/user_click_button_delete'), 0)
		WebUI.click(findTestObject('Object Repository/user_delete_product/user_click_button_delete'))
	}

	@Then ("user successfully delete existing product")
	public void user_successfully_delete_existing_product () {
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_product/productListMenu_page/daftarJualSaya_element'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_product/productListMenu_page/tambahProduk_element'), 0)
		WebUI.closeBrowser()
	}
}