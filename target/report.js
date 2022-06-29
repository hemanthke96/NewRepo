$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/orangehrm.feature");
formatter.feature({
  "name": "OrangeHrm",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@OrangeHrm"
    }
  ]
});
formatter.scenario({
  "name": "Login with blank data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@OrangeHrm"
    },
    {
      "name": "@Unsuccessful_login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user do not enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_do_not_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alert username should not be empty",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.alert_username_should_not_be_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.close()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with blank password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@OrangeHrm"
    },
    {
      "name": "@Unsuccessful_login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered username",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_entered_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alert password should not be  empty",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.alert_password_should_not_be_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.close()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with blank username",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@OrangeHrm"
    },
    {
      "name": "@Unsuccessful_login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered password",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_entered_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alert username  should not be  empty",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.alert_username_should_not_be_empty1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.close()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@OrangeHrm"
    },
    {
      "name": "@Unsuccessful_login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user  entered invalid  username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_entered_invalid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alert invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.alert_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.close()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid  data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@OrangeHrm"
    },
    {
      "name": "@Successful_login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_entered_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate user to welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.navigate_user_to_welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.close()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Failure in searching employee with incorrect name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@OrangeHrm"
    },
    {
      "name": "@UnSuccessful_search"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigate_to_welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to search page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigate_to_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters wrong employee name",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_wrong_employee_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Display no records",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.display_no_records()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.close()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Failure in searching employee with incorrect id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@OrangeHrm"
    },
    {
      "name": "@UnSuccessful_search"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigate_to_welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to search page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigate_to_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters wrong employee id",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_wrong_employee_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Display no records",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.display_no_records()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.close()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Failure in searching employee with invalid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@OrangeHrm"
    },
    {
      "name": "@UnSuccessful_search"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigate_to_welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to search page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigate_to_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid employee details",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_invalid_employee_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Display no records",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.display_no_records()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.close()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful searching employee with valid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@OrangeHrm"
    },
    {
      "name": "@Successful_search"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigate_to_welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to search page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigate_to_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid  employee details",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_valid_employee_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Display all records",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.display_all_records()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.close()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Failure in adding employee with missing first name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@OrangeHrm"
    },
    {
      "name": "@Add_employee_firstname_validation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigate_to_welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to  add page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigate_to_add_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters data without first name",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_data_without_first_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on save  button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alert fill required fields",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.alert_fill_required_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.close()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Failure in adding employee with missing last  name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@OrangeHrm"
    },
    {
      "name": "@Add_employee_lastname_validation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigate_to_welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to  add page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigate_to_add_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters data without last  name",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_data_without_last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on save  button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alert fill required fields",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.alert_fill_required_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.close()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Failure in adding employee with existing id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@OrangeHrm"
    },
    {
      "name": "@existingid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigate_to_welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to  add page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigate_to_add_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters data with existing employee id",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_data_with_existing_employee_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on save  button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alert cannot be saved...Already employee exists",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.alert_cannot_be_saved_Already_employee_exists()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.close()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "successful addition of employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@OrangeHrm"
    },
    {
      "name": "@Succesful_addition_of_employee"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigate_to_welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to  add page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigate_to_add_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters data with valid employee details",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_data_with_valid_employee_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on save  button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to profile page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.naviagte_to_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.close()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete employee details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@OrangeHrm"
    },
    {
      "name": "@successful_deletion"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to welcome page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigates_to_welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to delete page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_navigates_to_delete_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for valid employee name",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_search_for_valid_employee_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks checkbox",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_clicks_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on delete button",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.user_click_on_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on ok in dialog box",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.click_on_ok_in_dialog_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Display successfully deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.display_successfully_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.close()"
});
formatter.result({
  "status": "passed"
});
});