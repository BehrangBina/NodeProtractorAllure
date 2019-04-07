var popup_loginPage = require('../WebComponent/Page/popup_login.js')

describe('Popup login', function() {
    it('Should Login with valid Credentials', function() {
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        popup_loginPage.authenticateByPopup('admin', 'admin')
        popup_loginPage.validateMessageHeader()
        popup_loginPage.validateSubMessag()
    })
})