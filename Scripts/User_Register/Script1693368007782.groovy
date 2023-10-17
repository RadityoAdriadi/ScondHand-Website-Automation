import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('https://secondhand.binaracademy.org/users/sign_in')

WebUI.verifyElementPresent(findTestObject('Object Repository/user_login/user_click_link_Daftar_di_sini'), 0)

WebUI.click(findTestObject('Object Repository/user_login/user_click_link_Daftar_di_sini'))

WebUI.verifyElementPresent(findTestObject('Object Repository/user_register/user_click_btn_daftar'), 0)

WebUI.setText(findTestObject('Object Repository/user_register/user_input_name'),'estebang')

WebUI.setText(findTestObject('Object Repository/user_register/user_input_email'),'esteban@gmail.com')

WebUI.setText(findTestObject('Object Repository/user_register/user_input_password'),'qwerty12345')

WebUI.click(findTestObject('Object Repository/user_register/user_click_btn_daftar'))

WebUI.waitForElementPresent(findTestObject('Object Repository/user_visit_homepage/user_search_field'), 0)

WebUI.verifyElementPresent(findTestObject('Object Repository/user_visit_homepage/user_search_field'), 0)

WebUI.closeBrowser()