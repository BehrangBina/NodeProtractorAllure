describe("Angular Calculator", function() {
    var calcpage = require('./Angular_Calc/Page/calcpage.js')

    var addCollection = new Set();
    var minunCollection = new Set();

    it("Should Add Two Numbers", function() {
        calcpage.gotoCalcPage()
        calcpage.testAdd()
    });
    it("Should Subtract Two Numbers", function() {
        //calcpage.gotoCalcPage()
        calcpage.testSubtract()
    })
});