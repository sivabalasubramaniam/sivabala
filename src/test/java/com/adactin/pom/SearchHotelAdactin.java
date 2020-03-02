package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotelAdactin {
	public static WebDriver driver;

	@FindBy(xpath = "//select[@id='location']")
	private WebElement location;

	@FindBy(id = "hotels")
	private WebElement hotels;

	@FindBy(xpath = "//select[@id='room_type']")
	private WebElement roomType;

	@FindBy(xpath = "//select[@id='room_nos']")
	private WebElement noOfRooms;

	@FindBy(xpath = "//input[@id='datepick_in']")
	private WebElement checkIndate;

	@FindBy(xpath = "//input[@id='datepick_out']")
	private WebElement CheckOutDate;

	@FindBy(xpath = "//select[@id='adult_room']")
	private WebElement adultRooms;

	@FindBy(xpath = "//select[@id='child_room']")
	private WebElement childrenRooms;

	@FindBy(xpath = "//input[@id='Submit']")
	private WebElement register;

	@FindBy(id="radiobutton_0")
	private WebElement selectbutton;
	
	@FindBy(id="continue")
	private WebElement continueButton;

	
	
	public SearchHotelAdactin(WebDriver sdriver) {
		this.driver = sdriver;
		PageFactory.initElements(driver, this);
	}

	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotels() {
		return hotels;
	}

	public WebElement getRoomType() {
		return roomType;
	}

	public WebElement getNoOfRooms() {
		return noOfRooms;
	}

	public WebElement getCheckIndate() {
		return checkIndate;
	}

	public WebElement getCheckOutDate() {
		return CheckOutDate;
	}

	public WebElement getAdultRooms() {
		return adultRooms;
	}

	public WebElement getChildrenRooms() {
		return childrenRooms;
	}

	public WebElement getRegister() {
		return register;
	}
	public WebElement getSelectbutton() {
		return selectbutton;
	}
	public WebElement getContinueButton() {
		return continueButton;
	}

}
