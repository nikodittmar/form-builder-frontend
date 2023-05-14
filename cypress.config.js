const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'juj1eq',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
