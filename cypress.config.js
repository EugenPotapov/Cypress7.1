const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "k3s2qw",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {},
  },
});
