var popup_confirmPage = function() {
    var url = "https://www.jquery-az.com/javascript/demo.php?ex=151.1_1";
    browser.waitForAngularEnabled(false);
    console.log(url);
    browser.get(url);
    let showConfirmButton = element(by.tagName("button"));
    /*  this.acceptConfirmation = function() {
            browser.wait(protractor.ExpectedConditions.visibilityOf(showConfirmButton), 8000);
            return browser.sleep(5000)
                .then(() => showConfirmButton.click())
                .then(() => browser.sleep(3000))
                .then(() => browser.switchTo().alert().accept())
                .then(() => browser.sleep(2000))
                .then(() => {
                    const notifyAlert = browser.switchTo().alert();
                    return notifyAlert.getText();
                })
                .then(text => {
                    expect(text).to.equal('Your Account deleted!');
                    console.log('Confirm Message: ' + text)
                });
        }*/
    this.acceptConfirmation = function() {
        showConfirmButton.click().then(() => {
                let ale = browser.switchTo().alert();
                var text = ale.getText()
                text.then(function(message) {
                    console.log('Confirm popup message: ' + message)
                })
                ale.accept();
                browser.sleep(2000);
            })
            .then(() => {
                let ale = browser.switchTo().alert();
                var text = ale.getText()
                text.then(function(message) {

                    console.log('Confirm popup message: ' + message)
                    expect(message).toEqual('Your Account deleted!');
                })
                browser.sleep(1000);
                ale.accept();
            });
    };
    this.rejectConfirmation = function() {
        showConfirmButton.click()
            .then(() => {
                let ale = browser.switchTo().alert()
                var text = ale.getText()
                text.then(function(msg) {
                    console.log('Main:' + msg)
                })
                browser.sleep(1000);
                ale.dismiss();
            })
            .then(() => { //.dismiss();
                let ale = browser.switchTo().alert()
                var text = ale.getText()
                text.then(function(msg) {
                    console.log('Reject:' + msg)
                    expect(msg).toEqual('Your account is not deleted!');
                })
                browser.sleep(1000);
                ale.accept()
            })
    };
};
module.exports = new popup_confirmPage();