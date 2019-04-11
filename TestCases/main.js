/*
describe('Protractor Demo App', function() {
    it('should	add	one	and	two', function() {
        browser.ignoreSynchronization = false;
        browser.get('http://juliemr.github.io/protractor-demo/');
        var first = element(by.model('first'))
        var second = element(by.model('second'))
        var go = element(by.id('gobutton'))
        var result = element(by.binding('latest'))
        first.sendKeys(1);
        second.sendKeys(2);
        go.click();
        expect(result.getText()).toEqual('3');
        first.sendKeys(12);
        second.sendKeys(18);
        go.click();
        expect(result.getText()).toEqual('30');
    });
});
*/

describe("Angular Calculator", function() {
    var calcpage = require('../TestCases/Angular_Calc/Page/calcpage.js')

    var addCollection = new Set();
    var minunCollection = new Set();

    it("Add Function Shoud be working", function() {
        calcpage.gotoCalcPage()
        calcpage.testAdd()
    });

});