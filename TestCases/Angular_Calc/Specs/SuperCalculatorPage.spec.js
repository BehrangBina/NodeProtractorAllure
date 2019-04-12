describe("Super Calulator Functionality Works As Expected", function() {
    var superCalculatorPage = require("../Page/SuperCalculator.Page.js");
    var superCalcHelper = require("../Util/calc.js");
    var url = "http://juliemr.github.io/protractor-demo/";
    var calcDataCollection;
    beforeAll(function() {
        calcDataCollection = new calcDataCollection.CalcTest()
        browser.ignoreSynchronization = false;
        browser
            .manage()
            .timeouts()
            .implicitlyWait(10000);
        browser.driver
            .manage()
            .window()
            .maximize();
        browser.get(url);
    });
    it("The Add Function Should Work", function() {
        var addTestData = calcDataCollection.getAddTestData();
        addTestData.forEach(e => {
            superCalculatorPage._inputFirstNumber(e.firstNumber);
            superCalculatorPage.__selectCalculatorOperator();
            superCalculatorPage._inputSecondNumber(e.secondNumber);
            superCalculatorPage._clickGoButton();
            var result = superCalculatorPage._result.getText();
            expect(result).toEqual(e.expected);
        });
    });
    it('The Subtract Function Should Work Correctly', () => {
        var sutractData = calcDataCollection.getSubtractTestData();
        sutractData.forEach(e => {
            superCalculatorPage._inputFirstNumber(e.firstNumber);
            superCalculatorPage.__selectCalculatorOperator();
            superCalculatorPage._inputSecondNumber(e.secondNumber);
            superCalculatorPage._clickGoButton();
            var result = superCalculatorPage._result.getText();
            expect(result).toEqual(e.expected);
        });
    })
});