SuperCalculator = {
    elements: {
        _firstNumber: function() {
            var first = element(by.model("first"));
            return first;
        },
        _secontNumber: function() {
            var second = element(by.model("second"));
            return second;
        },
        _goButton: function() {
            var go = element(by.id("gobutton"));
            return go;
        },
        _result: function() {
            var result = element(by.binding("latest"));
            return result;
        },
        _operatorSelect: function() {
            var opratorSelect = element(by.model("operator"));
            return opratorSelect;
        }
    },
    UserInputFirstNumber: function(firstnumber) {
        this.elements._firstNumber().sendKeys(firstnumber);
    },
    UserInputSecondNumber: function(secondNumber) {
        this.elements._secontNumber().sendKeys(secondNumber);
    },
    UserSelectCalculatorOperator: function(operator) {
        this.elements._operatorSelect().sendKeys(operator);
    },
    UserClicksGoButton: function() {
        this.elements._goButton().click();
    },
    UserGetsTheResultValue: function() {
        var text = this.elements._result().getText();
        return text;
    }
};
module.exports = SuperCalculator;