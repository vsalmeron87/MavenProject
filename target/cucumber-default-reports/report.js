$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/addEmployee.feature");
formatter.feature({
  "name": "Add Employee Functionality",
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
  "name": "enter valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.verify_dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on PIM",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.AddEmployeeStepDefinition.click_on_PIM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on add employee button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.AddEmployeeStepDefinition.click_on_add_employee_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding multiple employees at one execution",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dtWithHeader"
    }
  ]
});
formatter.step({
  "name": "add multiple employees and verify they are added successfully",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.AddEmployeeStepDefinition.add_multiple_employees_and_verify_they_are_added_successfully(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Verifying profile name expected:\u003c[Jack Ja Toronto]\u003e but was:\u003c[saf gifff fari]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat com.hrms.stepdefinitions.AddEmployeeStepDefinition.add_multiple_employees_and_verify_they_are_added_successfully(AddEmployeeStepDefinition.java:94)\r\n\tat ✽.add multiple employees and verify they are added successfully(file:///C:/Users/victo/IdeaProjects/CucumberFrameworkBatch8/src/test/resources/features/addEmployee.feature:45)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "Adding multiple employees at one execution");
formatter.after({
  "status": "passed"
});
});