const { defineConfig } = require("cypress");
import { allureCypress } from "allure-cypress/reporter";

module.exports = defineConfig({
  projectId: "vgergq",
  video: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  reporter: 'cypress-mochawesome-reporter',


  e2e: {
    specPattern: 'cypress/integration',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      allureCypress(on, config);
      return config;
    },
  },
});
