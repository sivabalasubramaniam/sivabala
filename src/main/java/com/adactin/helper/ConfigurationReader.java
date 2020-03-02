package com.adactin.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {
	
	public static Properties pro;

	public ConfigurationReader() throws IOException {
	File f=new File("C:\\Users\\SIVA BALASUBRAMANIAM\\eclipse-workspace\\CucumberProject\\src\\main\\java\\com\\adactin\\properties\\Configuration.properties");
	FileInputStream fis=new FileInputStream(f);
	pro=new Properties();
	pro.load(fis);
	}
	
	public  String getBrowserName() {
	String browser = pro.getProperty("browsername");
	return browser;
	}
	
	public  String getUrl() {
		String url = pro.getProperty("url");
		return url;
	}

	public  String getUserName() {
		String username = pro.getProperty("username");
		return username;
	}
	public String getPassword() {
		String password = pro.getProperty("password");
		return password;
	}
	
	public  String getHotelLocation() {
		String location = pro.getProperty("hotelLocation");
		return location;
		
	}
	public String getHotelName()
	{String hotelName = pro.getProperty("hotelName");
		return hotelName;
	}
	public String getRoomType() {
		String roomType = pro.getProperty("roomType");
		return roomType;
	}
	public String getnoOfRooms() {
		String noOfRooms = pro.getProperty("noOfRooms");
		return noOfRooms;
	}
	
	public  String getCheckInDate() {
	String checkInDate = pro.getProperty("checkInDate");
	return checkInDate;
	}
	
	public String getCheckOutDate() 
	{
		String checkOutDate = pro.getProperty("checkOutDate");
		return checkOutDate;
	}
	public  String getAdultRoom() {
		String adultRoom = pro.getProperty("adultRoom");
		return adultRoom;
	}
	public  String getchildrenRoom() {
		String childrenRoom = pro.getProperty("childrenRoom");
		return childrenRoom;
	}
	public  String getFirstName() {
		String firstName = pro.getProperty("firstName");
		return firstName;
	}
	public  String getLastName() {
		String lastName = pro.getProperty("lastName");
		return lastName;
	}
	public  String getAddress() {
		String address = pro.getProperty("address");
		return address;
	}
	public  String getCreditCardNo() {
		String creditCardNo = pro.getProperty("creditCardNo");
		return creditCardNo;
	}
	public  String getCreditCardType() {
		String creditCardType = pro.getProperty("creditCardType");
		return creditCardType;
	}
	public  String getccExpirymonth() {
		String ccExpirymonth = pro.getProperty("ccExpirymonth");
		return ccExpirymonth;
	}
	public  String getccExpiryYear() {
		String ccExpiryYear = pro.getProperty("ccExpiryYear");
		return ccExpiryYear;
	}
	public  String getcvvNo() {
		String cvvNo = pro.getProperty("cvvNo");
		return cvvNo;
	}

	
		


	










}



