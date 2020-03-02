$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "name": "login functionality in adactin application",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "refresh the page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.refresh_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User validate the login function using valid username and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "User lanuch the adactin application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_lanuch_the_adactin_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the  \"spartanscoolsiva\" in username",
  "keyword": "When "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_enter_the_in_username(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027username\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-9ETCRNO\u0027, ip: \u0027169.254.182.206\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\SIVABA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55283}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 88d111aae1bbd0b847663d4c378d8927\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027username\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.adactin.baseclass.BaseClass.inputValueElement(BaseClass.java:91)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enter_the_in_username(StepDefinition.java:53)\r\n\tat ✽.User enter the  \"spartanscoolsiva\" in username(file:///C:/Users/SIVA%20BALASUBRAMANIAM/eclipse-workspace/AdactinProject/src/test/java/com/adactin/feature/Adactin.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enter the \"20102647\" in password",
  "keyword": "And "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_enter_the_in_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validate the name of the in homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_validate_the_name_of_the_in_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "refresh the page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.refresh_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User search the hotel",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchHotel"
    }
  ]
});
formatter.step({
  "name": "User select the hotel location",
  "keyword": "Given "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_select_the_hotel_location()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@id\u003d\u0027location\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-9ETCRNO\u0027, ip: \u0027169.254.182.206\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\SIVABA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55283}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 88d111aae1bbd0b847663d4c378d8927\n*** Element info: {Using\u003dxpath, value\u003d//select[@id\u003d\u0027location\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.adactin.baseclass.BaseClass.selectOptions(BaseClass.java:71)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_select_the_hotel_location(StepDefinition.java:79)\r\n\tat ✽.User select the hotel location(file:///C:/Users/SIVA%20BALASUBRAMANIAM/eclipse-workspace/AdactinProject/src/test/java/com/adactin/feature/Adactin.feature:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User select the hotel",
  "keyword": "When "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_select_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User select the room type for that particular hotel",
  "keyword": "And "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_select_the_room_type_for_that_particular_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User select the number of rooms",
  "keyword": "And "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_select_the_number_of_rooms()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enter the check in date",
  "keyword": "And "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_enter_the_check_in_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enter the Check Out date",
  "keyword": "And "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_enter_the_Check_Out_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User select the how many members per room for adults",
  "keyword": "And "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_select_the_how_many_members_per_room_for_adults()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User select then how many members stays per room for Chilren",
  "keyword": "And "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_select_then_how_many_members_stays_per_room_for_Chilren()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the hotel of the application",
  "keyword": "Then "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_validate_the_hotel_of_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User select the booking process if all are correct",
  "keyword": "When "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_select_the_booking_process_if_all_are_correct()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the continue button for next process",
  "keyword": "Then "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_validate_the_continue_button_for_next_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "refresh the page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.refresh_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User book the Hotel",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bookHotel"
    }
  ]
});
formatter.step({
  "name": "User enter the first name",
  "keyword": "Given "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_enter_the_first_name()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#first_name\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-9ETCRNO\u0027, ip: \u0027169.254.182.206\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\SIVABA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55283}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 88d111aae1bbd0b847663d4c378d8927\n*** Element info: {Using\u003did, value\u003dfirst_name}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.adactin.baseclass.BaseClass.inputValueElement(BaseClass.java:91)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enter_the_first_name(StepDefinition.java:143)\r\n\tat ✽.User enter the first name(file:///C:/Users/SIVA%20BALASUBRAMANIAM/eclipse-workspace/AdactinProject/src/test/java/com/adactin/feature/Adactin.feature:30)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enter the last name",
  "keyword": "When "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_enter_the_last_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "USer enter the Address",
  "keyword": "And "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_enter_the_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enter the Credit card number",
  "keyword": "And "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_enter_the_Credit_card_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User select the Credit card type",
  "keyword": "And "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_select_the_Credit_card_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select the credit card expiry month",
  "keyword": "And "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_select_the_credit_card_expiry_month()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select the credit card expiry year",
  "keyword": "And "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_select_the_credit_card_expiry_year()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enter the cvv no",
  "keyword": "And "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_enter_the_cvv_no()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the book now button for the next process",
  "keyword": "Then "
});
formatter.match({
  "location": "com.adactin.stepdefinition.StepDefinition.user_validate_the_book_now_button_for_the_next_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});