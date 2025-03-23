// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });


////////////////////////////////


const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
// const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    // specPattern: "cypress/e2e/**/*.feature",
    specPattern: ["cypress/e2e/**/*.feature", "cypress/e2e/**/*.cy.js", "cypress/e2e/**/*.js"],
    async setupNodeEvents(on, config) {
      // await addCucumberPreprocessorPlugin(on, config);
      // on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)] }));
      return config;
    },
  },
});
