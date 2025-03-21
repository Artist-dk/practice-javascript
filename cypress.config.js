// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   }
// })



const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    // specPattern: "cypress/e2e/**/*.feature",
    specPattern: ["cypress/e2e/**/*.feature", "cypress/e2e/**/*.cy.js", "cypress/e2e/**/*.js"],
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)] }));
      return config;
    },
  },
});













// const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor").default;
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

// async function setupNodeEvents(on, config) {
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);
//   // console.log(createBundler)
//   // on("file:preprocessor", createBundler(config));
//   require('cypress-mochawesome-reporter/plugin')(on);
//   return config;
// }

// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter',
//   e2e: {
//     // baseUrl: "http://localhost:3000",
//     // specPattern: ["cypress/e2e/**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
//     // supportFile: "cypress/support/e2e.js",
//     supportFile: false, // Disable the support file for Cucumber tests
//     fixturesFolder: "cypress/fixtures",
//     downloadsFolder: "cypress/downloads",
//     screenshotsFolder: "cypress/screenshots",
//     videosFolder: "cypress/videos",
//     video: true,
//     screenshotOnRunFailure: true,
//     retries: 2,
//     defaultCommandTimeout: 6000,
//     pageLoadTimeout: 60000,
//     viewportWidth: 1280,
//     viewportHeight: 720,
//     chromeWebSecurity: false,
//     env: {
//       API_URL: "https://api.example.com",
//     },
//     setupNodeEvents,
//   },
// });

