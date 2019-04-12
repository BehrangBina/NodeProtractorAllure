# About

JavaScript, Protractor, Allure Automation framework with Node JS

## git Steps 

* Install Protractor  `npm install -g protractor`
* Install Selenium Standalone Server
  A: By Node  `https://www.npmjs.com/package/selenium-standalone`
  A1: `npm install selenium-standalone@latest -g`
  A2: `selenium-standalone install`
  A3: `Start selenium-standalone start`
  A5:(Not Required) specify hub and nodes to setup your own selenium grid 
  selenium-standalone start -- -role hub
  selenium-standalone start -- -role node -hub http://localhost:4444/grid/register
  selenium-standalone start -- -role node -hub http://localhost:4444/grid/register -port 5556
  A(Note): As a Docker service `docker run -it -p 4444:4444 vvoyer/selenium-standalone`
  B: Download From `https://www.seleniumhq.org/download/`
* Insall Chrome Driver to latest and update your chrome to the latest make sure they use the same version
* Using Jasmine `npm install --save-dev jasmine`
* Creating Page Object Model
    * Creating Page Objects On Page Folder

## Report

### protractor-beautiful-reporter 
https://www.npmjs.com/package/protractor-beautiful-reporter 
npm install protractor-beautiful-reporter --save-dev

## Additional Libraries

For Mocking
npm install angular-mocks --save-dev

For Supporting Require in the browser
npm install --save-dev karma-browserify browserify watchify


## POM (Page Object Model)

### Page Object	Paterns	 

* Keep all the WebDriver interactions in one place
* Adds a layer of abstraction between WebDriver implementation and website/application functionality
* When underlying source of pages change, updates only need to be made in one place
* Allows script writers to focus on tests, not on details of WebDriver  interactions 

### Page Object	

* Should contain elements and functions 
* Should not contain assertions or expects 
* Represents a single page or a section in a page 
* Should have a “.page” postfix (e.g. home.page.js) 

### Specs

* Should only contain assertions and expects 
* Should not contain function or element declaration 
* Should only access web elements using page-object functions 
* Should have a “.spec” postfix (e.g. home.spec.js) 
* Reference to a page-object should have a “Page” postfix (e.g `var HomePage = require(‘../page_objects/home.page.js))`  
* Should only access web elements using page object functions 

### Helper

* Should contain test data
* Should contain common scripts
* Should contain constants
* Should contain anything that is repeated or consumed multiple times (regex, login/logout, requires, ...) 
* When something changes you only have to change one thing, which simplifies code maintenance (e.g. test data changes, page added/removed, date format changed, ... ) 

### Configuration

* Should contain framework configuration
* Should contain device/platform/browser/hosted testing service specific configurations
* Should contain CI configuration
* Should contain configuration parameters 