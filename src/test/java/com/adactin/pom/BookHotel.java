package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookHotel 
{
	public static WebDriver driver;
	
	@FindBy(id="first_name")
	 private WebElement firstName;
	 
	 @FindBy(id="last_name")
	 private WebElement lastName;
	 
	 @FindBy(id="address")
	 private WebElement address;
	 
	 @FindBy(id="cc_num")
	 private WebElement ccNumber;
	 
	 @FindBy(id="cc_type")
	 private WebElement ccType;
	 
	 @FindBy(id="cc_exp_month")
	 private WebElement expMonth;
	 
	 @FindBy(id="cc_exp_year")
	 private WebElement expYear;
	 
	 @FindBy(id="cc_cvv")
	 private WebElement cvvNumber;
	 
	 @FindBy(id="book_now")
	 private WebElement bookNowBtn;
	 
	 
	 

		public BookHotel(WebDriver bdriver) {
			this.driver=bdriver;
			PageFactory.initElements(driver, this);
		}



		public WebElement getFirstName() {
			return firstName;
		}

		

		public WebElement getLastName() {
			return lastName;
		}

		

		public WebElement getAddress() {
			return address;
		}

		
		public WebElement getCcNumber() {
			return ccNumber;
		}

		

		public WebElement getCcType() {
			return ccType;
		}


		public WebElement getExpMonth() {
			return expMonth;
		}

		

		public WebElement getExpYear() {
			return expYear;
		}

		

		public WebElement getCvvNumber() {
			return cvvNumber;
		}

		

		public WebElement getBookNowBtn() {
			return bookNowBtn;
		}

	 
	 
}

