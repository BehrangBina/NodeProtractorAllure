describe('Go To Google', function() {
        it('Should Go To Google', function() {
            browser.waitForAngularEnabled(false);
            browser.driver.manage().window().maximize();
            browser.get('https://www.google.com.au');
            //sleep(13000).then(() => {
            element(by.name('q')).sendKeys('BehrangBina')
            element(by.name('q')).submit()
            element(by.xpath('(//h3)[1]')).click()


            var currentTitle = browser.getTitle()
            currentTitle.then(function(title) {
                console.log("TITLE: " + title);
            });

            browser.driver.close();

        })
    })
    /*const sleep2 = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }*/


async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}