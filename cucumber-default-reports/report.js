$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@featureTag"
    },
    {
      "name": "@login"
    },
    {
      "name": "#"
    },
    {
      "name": "feature"
    },
    {
      "name": "level"
    },
    {
      "name": "tag"
    }
  ]
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@featureTag"
    },
    {
      "name": "@login"
    },
    {
      "name": "#"
    },
    {
      "name": "feature"
    },
    {
      "name": "level"
    },
    {
      "name": "tag"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@syntax"
    },
    {
      "name": "@invalidCreds"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@whatever"
    },
    {
      "name": "#adding"
    },
    {
      "name": "multiple"
    },
    {
      "name": "scenario"
    },
    {
      "name": "level"
    },
    {
      "name": "tags"
    }
  ]
});
formatter.step({
  "name": "navigate to HRMS login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.navigate_to_hrms_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter invalid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.enter_invalid_credentials()"
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
  "name": "verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.quit_the_browser()"
});
formatter.result({
  "status": "passed"
});
});