const base = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LandingPage } = require('../pages/LandingPage');
const { LoginPage } = require('../pages/LoginPage');
const { JobSearchResultsPage } = require('../pages/JobSearchResultsPage');
const { JobDetailPage } = require('../pages/JobDetailPage');

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
    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page));
    },
    jobDetailPage: async ({ page }, use) => {
        await use(new JobDetailPage(page));
    },
});

test.beforeEach(async ({ homePage }) => {
    await homePage.goto('/');
});

module.exports = { test, expect: base.expect };
