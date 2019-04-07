# About

JavaScript, Protractor, Allure Automation framework with Node JS

##git Steps 

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