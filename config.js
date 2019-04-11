// protractor-beautiful-reporter 
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub/',
    specs: ['TestCases/main.js'],
    capabilities: {
        'browserName': 'chrome',
        /* chromeOptions: {
             args: ["--headless"]
         }*/
    },
    // 1.1
    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/reports/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports/screenshots'
        }).getJasmine2Reporter());
    }
}