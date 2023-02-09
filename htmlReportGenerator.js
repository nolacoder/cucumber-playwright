const reporter = require('cucumber-html-reporter');
var date = new Date ();
var currentDate = date.getDate() + ' ' + (date.getMonth() + 1) + ' ' + date.getFullYear() + '_' + date.getHours() + ' ' + date.getMinutes() + ' ' + date.getSeconds() + ' ' + date.getMilliseconds() + ' ';

var options = {
    brandTitle: "demo test scenarios",
    theme: "bootstrap",
    jsonFile: "Reports/cucumber_report.json",
    output: "Reports/cucumber_report_" + currentDate + ".html",
    screenshotsDirectory: "./Screenshots/",
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version":"1.1.1",
        "Test Environment": "QA",
        "Platform": "Web/Angular",
        "Sprint":"001"
    }
};

reporter.generate(options);
