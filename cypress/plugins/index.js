const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {

  on('file:preprocessor', cucumber());
  
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'chrome' && browser.isHeadless) {
      launchOptions.args.push('--disable-blink-features=AutomationControlled');
    }
    return launchOptions;
  });

};
