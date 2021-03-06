describe("Super Calulator Functionality Works As Expected", function() {
    var superCalculatorPage = require("./Angular_Calc/Page/SuperCalculator.Page.js");
    var superCalcHelper = require("./Angular_Calc/Util/calc.js");
    var url = "http://juliemr.github.io/protractor-demo/";
    var calcDataCollection;
    beforeAll(function() {
        calcDataCollection = new superCalcHelper.CalcTest();
        browser.ignoreSynchronization = false;
        browser
            .manage()
            .timeouts()
            .implicitlyWait(10000);
        browser.driver
            .manage()
            .window()
            .maximize();
    });
    beforeEach(() => {
        browser.get(url);
    });
    it("The Add Function Should Work", function() {
        var addTestData = calcDataCollection.getAddTestData();
        addTestData.forEach(e => {
            superCalculatorPage.UserInputFirstNumber(e.firstNumber);
            superCalculatorPage.UserSelectCalculatorOperator(e.operation);
            superCalculatorPage.UserInputSecondNumber(e.secondNumber);
            superCalculatorPage.UserClicksGoButton();
            var result = superCalculatorPage.UserGetsTheResultValue();
            expect(result).toEqual(e.expected);
        });
    });
    it("The Subtract Function Should Work Correctly", () => {
        var sutractData = calcDataCollection.getSubtractTestData();
        sutractData.forEach(e => {
            superCalculatorPage.UserInputFirstNumber(e.firstNumber);
            superCalculatorPage.UserSelectCalculatorOperator(e.operation);
            superCalculatorPage.UserInputSecondNumber(e.secondNumber);
            superCalculatorPage.UserClicksGoButton();
            var result = superCalculatorPage.UserGetsTheResultValue();
            expect(result).toEqual(e.expected);
        });
    });
    describe("All Operations Should Handle Nan", () => {
        var operators = ["+", "-", "/", "*"]
        let counter = -1
        var expected = "NaN";

        beforeEach(function() {
            counter++;
            superCalculatorPage.UserSelectCalculatorOperator(operators[counter])
            superCalculatorPage.UserClicksGoButton();
        })
        it('Should Handle - Operator', () => {
            var result = superCalculatorPage.UserGetsTheResultValue();
            expect(result).toEqual(expected);
        })

        it('Should Handle + Operator', () => {
            var result = superCalculatorPage.UserGetsTheResultValue();
            expect(result).toEqual(expected);
        })
        it('Should Handle / Operator', () => {
            var result = superCalculatorPage.UserGetsTheResultValue();
            expect(result).toEqual(expected);
        })
        it('Should Handle * Operator', () => {
            var result = superCalculatorPage.UserGetsTheResultValue();
            expect(result).toEqual(expected);
        })
    });
});