const { defineConfig } = require("cypress");
import { allureCypress } from "allure-cypress/reporter";

module.exports = defineConfig({
  projectId: "vgergq",
  video: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Cypress Mochawesome Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true, //to generate HTML report
    json: true //to generate JSON report
  },


  e2e: {
    specPattern: 'cypress/integration',
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      allureCypress(on, config);
      return config;
    },
  },
});
