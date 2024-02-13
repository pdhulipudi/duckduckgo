import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight:1080,
  viewportWidth: 1920,
  video: true,
  e2e: {
    baseUrl: 'https://duckduckgo.com/',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.js',
    setupNodeEvents(on, config) {
    },
  },
  env: {
    apiUrl: 'https://duckduckgo.com/*'
  }
});
