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

import ch.qos.logback.core.joran.conditional.ElseAction
import ch.qos.logback.core.joran.conditional.ThenOrElseActionBase
import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import groovy.json.StringEscapeUtils
import groovy.sql.ResultSetMetaDataWrapper
import groovy.swing.factory.EmptyBorderFactory
import groovy.transform.ConditionalInterrupt

public class Editprofilefeature {

	@When("user in edit profile page")
	public void user_in_edit_profile_page() {
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/click_button_profile'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/click_button_notification'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/click_button_daftar_product'), 0)
		WebUI.click(findTestObject('Object Repository/user_visit_homepage/click_button_profile'))
		WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/click_profile_account'), 0)
		WebUI.click(findTestObject('Object Repository/user_visit_homepage/click_profile_account'))
	}

	@When("user edit (.*) field with (.*) and user click button (.*)")
	public void user_edit_field_with_and_user_click_button_simpan(String field, condition, tombol) {
		if(field=="all field" && condition=="valid value") {
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_submit_image'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_input_nama'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_input_alamat'), 0)
			WebUI.uploadFile(findTestObject('Object Repository/user_edit_profile/user_submit_image'), '//Users//syaviraalatas//REZA//Bootcamp Binar Academy//QAE Quality Assurance Engineer//screenshoot//foto.png')
			WebUI.clearText(findTestObject('Object Repository/user_edit_profile/user_input_nama'))
			WebUI.setText(findTestObject('Object Repository/user_edit_profile/user_input_nama'), 'testaja1234')
			WebUI.selectOptionByIndex(findTestObject('Object Repository/user_edit_profile/user_select_kota'), '1')
			WebUI.clearText(findTestObject('Object Repository/user_edit_profile/user_input_alamat'))
			WebUI.setText(findTestObject('Object Repository/user_edit_profile/user_input_alamat'), 'jakarta selatan')
			WebUI.clearText(findTestObject('Object Repository/user_edit_profile/user_input_no_handphone'))
			WebUI.setText(findTestObject('Object Repository/user_edit_profile/user_input_no_handphone'), '0123456')
			WebUI.click(findTestObject('Object Repository/user_edit_profile/user_click_button_simpan'))
		}
		else if (field=="nama" && condition=="empty value") {
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_input_nama'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_input_alamat'), 0)
			WebUI.clearText(findTestObject('Object Repository/user_edit_profile/user_input_nama'))
			WebUI.click(findTestObject('Object Repository/user_edit_profile/user_click_button_simpan'))
		}
		else if (field=="kota" && condition=="not select") {
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_input_nama'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_input_alamat'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_select_kota'), 0)
			WebUI.selectOptionByIndex(findTestObject('Object Repository/user_edit_profile/user_select_kota'), '0')
			WebUI.click(findTestObject('Object Repository/user_edit_profile/user_click_button_simpan'))
		}
		else if (field=="alamat" && condition=="empty value") {
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_input_nama'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_input_alamat'), 0)
			WebUI.clearText(findTestObject('Object Repository/user_edit_profile/user_input_alamat'))
			WebUI.click(findTestObject('Object Repository/user_edit_profile/user_click_button_simpan'))
		}
		else if (field=="no handphone" && condition=="empty value") {
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_input_nama'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_input_alamat'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_input_no_handphone'), 0)
			WebUI.clearText(findTestObject('Object Repository/user_edit_profile/user_input_no_handphone'))
			WebUI.click(findTestObject('Object Repository/user_edit_profile/user_click_button_simpan'))
		}
		else if(field=="foto" && condition=="file more than 1mb") {
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_submit_image'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_input_nama'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_input_alamat'), 0)
			WebUI.uploadFile(findTestObject('Object Repository/user_edit_profile/user_submit_image'), '//Users//syaviraalatas//REZA//Bootcamp Binar Academy//QAE Quality Assurance Engineer//screenshoot//foto 1,1mb.png')
			WebUI.click(findTestObject('Object Repository/user_edit_profile/user_click_button_simpan'))
		}
	}

	@Then("user (.*) edit profile")
	public void user_edit_profile(String result) {
		if(result=="successfully") {
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/click_button_profile'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/click_button_notification'), 0)
			WebUI.closeBrowser()
		}
		else if(result=="not successfully") {
			WebUI.getAttribute(findTestObject('Object Repository/user_edit_profile/user_input_alamat'),'Please fill in this field')
			WebUI.getAttribute(findTestObject('Object Repository/user_edit_profile/user_input_nama'),'Please fill in this field')
			WebUI.getAttribute(findTestObject('Object Repository/user_edit_profile/user_input_no_handphone'),'Please fill in this field')
			WebUI.getAttribute(findTestObject('Object Repository/user_edit_profile/user_select_kota'),'Please select an item in the list')
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_input_nama'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_input_alamat'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/user_edit_profile/user_submit_image'), 0)
			WebUI.closeBrowser()
		}
	}
}