var url = "http://juliemr.github.io/protractor-demo/";
var calc = require('../Util/calc.js')
var calcpage = function() {
    // browser.waitForAngularEnabled(true);
    var first = element(by.model('first'))
    var second = element(by.model('second'))
    var go = element(by.id('gobutton'))
    var result = element(by.binding('latest'))

    this.gotoCalcPage = function() {
        browser.ignoreSynchronization = false;
        browser.manage().timeouts().implicitlyWait(10000);
        browser.driver.manage().window().maximize();
        browser.get(url)
    }
    this.testAdd = function() {
        var testCalc = new calc.CalcTest()
            //console.log(testCalc.getAddTestData())
            //console.log(testCalc.getSubtractTestData())
        var testData = testCalc.getAddTestData()
        testData.forEach(e => {

                first.sendKeys(e.firstNumber);
                second.sendKeys(e.secondNumber);
                console.log("First: " + e.firstNumber + " Second: " + e.secondNumber)
                go.click();
                expect(result.getText()).toEqual(e.expected);
            })
            // console.log(testData)

    };
};
module.exports = new calcpage();