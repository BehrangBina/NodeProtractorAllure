var addCollection = new Set();
var minunCollection = new Set();
var jData = require('./super_calc_data.json')

class CalcTest {
    constructor() {
        jData["TestCases"].forEach(e => {
            switch (e.operation) {
                case "+":
                    addCollection.add(e)
                    break;
                case "-":
                    minunCollection.add(e)
                    break;
            }
        });
    }
    getAddTestData() {
        return addCollection;
    }
    getSubtractTestData() {
        return minunCollection;
    }
}
module.exports.CalcTest = CalcTest;