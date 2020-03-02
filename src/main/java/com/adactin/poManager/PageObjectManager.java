package com.adactin.poManager;

import org.openqa.selenium.WebDriver;

import com.adactin.pom.BookHotel;
import com.adactin.pom.LoginPage;
import com.adactin.pom.SearchHotelAdactin;
import com.adactin.stepdefinition.StepDefinition;

public class PageObjectManager
{
	public static WebDriver driver;
	
	public PageObjectManager(WebDriver pDriver) {
		this.driver=pDriver;
	}
	
	
	public static LoginPage getLp() {
		 LoginPage lp=new LoginPage(driver);
		return lp;
	}

	public static SearchHotelAdactin getSca() {
		 SearchHotelAdactin sca=new SearchHotelAdactin(driver);
		return sca;
	}

	public static BookHotel getBh() {
		BookHotel bh=new BookHotel(driver);
		return bh;
	}
	
}
