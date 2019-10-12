$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/user/Downloads/eclipse/Divakar/CucumberFramework/src/test/resources/Feature1/Customerdetails.feature");
formatter.feature({
  "name": "Checks the registration functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that customer can able to generate the customer id.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Customer is on telecom page.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition1.customer_is_on_telecom_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Customer enters the user details",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition1.customer_enters_the_user_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Customer enters the mob no and clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition1.customer_enters_the_mob_no_and_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The message displayed customer id is generated successfully.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition1.the_message_displayed_customer_id_is_generated_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});