const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  
  reporterOptions: {
    charts: true,

    reportPageTitle: "Cypress Inline Reporter",

    embeddedScreenshots: true,

    inlineAssets: true,

    html: true,

    videos: false,
  },
  e2e: {


    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },

  env: {
    CLTRising: "https://cltrising.com/"
  },
});
