exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub/',
    specs: ['TestCases/main.js'],
    capabilities: {
        'browserName': 'chrome'
    }
}