package com.hrms.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features",// need to give a path for our feature file
                  glue = "com/hrms/stepdefinitions",
                 dryRun = false, //when set as true, will run the feature steps and reveal   )
                 tags = {"@dtWithHeader"},// adding tag
                 strict = false, // when set as true, will fail the execution when undefined step is found
                  plugin = {"pretty", // will print executed steps inside console
                           "html:target/cucumber-default-reports", // generates default html report
                           "rerun:target/FailedTests.txt", // generates a txt file w failed test only
                           "json:target/cucumber.json",// generates json report

                            }
                    )
        public class TestRunner {
}
