const assert = require('assert');

const { Browser, By, Key, until } = require('..');
const { ignore, suite } = require('../testing');
describe('Demonstration Unit Test in Jasmine', function() {
    suite(function(env) {
        describe('Google Search', function() {
            let driver;

            before(async function() {
                // env.builder() returns a Builder instance preconfigured for the
                // envrionment's target browser (you may still define browser specific
                // options if necessary (i.e. firefox.Options or chrome.Options)).
                driver = await env.builder().build();
            });

            it('demo', async function() {
                await driver.get('https://www.google.com/ncr');
                await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
                await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
            });
        })
    })
});