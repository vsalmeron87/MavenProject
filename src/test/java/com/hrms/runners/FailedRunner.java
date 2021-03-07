package com.hrms.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@target/FailedTest.txt",
                glue = "com/hrms/stepdefinitions",
                 plugin = {"pretty",
                 "html:target/cucumber-defualt-reports",
                 "rerun:target/FailedTest.txt"}     )
public class FailedRunner {

}
