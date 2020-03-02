Feature: login functionality in adactin application

Background:
Given refresh the page

@login
Scenario: User validate the login function using valid username and password
Given User lanuch the adactin application
When User enter the  "spartanscoolsiva" in username
And User enter the "20102647" in password
And User click on the login button
Then user validate the name of the in homepage

@searchHotel
Scenario: User search the hotel 
Given  User select the hotel location
When User select the hotel
And User select the room type for that particular hotel
And User select the number of rooms
And User enter the check in date 
And User enter the Check Out date
And User select the how many members per room for adults
And User select then how many members stays per room for Chilren
Then User validate the hotel of the application
When User select the booking process if all are correct
Then User validate the continue button for next process

@bookHotel
Scenario: User book the Hotel
Given User enter the first name
When User enter the last name
And USer enter the Address
And User enter the Credit card number
And User select the Credit card type
And user select the credit card expiry month
And user select the credit card expiry year
And User enter the cvv no
Then User validate the book now button for the next process







