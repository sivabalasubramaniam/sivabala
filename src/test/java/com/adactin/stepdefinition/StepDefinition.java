package com.adactin.stepdefinition;

import java.io.IOException;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.FileReaderManager;
import com.adactin.poManager.PageObjectManager;
import com.adactin.pom.BookHotel;
import com.adactin.pom.LoginPage;
import com.adactin.pom.SearchHotelAdactin;
import com.adactin.runner.Runner;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class StepDefinition extends BaseClass
{

	public static  WebDriver driver=Runner.driver;
	
	public static PageObjectManager pom=new PageObjectManager(driver);
	
	@Before
	public void beforeMethod() {
		System.out.println("before");
	}
	@After
	public void afterMethod() {
		
		System.out.println(driver.getTitle());
	}
	
	@Given("refresh the page")
	public void refresh_the_page() {
		driver.navigate().refresh();;
	}
	
	@Given("User lanuch the adactin application")
	public void user_lanuch_the_adactin_application() throws IOException 
	{
	   getUrl(FileReaderManager.getInstance().getInstanceCR().getUrl());
	}
	@When("^User enter the  \"([^\"]*)\" in username$")
	public void user_enter_the_in_username(String string) {
		inputValueElement(pom.getLp().getUsername(), string);
	}

	@When("^User enter the \"([^\"]*)\" in password$")
	public void user_enter_the_in_password(String string) {
	inputValueElement(pom.getLp().getPassword(), string);
	}

	
	@When("^User click on the login button$")
	public void user_click_on_the_login_button() {

		radioButtonOptions(pom.getLp().getLoginBtn());
	
	}

	@Then("^user validate the name of the in homepage$")
	public void user_validate_the_name_of_the_in_homepage() {
		
	}
	
 	
	@Given("^User select the hotel location$")
	
	public void user_select_the_hotel_location() throws IOException 
	{
		selectOptions("byValue", FileReaderManager.getInstance().getInstanceCR().getHotelLocation(), pom.getSca().getLocation());
	}
	@When("^User select the hotel$")
	public void user_select_the_hotel() throws IOException {
		selectOptions("byValue", FileReaderManager.getInstance().getInstanceCR().getHotelName(), pom.getSca().getHotels());

	}

	@When("^User select the room type for that particular hotel$")
	public void user_select_the_room_type_for_that_particular_hotel() throws IOException 
	{
		selectOptions("byValue", FileReaderManager.getInstance().getInstanceCR().getRoomType(), pom.getSca().getRoomType());
	}

	@When("^User select the number of rooms$")
	public void user_select_the_number_of_rooms() throws IOException 
	{
		selectOptions("byValue", FileReaderManager.getInstance().getInstanceCR().getnoOfRooms(), pom.getSca().getNoOfRooms());
	}

	@When("^User enter the check in date$")
	public void user_enter_the_check_in_date() throws IOException 
	{
		clearOption(pom.getSca().getCheckIndate());
		inputValueElement(pom.getSca().getCheckIndate(), FileReaderManager.getInstance().getInstanceCR().getCheckInDate());
	}

	@When("^User enter the Check Out date$")
	public void user_enter_the_Check_Out_date() throws IOException 
	{
		clearOption(pom.getSca().getCheckOutDate());
		inputValueElement(pom.getSca().getCheckOutDate(), FileReaderManager.getInstance().getInstanceCR().getCheckOutDate());
	}

	@When("^User select the how many members per room for adults$")
	public void user_select_the_how_many_members_per_room_for_adults() throws IOException 
	{
		selectOptions("byValue", FileReaderManager.getInstance().getInstanceCR().getAdultRoom(), pom.getSca().getAdultRooms());
	}

	@When("^User select then how many members stays per room for Chilren$")
	public void user_select_then_how_many_members_stays_per_room_for_Chilren() throws IOException 
	{
		selectOptions("byValue", FileReaderManager.getInstance().getInstanceCR().getchildrenRoom(), pom.getSca().getChildrenRooms());
	}
	@Then("^User validate the hotel of the application$")
	public void user_validate_the_hotel_of_the_application() 
	{
		radioButtonOptions(pom.getSca().getRegister());
	}

	@When("^User select the booking process if all are correct$")
	public void user_select_the_booking_process_if_all_are_correct() {
		radioButtonOptions(pom.getSca().getSelectbutton());
	}

	@Then("^User validate the continue button for next process$")
	public void user_validate_the_continue_button_for_next_process() {
		radioButtonOptions(pom.getSca().getContinueButton());
	}
	
	
	@Given("^User enter the first name$")
	public void user_enter_the_first_name() throws IOException {
	inputValueElement(pom.getBh().getFirstName(), FileReaderManager.getInstance().getInstanceCR().getFirstName());
	}

	@When("^User enter the last name$")
	public void user_enter_the_last_name() throws IOException {
	inputValueElement(pom.getBh().getLastName(), FileReaderManager.getInstance().getInstanceCR().getLastName());
	}

	@When("^USer enter the Address$")
	public void user_enter_the_Address() throws IOException {
	inputValueElement(pom.getBh().getAddress(), FileReaderManager.getInstance().getInstanceCR().getAddress());
	}

	@When("^User enter the Credit card number$")
	public void user_enter_the_Credit_card_number() throws IOException {
	inputValueElement(pom.getBh().getCcNumber(), FileReaderManager.getInstance().getInstanceCR().getCreditCardNo());
	}

	@When("^User select the Credit card type$")
	public void user_select_the_Credit_card_type() throws IOException {
	selectOptions("byValue", FileReaderManager.getInstance().getInstanceCR().getCreditCardType(),pom.getBh().getCcType());
	}

	@When("^user select the credit card expiry month$")
	public void user_select_the_credit_card_expiry_month() throws IOException {
	selectOptions("byValue", FileReaderManager.getInstance().getInstanceCR().getccExpirymonth(), pom.getBh().getExpMonth());
	}

	@When("^user select the credit card expiry year$")
	public void user_select_the_credit_card_expiry_year() throws IOException {
	selectOptions("byValue", FileReaderManager.getInstance().getInstanceCR().getccExpiryYear(),pom.getBh().getExpYear());
	}

	@When("^User enter the cvv no$")
	public void user_enter_the_cvv_no() throws IOException {
	inputValueElement(pom.getBh().getCvvNumber(), FileReaderManager.getInstance().getInstanceCR().getcvvNo());
	}

	@Then("^User validate the book now button for the next process$")
	public void user_validate_the_book_now_button_for_the_next_process() {
	radioButtonOptions(pom.getBh().getBookNowBtn());
	}
	
	
	
	
	
	
}
