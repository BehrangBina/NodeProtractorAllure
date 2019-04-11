var popup_loginPage = require('../WebComponent/Page/popups.js')
var popup_confirmPage = require('../WebComponent/Page/confirm_popup.js')
var data = require('./data.json.js')

/*describe('Popup Can be Handled', function() {
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize();
        //console.log('a')
    })
    it('Should Accept the Confirmation Message', function() {
        popup_confirmPage.acceptConfirmation()
            // console.log('c')
    })
    it('Should Reject The Confirmation Message', function() {
        popup_confirmPage.rejectConfirmation()
            // console.log('cd')
    })
    it('Should Login with valid Credentials', function() {
        popup_loginPage.authenticateByPopup('admin', 'admin');
        popup_loginPage.validateMessageHeader();
        popup_loginPage.validateSubMessag();
        // console.log('b')
    })

})*/
describe('Can Handle Data Driven', () => {
        it('Reading Data From External File', () => {
            console.log(data.url + " ... " + data.query)
            expect(data.url).toBe('http://bing.com')
            expect(data.query).toBe('Behrang Bina')
        })

    })
    //	spec.js	
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