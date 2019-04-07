var url = "the-internet.herokuapp.com/";
var popup_loginPage = function() {
    this.authenticateByPopup = function(username, password) {
        var newUrl =
            "http://" + username + ":" + password + "@" + url + "basic_auth";
        console.log(newUrl);
        browser.get(newUrl);
    };
    this.validateMessageHeader = function() {
        var message = element(by.tagName('h3')).getText()
        message.then(function(title) {
            expect(title).toBe('Basic Auth')
        });
    }
    this.validateSubMessag = function() {
        var subMessage = element(by.xpath("//div[@class='example']/p")).getText();
        subMessage.then(function(title) {
            title = title.trim()
            expect(title).toBe('Congratulations! You must have the proper credentials.')
        });
    }
};
module.exports = new popup_loginPage();