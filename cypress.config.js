const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "cypress-multi-reporters",
  video: false,
  "reporterOptions": {
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions": {
      "reportDir": "cypress/reports/mocha",
      "quite": true,
      "overwrite": false,
      "html": false,
      "json": true
    }
  },
  e2e: {
    // "baseUrl": "https://cltrising.com/",
    "supportFile": "cypress/support/commands.js",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },

  env: {
    CLTRising: "https://cltrising.com/",
    file_path: "cypress/fixtures/program.json",
    contact_path: "cypress/fixtures/contact-us.json",
    story_file: "cypress/fixtures/stories.json",
    footer: "cypress/fixtures/footer.json"
  },
});
