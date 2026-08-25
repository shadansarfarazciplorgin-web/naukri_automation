require('dotenv').config();
const { defineConfig, devices } = require('@playwright/test');
const config = require('./config/env');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 60 * 1000,
  expect: {
    timeout: 10 * 1000,
  },
  use: {
    baseURL: config.baseURL,
    headless: config.headless,
    actionTimeout: 15 * 1000,
    navigationTimeout: 30 * 1000,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        channel: 'chrome',
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
  ],
});
