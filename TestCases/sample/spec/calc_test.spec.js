describe("Angular Calculator", function() {
    var addCollection = new Set();
    var minunCollection = new Set();
    var calcTest = new CalcTest();
    it("should be adding", function() {
        addCollection = calcTest.getAddTestData();
        addCollection.forEach(e => {
            console.log(e.expected);
        });
    });
    it('First Element Should be on the page', () => {
        var calc_page = require('../../Angular_Calc/Page/calcpage.js/index.js')
    })
});