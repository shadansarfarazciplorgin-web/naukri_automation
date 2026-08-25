const { test, expect } = require('../fixtures/pageFixtures');
const testData = require('../data/testData.json');
const { regex } = require('../config/constants');
const assertion = require('../utils/assertion');
const { jobSearchResultsPage } = require('../config/locators');

test.describe('Naukri.com - Apply for Job', () => {
    test('should apply for a job successfully', async ({ landingPage, loginPage, page, homePage, jobSearchResultsPage }) => {
        const { email, password } = testData.validUser;

        await landingPage.openLogin();
        await loginPage.loginWithCredentials(email, password);
        await assertion.expectUrlNotContains(page, regex.loginUrl);
        await assertion.expectTextContains(homePage.userName, 'Shadan Sarfaraz');
        await homePage.clickSearchBox();
        await homePage.searchForJob(testData.jobSearch.keyword, testData.jobSearch.experience, testData.jobSearch.location);
        await jobSearchResultsPage.openFirstJob(page);
    });
});
