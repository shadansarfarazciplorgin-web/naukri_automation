const base = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');
const { JobSearchResultsPage } = require('../pages/JobSearchResultsPage');

const test = base.test.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  jobSearchResultsPage: async ({ page }, use) => {
    await use(new JobSearchResultsPage(page));
  },
});

module.exports = { test, expect: base.expect };
